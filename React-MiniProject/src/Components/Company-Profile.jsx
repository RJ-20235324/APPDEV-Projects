import React from "react";
import { Link } from "react-router-dom";

export const employees = [
  {
    id: 1,
    name: "R J Salcedo",
    email: "rsalcedo@keystaxx.com",
    residence: "Pangasinan, Philippines 2445",
    position: "Chief Executive Officer (CEO)",
    description:
      "As the strategic leader of KeyStaxx, the CEO is responsible for setting the overall vision and direction of the company.",
    image: "/src/assets/R_J_Salcedo.jpeg", // Add image URL
    education: [
      {
        id: 1,
        school: "University of Baguio",
        program: "Bachelor of Science in Computer Science",
        graduation_date: "June 2026",
        location: "Baguio City, Philippines",
      },
    ],
    experience: [
      {
        id: 1,
        position: "Assistant Project Manager",
        company: "SBS Corporation",
        date: "September 2024",
        description: [
          "Led strategic projects.",
          "Managed cross-functional teams.",
          "Improved operations efficiency.",
        ],
      },
    ],
    skills: [
      "Great communication skills",
      "Effective collaborator",
      "Creative thinker",
      "Proficient understanding in computer technology",
      "Advanced spreadsheet skills (Microsoft Excel, Google Sheets)",
    ],
  },
  {
    id: 2,
    name: "Mark Simon Bringas",
    email: "mbringas@keystaxx.com",
    residence: "Baguio City, Philippines 6000",
    position: "Chief Technology Officer (CTO)",
    description:
      "Leads the technological innovation and development strategies for KeyStaxx.",
    image: "/src/assets/Mark_Simon.png", // Add image URL
    education: [
      {
        id: 1,
        school: "University of Baguio",
        program: "Bachelor of Science in Computer Science",
        graduation_date: "March 2026",
        location: "Baguio City, Philippines",
      },
    ],
    experience: [
      {
        id: 1,
        position: "Senior Software Engineer",
        company: "TechGenix Solutions",
        date: "August 2023",
        description: [
          "Developed scalable applications.",
          "Led software development projects.",
          "Implemented best practices.",
        ],
      },
    ],
    skills: [
      "Proficient in Python, JavaScript, and C++",
      "Database management expertise",
      "Strong problem-solving skills",
      "Team leadership",
    ],
  },
  {
    id: 3,
    name: "William Dosil Jr.",
    email: "jdoe@keystaxx.com",
    residence: "Manila, Philippines 1000",
    position: "Chief Marketing Officer (CMO)",
    description:
      "Oversees marketing efforts and brand strategies for KeyStaxx.",
    image: "/src/assets/WIlliam_Dosil.jpeg", // Add image URL
    education: [
      {
        id: 1,
        school: "University of Baguio",
        program: "Bachelor of Science in Computer Science",
        graduation_date: "June 2025",
        location: "Baguio City, Philippines",
      },
    ],
    experience: [
      {
        id: 1,
        position: "Marketing Manager",
        company: "Visionary Brands",
        date: "July 2024",
        description: [
          "Increased brand visibility.",
          "Launched successful campaigns.",
          "Enhanced customer engagement.",
        ],
      },
    ],
    skills: [
      "Expertise in digital marketing",
      "Strong analytical abilities",
      "Branding strategy development",
      "Content creation",
    ],
  },
  {
    id: 4,
    name: "James Peter Gonzaga",
    email: "jsmith@keystaxx.com",
    residence: "Davao City, Philippines 8000",
    position: "Chief Financial Officer (CFO)",
    description:
      "Manages financial planning and ensures fiscal health of KeyStaxx.",
    image: "/src/assets/Mark_Simon.png", // Add image URL
    education: [
      {
        id: 1,
        school: "University of Baguio",
        program: "Bachelor of Science in Accountancy",
        graduation_date: "April 2024",
        location: "Baguio City, Philippines",
      },
    ],
    experience: [
      {
        id: 1,
        position: "Financial Analyst",
        company: "Prime Financials Inc.",
        date: "January 2023",
        description: [
          "Managed budget forecasting.",
          "Improved financial reporting.",
          "Reduced operational costs.",
        ],
      },
    ],
    skills: [
      "Advanced Excel and financial modeling",
      "Budget management expertise",
      "Strong organizational skills",
      "Strategic decision-making",
    ],
  },
  {
    id: 5,
    name: "Alfredo Fajardo II",
    email: "ewhite@keystaxx.com",
    residence: "Iloilo City, Philippines 5000",
    position: "Head of Design",
    description:
      "Leads the creative direction and design for KeyStaxx products.",
    image: "/src/assets/Mark_Simon.png", // Add image URL
    education: [
      {
        id: 1,
        school: "University of Baguio",
        program: "Bachelor of Fine Arts in Industrial Design",
        graduation_date: "May 2025",
        location: "Baguio City, Philippines",
      },
    ],
    experience: [
      {
        id: 1,
        position: "Product Designer",
        company: "Creative Concepts Inc.",
        date: "March 2023",
        description: [
          "Designed user-friendly interfaces.",
          "Enhanced product aesthetics.",
          "Collaborated with engineering teams.",
        ],
      },
    ],
    skills: [
      "Proficiency in Adobe Creative Suite",
      "Strong visual design skills",
      "Creative problem-solving",
      "Excellent communication",
    ],
  },
];

