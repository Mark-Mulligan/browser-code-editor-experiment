export const saveToLocalStorage = (currentExercise: string) => {
  if (!localStorage.getItem('exercisesComplete')) {
    console.log('save to local storage ran');
    localStorage.setItem('exercisesComplete', JSON.stringify({ [currentExercise]: 'completed' }));
  } else {
    let exerciseDataString = localStorage.getItem('exercisesComplete');

    if (exerciseDataString) {
      let exerciseData = JSON.parse(exerciseDataString);
      let updatedData = { ...exerciseData, [currentExercise]: 'completed' };
      localStorage.setItem('exercisesComplete', JSON.stringify(updatedData));
    }
  }
};

export const checkItemComplete = (currentItemKey: string): boolean => {
  if (typeof window !== 'undefined' && localStorage.getItem('exercisesComplete')) {
    let exerciseDataString = window.localStorage.getItem('exercisesComplete');

    if (exerciseDataString) {
      let exercisesData = JSON.parse(exerciseDataString);
      return exercisesData.hasOwnProperty(currentItemKey);
    }

    return false;
  }

  return false;
};
