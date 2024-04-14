import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  asyncUserLogIn,
  setIsUserLogIn,
} from "../redux store/actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, loginErrors, isLoggedIn } = useSelector((state) => {
    return state.userAuthData;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(asyncUserLogIn(formData));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  if (isLoading) {
    return (
      isLoading && (
        <div className="flex h-[100vh] items-center justify-center">
          <p>Loading.....</p>
        </div>
      )
    );
  }
  return (
    <div className="flex h-[100vh] items-center justify-center">
      {loginErrors && <p>{loginErrors}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 w-[30%]">
        <input
          type="email"
          name="email"
          className="bg-gray-200 h-10 w-100"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="bg-gray-200 h-10 w-100"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input type="submit" className="bg-yellow-500" value="Login" />
      </form>
    </div>
  );
};

export default Login;
