import React from "react";
import Blog_List from "../components/page_comp/Blog_List";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h4>Latest News</h4>
        <h2>News & Article</h2>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 mb-4">
              <Blog_List
                img="assets/img/blog1.png"
                tag="Some Of The Most Common Diseases"
                detail="Lorem ipsum dolor sit amet, consel tetur adipiscing..."
                more="/"
              />
            </div>
            <div className="col-md-6 mb-4">
              <Blog_List
                img="assets/img/blog2.png"
                tag="Some Of The Most Common Diseases"
                detail="Lorem ipsum dolor sit amet, consel tetur adipiscing..."
                more="/"
              />
            </div>
            <div className="col-md-6 mb-4">
              <Blog_List
                img="assets/img/blog3.png"
                tag="Some Of The Most Common Diseases"
                detail="Lorem ipsum dolor sit amet, consel tetur adipiscing..."
                more="/"
              />
            </div>
            <div className="col-md-6 mb-4">
              <Blog_List
                img="assets/img/blog5.png"
                tag="Some Of The Most Common Diseases"
                detail="Lorem ipsum dolor sit amet, consel tetur adipiscing..."
                more="/"
              />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="position-relative">
            <img
              src="assets/img/blog4.png"
              className="img-fluid w-100"
              alt="Featured Blog"
            />
            <div className="p-3 bg-white shadow rounded mt-3">
              <h6 className="mb-3">
                6 Tips For Maintaining Children’s Mental Health When Sick
              </h6>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consel tetur adipiscing elit, sed...
              </p>
              <Link to="/err" className="text-primary">
                Read More
              </Link >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
