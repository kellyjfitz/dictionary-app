import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.pics) {
    console.log(props.pics);
    return (
      <div className="Photos">
        {props.pics.map(function (pic, index) {
          const attribution = `Photo by ${pic.photographer}`;
          return (
            <div key={index} className="pexels">
              <a
                href={pic.url}
                target="_blank"
                rel="noopener noreferrer"
                title={attribution}
              >
                <img src={pic.src.tiny} alt={pic.alt} />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
