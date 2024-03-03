import { useState, CSSProperties, useEffect } from "react";
import "./subblog.css";
import SubBlogs from "./SubBlogs";
import Navbar from "../homepage/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData } from "../redux/features/blog/blogSlice";
import { FadeLoader } from "react-spinners";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="background-container">BLOGS</div>
      <div className="container mt-5 mx-auto w-75">
        <div className="row justify-content-center">
          {loading ? (
            <div className="text-center d-block mx-auto ">
              <FadeLoader size={50} height={50} />
            </div>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="col-lg-6 mb-4">
                <SubBlogs data={blog} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
