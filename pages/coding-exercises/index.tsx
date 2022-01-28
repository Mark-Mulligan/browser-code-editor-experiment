import type { NextPage } from 'next';
import React, { SyntheticEvent, useState } from 'react';
import { Container, Button, Form, Dropdown, DropdownProps } from 'semantic-ui-react';
import { getCodingExerciseOverviews } from '../../utils/dataFetching';
import { getItemsComplete } from '../../utils/localStorage';
import ExerciseList from '../../components/ExerciseList';
import { allExerciseOverviewData } from '../../types';
import styles from '../../styles/codingExercises.module.scss';

type CodingExercisesProps = {
  codingExercisesOverviews: allExerciseOverviewData;
};

const CodingExercises: NextPage<CodingExercisesProps> = ({ codingExercisesOverviews }) => {
  const [itemsComplete, setItemsComplete] = useState(getItemsComplete());
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const resetCompletedClick = () => {
    localStorage.clear();
    setItemsComplete({});
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value) {
      setSearch(e.target.value);
      return;
    }

    setSearch('');
  };

  const handleStatusFilterChange = (event: SyntheticEvent<HTMLElement, Event>, { value }: DropdownProps) => {
    if (typeof value === 'string') {
      setStatusFilter(value);
    }
  };

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>Coding Exercises</h1>
      <Form className={styles.searchContainer}>
        <Form.Field style={{ marginBottom: 0 }}>
          <input type="text" placeholder="Search exercises..." value={search} onChange={handleSearchInputChange} />
        </Form.Field>

        <Dropdown
          value={statusFilter}
          selection
          onChange={handleStatusFilterChange}
          options={[
            { key: 'all', value: 'all', text: 'All' },
            { key: 'notCompleted', value: 'notCompleted', text: 'Not Completed' },
            { key: 'completed', value: 'completed', text: 'Completed' },
          ]}
        />

        <Button onClick={resetCompletedClick} inverted>
          Reset Completed
        </Button>
      </Form>

      <ExerciseList
        codingExercisesOverviews={codingExercisesOverviews}
        itemsComplete={itemsComplete}
        statusFilter={statusFilter}
        search={search}
      />
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
