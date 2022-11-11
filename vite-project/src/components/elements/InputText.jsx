import React from "react";

const InputText = (props) => {
  const { name, textColor, required } = props;
  return (
    <div className="flex mt-2 justify-between">
      <div className="flex">
        <h2 className={textColor}>{name}</h2>{
          required === true ? <p>*</p> : null
        }
      </div>
      <input />
    </div>
  );
};

export default InputText;
