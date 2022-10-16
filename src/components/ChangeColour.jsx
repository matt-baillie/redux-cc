import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColour = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        id=""
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Colour
      </button>
    </div>
  );
};

export default ChangeColour;
