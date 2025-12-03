const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Portfolio</h2>
          <p>Some of the key projects we’ve delivered for our clients.</p>
        </div>

        <div className="grid-3">
          <div className="card card-hover">
            <h3>Smart Retail POS</h3>
            <p className="small">
              A complete sales and inventory management system for retail shops.
            </p>
            <p className="tagline">
              Technologies: Flutter · Laravel · MySQL
            </p>
            <ul className="list-dot small">
              <li>Product &amp; stock management</li>
              <li>Barcode scanning</li>
              <li>POS billing</li>
              <li>Reports &amp; analytics</li>
            </ul>
          </div>

          <div className="card card-hover">
            <h3>Online Learning App</h3>
            <p className="small">
              An e-learning platform for teachers and students.
            </p>
            <p className="tagline">Technologies: Flutter · NodeJS</p>
            <ul className="list-dot small">
              <li>Video classes</li>
              <li>Quiz/test system</li>
              <li>Student dashboard</li>
              <li>Subscription model</li>
            </ul>
          </div>

          <div className="card card-hover">
            <h3>Inspection Management System</h3>
            <p className="small">
              Custom workflow automation system designed for corporate
              inspection tasks.
            </p>
            <p className="tagline">Technologies: ReactJS · Django</p>
            <ul className="list-dot small">
              <li>Daily task management</li>
              <li>User role panel</li>
              <li>Document upload</li>
              <li>Reports &amp; analytics</li>
            </ul>
          </div>

          {/* Placeholder Cards */}
          <div className="card card-dashed">
            <h3>Upcoming Project</h3>
            <p className="small">Add more projects here as your portfolio grows.</p>
          </div>
          <div className="card card-dashed">
            <h3>Upcoming Project</h3>
            <p className="small">Add more projects here as your portfolio grows.</p>
          </div>
          <div className="card card-dashed">
            <h3>Upcoming Project</h3>
            <p className="small">Add more projects here as your portfolio grows.</p>
          </div>
        </div>

        <div className="center mt-32">
          <a href="#contact" className="btn btn-outline">
            View All Projects / Start Yours
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
