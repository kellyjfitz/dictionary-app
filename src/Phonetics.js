import React from "react";

import { Howl } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  return (
    <ol>
      {props.phonetics.map(function (phonetic, index) {
        var sound = new Howl({
          src: [phonetic.audio],
        });
        function play(event) {
          sound.play();
        }
        if (phonetic.audio.length > 0) {
          return (
            <li className="phonetics" key={index}>
              <FontAwesomeIcon
                icon={faCirclePlay}
                className="playButton"
                onClick={play}
              />{" "}
              {phonetic.text}
            </li>
          );
          /* <li className="phonetics" key={index}>
    {phonetic.audio.length>0 ? <FontAwesomeIcon icon={faCirclePlay} className="playButton" onClick={play} /> : null }
       {phonetic.text}
</li> */
        } else {
          return (
            <li className="phonetics mt-3" key={index}>
              {phonetic.text}
            </li>
          );
        }
      })}
    </ol>
  );
}
