import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonValue } = props;
  const { eventHandler } = props;
  return (
    <li>
      <button type="button" onClick={eventHandler}>{ buttonValue }</button>
    </li>
  );
};

Button.propTypes = {
  buttonValue: PropTypes.string.isRequired, eventHandler: PropTypes.func.isRequired,
};
export default Button;
