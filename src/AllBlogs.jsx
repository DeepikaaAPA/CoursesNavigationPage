import { blogslist } from "./App";
import { BlogCard } from "./BlogCard";

export function AllBlogs() {
  return (
    <div className="container">
      {blogslist.map((blog, i) => (
        <BlogCard key={i} blog={blog}></BlogCard>
      ))}
    </div>
  );
}
export function FSD() {
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
export function DS() {
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
export function CyberSecurity() {
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
export function Careers() {
  return (
    <div className="container">
      {blogslist
        .filter((blog) => blog.category === "Career")
        .map((blog, i) => (
          <BlogCard key={i} blog={blog}></BlogCard>
        ))}
    </div>
  );
}
