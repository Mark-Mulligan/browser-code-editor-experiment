import type { NextPage } from 'next';
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
            <Item key={key}>
              <Item.Content>
                <Item.Header>{value.title}</Item.Header>
                <Item.Description>{value.description}</Item.Description>
                <Item.Extra>
                  <Icon color="green" name="check" />
                </Item.Extra>
              </Item.Content>
            </Item>
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
