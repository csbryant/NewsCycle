import React, { useRef } from "react";
import { Redirect } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import Navigation from "../../components/navigation/navigation";
import { Container } from "react-bootstrap";
import logo from "../../img/logo.png";
import "./_signup.scss";

const Signup = (props) => {
  console.log(props);
  const username = useRef();
  const password = useRef();

  const [user, dispatch] = useUserContext();

  const trySignup = () => {
    let signupObj = {
      email: username.current.value,
      password: password.current.value,
    };
    console.log(signupObj);
    fetch("/auth/register_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupObj),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "loggedInUser",
          payload: data,
        });

        props.history.push("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Navigation />
      <Container>
        <img src={logo} className="logo"></img>
        <p className="description">
          The <span className="importantcolor">fastest</span> and{" "}
          <span className="importantcolor">easiest</span> way to read the news.
        </p>
        <br></br>
        <h1 className="signup">
          <span className="thispage">Sign Up</span> |{" "}
          <a href="/LogIn">Log In</a>{" "}
        </h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            ref={username}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            ref={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={trySignup}>
          Submit
        </button>
      </Container>
    </div>
  );
};
export default Signup;
