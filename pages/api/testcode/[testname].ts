import type { NextApiRequest, NextApiResponse } from 'next';
import { testScripts } from '../../../data/testLogic';
import fs from 'fs';
import { VM } from 'vm2';
import { testResult } from '../../../types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const vm = new VM({ timeout: 1000, sandbox: {} });
  const testname = req.query.testname as string;

  console.log(testname);

  if (req.method === 'POST') {
    const { userCode } = req.body;

    // get test script to add to user input
    const testOverviewData = JSON.parse(fs.readFileSync('data/codingExercisesData.json', 'utf-8'));
    let testScriptName = testOverviewData[testname].testScriptName as
      | 'sumTwoIntsTestScript'
      | 'sortArrayIntsTestScript';
    let testScriptCode = testScripts[testScriptName];

    let testResults = [] as testResult[];

    fs.writeFileSync(`data/${testname}.js`, `${userCode}\n${testScriptCode}`);

    try {
      testResults = vm.run(`${userCode}\n${testScriptCode}`);
    } catch (err: any) {
      res.status(400).json({ message: `${err.message}. Code failed to compile.` });
      return;
    }

    let numTestsPassed = 0;
    testResults.forEach((test) => {
      if (test.passed === true) {
        numTestsPassed++;
      }
    });

    const overallResult = testResults.length === numTestsPassed ? 'passed' : 'failed';

    res.status(200).json({ testResults, numTestsPassed, overallResult });
  }
};

export default handler;
