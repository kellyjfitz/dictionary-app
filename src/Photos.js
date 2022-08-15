import React from "react";
export default function Photos(props) {
  return props.photos.map(function (pic, index) {
    // return <img src={pic.src.tiny} />;
    return "this is busted";
  });
}
