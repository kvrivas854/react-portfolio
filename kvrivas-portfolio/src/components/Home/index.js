import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

function Home() {
  const location = useLocation();
  return (
    <div className="mt-160">
      <div className="text-md green-base roboto">
      Hi, my name is
      </div>
      <div className="text-4xl extra-bold green-light spacing">Kelly Rivas</div>
      <p className="text-4xl extra-bold gray spacing">I build digital products.</p>
      <p className="text-lg green-light description-spacing">
      I'm a software engineer based in Charlotte, NC specializing in building websites, applications, and everything in between.
      </p>
      <button className="spacing text-md green-base hover green-button roboto">
      <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
        Get in touch  
        </Link>
      </button>
    </div>

  );
}

export default Home;


