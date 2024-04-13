import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-slate-600 flex flex-row justify-end items-center h-16">
      <div className=" flex flex-row gap-x-10 mr-20">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/contact-us">Contact us</Link>
      </div>
    </div>
  );
};

export default Header;
