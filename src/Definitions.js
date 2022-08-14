import React from "react";
export default function Definitions(props) {
  return (
    <ol>
      {props.defs.map(function (definition, index) {
        return <li key={index}>{definition.definition} </li>;
      })}
    </ol>
  );
}
