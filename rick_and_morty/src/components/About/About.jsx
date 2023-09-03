import { Link } from "react-router-dom";
import style from "../About/About.module.css"; // Importa el archivo CSS

const About = () => {
  return (
    <div className={style.container}>
      <h1> Lucía Vargas</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};

export default About;
