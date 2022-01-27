import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { getCodingExerciseOverviews } from '../../utils/dataFetching';
import { getItemsComplete } from '../../utils/localStorage';
import { allExerciseOverviewData } from '../../types';
import styles from '../../styles/codingExercises.module.scss';

type CodingExercisesProps = {
  codingExercisesOverviews: allExerciseOverviewData;
};

const StatusLabel = dynamic(() => import('../../components/StatusLabel'), { ssr: false });

const CodingExercises: NextPage<CodingExercisesProps> = ({ codingExercisesOverviews }) => {
  const [itemsComplete, setItemsComplete] = useState(getItemsComplete());

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Coding Exercises</h1>
      <ul className={styles.codingOverviews}>
        {Object.entries(codingExercisesOverviews).map(([key, value]) => {
          return (
            <Link href={`/coding-exercises/${key}`} passHref key={key}>
              <li>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <StatusLabel itemsComplete={itemsComplete} exerciseKey={key} />
              </li>
            </Link>
          );
        })}
      </ul>
    </Container>
  );
};

export default CodingExercises;

export const getStaticProps = async () => {
  const codingExercisesOverviews = getCodingExerciseOverviews();

  return {
    props: {
      codingExercisesOverviews: codingExercisesOverviews,
    },
  };
};
