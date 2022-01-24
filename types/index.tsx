export type codingExerciseOverview = {
  title: string;
  description: string;
  instructions: string;
  testScript: string;
  startingCode: string;
};

export type allExerciseOverviewData = {
  [key: string]: codingExerciseOverview;
};
