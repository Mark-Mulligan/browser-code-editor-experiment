import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { execSync } from 'child_process';
import { testScripts } from '../../../data/testLogic';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const testname = req.query.testname as string;

  console.log(testname);

  if (req.method === 'POST') {
    const { userCode } = req.body;

    // get test script to add to user input
    const testOverviewData = JSON.parse(fs.readFileSync('data/codingExercisesData.json', 'utf-8'));
    let testScriptName = testOverviewData[testname].testScript as 'sumTwoIntsTestScript' | 'sortArrayIntsTestScript';
    let testScriptCode = testScripts[testScriptName];

    // write user input to files
    fs.writeFileSync(`data/${testname}.test.js`, `${userCode}\n`);

    // write tests to file
    fs.appendFileSync(`data/${testname}.test.js`, testScriptCode);

    // run tests on file and get test results
    try {
      execSync(`jest ${testname} --json --outputFile=data/${testname}-results.json`);
    } catch (err) {
      console.log(err);
    }

    let results = JSON.parse(fs.readFileSync(`data/${testname}-results.json`, 'utf-8'));
    let testResults = results.testResults[0].assertionResults;

    res.status(200).json({ testResults });
  }
};

export default handler;
