import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncIsRegistered } from "../redux store/actions/userActions";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRegistered, errors } = useSelector((state) => {
    return state.userAuthData;
  });
  console.log(isRegistered, errors);
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
    }
  }, [isRegistered]);
  return (
    <div className="flex justify-center items-center bg-red-100 min-h-[100vh]">
      <p>{errors && typeof errors === "string" && errors}</p>
      <form className="flex gap-y-5 flex-col w-[30%]" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-gray-200 h-10 w-100"
          placeholder="UserName"
          value={userName}
          onChange={handleUserName}
        />
        <input
          type="email"
          className="bg-gray-200 h-10 w-100"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
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
