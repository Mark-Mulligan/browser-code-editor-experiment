export type codingExerciseOverview = {
  title: string;
  description: string;
  instructions: string;
  testScript: string;
  startingCode: string;
  testCriteria: string[];
};

export type allExerciseOverviewData = {
  [key: string]: codingExerciseOverview;
};
