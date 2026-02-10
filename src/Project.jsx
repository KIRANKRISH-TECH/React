import "./Project.css";

export default function Project() {
  return (
    <section className="project">
      <h2 className="project-title">My Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>🛒 Nexa Cart – E-commerce Web Application</h3>
          <p>
         Nexa Cart is a user-friendly e-commerce website designed to provide a smooth online shopping experience. The project focuses on clean design, easy navigation, and modern web features. Users can browse products, view details, and explore an eco-friendly shopping platform. This project helped me improve my skills in Python, web development, and full-stack application building.
          </p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>🛡️ Mediator Tool – Scam Defender</h3>
          <p>
           Mediator Tool – Scam Defender is a cybersecurity-focused project designed to help users identify and prevent online scams. The system acts as a smart mediator that analyzes suspicious messages, links, or activities and provides warnings to improve user safety. This project aims to create awareness about cyber threats and build a secure digital environment.
          </p>
          <button>View Project</button>
        </div>

        <div className="project-card">
          <h3>🛒 React E-commerce Web Application</h3>
          <p>
           This React E-commerce project is a modern online shopping website built using React.js. It provides a smooth and interactive user experience with dynamic product listing, responsive design, and fast navigation. The project focuses on frontend performance, reusable components, and clean UI design..
          </p>
          <button>View Project</button>
        </div>

      </div>
    </section>
  );
}
