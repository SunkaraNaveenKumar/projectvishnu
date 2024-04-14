import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncIsRegistered,
  setIsRegistered,
} from "../redux store/actions/userActions";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegistered, errors, isLoading } = useSelector((state) => {
    return state.userAuthData;
  });
  console.log(isRegistered, errors, isLoading);
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: userName,
      email,
      password,
    };
    dispatch(asyncIsRegistered(formData));
    console.log(formData);
  };
  useEffect(() => {
    if (isRegistered) {
      navigate(`/login`);
      dispatch(setIsRegistered(false));
    }
  }, [isRegistered]);
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
    <div className="flex justify-center items-center bg-red-100 min-h-[100vh] flex-col gap-y-5">
      <p className="text-red-500">
        {errors && typeof errors === "string" && errors}
      </p>
      <form className="flex gap-y-5 flex-col w-[30%]" onSubmit={handleSubmit}>
        {errors.username && (
          <p className="text-red-500">{errors.username?.message}</p>
        )}
        <input
          type="text"
          className="bg-gray-200 h-10 w-100"
          placeholder="UserName"
          value={userName}
          onChange={handleUserName}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
        <input
          type="email"
          className="bg-gray-200 h-10 w-100"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}
        <input
          type="password"
          className="bg-gray-200 h-10 w-100"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <input type="submit" className="bg-yellow-500" value="Register" />
      </form>
    </div>
  );
};

export default Register;
