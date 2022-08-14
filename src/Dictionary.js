import React, { useState } from "react";
import axios from "axios";
import Word from "./Word";
export default function Dictionary() {
  const [input, setInput] = useState("sunset");
  const [data, setData] = useState({ ready: false });

  function getDefinition() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
      .then(function (response) {
        setData({
          ready: true,

          word: response.data[0].word,
          phoneticText: response.data[0].phonetics[0].text,
          phoneticAudio: response.data[0].phonetics[0].audio,
          meanings: response.data[0].meanings,
        });
        console.log(response.data);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getDefinition();
  }
  function handleInput(event) {
    setInput(event.target.value);
  }

  if (data.ready) {
    return (
      <div>
        <h1>This is a dictionary</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleInput}
            placeholder="Search for a word"
            autoFocus="on"
          />
          <button type="submit">F</button>
        </form>
        <Word
          word={data.word}
          meanings={data.meanings}
          phoneticText={data.phoneticText}
          phoneticAudio={data.phoneticAudio}
        />
      </div>
    );
  } else {
    getDefinition();
  }
}
