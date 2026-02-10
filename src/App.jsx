// import "./App.css";
// import Project from "./Project";
// import About from "./About";
// import { Routes, Route, Link } from "react-router-dom";


// export default function App() {
//   return (
//     <div className="hero">
//       <nav className="navbar">
//         <h2 className="logo">Kiranportfolio</h2>

//         <ul className="nav-links">
//           <li>Home</li>
//           <li>Project</li>
//           <li>about</li>
//         </ul>

        

//         <button className="start-btn">Contact</button>
//       </nav>

//       <div className="hero-content">
//         <h1>PYTHON FULL STACK DEVELOPER</h1>

//         <p>
//           I am a passionate Python Developer who loves building clean,
//           efficient, and user-friendly applications. I have experience working
//           with Python, Django, and web technologies to create full-stack
//           projects. I enjoy solving problems, learning new technologies, and
//           improving my coding skills every day.
//         </p>

//         <div className="running-text">
//           <div className="scroll">
//             🐍 Python Developer • Full Stack Developer • Django • React • API Development •
//             🐍 Python Developer • Full Stack Developer • Django • React • API Development •
//           </div>
//         </div>

//         <div className="hero-buttons">
//           <button className="primary">View Projects</button>
//         </div>
//       </div>

//       <div className="crypto-animation">
//         <div className="coin coin1">🐍</div>
//         <div className="line"></div>
//         <div className="coin coin2">🧑‍💻</div>
//         <div className="line"></div>
//         <div className="coin coin3">⚡</div>
//       </div>



//      <Project />

//       <About />

//     </div>
    

//   );
// }

import "./App.css";
import Project from "./Project";
import About from "./About";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="hero">
      <nav className="navbar">
        <h2 className="logo">Kiranportfolio</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <button className="start-btn">Contact</button>
      </nav>

      {/* ROUTES */}
      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={
          <>
            <div className="hero-content">
              <h1>PYTHON FULL STACK DEVELOPER</h1>

              <p>
                I am a passionate Python Developer who loves building clean,
                efficient, and user-friendly applications.
              </p>

              <div className="running-text">
                <div className="scroll">
                  🐍 Python Developer • Full Stack Developer • Django • React • API Development •
                </div>
              </div>

              <div className="hero-buttons">
                <Link to="/project">
                  <button className="primary">View Projects</button>
                </Link>
              </div>
            </div>

            <div className="crypto-animation">
              <div className="coin coin1">🐍</div>
              <div className="line"></div>
              <div className="coin coin2">🧑‍💻</div>
              <div className="line"></div>
              <div className="coin coin3">⚡</div>
            </div>
          </>
        } />

     
        <Route path="/project" element={<Project />} />

      
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

