import { Label } from 'semantic-ui-react';

type StatusLabelProps = {
  itemsComplete: {};
  exerciseKey: string;
};

const StatusLabel = ({ itemsComplete, exerciseKey }: StatusLabelProps) => {
  const checkIfExerciseComplete = (key: string) => {
    if (itemsComplete.hasOwnProperty(key)) {
      return true;
    }

    return false;
  };

  return (
    <>{checkIfExerciseComplete(exerciseKey) ? <Label color="green">Completed</Label> : <Label>Not Completed</Label>}</>
  );
};

export default StatusLabel;
