import React from "react";
import Articl from "../components/Articl";

const articles = [
  {
    img: "assets/img/doctornurses.png",
    title: "What is Lorem Ipsum?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    more: "Read More",
  },
  {
    img: "assets/img/doctornurses.png",
    title: "What is Lorem Ipsum?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    more: "Read More",
  },
  {
    img: "assets/img/doctornurses.png",
    title: "What is Lorem Ipsum?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    more: "Read More",
  },
];

const Dr_Article = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 d-flex justify-content-center">
            <Articl {...article} />
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-primary">Load More</button>
      </div>
    </div>
  );
};

export default Dr_Article;
