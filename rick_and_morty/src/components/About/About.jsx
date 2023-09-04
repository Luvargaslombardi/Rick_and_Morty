import { Link } from "react-router-dom";
import style from "../About/About.module.css";
import Card from "../Card/Card";
import miFoto from "../../assets1/lu.png"

const About = () => {
  return (
    <div className={style.container}>
      <h1>About me</h1>
      <Card
        image= {miFoto}
        name="Lucía Vargas"
        status= "Alive"
        species="Develloper"
        gender="Fem"
        origin="Argentina"
      />
      <Link to="/home">
        <button>Home</button>
      </Link>
      {/* <Link to="/about">
        <button>About</button>
      </Link> */}
    </div>
  );
};

export default About;
