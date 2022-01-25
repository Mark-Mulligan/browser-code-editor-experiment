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

export type testResult = {
  ancestorTitles: string[];
  failureMessages: string[];
  fullName: string | null;
  location: string | null;
  status: string | null;
  title: string | null;
};
