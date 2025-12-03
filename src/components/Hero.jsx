const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Mobile &amp; Web Software Studio</p>
          <h1>We Build Scalable Mobile &amp; Web Applications</h1>
          <p className="hero-subtitle">
            We help businesses grow with custom Android, iOS, and Web solutions
            using modern technologies like Flutter, React Native, Laravel,
            NodeJS, Django, and ReactJS.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get a Quote
            </a>
            <a href="#portfolio" className="btn btn-outline">
              View Portfolio
            </a>
          </div>

          <div className="hero-badges">
            <div className="badge">Clean Architecture</div>
            <div className="badge">Scalable Systems</div>
            <div className="badge">Long-term Support</div>
          </div>
        </div>

        <div className="hero-highlight-card card-float">
          <h3>Featured Capabilities</h3>
          <p className="small" style={{ color: '#9ca3af', marginBottom: '0.8rem' }}>
            Powerful, scalable, and production-ready solutions designed to accelerate your business growth.
          </p>

          <ul>
            <li>Custom Mobile App Development (Android &amp; iOS)</li>
            <li>Modern Web Application Interfaces & Dashboards</li>
            <li>Secure, Scalable Backend &amp; API Engineering</li>
            <li>Cloud Deployment, Optimization &amp; DevOps Support</li>
          </ul>

          <div className="hero-stat-grid">
            <div>
              <h4>10+</h4>
              <p>Completed Projects</p>
            </div>
            <div>
              <h4>100%</h4>
              <p>Transparent Communication</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
