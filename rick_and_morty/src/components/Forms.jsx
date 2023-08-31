import { useState } from "react";
import Validation from "./Validation";
 export const Forms = (props) => {
    const [userData, setUserData] = useState({
email: "",
password: ""
    });

const [errors,setError]= useState ({});

    const handleChange = (event) => {
        setError(Validation({...userData,[event.target.name]:event.target.value}))
 setUserData({...userData,[event.target.name]:event.target.value})};

const handleSubmit= (event) => {
    event.preventDefault();
   return props.login(userData);
}

    return (
    <div>
    <form>
<label htmlFor="email">Email:</label>
<input 
onChange={handleChange} 
value={userData.email} 
type="text"
 name="email"
 />
 {errors.e1 ? (<p>{errors.e1} </p> )
 : errors.e2 ? (<p>{errors.e2} </p>) 
 : (<p>{errors.e3} </p> )
 
 }
    <hr />
<label htmlFor="password">Password:</label>
<input
 onChange={handleChange}
  value={userData.password} 
  type="password" 
  name="password"
  />
  {
    errors.p1 ? (<p>{errors.p1} </p>) : (<p>{errors.p2} </p>)
  }
 <br/>   
    <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
    </div>
    );
};

export default Forms;