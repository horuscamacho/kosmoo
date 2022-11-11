import React from "react";
import { InputRadio } from "./elements/InputRadio";
import InputSelect from "./elements/InputSelect";
import InputText from "./elements/InputText";
import InputTextArea from "./elements/InputTextArea";

const Form = (props) => {
  const {element, setElement} = props
  

function handleElements(obj){
  
  if(obj.prev[0].component === "Input") return <div className="flex "><InputText name={obj.naame} textColor={obj.textColor} required={obj.req}/><button onClick={(e) => handleDeleteElement(e) } value={obj.id} className="ml-2 w-4 h-6 mt-2 bg-red-500">X</button></div>
  if(obj.prev[0].component === "Options") return <div className="flex " ><InputRadio name={obj.naame} textColor={obj.textColor} required={obj.req}/><button onClick={(e) => handleDeleteElement(e) } value={obj.id} className="ml-2 w-4 h-6 mt-2 bg-red-500">X</button></div>
  if(obj.prev[0].component === "Text Area") return <div className="flex "><InputTextArea name={obj.naame} textColor={obj.textColor} required={obj.req}/><button onClick={(e) => handleDeleteElement(e) } value={obj.id} className="ml-2 w-4 h-6 mt-2 bg-red-500">X</button></div>
  if(obj.prev[0].component === "Select") return <div className="" ><InputSelect name={obj.naame} textColor={obj.textColor} required={obj.req}/><button onClick={(e) => handleDeleteElement(e) } value={obj.id} className="ml-2 w-4 h-6 mt-2 bg-red-500">X</button></div>
}


function handleDeleteElement(e){
  let newId = e.target.value
  let idToDelete = parseInt(newId, 10)
  setElement(element.filter(el => el.id !== idToDelete))
}
  return (
    <div className="rounded-2xl bg-blue-50 p-4 lg:p-12  ">
      <div className="flex items-center text-blue-500">
        <p className="text-sm font-bold uppercase">Formulario</p>
      </div>
      <div className="pt-10">
        <div className="flex justify-center self-center z-10">
          <div className="p-4 bg-blue-300 rounded-2xl w-96 ">
            {
              element.map(el => {
                return (
                  <div key={el.id} id={el.id}>
                    {
                      handleElements(el)
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
