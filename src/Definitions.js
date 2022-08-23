import React from "react";
export default function Definitions(props) {
  return (
    <ol>
      {props.defs.map(function (definition, index) {
        return (
          <li key={index}>
            {definition.definition}
            {definition.example && (
              <span className="example">
                Example: <em>{definition.example}</em>
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
