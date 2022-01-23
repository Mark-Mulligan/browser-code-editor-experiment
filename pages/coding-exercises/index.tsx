import type { NextPage } from 'next';
import { Container, Item, Icon } from 'semantic-ui-react';
import { getCodingExerciseOverviews } from '../../utils/dataFetching';

const CodingExercises: NextPage = (props) => {
  console.log(props);

  return (
    <Container>
      <h1>Coding Exercises</h1>
      <Item.Group divided>
        <Item>
          <Item.Content>
            <Item.Header>Example Problem</Item.Header>
            <Item.Description>Here is the a simple overview of the problem</Item.Description>
            <Item.Extra>
              <Icon color="green" name="check" />
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header>Example Problem</Item.Header>
            <Item.Description>Here is the a simple overview of the problem</Item.Description>
            <Item.Extra>
              <Icon color="green" name="check" />
            </Item.Extra>
          </Item.Content>
        </Item>
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
