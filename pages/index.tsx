import type { NextPage } from 'next';
import Head from 'next/head';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const startingCode = `const sum = (num1, num2) => {
  // Add Code Below


  
  //Add Code Above
}`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CodeMirror
          value={startingCode}
          height="400px"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log('value:', value);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
