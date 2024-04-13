import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/register" element = {<Register />}></Route>
        <Route path="/login" element = {<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
