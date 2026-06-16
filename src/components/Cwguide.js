import { useState, version } from "react";
import { generateContent } from "../util/GenerateContent";
import Section from "./Section"
import Checkbox from "@mui/material/Checkbox";

const Cwguide = () => {
  const [hide, setHide] = useState(false);
  const content = generateContent();

  const hideClick = () => {
    setHide(!hide);
  }

  return (

    <div>
      <h1>Guide</h1>
      <div>Hide completed <Checkbox onClick={hideClick} checked={hide}/></div>
      {Object.keys(content).map((key) => (
        <Section content={content[key].content}
               key={content[key].id}
               title={key}
               hide={hide} />
        ))}
    </div>

  );
}

export default Cwguide;