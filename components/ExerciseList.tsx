import Link from 'next/link';
import { allExerciseOverviewData } from '../types';
import dynamic from 'next/dynamic';
import styles from '../styles/codingExercises.module.scss';

const StatusLabel = dynamic(() => import('./StatusLabel'), { ssr: false });

interface ExerciseListProps {
  codingExercisesOverviews: allExerciseOverviewData;
  itemsComplete: {};
  statusFilter: string;
  search: string;
}

const ExerciseList = ({ codingExercisesOverviews, itemsComplete, statusFilter, search }: ExerciseListProps) => {
  const itemIsInStatusFilter = (exerciseKey: string) => {
    if (statusFilter === 'all') {
      return true;
    } else if (statusFilter === 'notCompleted' && !itemsComplete.hasOwnProperty(exerciseKey)) {
      return true;
    } else if (statusFilter === 'completed' && itemsComplete.hasOwnProperty(exerciseKey)) {
      return true;
    } else {
      return false;
    }
  };

  const itemIsInSearch = (exerciseTitle: string) => {
    if (!search) {
      return true;
    } else if (exerciseTitle.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  const shouldRenderExercise = (exerciseKey: string, exerciseTitle: string) => {
    if (itemIsInStatusFilter(exerciseKey) && itemIsInSearch(exerciseTitle)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ul className={styles.codingOverviews}>
      {Object.entries(codingExercisesOverviews).map(([key, value]) => {
        if (shouldRenderExercise(key, value.title)) {
          return (
            <Link href={`/coding-exercises/${key}`} passHref key={key}>
              <li>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <StatusLabel itemsComplete={itemsComplete} exerciseKey={key} />
              </li>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default ExerciseList;
