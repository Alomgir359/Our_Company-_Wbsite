const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div>
          <div className="section-head left">
            <h2>Contact Us</h2>
            <p>
              Tell us about your project. We&apos;ll get back with timelines
              and a custom quote.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! This is a static demo form.');
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="text" placeholder="+8801XXXXXXXXX" />
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select type
                  </option>
                  <option>Mobile App</option>
                  <option>Web Application</option>
                  <option>Backend / API</option>
                  <option>Full System</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Budget (approx.)</label>
                <input type="text" placeholder="e.g. $2000 - $5000" />
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Project details..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary full-width">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-card card">
          <h3>Company Contact Info</h3>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong> info@yourcompany.com
            </li>
            <li>
              <strong>Phone:</strong> +8801XXXXXXXXX
            </li>
            <li>
              <strong>Address:</strong> Dhaka, Bangladesh
            </li>
            <li>
              <strong>WhatsApp:</strong> Live chat button
            </li>
            <li>
              <strong>Social:</strong> Facebook · LinkedIn · YouTube
            </li>
          </ul>
          <p className="small">
            We develop high-quality mobile and web solutions that help companies
            scale, automate processes, and grow faster in a competitive market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
