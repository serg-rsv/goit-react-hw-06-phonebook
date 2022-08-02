import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/contacts-action';
import { Button } from 'styles/Button.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteItem(id))}>
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
