import { Resizable } from 're-resizable';
import { Button, Loader, Icon, Dimmer, Message } from 'semantic-ui-react';
import Link from 'next/link';
import { codingExerciseOverview, testResult } from '../types';
import styles from '../styles/testInfoPanel.module.scss';

type TestInfoPanelProps = {
  codingExerciseOverview: codingExerciseOverview;
  testResults: testResult[];
  numTestsPassed: number;
  overallResult: string;
  errorMessage: string;
  isRunningTests: boolean;
  handleCodeSubmit: () => void;
};

const TestInfoPanel = ({
  codingExerciseOverview,
  testResults,
  numTestsPassed,
  overallResult,
  errorMessage,
  isRunningTests,
  handleCodeSubmit,
}: TestInfoPanelProps) => {
  const renderTestResults = () => {
    if (errorMessage) {
      return (
        <Message negative>
          <Message.Header>{errorMessage}</Message.Header>
        </Message>
      );
    } else {
      return (
        <>
          {testResults.length === 0 && <p>Submit code to get test results</p>}
          <ul className={styles.testResults}>
            {testResults.map((testResult, index) => {
              return (
                <li key={`test-result-${index}`}>
                  <div>
                    {testResult.test} :{' '}
                    {testResult.passed ? <Icon color="green" name="check" /> : <Icon color="red" name="close" />}
                  </div>
                  <div>
                    Your code returned --{`>`} {testResult.result}
                  </div>
                </li>
              );
            })}
          </ul>
          {testResults.length > 0 && renderResultMessage()}
        </>
      );
    }
  };

  const renderResultMessage = () => {
    if (overallResult === 'passed') {
      return (
        <Message positive>
          {numTestsPassed} / {testResults.length} Tests Passed.
        </Message>
      );
    }

    return (
      <Message negative>
        {numTestsPassed} / {testResults.length} Tests Passed.
      </Message>
    );
  };

  return (
    <Resizable
      enable={{
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      defaultSize={{ width: 500, height: 'auto' }}
      style={{
        borderRight: '4px solid rgb(50, 50, 50)',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '1rem',
        background: 'rgb(30, 30, 30)',
      }}
      className={styles.testInfoPanel}
    >
      <h2>{codingExerciseOverview.title}</h2>
      <p>{codingExerciseOverview.instructions}</p>
      <h3>Test Criteria</h3>
      <ul>
        {codingExerciseOverview.testCriteria.map((test, index) => {
          return <li key={`test-${index}`}>{test}</li>;
        })}
      </ul>

      <h3>Test Results</h3>
      {renderTestResults()}

      <Dimmer active={isRunningTests}>
        <Loader>Running Tests</Loader>
      </Dimmer>

      <Button className="mb-10" fluid inverted color="blue" onClick={handleCodeSubmit}>
        Submit Code
      </Button>

      <Link href="/coding-exercises" passHref>
        <Button fluid inverted>
          Back To Exercises
        </Button>
      </Link>
    </Resizable>
  );
};

export default TestInfoPanel;
