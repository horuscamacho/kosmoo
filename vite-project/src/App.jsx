import { useEffect, useState } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import Preview from "./components/Preview";
import fields from "./components/JSONfile";


function App() {
  const [elements, setElements] = useState({})
  const [preview, setPreview] = useState({})
  const [form, setForm] = useState()
  const [name, setName] = useState("")
  const [required, setRequired] = useState(false)
  const [textColor, setTextColor] = useState("")
  const [element, setElement] = useState([])

  function gettingElements(obj) {
    setElements(obj)
  }

  useEffect(() => {
    gettingElements(fields)
  }, [elements, required, preview, form, name, textColor, element])

  console.log(textColor)

  return (
    <div className="container mx-auto bg-white p-4 ">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:h-96">
        <Input data={elements} preview={setPreview} prev={preview} name={setName} naame={name} setRequired={setRequired} req={required} setTextColor={setTextColor} setForm={setForm} form={form} textColor={textColor} setElement={setElement} element={element}/>
        <Preview data={preview} preview={preview} name={name} required={required} textColor={textColor} setRequired={setRequired}  />
        <Form form={form} element={element} setElement={setElement} />
      </div>
    </div>
  );
}

export default App;
