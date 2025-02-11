import { Link, Route, Router, Routes, useParams } from "react-router-dom";
import { useState } from "react";
import blogs from "./Data/blogs.json";
import "./App.css";
import { AllBlogs, FSD, DS, CyberSecurity, Careers } from "./AllBlogs";
export let blogslist = blogs;
console.log(blogs);
function App() {
  const [filter, setFilter] = useState("All");
  const handleclick = (event) => {
    setFilter(event.target.innerText);
    console.log(filter);
  };
  return (
    <>
      <nav>
        <ul>
          <li
            onClick={handleclick}
            className={filter === "All" ? "btn selected" : "btn"}
          >
            <Link to="/">All </Link>
          </li>
          <li
            onClick={handleclick}
            className={
              filter === "Full Stack Development" ? "btn selected" : "btn"
            }
          >
            <Link to="/fsd">Full Stack Development </Link>
          </li>
          <li
            onClick={handleclick}
            className={filter === "Cyber Security" ? "btn selected" : "btn"}
          >
            <Link to="/cybersecurity">Cyber Security </Link>
          </li>
          <li
            onClick={handleclick}
            className={filter === "Data Science" ? "btn selected" : "btn"}
          >
            <Link to="/ds">Data Science</Link>
          </li>
          <li
            onClick={handleclick}
            className={filter === "Careers" ? "btn selected" : "btn"}
          >
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AllBlogs />}></Route>
        <Route path="/fsd" element={<FSD />}></Route>
        <Route path="/ds" element={<DS />}></Route>
        <Route path="/cybersecurity" element={<CyberSecurity />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
      </Routes>
    </>
  );
}

export default App;
