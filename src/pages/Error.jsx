import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Add styles here if needed

function Error_Page() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <div className="error-animation">
        <img
          src="/"
          alt="Error 404"
          className="img-fluid"
        />
      </div>

      <h1 className="mt-4 text-danger fw-bold">Oops! Something Went Wrong</h1>
      <p className="lead text-muted">
        The page you’re looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
}

export default Error_Page;
