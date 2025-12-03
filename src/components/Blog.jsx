const Blog = () => {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Blog</h2>
          <p>Insights, tips, and guides about software development.</p>
        </div>

        <div className="grid-3">
          <div className="card card-hover">
            <h3>Why Flutter Is the Best Choice for Startups</h3>
            <p className="small">
              Flutter apps are fast, beautiful, and cost-effective for new
              businesses…
            </p>
          </div>

          <div className="card card-hover">
            <h3>How Much Does an App Cost? Complete Breakdown</h3>
            <p className="small">
              Development hours, design, API integration — full cost
              explained…
            </p>
          </div>

          <div className="card card-hover">
            <h3>
              Laravel vs NodeJS vs Django – Which Backend Should You Choose?
            </h3>
            <p className="small">
              Comparison of performance, scalability, and cost…
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
