import { codingExerciseOverview } from '../types';

interface testCriteriaDisplayProps {
  codingExerciseOverview: codingExerciseOverview;
}

const TestInstructionsDisplay = ({ codingExerciseOverview }: testCriteriaDisplayProps) => {
  return (
    <>
      <h2>{codingExerciseOverview.title}</h2>
      <p>{codingExerciseOverview.instructions}</p>
      <h3>Test Criteria</h3>
      <ul>
        {codingExerciseOverview.testCriteria.map((test, index) => {
          return <li key={`test-${index}`}>{test}</li>;
        })}
      </ul>
    </>
  );
};

export default TestInstructionsDisplay;
