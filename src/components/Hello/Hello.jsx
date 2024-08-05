import PropTypes from "prop-types";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>
        Hola {name}, tienes {age} años.
      </p>
      <p>Así que naciste en {bornYear()}.</p>
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Hello;
