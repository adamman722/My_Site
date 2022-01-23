import React, { useState, useEffect } from "react";
import Data from "../userData.json";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";

function Input(props) {
  const [userName, setUserName] = useState("");

  const [users, addUser] = useState(null);
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [isThere, setIsThere] = useState(true);
  const [passwordMatches, setPasswordMatches] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        addUser(data);
      });
  }, []);

  //-----------------
  //Registering a user
  //-----------------
  const onSubmit = (data) => {
    console.log(data);
    if (!errors?.Username && !errors?.Password && !errors?.ConfirmPassword) {
      const newUser = {
        Username: data.Username,
        Password: data.Password,
        isRegistered: true,
      };

      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }).then(() => {
        nav("/Home/Login");
      });
    }
  };

  function handleChange(event) {
    const { value } = event.target;
    setUserName(value);
  }

  function CheckingUsers() {
    const foundUser = users.map((value) =>
      value.Username === userName ? true : false
    );
    if (!foundUser.includes(true)) {
      setIsThere(false);
    } else setIsThere(true);
  }

  function handleSubmitLogin(e) {
    const foundUser = users.find((person_) => person_.Username === userName);
    if (foundUser.Password !== password) {
      setPasswordMatches(false);
    } else {
      nav("/LandingPage");
    }
    console.log(foundUser);
    e.preventDefault();
  }

  return (
    <form
      className="form"
      onSubmit={!props.bool ? handleSubmit(onSubmit) : handleSubmitLogin}
    >
      {props.bool ? (
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Username"
            value={userName}
            className="inputLoginPage"
          />
          {isThere ? null : (
            <p>
              Ummmmm try to{" "}
              <Link to="/Home/Reg" className="aTags">
                register
              </Link>
            </p>
          )}
        </div>
      ) : (
        <div>
          <input
            {...register("Username", {
              required: true,
              minLength: 1,
            })}
            type="text"
            placeholder="Username"
            className="inputLoginPage"
          />
          {errors?.Username?.type === "pattern" && <p>Cant leave it blank</p>}
        </div>
      )}
      {props.bool ? (
        <div>
          <input
            onClick={CheckingUsers}
            onChange={(e) => {
              const { value } = e.target;
              setPassword(value);
            }}
            type="password"
            placeholder="Password"
            value={password}
            className="inputLoginPage"
          />
          {passwordMatches === false ? <p>Wrong Password Try again</p> : null}
        </div> //Login page
      ) : (
        //Register Page
        <div>
          <input
            {...register("Password", {
              pattern:
                /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&\'()*+,-.\/:;<=>?@[\]^_`{|}~])[\w\d!"#$%&\'()*+,-.\/:;<=>?@[\]^_`{|}~]{8,40}$/i,
            })}
            type="password"
            placeholder="Password"
            className="inputLoginPage"
          />

          {errors?.Password?.type === "pattern" && (
            <div>
              <ul>
                <li>
                  Ya password week bruh....I feel like you would know the
                  standards by now...
                </li>
                <li>1 Lowercase</li>
                <li>1 Uppercase</li>
                <li>1 Number</li>
                <li>1 Special character</li>
              </ul>
            </div>
          )}
        </div>
      )}

      {!props.bool && (
        <div>
          <input
            {...register("ConfirmPassword", {
              pattern:
                /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&\'()*+,-.\/:;<=>?@[\]^_`{|}~])[\w\d!"#$%&\'()*+,-.\/:;<=>?@[\]^_`{|}~]{8,40}$/i,
            })}
            type="password"
            placeholder="Confirm Password"
            className="inputLoginPage"
          />

          {errors?.ConfirmPassword?.type === "pattern" && (
            <p>I know life is hard.....Just don't be dumb.</p>
          )}
        </div>
      )}

      {/* onSubmit={props.bool ? handleChange : handleSubmit} */}
      <button type="submit" className="buttonLoginPage">
        {props.bool ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Input;
