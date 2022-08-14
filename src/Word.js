import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Word(props) {
  return (
    <div>
      <h2>{props.word}</h2>
      <p>{props.phoneticText}</p>
      {props.meanings.map(function (meaning, index) {
        return (
          <section key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <Definitions defs={meaning.definitions} />
            <Synonyms syns={meaning.synonyms} />
            <Antonyms ants={meaning.antonyms} />
          </section>
        );
      })}
    </div>
  );
}
