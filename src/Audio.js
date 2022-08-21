import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faCirclePause } from "@fortawesome/free-solid-svg-icons";
export default function Audio(props) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  const audioContext = new AudioContext();

  function handleAudio() {
    let something = "something";
    return something;
  }
  return (
    <span>
      <FontAwesomeIcon icon={faCirclePlay} onClick={handleAudio} />
      <FontAwesomeIcon icon={faCirclePause} />{" "}
    </span>
  );
}
