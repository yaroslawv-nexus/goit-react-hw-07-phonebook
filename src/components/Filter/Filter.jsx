import { useDispatch, useSelector } from 'react-redux';
import { InputSearchStyle, LabelSearchStyle } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <LabelSearchStyle>Find contacts by name</LabelSearchStyle>
      <InputSearchStyle
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filter}
      />
    </label>
  );
};
