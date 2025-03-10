import React from "react";
import Artical_List from "../components/page_comp/Artical_List";

const Articles = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <Artical_List
            img="assets/img/doctornurses.png"
            title="What is Lorem Ipsum?"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
            more="Read More"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Artical_List
            img="assets/img/doctornurses.png"
            title="What is Lorem Ipsum?"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
            more="Read More"
          />
        </div>
        <div className="col-md-4 mb-4">
          <Artical_List
            img="assets/img/doctornurses.png"
            title="What is Lorem Ipsum?"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
            more="Read More"
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg">Load More</button>
      </div>
    </div>
  );
};

export default Articles;
