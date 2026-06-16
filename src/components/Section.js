import Task from "./Task"

const Section = ({content, title}) => {

  const a = 0;

  return (
    <div>
      <div>{title}</div>
      <div>
        {content.map(i => (
          <Task key={i.id} content = {i}/>

        ))}
      </div>
    </div>
  );

}

export default Section;