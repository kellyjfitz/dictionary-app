import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";


import { faImagePortrait } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      
          <a
            href="https://github.com/kellyjfitz/dictionary-app"
            target="_blank"
            title="See this site on GitHub"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        
          <a
            href="https://playful-strudel-6e76b8.netlify.app/portfolio.html"
            target="_blank"
            title="Kelly Meleshko's portfolio"
            rel="noopener noreferrer"
            className="icon"
           
          >
            <FontAwesomeIcon icon={faImagePortrait} className="portfolio" />
          </a>
        
          <a
            href="https://au.linkedin.com/in/kelly-meleshko"
            target="_blank"
            title="Kelly Meleshko's LinkedIn"
            rel="noopener noreferrer"
            className="icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        <br />
      <cite>Photos provided by <a href="https://pexels.com" target="_blank"
            title="Visit Pexels"
            rel="noopener noreferrer">Pexels</a><br />Definitions provided by <a href="https://dictionaryapi.dev/" target="_blank"
            title="Visit Free Dictionary API"
            rel="noopener noreferrer">Free Dictionary API</a></cite>
    </footer>
  );
}