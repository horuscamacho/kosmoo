import React from "react";
import { InputRadio } from "./elements/InputRadio";
import InputSelect from "./elements/InputSelect";
import InputText from "./elements/InputText";
import InputTextArea from "./elements/InputTextArea";

const Preview = (props) => {
  const { preview, data, name, required, textColor } = props;

  
  console.log(required)
  function setElement(obj) {
    switch (obj[0].component) {
      case "Input":
        return <InputText data={data} name={name} textColor={textColor} required={required} />;
      case "Text Area":
        return <InputTextArea data={data} name={name} textColor={textColor} required={required}/>;
      case "Options":
        return <InputRadio data={data} name={name} textColor={textColor} required={required}/>;
      case "Select":
        return <InputSelect data={data} name={name} textColor={textColor} required={required}/>;
      default:
        break;
    }
  }

  return (
    <div className=" rounded-2xl bg-blue-50 p-4 lg:p-12">
      <div className="flex items-center text-blue-500">
        <p className="text-sm font-bold uppercase">
          Previsualiza el componente
        </p>
      </div>
      <div className=" mt-20 ">
        {preview.length > 0 ? setElement(data) : null}
      </div>
    </div>
  );
};

export default Preview;
