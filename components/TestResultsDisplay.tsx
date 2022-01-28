import { testResult } from '../types';
import { Icon, Message } from 'semantic-ui-react';
import styles from '../styles/testInfoPanel.module.scss';

interface TestResultsDisplayProps {
  testResults: testResult[];
  numTestsPassed: number;
  overallResult: string;
  errorMessage: string;
}

const TestResultsDisplay = ({ testResults, numTestsPassed, overallResult, errorMessage }: TestResultsDisplayProps) => {
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

  return (
    <>
      <h3>Test Results</h3>
      {renderTestResults()}
    </>
  );
};

export default TestResultsDisplay;
