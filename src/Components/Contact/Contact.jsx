import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = React.useContext(ThemeContext);
  return (
    <footer
      className={styles.footer}
      id="contact"
    >
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          I'm actively looking for any new opportunities, in full-stack web
          development.
        </p>
    
          <p style={{ color: `#00a0a0`, lineHeight: ``,fontSize:`20px` }}>
            {/* {" "} */}
            Email: satya2maity@gmail.com
          </p>

		  <p style={{ color: `#00a0a0`,fontSize:`20px`}}>
		  Mobile: +91-<span style={{ color: `#00a0a0`, fontSize:`20px`, textDecoration: `underline` }} >6294 018 414</span>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          </p>
		  <p style={{ color: `#00a0a0`,fontSize:`20px` }}>
            Location: Bengaluru, India{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
          </p>
		  
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
            href="tel:6294 018 414"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="mailto: satya2maity@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
         
          <a
            href="https://github.com/Satyaranjan8414"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/satyaranjan-maity-071058206/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
        Designed and build by Satyaranjan, 2022 All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
