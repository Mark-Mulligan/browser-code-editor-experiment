import { Resizable } from 're-resizable';
import { Button, Loader, Icon, Dimmer, Message } from 'semantic-ui-react';
import Link from 'next/link';
import { codingExerciseOverview, testResult } from '../types';

type TestInfoPanelProps = {
  codingExerciseOverview: codingExerciseOverview;
  testResults: testResult[];
  numTestsPassed: number;
  numTestsFailed: number;
  overallResult: string;
  errorMessage: string;
  isRunningTests: boolean;
  handleCodeSubmit: () => void;
};

const TestInfoPanel = ({
  codingExerciseOverview,
  testResults,
  numTestsPassed,
  numTestsFailed,
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
          <ul>
            {testResults.map((result, index) => {
              return (
                <li key={`test-result-${index}`}>
                  {result.title} :{' '}
                  {result.status === 'passed' ? <Icon color="green" name="check" /> : <Icon color="red" name="close" />}
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
      defaultSize={{ width: 400, height: 'auto' }}
      style={{
        borderRight: '2px solid rgba(34, 36, 38, 0.15)',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '1rem',
        background: 'rgb(240, 240, 240)',
      }}
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

      <Dimmer active={isRunningTests} inverted>
        <Loader>Running Tests</Loader>
      </Dimmer>

      <Button className="mb-10" fluid positive onClick={handleCodeSubmit}>
        Submit Code
      </Button>

      <Link href="/coding-exercises" passHref>
        <Button fluid>Back To Exercises</Button>
      </Link>
    </Resizable>
  );
};

export default TestInfoPanel;
