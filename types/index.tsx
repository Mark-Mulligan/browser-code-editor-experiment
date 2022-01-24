export type codingExerciseOverview = {
  title: string;
  description: string;
  instructions: string;
  testScript: string;
};

export type allExerciseOverviewData = {
  [key: string]: codingExerciseOverview;
};
