import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function isAtPageBottom() {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    function handleScroll() {
      if (isAtPageBottom()) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`Footer ${showFooter ? "show" : ""}`}>
      <img
        className="Logo"
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/122010/logo__farmacia_farmacotecnica2.png?itok=e1vOr5TE"
        alt="Logo"
      />
      <p className="Paragraf">&copy; {new Date().getFullYear()} Farmacia PharmaPlus. Toate drepturile rezervate.</p>
    </footer>
  );
};

export default Footer;
