import React from "react";
export default function Synonyms(props) {
  if (props.syns.length > 0) {
    return (
      <p>
        <strong>Synonyms: </strong>{" "}
        {props.syns.map(function (synonym, index) {
          //The below makes it so that if there is more than one synonym that they are separated by commas and spaces
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
