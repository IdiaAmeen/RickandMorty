import React from "react";

export default function Characters(props) {
  return (
    <>
      <img src={props.character.image} alt={props.character.name} />
      <div>{props.character.name}</div>
    </>
  );
}
