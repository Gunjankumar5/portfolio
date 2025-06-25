import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or social links below.</p>
        <a href="2022452743.gunjan@ug.shard.ac.in" className="email-link">2022452743.gunjan@ug.shard.ac.in</a>
        <div className="social-links">
          <a href="https://github.com/Gunjankumar5" target="_blank">GitHub</a>
          <a href="http://www.linkedin.com/in/gunjan-kumar-ab45b2361" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
