import React from "react";

export const InputRadio = (props) => {
  const { name, textColor, required } = props;
  console.log("Este es el color del texto en inputRadio ", textColor);
  return (
    <div className="flex mt-2 justify-between">
      <div className="flex">
        <h2 className={textColor}>{name}</h2>
        {required === true ? <p>*</p> : null}
      </div>
      <input type="radio" />
    </div>
  );
};
