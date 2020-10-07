import React, { useEffect, useState } from "react";

export default function Games(props) {
  const [level, setLevel] = useState("null");
  let questionIndex = 0;
  let totalCorrect = 0;

  return (
    <div>
      <h2>Choose Level</h2>
      <hr />
      <button onClick={() => setLevel("easy")}>Easy</button>
      <button onClick={() => setLevel("hard")}>Hard</button>
    </div>
  );
}
