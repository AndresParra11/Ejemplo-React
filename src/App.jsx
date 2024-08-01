import Componente1 from "./components/Componente1/Componente1";
import PropTypes from "prop-types";

const Hello = (props) => {
  const bornYear = () => new Date().getFullYear() - props.age;
  return (
    <div>
      <p>
        Hola {props.name}, tienes {props.age} años.
      </p>
      <p>Así que naciste en {bornYear()}.</p>
    </div>
  );
};

const App = () => {
  const name = "Felipe";
  const age = 25;

  return (
    <>
      <h1>Saludos</h1>
      <Hello name="Andrés" age={28} />
      <Hello name={name} age={age} />
      <Componente1 />
    </>
  );
};

Hello.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default App;
