import React, { useState } from "react";
import axios from "axios";
import Word from "./Word";
import Photos from "./Photos";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary() {
  const [input, setInput] = useState("newspaper");
  const [data, setData] = useState({ ready: false });
  const [pics, setPics] = useState("null");
  const pexelsApiKey =
    "563492ad6f91700001000001cf62435470744df3998203cd92a65ade";
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

    axios
      .get(
        `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=6&orientation=square`,
        {
          headers: { Authorization: `Bearer ${pexelsApiKey}` },
        }
      )
      .then(function (response) {
        setPics(response.data.photos);
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
        <div className="Header">
          {" "}
          <h1>Dictionary</h1>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                type="search"
                onChange={handleInput}
                placeholder="Search for a word"
                autoFocus="on"
              />
              <Button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </Form>
        </div>
        <div className="container">
          <Word
            word={data.word}
            meanings={data.meanings}
            phoneticText={data.phoneticText}
            phoneticAudio={data.phoneticAudio}
          />
          <Photos photos={pics} />
        </div>
      </div>
    );
  } else {
    getDefinition();
    return (
      <FontAwesomeIcon icon={faSpinner} spin size="8x" className="spinner" />
    );
  }
}
