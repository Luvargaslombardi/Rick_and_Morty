import { useState } from "react";
import Validation from "../Validation";
import style from "../Forms/Forms.module.css";

export const Forms = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const [errors, setError] = useState({});

  const handleChange = (event) => {
    setError(Validation({ ...userData, [event.target.name]: event.target.value }));
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return props.login(userData);
  };

  return (
    <div className={style.container}>
      <form className={style.form}>
        <label htmlFor="email" className={style.label}>
          Email:
        </label>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
          className={style.input}
        />
        {errors.e1 ? (
          <p className={style.error}>{errors.e1} </p>
        ) : errors.e2 ? (
          <p className={style.error}>{errors.e2} </p>
        ) : (
          <p className={style.error}>{errors.e3} </p>
        )}

        <hr className={style.hr} />
        <label htmlFor="password" className={style.label}>
          Password:
        </label>
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
          className={style.input}
        />
        {errors.p1 ? (
          <p className={style.error}>{errors.p1} </p>
        ) : (
          <p className={style.error}>{errors.p2} </p>
        )}
        <br />
        <button onClick={handleSubmit} type="submit" className={style.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
