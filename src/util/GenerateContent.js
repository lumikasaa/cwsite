import jsonData from '../data/content.json';

const string2bool = (s) => {
  return s === 'true' ? true : false;
}

export const generateContent = () => {
  
  const content = jsonData;

  for (let key in content) {
    if (localStorage.getItem(content[key].id)) {
    content[key]["completed"] = string2bool(localStorage.getItem(content[key].id))
    }
    for (let i = 0; i < content[key]["content"].length; i++) {
      if (localStorage.getItem(content[key]["content"][i].id)) {
        content[key]["content"][i].completed = string2bool(localStorage.getItem(content[key]["content"][i].id))
      }
    }
  }

  return content;
}