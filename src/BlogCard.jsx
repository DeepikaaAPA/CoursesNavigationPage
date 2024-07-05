export function BlogCard({ blog }) {
  return (
    <>
      <div className="blog-card">
        <img src={blog.thumbnail}></img>
        <div className="views"> 
      {blog.views} { "👁️"}
        </div>
        <h3 className="blog-title">{blog.title}</h3>
        <div className="card-desc">
          
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
