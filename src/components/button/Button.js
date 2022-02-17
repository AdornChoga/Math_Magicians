import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonValue, eventHandler, id } = props;
  return (
    <li>
      <button type="button" onClick={eventHandler} data-testid={id}>{ buttonValue }</button>
    </li>
  );
};

Button.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Button;
