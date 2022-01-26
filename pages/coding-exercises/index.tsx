import type { NextPage } from 'next';
import Link from 'next/link';
import { Container, Label } from 'semantic-ui-react';
import { getCodingExerciseOverviews } from '../../utils/dataFetching';
import { checkItemComplete } from '../../utils/localStorage';
import { allExerciseOverviewData } from '../../types';
import styles from '../../styles/codingExercises.module.scss';

type CodingExercisesProps = {
  codingExercisesOverviews: allExerciseOverviewData;
};

const CodingExercises: NextPage<CodingExercisesProps> = ({ codingExercisesOverviews }) => {
  return (
    <Container>
      <h1 style={{ margin: 0 }}>Coding Exercises</h1>
      <ul className={styles.codingOverviews}>
        {Object.entries(codingExercisesOverviews).map(([key, value]) => {
          return (
            <Link href={`/coding-exercises/${key}`} passHref key={key}>
              <li>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                {checkItemComplete(key) ? <Label color="green">Completed</Label> : <Label>Not Completed</Label>}
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
