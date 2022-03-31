import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            setButtonState(!buttonState);
          }}
        >
          {buttonState ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!buttonState && <p>{info}</p>}
    </article>
  );
};

export default Question;
