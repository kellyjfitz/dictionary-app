import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/kellyjfitz/dictionary-app"
            target="_blank"
            title="See this site on GitHub"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </li>
        <li>
          <a
            href="https://au.linkedin.com/in/kelly-meleshko"
            target="_blank"
            title="Kelly Meleshko's LinkedIn"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
