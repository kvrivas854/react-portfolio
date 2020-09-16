import React from "react";


function About() {
  return (
    <div className="grid-container">
      <h1 className="text-2xl semi-bold green-light"><span className="number green-base text-lg roboto">01.</span> About Page</h1>
        <div className="container flex flex-row">
          <div className="flex flex-column">
            <p className="text-lg open-sans green-light semi-bold">
               Hello! I'm Kelly, a software engineer based in Charlotte, NC.
            </p>
            <p className="text-lg open-sans green-light semi-bold">I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
            <p className="text-lg open-sans green-light semi-bold">Shortly after graduating from University of North Carolina at Charlotte Coding Bootcamp, I joined the engineering team at Progress.</p>
            <p className="text-lg open-sans green-light semi-bold">Here are a few technologies I've been working with recently:</p> 
          </div>
          <img src={process.env.PUBLIC_URL + '/group-68@3x.png'} alt="img" class="photo-card"/> 
        </div>
        <div className="container flex flex-row">
        <div className="flex flex-column">
            <div class="flex flex-row space-between">
              <p class="list-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>React</p>
                    <p class="list-item">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>MySql + MongoDB</p>
              </div>
              <div class="flex flex-row space-between flex-grow">
              <p class="list-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>HTML + CSS3</p>
                    <p class="list-item">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>JSON API's'</p>
              </div>
              <div class="flex flex-row">
              <p class="list-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>JavaScript (ES6)</p>
                    <p class="list-item">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>MVC</p>
              </div>
              <div class="flex flex-row">
              <p class="list-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>Node.js</p>
                    <p class="list-item">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>AJAX Frameworks</p>
              </div>
              <div class="flex flex-row">
              <p class="list-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>jQuery</p>
                    <p class="list-item">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>Heroku + Git deployment</p>
              </div>
              <div class="flex flex-row">
              <p class="list-item">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>Bootstrap + TailwindCSS</p>
              </div>
              
              </div>
              </div>
            </div>
            
            
            
        
        
            
    
  );
}

export default About;

