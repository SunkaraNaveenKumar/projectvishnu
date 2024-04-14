import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import LogOut from "./components/LogOut";
import PublicRoutes from "./components/RouteAccess/PublicRoutes";
import PrivateRoutes from "./components/RouteAccess/PrivateRoutes";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route element={<PublicRoutes />}>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/logout" element={<LogOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
