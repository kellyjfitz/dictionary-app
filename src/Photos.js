import React from "react";
import "./Photos.css";
export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (pic, index) {
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
    return "this sucks";
  }
}
