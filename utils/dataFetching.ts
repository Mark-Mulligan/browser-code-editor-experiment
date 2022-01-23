import fs from 'fs';

export const getCodingExerciseOverviews = () => {
  const data = JSON.parse(fs.readFileSync('data/codingExercisesData.json', 'utf-8'));
  return data;
};
