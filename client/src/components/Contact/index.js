import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"
// import { Link, Route } from "react-router-dom";
// import Project from "./components/Project/index";

function Contact() {
  const location = useLocation();
  return (
    <div>
      <div className="flex flex-column text-center text-2xl semi-bold green-light"><span className="number green-base text-lg roboto">04.</span>Contact</div>
      <p className="flex-column text-lg green-light box-sizing">
      I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <button className="spacing text-md green-base hover green-button roboto">
      <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
Say hello! 
        </Link>
        </button>
    </div>
  );
}

export default Contact;
