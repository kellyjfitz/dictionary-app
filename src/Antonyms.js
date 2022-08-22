import React from "react";
export default function Antonyms(props) {
  if (props.ants.length > 0) {
    return (
      <p>
        <strong>Antonyms: </strong>{" "}
        {props.ants.map(function (antonym, index) {
          //The below makes it so that if there is more than one antonym that they are separated by commas and spaces
          if (index === 0) {
            return antonym;
          } else {
            return `, ${antonym}`;
          }
        })}
      </p>
    );
  } else {
    return null;
  }
}