export default function CompanyProfile() {
  return (
    <div className="shadow-none container my-5">
      <header className="text-center mb-4">
        <h1 className="text-dark">Company Profile</h1>
        <p className="lead text-muted">
          "Precision Craftsmanship in Every Key"
        </p>
      </header>

      <section className="mb-5">
        <h2 className="mb-3">Our Mission</h2>
        <p className="text-dark">
          To redefine the mechanical keyboard industry by offering unparalleled
          craftsmanship, innovative designs, and user-centric solutions for
          enthusiasts and professionals alike.
        </p>
        <h2 className="mt-4 mb-3">Our Vision</h2>
        <p className="text-dark">
          To become the global leader in artisan keyboards, blending technology
          and artistry to elevate typing experiences for everyone.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Our History</h2>
        <p className="text-dark">
          Founded in 2015, KeyStaxx began as a passionate project to create
          high-quality mechanical keyboards tailored for enthusiasts. Our
          founders, who shared a love for both design and technology, built the
          company with the belief that typing experiences should be exceptional.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Our Values</h2>
        <ul className="list-unstyled text-dark">
          <li>
            <strong>Innovation:</strong> Continuously pushing the boundaries of
            technology and design.
          </li>
          <li>
            <strong>Quality:</strong> Committing to the highest standards in
            craftsmanship.
          </li>
          <li>
            <strong>Customer Focus:</strong> Prioritizing the needs and feedback
            of our users.
          </li>
          <li>
            <strong>Integrity:</strong> Operating with honesty and transparency
            in everything we do.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Contact Us</h2>
        <p className="text-dark">
          <strong>Email:</strong> contact@keystaxx.com
        </p>
        <p className="text-dark">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="text-dark">
          <strong>Address:</strong> 123 Tech Street, Innovation City, CA 98765
        </p>
      </section>

      <section>
        <h2 className="mb-4">Meet Our Team</h2>
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          style={{ marginTop: "40px", marginBottom: "90px" }}
        >
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="col"
              style={{ marginBottom: "20px" }}
            >
              <div className="card h-100">
                <div
                  className="card-img-container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "-40px",
                  }}
                >
                  <img
                    src={employee.image || "https://via.placeholder.com/150"}
                    alt={employee.name}
                    style={{
                      width: "120px", // Adjust size as needed
                      height: "120px", // Maintain a square size
                      borderRadius: "50%", // Circular image
                      objectFit: "cover", // Prevents distortion
                      border: "4px solid #fff", // Optional border for better definition
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{employee.name}</h5>
                  <p className="card-text">
                    <strong>{employee.position}</strong>
                  </p>
                  <p className="card-text">{employee.description}</p>
                  <Link
                    to={`/employees/${employee.id}`}
                    className="btn btn-primary"
                    style={{ borderRadius: "20px" }}
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
