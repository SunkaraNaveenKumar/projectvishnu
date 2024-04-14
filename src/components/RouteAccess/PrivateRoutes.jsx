import useAuth from "../../Custom Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { LoggedIn } = useAuth();
  return LoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
