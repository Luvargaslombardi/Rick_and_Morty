import { Link } from "react-router-dom";

const About = () => {
return (
    <div> <h1>Soy About</h1>
<Link to= "/home">
<button>Home</button>
</Link>

<Link to= "/about">
<button>About</button>
</Link>

    </div>
)

};
export default About;