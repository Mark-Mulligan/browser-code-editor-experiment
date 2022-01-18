import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { execSync } from 'child_process';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const testname = req.query.testname;

  console.log(testname);

  if (req.method === 'POST') {
    const { userCode } = req.body;

    fs.writeFileSync(`data/${testname}.test.js`, `${userCode}\n`);
    fs.appendFileSync(
      `data/${testname}.test.js`,
      `test('sum 2 numbers', () => {
      expect(sum(1, 2)).toBe(3);
    });`,
    );
    execSync(`jest ${testname}`);

    console.log(userCode);
    res.status(200).json({ message: 'test code submitted' });
  }
};

export default handler;
