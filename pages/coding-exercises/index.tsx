import type { NextPage } from 'next';
import Link from 'next/link';
import { Container, Item, Label } from 'semantic-ui-react';
import { getCodingExerciseOverviews } from '../../utils/dataFetching';
import { checkItemComplete } from '../../utils/localStorage';
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
              <Item className="noColorOnHover">
                <Item.Content>
                  <Item.Header as="h2">{value.title}</Item.Header>
                  <Item.Description>{value.description}</Item.Description>
                  <Item.Extra>
                    {checkItemComplete(key) ? <Label color="green">Completed</Label> : <Label>Not Completed</Label>}
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
  const codingExercisesOverviews = getCodingExerciseOverviews();

  return {
    props: {
      codingExercisesOverviews: codingExercisesOverviews,
    },
  };
};
