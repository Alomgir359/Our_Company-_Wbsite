const Services = () => {
  return (
    <>
      {/* Core Services */}
      <section id="services" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Core Services</h2>
            <p>We build mobile &amp; web solutions tailored to your business.</p>
          </div>

          <div className="grid-3">
            <div className="card card-hover">
              <h3>Android App Development</h3>
              <p>
                High-performance, secure, and modern Android applications built
                using Kotlin &amp; Java.
              </p>
            </div>

            <div className="card card-hover">
              <h3>iOS App Development</h3>
              <p>
                Professional-grade iPhone and iPad applications with smooth
                performance.
              </p>
            </div>

            <div className="card card-hover">
              <h3>Flutter App Development</h3>
              <p>
                Fast, beautiful, cross-platform apps for both Android and iOS.
              </p>
            </div>

            <div className="card card-hover">
              <h3>React Native Development</h3>
              <p>
                Lightweight, efficient, and cost-effective hybrid mobile apps.
              </p>
            </div>

            <div className="card card-hover">
              <h3>Web Application Development</h3>
              <p>
                Custom dashboards, eCommerce, admin panels, ERP, CRM solutions.
              </p>
            </div>

            <div className="card card-hover">
              <h3>Backend / API Development</h3>
              <p>
                Secure REST &amp; GraphQL APIs using NodeJS, Laravel &amp;
                Django.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Services in Detail</h2>
            <p>From idea to launch, we cover the full development lifecycle.</p>
          </div>

          <div className="grid-2">
            <div className="card card-hover">
              <h3>Mobile App Development</h3>

              <h4>Android Development</h4>
              <p>
                We build fast, secure, and user-friendly Android apps using
                Kotlin &amp; Java.
              </p>
              <ul className="list-dot small">
                <li>Clean native UI</li>
                <li>API integration</li>
                <li>Push notifications</li>
                <li>Firebase connectivity</li>
                <li>Play Store publishing</li>
              </ul>

              <h4>iOS Development</h4>
              <p>We deliver polished, high-performance iOS apps built with Swift.</p>
              <ul className="list-dot small">
                <li>Smooth animations</li>
                <li>High security</li>
                <li>Modern UI</li>
                <li>App Store deployment</li>
              </ul>
            </div>

            <div className="card card-hover">
              <h3>Cross-platform &amp; Hybrid</h3>

              <h4>Flutter App Development</h4>
              <p>Cross-platform apps with a single codebase.</p>
              <ul className="list-dot small">
                <li>Fast development</li>
                <li>Same UI for iOS &amp; Android</li>
                <li>Cost-effective</li>
                <li>Beautiful animations</li>
              </ul>

              <h4>React Native App Development</h4>
              <p>Hybrid apps that are lightweight, fast, and budget-friendly.</p>
              <ul className="list-dot small">
                <li>Startup MVP</li>
                <li>Small &amp; mid-level apps</li>
                <li>Social, eCommerce &amp; utility apps</li>
              </ul>
            </div>

            <div className="card card-hover">
              <h3>Web Application Development</h3>
              <h4>Frontend Development</h4>
              <p>Using ReactJS, NextJS, we build clean, modern, fast interfaces.</p>
              <ul className="list-dot small">
                <li>Responsive design</li>
                <li>Smooth animations</li>
                <li>SEO-friendly pages</li>
              </ul>

              <h4>Backend Development</h4>
              <p>Using Laravel, NodeJS, Django we build secure backend systems.</p>
              <ul className="list-dot small">
                <li>REST API / GraphQL</li>
                <li>Login system</li>
                <li>Role-based access</li>
                <li>Dashboard &amp; reporting</li>
                <li>Payment gateway integration</li>
              </ul>
            </div>

            <div className="card card-hover">
              <h3>Design, API &amp; Support</h3>
              <h4>UI/UX Design</h4>
              <p>We create user-friendly, modern, and intuitive designs.</p>
              <p className="small">Process: Wireframe → Prototype → Final UI</p>

              <h4>API Development</h4>
              <p>Secure and scalable APIs for mobile &amp; web apps.</p>
              <ul className="list-dot small">
                <li>Authentication</li>
                <li>Data encryption</li>
                <li>Third-party API integration</li>
              </ul>

              <h4>Maintenance &amp; Support</h4>
              <p>
                We provide long-term update, monitoring, bug fixing and version
                upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
