import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from '../../redux/contacts-action';
import { SubTitle } from 'styles/Titles.styled';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <SubTitle>Find contacts by name</SubTitle>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(filterItems(e.target.value))}
      />
    </>
  );
};
