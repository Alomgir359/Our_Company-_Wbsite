const Technologies = () => {
  return (
    <section id="technologies" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Technologies We Use</h2>
          <p>Modern, battle-tested tools to power your applications.</p>
        </div>

        <div className="grid-3">
          <div className="card pill-card">
            <h3>Flutter</h3>
            <p>Cross-platform mobile framework for fast, beautiful apps.</p>
          </div>
          <div className="card pill-card">
            <h3>React Native</h3>
            <p>Hybrid mobile apps with efficient performance.</p>
          </div>
          <div className="card pill-card">
            <h3>ReactJS / NextJS</h3>
            <p>Frontend UI frameworks for modern, responsive interfaces.</p>
          </div>
          <div className="card pill-card">
            <h3>PHP Laravel</h3>
            <p>Secure and scalable backend framework.</p>
          </div>
          <div className="card pill-card">
            <h3>NodeJS</h3>
            <p>Great for fast, real-time, event-driven applications.</p>
          </div>
          <div className="card pill-card">
            <h3>Django</h3>
            <p>Powerful Python-based backend for enterprise solutions.</p>
          </div>
        </div>

        <div className="tech-extra">
          <h4>Databases</h4>
          <p>MySQL · PostgreSQL · MongoDB · Firebase · Redis</p>
          <h4>DevOps &amp; Hosting</h4>
          <p>AWS · DigitalOcean · cPanel · VPS · Nginx · Docker</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
