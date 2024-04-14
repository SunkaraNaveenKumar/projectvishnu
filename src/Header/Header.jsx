import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../Custom Hooks/useAuth";
const Header = () => {
  const { LoggedIn, role } = useAuth();
  const { isLoggedIn } = useSelector((state) => {
    return state.userAuthData;
  });
  console.log("isLoggedIn : ", isLoggedIn, "LoggedIn : ", LoggedIn);
  return (
    <div className="bg-slate-600 flex flex-row justify-end items-center h-16">
      <div className=" flex flex-row gap-x-10 mr-20">
        <Link to="/">Home</Link>
        {!(LoggedIn || isLoggedIn) && <Link to="/register">Register</Link>}
        {!(LoggedIn || isLoggedIn) && <Link to="/login">Login</Link>}
        <Link to="/admin">Admin</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/contact-us">Contact us</Link>
        {(LoggedIn || isLoggedIn) && <Link to="/logout">Log Out</Link>}
      </div>
    </div>
  );
};

export default Header;
