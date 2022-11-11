import React, { useState } from "react";

const InputSelect = (props) => {
  const { data, name, textColor, required } = props;
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");

  function handleAddOption(e) {
    setOptions([...options, input]);
  }

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  function deleteElement(e) {
    let dato = e.target.value;
    let newArr = options.filter((el) => el !== dato);
    setOptions(newArr);
  }

  return (
    <>
      <div className="flex mt-2 justify-between">
        <div className="flex">
          <h2 className={textColor}>{name}</h2>
          {required === true ? <p>*</p> : null}
        </div>
        <select>
          <option>-</option>
          {options.map((el) => (
            <option>{el}</option>
          ))}
        </select>
      </div>
      <div>
        <h3 className="text-sm mt-5">Agrega las opciones: </h3>
      </div>
      <div className=" mt-2 flex">
        <input onChange={(e) => handleOnChange(e)} />{" "}
        <button
          className="ml-2 bg-blue-300 w-5"
          value={input}
          onClick={(e) => handleAddOption(e)}
        >
          +
        </button>
      </div>
      <div>
        <h3 className="text-sm mt-5">Opciones agregadas: </h3>
      </div>
      <div className="">
        {options.map((el) => (
          <div className="flex">
            <option>{el}</option>
            <button
              value={el}
              className=" text-sm bg-red-500 w-4 ml-3"
              onClick={(e) => deleteElement(e)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default InputSelect;
