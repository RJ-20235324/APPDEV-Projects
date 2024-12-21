import React from "react";
import { useParams, Link } from "react-router-dom";
import { employees } from "./Company-Profile";

export default function Resume() {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return (
      <div className="container text-center mt-5">
        <h1>Employee Not Found</h1>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Company Profile
        </Link>
      </div>
    );
  }

  return (
    <div className="shadow-none container mt-5">
      <div className="card shadow-sm">
        <div className="card-header text-center bg-dark text-light">
          <h2>{employee.name}</h2>
          <h5>{employee.position}</h5>
        </div>
        <div className="shadow-none card-body">
          <div className="text-center mb-4">
            <img
              src={employee.image || "https://via.placeholder.com/150"}
              alt={employee.name}
              className="rounded-circle shadow-sm"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>
          <p className="text-center text-muted">
            <i>{employee.description}</i>
          </p>
          <hr />
          <section>
            <h4 className="text-secondary">Contact Information</h4>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong> {employee.email}
              </li>
              <li>
                <strong>Residence:</strong> {employee.residence}
              </li>
            </ul>
          </section>
          <hr />
          <section>
            <h4 className="text-secondary">Education</h4>
            <ul className="list-unstyled">
              {employee.education.map((edu) => (
                <li key={edu.id}>
                  <strong>{edu.program}</strong>, {edu.school}
                  <br />
                  <small className="text-muted">
                    {edu.location} - Graduated {edu.graduation_date}
                  </small>
                </li>
              ))}
            </ul>
          </section>
          <hr />
          <section>
            <h4 className="text-secondary">Experience</h4>
            {employee.experience.map((exp) => (
              <div key={exp.id} className="mb-3">
                <h5 className="mb-1">{exp.position}</h5>
                <small className="text-muted">
                  {exp.company} - {exp.date}
                </small>
                <ul>
                  {exp.description.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <hr />
          <section>
            <h4 className="text-secondary">Skills</h4>
            <ul className="list-unstyled">
              {employee.skills.map((skill, idx) => (
                <li key={idx}>- {skill}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="card-footer text-center bg-light">
          <Link to="/CompanyProfile" className="btn btn-dark">
            Back to Company Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
