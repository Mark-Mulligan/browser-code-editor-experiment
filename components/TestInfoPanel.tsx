import { Resizable } from 're-resizable';
import { Button, Loader, Icon, Dimmer } from 'semantic-ui-react';
import { codingExerciseOverview, testResult } from '../types';

type TestInfoPanelProps = {
  codingExerciseOverview: codingExerciseOverview;
  testResults: testResult[];
  isRunningTests: boolean;
  handleCodeSubmit: () => void;
};

const TestInfoPanel = ({
  codingExerciseOverview,
  testResults,
  isRunningTests,
  handleCodeSubmit,
}: TestInfoPanelProps) => {
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
      style={{ borderRight: '2px solid black', paddingLeft: '10px', paddingRight: '10px' }}
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

      <Dimmer active={isRunningTests} inverted>
        <Loader>Running Tests</Loader>
      </Dimmer>

      <Button fluid positive onClick={handleCodeSubmit}>
        Submit Code
      </Button>
    </Resizable>
  );
};

export default TestInfoPanel;
