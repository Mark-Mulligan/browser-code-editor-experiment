import type { NextPage } from 'next';
import Link from 'next/link';
import { Container, Item, Icon } from 'semantic-ui-react';
import { getCodingExerciseOverviews } from '../../utils/dataFetching';
import { allExerciseOverviewData } from '../../types';

type CodingExercisesProps = {
  codingExercisesOverviews: allExerciseOverviewData;
};

const CodingExercises: NextPage<CodingExercisesProps> = ({ codingExercisesOverviews }) => {
  return (
    <Container>
      <h1>Coding Exercises</h1>
      <Item.Group divided>
        {Object.entries(codingExercisesOverviews).map(([key, value]) => {
          return (
            <Link href={`/coding-exercises/${key}`} passHref key={key}>
              <Item>
                <Item.Content>
                  <Item.Header>{value.title}</Item.Header>
                  <Item.Description>{value.description}</Item.Description>
                  <Item.Extra>
                    <Icon color="green" name="check" />
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Link>
          );
        })}
      </Item.Group>
    </Container>
  );
};

export default CodingExercises;

export const getStaticProps = async () => {
  const codingExercisesData = getCodingExerciseOverviews();

  return {
    props: {
      codingExercisesOverviews: codingExercisesData,
    },
  };
};
