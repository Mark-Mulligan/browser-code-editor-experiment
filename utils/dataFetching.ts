import fs from 'fs';

export const getCodingExerciseOverviews = () => {
  const data = JSON.parse(fs.readFileSync('data/codingExercisesData.json', 'utf-8'));
  return data;
};

export const getCodingExerciseData = (codingExerciseKey: string) => {
  const data = JSON.parse(fs.readFileSync('data/codingExercisesData.json', 'utf-8'));
  const result = data[codingExerciseKey];
  return result;
};
