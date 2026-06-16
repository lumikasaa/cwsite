import { useState, version } from "react";
import { generateContent } from "../util/GenerateContent";
import Section from "./Section"

const Cwguide = () => {
  const [count, setCount] = useState(0);
  const content = generateContent();

  return (

    <div>
      <h1>Guide</h1>
      {Object.keys(content).map((key) => (
        <Section content={content[key].content}
               key={content[key].id}
               title={key} />
        ))}
    </div>

  );
}

export default Cwguide;