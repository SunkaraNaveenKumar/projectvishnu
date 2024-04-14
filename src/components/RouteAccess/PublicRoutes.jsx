import useAuth from "../../Custom Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
const PublicRoutes = () => {
  const { LoggedIn } = useAuth();
  return LoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
