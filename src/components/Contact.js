import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div id="contact-container">
        
        {/* Left Section */}
        <div className="contact-sections">
          <h2>Contact</h2>
          <p>
            I work with individuals and teams to create modern, responsive
            websites and intuitive user experiences. Whether it's a small
            business site or a full-scale web app, I'd love to help bring your
            ideas to life.
          </p>
          <p>
            <i className="fa-solid fa-calendar"></i> Available for Freelance
            Projects
          </p>
          <p>
            <i className="fa-solid fa-clock"></i> Response Time: 1-2 business
            days
          </p>
          <p style={{ fontWeight: 600, fontSize: "1.3rem" }}>
            Let's Collaborate!
          </p>
          <p>
            Drop me an email or message on WhatsApp, and let's start your
            project today.
          </p>
        </div>

        {/* Right Section */}
        <div className="contact-sections">
          <a href="mailto:awaisrafique4929@gmail.com">
            <i className="fa-solid fa-envelope"></i>
            <p>Email</p>
          </a>
          <a href="https://wa.me/+923259350593">
            <i className="fa-brands fa-whatsapp"></i>
            <p>Whatsapp</p>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-awais-web-dev/">
            <i className="fa-brands fa-linkedin-in"></i>
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/muhammad-awais-web-dev">
            <i className="fa-brands fa-github"></i>
            <p>Github</p>
          </a>
          <a href="https://x.com/WebMorph_Studio">
            <i className="fa-brands fa-x-twitter"></i>
            <p>X (Twitter)</p>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61573732746181">
            <i className="fa-brands fa-facebook-f"></i>
            <p>Facebook</p>
          </a>
          <a href="https://www.instagram.com/webmorphsrudio/">
            <i className="fa-brands fa-instagram"></i>
            <p>Instagram</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
