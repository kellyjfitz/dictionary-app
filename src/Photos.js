import React from "react";
export default function Photos(props) {
  console.log(props.photos);
  if (props.photos.photos) {
    return (
      <div>
        {props.photos.photos.map(function (pic, index) {
          return <img src={pic.src.tiny} key={index} />;
        })}
      </div>
    );
  } else {
    return "this is OK";
  }
}
