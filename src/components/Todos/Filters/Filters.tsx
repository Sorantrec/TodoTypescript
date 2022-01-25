import * as React from 'react';
import { IFilters } from '../interfaces/IFilters';

const Filters = ({filter, setFilter}: IFilters) => {
  const chooseOption = (option: string) => setFilter(option);
  return(
    <select value={filter} onChange={(event) => chooseOption(event.target.value)}>
      <option value="default">Select filter</option>
      <option value="completed">Completed</option>
      <option value="notCompleted">Not completed</option>
    </select>
  )
};

export default Filters;