const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        <div>
          <h2>About Us</h2>
          <p className="text-lg">
            We are a dedicated software development team focused on building
            reliable, modern, and scalable mobile and web solutions. Our core
            strength is delivering clean, well-structured, and high-performance
            applications customized for each client’s business needs.
          </p>

          <div className="about-cards">
            <div className="mini-card">
              <h4>Our Mission</h4>
              <p>
                To deliver high-quality digital solutions that help businesses
                grow, improve efficiency, and reach their goals.
              </p>
            </div>
            <div className="mini-card">
              <h4>Our Vision</h4>
              <p>
                To become a trusted development partner for businesses around
                the world by providing modern technologies and long-term
                support.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3>Our Values</h3>
          <ul className="list-check">
            <li>
              <strong>Quality First –</strong> We never compromise on quality.
            </li>
            <li>
              <strong>Transparency –</strong> Clear and honest communication.
            </li>
            <li>
              <strong>Commitment –</strong> We deliver what we promise.
            </li>
            <li>
              <strong>Innovation –</strong> Continuous improvement in everything
              we do.
            </li>
          </ul>

          <h3 className="mt-32">Our Team</h3>
          <ul className="list-dot">
            <li>
              Lead Developer – Expert in Flutter, Laravel, NodeJS, ReactJS
            </li>
            <li>Backend Engineer – Specialist in API, Database, Security</li>
            <li>Mobile App Developer – Android &amp; iOS</li>
            <li>Frontend Developer – ReactJS, NextJS, UI/UX</li>
            <li>QA &amp; Tester – Ensures smooth and bug-free apps</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
