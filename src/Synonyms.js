import React from "react";
export default function Synonyms(props) {
  if (props.syns.length > 0) {
    return (
      <p>
        <strong>Synonyms: </strong>{" "}
        {props.syns.map(function (synonym, index) {
          if (index === 0) {
            return synonym;
          } else {
            return `, ${synonym}`;
          }
        })}
      </p>
    );
  } else {
    return null;
  }
}
