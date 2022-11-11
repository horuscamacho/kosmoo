import React, { useEffect, useState } from "react";

const Input = (props) => {
  const { data, preview, setForm, name, setRequired, req, setTextColor, textColor, setElement, element, prev, naame } =
    props;

    const [id, setId] = useState(0)
    useEffect(() => {

    },[id])

  function handleSelect(e) {
    switch (e.target.value) {
      case "Input":
        console.log("Es el input");
        let input = data.filter((el) => el.component === "Input");
        preview(input);
        break;
      case "Text Area":
        console.log("Es el Text Area");
        let textArea = data.filter((el) => el.component === "Text Area");
        preview(textArea);
        break;
      case "Options":
        console.log("Es el Option");
        let option = data.filter((el) => el.component === "Options");
        preview(option);
        break;
      case "Select":
        console.log("Es el select");
        let select = data.filter((el) => el.component === "Select");
        preview(select);
        break;
      default:
        break;
    }
  }

  function handleOnChange(e) {
    name(e.target.value);
  }

  function handleRequired(e) {
    req === true ? setRequired(false) : setRequired(true);
  }

  function handleColor(e) {
    let color;
    switch (e.target.value) {
      case "Rojo":
        color = "text-red-900";
        console.log("Se agrego color rojo", color)
        setTextColor(color);
        break;
      case "Amarillo":
        color = "text-yellow-500";
        setTextColor(color);
        break;
      case "Verde":
        color = "text-green-500";
        setTextColor(color);
        break;
      case "Azul":
        color = "text-blue-500";
        setTextColor(color);
        break
      case "Morado":
        color = "text-purple-500";
        setTextColor(color);
        break;
      default:
        break;
    }
  }

  function addId() {
    setId(id + 1)
  }


  function handleAddToForm(e) {
    addId()
    setElement([...element, {naame, req, textColor, prev, id}])
  }


  return (
    <div className="rounded-2xl bg-blue-50 p-4 lg:p-12  ">
      <div className="flex items-center text-blue-500">
        <p className="text-sm font-bold uppercase">Configura el componente</p>
      </div>
      <div className="pt-10">
        <div className="flex justify-center self-center z-10">
          <div className="p-4 bg-green-100 rounded-2xl w-96 ">
            <h2>Tipo de elemento:</h2>
            <select onChange={(e) => handleSelect(e)} className="w-48">
              <option>-</option>
              {data.length > 0
                ? data.map((el) => <option>{el.component}</option>)
                : null}
            </select>
            <h2>Nombre del elemento:</h2>
            <input
              onChange={(e) => handleOnChange(e)}
              className="bg-gray-200"
            />
            <div className="flex justify-start mt-2">
              <p className="text-sm font-bold mr-3 h-5">Requerido?</p>
              <input
                type="checkbox"
                onChange={(e) => handleRequired(e)}
              ></input>
            </div>

            <h2>Color del Texto:</h2>
            <div>
              <select onChange={(e) => handleColor(e)}>
                <option>-</option>
                <option value="Rojo">Rojo</option>
                <option value="Amarillo">Amarillo</option>
                <option value="Verde">Verde</option>
                <option value="Azul">Azul</option>
                <option value="Morado">Morado</option>
              </select>
            </div>
            <button onClick={(e) => handleAddToForm(e)} className="bg-black rounded-sm text-white p-1 mt-2 ml-2">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
