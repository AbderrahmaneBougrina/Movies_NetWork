import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Singlemovies from "./pages/Singlemovies";
import Mylist from "./pages/MyList";
import MoviesList from "./pages/MoviesList";
import Movies from "./pages/movies";

function App() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Movies />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Signup"
          element={
            <Signup
              user={user}
              setUser={setUser}
              session={session}
              setSession={setSession}
            />
          }
        />
        <Route path="/Singlemovies" element={<Singlemovies />} />
        <Route path="/Mylist" element={<Mylist />} />
        <Route path="/MoviesList" element={<MoviesList />} />
      </Routes>
    </>
  );
}

export default App;
