import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { execSync } from 'child_process';

const testScript = `const testCases = [
  { num1: 1, num2: 2, result: 3 },
  { num1: 5, num2: 10, result: 15 },
  { num1: -1, num2: -4, result: -5 },
];

describe('Sum 2 Numbers', () => {
  test('User created a function called sum', () => {
    expect(typeof sum).toBe('function');
  });

  test('Function returns a number', () => {
    expect(typeof sum(1, 2)).toBe('number');
  });

  test.each(testCases)('sum($num1, $num2) returns $result.', ({ num1, num2, result }) => {
    expect(sum(num1, num2)).toBe(result);
  });
});`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const testname = req.query.testname;

  console.log(testname);

  if (req.method === 'POST') {
    const { userCode } = req.body;

    fs.writeFileSync(`data/${testname}.test.js`, `${userCode}\n`);
    fs.appendFileSync(`data/${testname}.test.js`, testScript);
    execSync(`jest ${testname} --json --outputFile=data/${testname}-results.json`);
    let results = JSON.parse(fs.readFileSync(`data/${testname}-results.json`, 'utf-8'));
    let testResults = results.testResults[0].assertionResults;

    res.status(200).json({ testResults });
  }
};

export default handler;
