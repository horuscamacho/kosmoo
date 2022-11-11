import React from "react";

const InputTextArea = (props) => {
  const { data, name, textColor, required } = props;
  return (
    <div className="flex mt-2 justify-between">
      <div className="flex">
        <h2 className={textColor}>{name}</h2>
        {required === true ? <p>*</p> : null}
      </div>
      <textarea></textarea>
    </div>
  );
};

export default InputTextArea;
