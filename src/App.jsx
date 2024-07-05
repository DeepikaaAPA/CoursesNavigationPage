import { Link, Route, Router, Routes, useParams } from "react-router-dom";
import { useState } from "react";
import blogs from "./Data/blogs.json";
import "./App.css";
let blogslist = blogs;
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
        <button
          onClick={handleclick}
          className={filter === "All" ? "btn selected" : "btn"}
        >
          <Link to="/">All </Link>
        </button>
        <button
          onClick={handleclick}
          className={
            filter === "Full Stack Development" ? "btn selected" : "btn"
          }
        >
          <Link to="/fsd">Full Stack Development </Link>
        </button>
        <button
          onClick={handleclick}
          className={filter === "Cyber Security" ? "btn selected" : "btn"}
        >
          {" "}
          Cyber Security{" "}
        </button>
        <button
          onClick={handleclick}
          className={filter === "Data Science" ? "btn selected" : "btn"}
        >
          {" "}
          Data Science{" "}
        </button>
        <button
          onClick={handleclick}
          className={filter === "Careers" ? "btn selected" : "btn"}
        >
          {" "}
          Careers{" "}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<AllBlogs />}></Route>
        <Route path="/fsd" element={<FSD />}></Route>
        <Route path="/ds" element={<DS />}></Route>
        <Route path="/CyberSecurity" element={<CyberSecurity />}></Route>
        <Route path="/Careers" element={<Careers />}></Route>
      </Routes>
    </>
  );
}
function Blog() {
  return (
    <div className="container">
      {blogslist.map((blog) => (
        <BlogCard blog={blog}></BlogCard>
      ))}
    </div>
  );
}
function AllBlogs() {
  return (
    <div className="container">
      {blogslist.map((blog, i) => (
        <BlogCard key={i} blog={blog}></BlogCard>
      ))}
    </div>
  );
}
function FSD() {
  return (
    <div className="container">
      {blogslist
        .filter((blog) => blog.category === "Full Stack Development")
        .map((blog, i) => (
          <BlogCard key={i} blog={blog}></BlogCard>
        ))}
    </div>
  );
}
function DS() {
  return (
    <div className="container">
      {blogslist
        .filter((blog) => blog.category === "Data Science")
        .map((blog, i) => (
          <BlogCard key={i} blog={blog}></BlogCard>
        ))}
    </div>
  );
}
function CyberSecurity() {
  return (
    <div className="container">
      {blogslist
        .filter((blog) => blog.category === "Cyber Security")
        .map((blog, i) => (
          <BlogCard key={i} blog={blog}></BlogCard>
        ))}
    </div>
  );
}
function Careers() {
  return (
    <div className="container">
      {blogslist
        .filter((blog) => blog.category === "Careers")
        .map((blog, i) => (
          <BlogCard key={i} blog={blog}></BlogCard>
        ))}
    </div>
  );
}
function BlogCard({ blog }) {
  return (
    <>
      <div className="blog-card">
        <img src={blog.thumbnail}></img>
        <div className="card-desc">
          <h3 className="blog-title">{blog.title}</h3>
          <p>By {blog.author}</p>
          <div className="card-footer">
            <p>{blog.date}</p>
            <p>{blog.duration} min read</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
