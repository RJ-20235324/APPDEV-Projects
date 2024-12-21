import { useState, useEffect } from "react";

export default function Developers() {
  // State for vouching counter
  const [vouchCount, setVouchCount] = useState(277912);

  // Increment vouch count every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setVouchCount((prevCount) => prevCount + 8);
    }, 30000); // 60000 milliseconds = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Developer Bio Information
  const developerBio = {
    name: "R J G. Salcedo",
    title: "UX/UI Designer",
    bio: [
      "I am a UX/UI designer with a passion for creating user-centric digital experiences that are both beautiful and functional. I have over 4 years of experience in the industry, and I have worked on a wide range of projects, from small startups to large enterprises.",
      "I believe that the best designs are those that are based on a deep understanding of the user's needs and goals. I start every project by conducting thorough user research to learn about the user's pain points, motivations, and expectations. I then use this information to create designs that are both easy to use and enjoyable.",
    ],
  };

  // Developer Skills
  const skills = [
    "UX/UI Design",
    "Prototyping",
    "Wireframing",
    "Interaction Design",
    "HTML, CSS, JavaScript",
  ];

  // Developer Portfolio
  const portfolio = [
    {
      name: "Royal Horizons Bank.Co website",
      link: "https://royal-horizons-bank.netlify.app/",
    },
  ];

  return (
    <section className="shadow-none py-3 py-md-5">
      <div className="container mb-4 mb-md-5">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-xxl-8">
            <img
              className="img-fluid rounded shadow "
              loading="lazy"
              src="/src/assets/R_Salcedo.jpeg"
              alt="Developer"
              style={{ height: "500px", objectFit: "cover", width: "1200px" }}
            />
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-2 gy-md-0 justify-content-xxl-center">
          {/* Developer Bio */}
          <div className="col-12 order-md-1 col-md-8 col-xxl-6">
            <div className="text-center text-md-start">
              <h2 className="display-3 fw-bold lh-1">{developerBio.name}</h2>
              <p className="text-secondary fs-4 mb-2">{developerBio.title}</p>
              <hr className="w-25 mx-auto ms-md-0 mb-4 text-secondary" />
              {developerBio.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {/* Vouch Button and Counter */}
              <div className="my-4">
                <button
                  style={{ borderRadius: "300px" }}
                  className="btn btn-outline-primary btn-lg"
                  onClick={() => setVouchCount(vouchCount + 1)}
                >
                  Vouch for {developerBio.name}
                </button>
                <p className="mt-2 fs-5">Vouch count: {vouchCount}</p>
              </div>
            </div>
          </div>

          {/* Developer Resume / Skills & Portfolio */}
          <div className="col-12 order-md-0 col-md-4 col-xxl-4">
            <div className="text-center text-md-start me-md-3 me-xl-5">
              <h3 className="display-6">Developer Resume</h3>
              <p className="text-secondary fs-5">Skills & Portfolio</p>

              {/* Skills */}
              <div className="my-3">
                <h4 className="fs-4">Skills</h4>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Portfolio */}
              <div className="my-3">
                <h4 className="fs-4">Portfolio</h4>
                <ul>
                  {portfolio.map((project, index) => (
                    <li key={index}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Developer Experience */}
              <div className="my-3">
                <p>
                  <span className="d-block display-6 lh-1">4+</span>
                  <span className="fs-4 text-secondary">
                    years of experience
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
