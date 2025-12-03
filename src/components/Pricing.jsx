const Pricing = () => {
  return (
    <section id="team" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Our Expert Core Team</h2>
          <p>
            A focused, highly-skilled development team delivering clean, scalable and production-ready solutions.
          </p>
        </div>

        <div className="grid-4 team-grid">
          {/* Lead Developer */}
          <div className="team-card card-hover">
            <div className="team-photo-wrap">
              <img src="/src/assets/alomgir.jpg" alt="Lead Developer" className="team-photo" />
            </div>
            <h3 className="team-name">Md.Alomgir</h3>
            <p className="team-role">Lead Developer:Solution Architect</p>
            <p className="small">
              Expert in Flutter, Laravel, NodeJS &amp; ReactJS. Designs clean architecture and end-to-end solutions for complex systems.
            </p>
            <div className="team-tags">
              <span>System Design</span>
              <span>Flutter</span>
              <span>Laravel</span>
            </div>
          </div>

          {/* Backend Engineer */}
          <div className="team-card card-hover">
            <div className="team-photo-wrap">
              <img src="/src/assets/nur.jpg" alt="Backend Engineer" className="team-photo" />
            </div>
            <h3 className="team-name">Nur Sayed</h3>
            <p className="team-role">Backend Engineer :API &amp; Security</p>
            <p className="small">
              Specialised in REST &amp; GraphQL APIs, database design, and security best practices using NodeJS, Laravel &amp; Django.
            </p>
            <div className="team-tags">
              <span>NodeJS</span>
              <span>Django</span>
              <span>Database</span>
            </div>
          </div>

          {/* Mobile App Developer */}
          <div className="team-card card-hover">
            <div className="team-photo-wrap">
              <img src="/src/assets/arman.jpg" alt="Mobile Developer" className="team-photo" />
            </div>
            <h3 className="team-name"> Arman Tamim</h3>
            <p className="team-role">Mobile App Developer : Android &amp; iOS</p>
            <p className="small">
              Builds smooth, user-friendly Android &amp; iOS apps with Kotlin, Swift &amp; Flutter, focusing on performance &amp; UX.
            </p>
            <div className="team-tags">
              <span>Android</span>
              <span>iOS</span>
              <span>Flutter</span>
            </div>
          </div>

          {/* Frontend / UI */}
          <div className="team-card card-hover">
            <div className="team-photo-wrap">
              <img src="/src/assets/a.jpg" alt="Frontend Developer" className="team-photo" />
            </div>
            <h3 className="team-name">Anika Chowdhury</h3>
            <p className="team-role">Frontend &amp; UI/UX Engineer</p>
            <p className="small">
              Creates modern, responsive interfaces with ReactJS &amp; NextJS, turning ideas into polished, user-focused designs.
            </p>
            <div className="team-tags">
              <span>ReactJS</span>
              <span>NextJS</span>
              <span>UI / UX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
