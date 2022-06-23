import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Outlet, Link} from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Explore from "./component/Explore";
import Cinema from "./component/Cinema";
import Movie from "./component/Movie"
import Apppg from './App';
import Booking from "./component/Booking";
import signup from "./component/signup";

 

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Login" element={<Login />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="Cinema" element={<Cinema />} />
          <Route path="Movie" element={<Movie />} />
          <Route path="Booking" element={<Booking />} />
          <Route path="signup" element={<signup/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

 

ReactDOM.render(<App />, document.getElementById("root"));
