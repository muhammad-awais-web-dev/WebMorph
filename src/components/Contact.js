import "./Contact.css";

function Contact() {
const contactInfo = [
  {
    url:"mailto:awaisrafique4929@gmail.com",
    icon:"fa-solid fa-envelope",
    desc:"Email"
  },
  {
    url:"https://wa.me/+923259350593",
    icon:"fa-brands fa-whatsapp",
    desc:"Whatsapp"
  },
  {
    url:"https://www.linkedin.com/in/muhammad-awais-web-dev/",
    icon:"fa-brands fa-linkedin-in",
    desc:"LinkedIn"
  },
  {
    url:"https://github.com/muhammad-awais-web-dev/",
    icon:"fa-brands fa-github",
    desc:"Github"
  },
  {
    url:"https://x.com/WebMorph_Studio/",
    icon:"fa-brands fa-x-twitter",
    desc:"X (Twitter)"
  },
  {
    url:"https://www.facebook.com/profile.php?id=61573732746181/",
    icon:"fa-brands fa-facebook-f",
    desc:"Facebook"
  },
  {
    url:"https://www.instagram.com/webmorphsrudio/",
    icon:"fa-brands fa-instagram",
    desc:"Instagram"
  }
]

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
          <p style={{ fontWeight: 600, fontSize: "1.3rem", color: "#fff" }}>
            Let's Collaborate!
          </p>
          <p>
            Drop me an email or message on WhatsApp, and let's start your
            project today.
          </p>
        </div>

        {/* Right Section */}
        <div className="contact-sections">
          {
            contactInfo.map( contactInfo =>(
              <a href={contactInfo.url} target="_blank" rel="noopener noreferrer">
                <i className={contactInfo.icon}></i>
                <p>{contactInfo.desc}</p>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Contact;
