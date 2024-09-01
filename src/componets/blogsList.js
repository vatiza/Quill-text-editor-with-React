"use client";
import getAxios from "@/utils/getAxios";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const axiosGet = getAxios();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosGet.get("/blogs");
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <h3>{blog.title || "Untitled Post"}</h3>
              <div>{parse(blog.description || "")}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default BlogList;
