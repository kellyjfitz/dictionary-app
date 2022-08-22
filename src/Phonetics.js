import React from "react";

import {Howl, Howler} from 'howler';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics (props) {
  
    var sound = new Howl({
        src: [props.audio]
      });
      function play () {
        sound.play()
      }
  
    if (props.audio.length >0) {
    return (
        <p className="phonetics">
<span>
      <FontAwesomeIcon icon={faCirclePlay } onClick={play} className="playButton" />
      
    </span>{" "}
     {props.text}
        </p>
    )
   }
   else {
    return <p>{props.text}</p>
   }
}