import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <form>
      <label>
        <FilterInput type="text" onChange={handleFilterChange}></FilterInput>
      </label>
    </form>
  );
};
