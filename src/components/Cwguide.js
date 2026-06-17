import { useState, version, useEffect } from "react";
import { generateContent } from "../util/GenerateContent";
import Section from "./Section"
import Checkbox from "@mui/material/Checkbox";

const Cwguide = () => {
  const [hide, setHide] = useState(false);
  const [data, setData] = useState({});

  const startUp = () => {
    const content = generateContent();
    setData(content)
  }

  useEffect(startUp, [])

  const hideClick = () => {
    setHide(!hide);
  }

  const changeStatus = (id) => {
    const content = {...data};
    for (let key in content) {
      if(content[key]["id"] === id) {
        content[key]["completed"] = !content[key]["completed"]
        localStorage.setItem(id, content[key]["completed"])
      }

      for (let i = 0; i < content[key]["content"].length; i++) {
        if(content[key]["content"][i]["id"] === id) {
          content[key]["content"][i]["completed"] = !content[key]["content"][i]["completed"]
          localStorage.setItem(id, content[key]["content"][i]["completed"])
        }
        
      }
    }
    setData(content)
  }

  return (

    <div>
      <h1>Lumi's quick CW start guide</h1>
      <div>Hide completed <Checkbox onClick={hideClick} checked={hide}/></div>
      {Object.keys(data).map((key) => (
        <Section content={data[key].content}
               key={data[key].id}
               title={key}
               hide={hide}
               func={changeStatus}
               id={data[key].id}
               completed={data[key].completed} />
        ))}
    </div>

  );
}

export default Cwguide;