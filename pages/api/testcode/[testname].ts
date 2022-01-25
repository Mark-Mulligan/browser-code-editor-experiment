import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { execSync } from 'child_process';
import { testScripts } from '../../../data/testLogic';
import { testResult } from '../../../types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const testname = req.query.testname as string;

  console.log(testname);

  if (req.method === 'POST') {
    const { userCode } = req.body;

    // get test script to add to user input
    const testOverviewData = JSON.parse(fs.readFileSync('data/codingExercisesData.json', 'utf-8'));
    let testScriptName = testOverviewData[testname].testScriptName as
      | 'sumTwoIntsTestScript'
      | 'sortArrayIntsTestScript';
    let functionCall = testOverviewData[testname].functionCall;
    let testScriptCode = testScripts[testScriptName];

    // write user input to files
    fs.writeFileSync(`data/${testname}.js`, `${userCode}\n${functionCall}`);
    fs.writeFileSync(`data/${testname}.test.js`, `${userCode}\n`);

    // write tests to file
    fs.appendFileSync(`data/${testname}.test.js`, testScriptCode);

    // run the file in plan javascript to see if it executes or not;
    try {
      execSync(`node data/${testname}.js`);
    } catch (err) {
      res
        .status(400)
        .json({ message: 'Code failed to compile.  Please check your code for any syntax errors and try again.' });
      return;
    }

    // run tests on file and get test results
    try {
      execSync(`jest ${testname} --json --outputFile=data/${testname}-results.json`);
    } catch (err: any) {
      //console.log(err);
      console.log(err.stderr.toString());
    }

    let results = JSON.parse(fs.readFileSync(`data/${testname}-results.json`, 'utf-8'));
    let testResults = results.testResults[0].assertionResults as testResult[];
    let overallResult = results.testResults[0].status;
    let numTestsPassed = 0;
    let numTestsFailed = 0;

    testResults.forEach((test) => {
      test.status === 'passed' ? numTestsPassed++ : numTestsFailed++;
    });

    res.status(200).json({ testResults, numTestsPassed, numTestsFailed, overallResult });
  }
};

export default handler;
