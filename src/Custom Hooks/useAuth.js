import { jwtDecode } from "jwt-decode";
const useAuth = () => {
  const token = localStorage.getItem("token");
  const authData = {};
  if (token) {
    const currentToken = jwtDecode(token?.split(" ")[1]);
    authData.role = currentToken?.role;
    authData.LoggedIn = true;
  }
  return authData;
};

export default useAuth;
