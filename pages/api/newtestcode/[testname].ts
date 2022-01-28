import type { NextApiRequest, NextApiResponse } from 'next';
import { testScripts } from '../../../data/testLogic';
import fs from 'fs';
import { VM } from 'vm2';

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
  }
};
