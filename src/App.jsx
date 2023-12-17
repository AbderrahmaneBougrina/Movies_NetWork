import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Singlemovies from "./pages/Singlemovies";
import Mylist from "./pages/MyList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Singlemovies" element={<Singlemovies />} />
        <Route path="/Mylist" element={<Mylist />} />
      </Routes>
    </>
  );
}

export default App;
