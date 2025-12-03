const Services = () => {
  return (
    <>
      {/* Core Services */}
      <section id="services" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2 className="hero-title animated-heading">Our Core Services</h2>
            <p>
              We design and develop mobile &amp; web solutions with clean architecture,
              strong security and production-ready performance.
            </p>
          </div>

          <div className="grid-3 core-services-grid">
            <div className="card card-hover service-card">
              <div className="service-icon">
                <span>🤖</span>
              </div>
              <h3 className="hero-title animated-heading">Android App Development</h3>
              <p>
                High-performance, secure Android applications built using Kotlin &amp; Java
                &mdash; ideal for business automation, on-the-go tools and internal systems.
              </p>
              <ul className="badge-row">
                <li>Native UI</li>
                <li>Play Store Ready</li>
              </ul>
            </div>

            <div className="card card-hover service-card">
              <div className="service-icon">
                <span>🍎</span>
              </div>
              <h3 className="hero-title animated-heading">iOS App Development</h3>
              <p>
                Professional-grade iPhone and iPad apps developed with Swift, focused on
                smooth animations, stability and App Store compliance.
              </p>
              <ul className="badge-row">
                <li>Swift</li>
                <li>High Security</li>
              </ul>
            </div>

            <div className="card card-hover service-card">
              <div className="service-icon">
                <span>⚡</span>
              </div>
              <h3 className="hero-title animated-heading">Flutter App Development</h3>
              <p>
                Fast, beautiful cross-platform apps for both Android &amp; iOS from a
                single codebase &mdash; perfect balance of speed and budget.
              </p>
              <ul className="badge-row">
                <li>Single Codebase</li>
                <li>Native-like UI</li>
              </ul>
            </div>

            <div className="card card-hover service-card">
              <div className="service-icon">
                <span>📱</span>
              </div>
              <h3 className="hero-title animated-heading">React Native Development</h3>
              <p>
                Lightweight, efficient and cost-effective hybrid apps &mdash; ideal for
                MVPs, eCommerce, social and utility applications.
              </p>
              <ul className="badge-row">
                <li>Fast MVP</li>
                <li>Cross-platform</li>
              </ul>
            </div>

            <div className="card card-hover service-card">
              <div className="service-icon">
                <span>🌐</span>
              </div>
              <h3 className="hero-title animated-heading">Web Application Development</h3>
              <p>
                Custom dashboards, eCommerce, admin panels, ERP &amp; CRM solutions built
                with React, NextJS, Laravel, NodeJS and Django.
              </p>
              <ul className="badge-row">
                <li>Responsive UI</li>
                <li>SEO Friendly</li>
              </ul>
            </div>

            <div className="card card-hover service-card">
              <div className="service-icon">
                <span>🛡️</span>
              </div>
              <h3 className="hero-title animated-heading">Backend / API Development</h3>
              <p>
                Secure REST &amp; GraphQL APIs using NodeJS, Laravel &amp; Django with
                proper authentication, roles and scalable database design.
              </p>
              <ul className="badge-row">
                <li>REST / GraphQL</li>
                <li>Scalable DB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {/* Detailed Services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="hero-title animated-heading">Services in Detail</h2>
            <p>From idea to launch, we cover the full development lifecycle.</p>
          </div>

          {/* ছোট ছোট animated cards */}
          <div className="detail-services-grid">
            {/* Android */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Mobile</span>
              <h3>Android Development</h3>
              <p>
                Fast, secure, and user-friendly Android apps using Kotlin &amp; Java.
              </p>
              <ul className="list-dot small">
                <li>Clean native UI</li>
                <li>API integration</li>
                <li>Push notifications</li>
                <li>Firebase connectivity</li>
                <li>Play Store publishing</li>
              </ul>
            </div>

            {/* iOS */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Mobile</span>
              <h3>iOS Development</h3>
              <p>
                Polished, high-performance iOS apps built with Swift.
              </p>
              <ul className="list-dot small">
                <li>Smooth animations</li>
                <li>High security</li>
                <li>Modern UI</li>
                <li>App Store deployment</li>
              </ul>
            </div>

            {/* Flutter */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Cross-platform</span>
              <h3>Flutter App Development</h3>
              <p>
                Cross-platform apps from a single codebase for Android &amp; iOS.
              </p>
              <ul className="list-dot small">
                <li>Fast development</li>
                <li>Same UI on both platforms</li>
                <li>Cost-effective</li>
                <li>Beautiful animations</li>
              </ul>
            </div>

            {/* React Native */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Cross-platform</span>
              <h3>React Native Apps</h3>
              <p>
                Lightweight, fast and budget-friendly hybrid mobile applications.
              </p>
              <ul className="list-dot small">
                <li>Perfect for MVP</li>
                <li>Social &amp; eCommerce apps</li>
                <li>Utility &amp; content apps</li>
              </ul>
            </div>

            {/* Frontend */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Web</span>
              <h3>Frontend Development</h3>
              <p>
                Modern interfaces with ReactJS &amp; NextJS for web apps and dashboards.
              </p>
              <ul className="list-dot small">
                <li>Responsive layouts</li>
                <li>Smooth interactions</li>
                <li>SEO-friendly pages</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Web</span>
              <h3>Backend Development</h3>
              <p>
                Secure backend systems using Laravel, NodeJS &amp; Django.
              </p>
              <ul className="list-dot small">
                <li>REST API / GraphQL</li>
                <li>Auth &amp; role-based access</li>
                <li>Reporting dashboards</li>
                <li>Payment gateway integration</li>
              </ul>
            </div>

            {/* UI/UX */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Design</span>
              <h3>UI/UX Design</h3>
              <p>
                User-friendly, modern and intuitive product design.
              </p>
              <p className="small">
                Process: Wireframe → Prototype → Final UI
              </p>
            </div>

            {/* API */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Backend</span>
              <h3>API Development</h3>
              <p>
                Secure and scalable APIs for mobile &amp; web applications.
              </p>
              <ul className="list-dot small">
                <li>Authentication</li>
                <li>Data encryption</li>
                <li>Third-party API integration</li>
              </ul>
            </div>

            {/* Maintenance */}
            <div className="card card-hover detail-mini-card">
              <span className="detail-pill">Support</span>
              <h3>Maintenance &amp; Support</h3>
              <p>
                Long-term updates, monitoring, bug fixing and version upgrades.
              </p>
              <ul className="list-dot small">
                <li>Performance monitoring</li>
                <li>Bug fixing</li>
                <li>Feature enhancements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Services;
