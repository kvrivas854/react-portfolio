import React from "react";

function Home() {
  return (
    <div class="grid-container">
      <div className="text-md green-base">
      Hi, my name is
      </div>
      <p className="text-4xl extra-bold green-light spacing">Kelly Rivas</p>
      <p className="text-4xl extra-bold gray spacing">I build digital products.</p>
      <p className="text-lg green-light description-spacing">
      I'm a software engineer based in Charlotte, NC specializing in building websites, applications, and everything in between.
      </p>
      <button class="spacing text-md green-base green-button">Get in touch</button>
    </div>
  );
}

export default Home;
