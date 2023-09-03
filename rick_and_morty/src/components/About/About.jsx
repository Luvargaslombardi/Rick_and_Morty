import { Link } from "react-router-dom";
import style from "../About/About.module.css";
import Card from "../Card/Card";

const About = () => {
  return (
    <div className={style.container}>
      <h1>About me</h1>
      <Card
        image= "https://scontent.ftuc1-1.fna.fbcdn.net/v/t39.30808-6/359825690_10230752708589628_4706988714971144698_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEdX8kugn_MJEVrd5Qsh0PAczShUVVqb4xzNKFRVWpvjI-EIab1AmEMUWbmWdf0Jy0&_nc_ohc=UzLAE086ipgAX9wRh6A&_nc_ht=scontent.ftuc1-1.fna&oh=00_AfCueg6RqsqPlOo1PJ_2E25Qf74RCBwePKAk9Kp-89jWcQ&oe=64F9EB76"
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
