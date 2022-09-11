import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [color, setColor] = useState("");
  function handleChange(e){
    if(e.target.value === "Sad"){
      setColor("mood-indicator2");
    }else if(e.target.value === "Happy"){
      setColor("mood-indicator");
    }else if(e.target.value === "Sleepy"){
      setColor("mood-indicator3");
    }else if(e.target.value === "Excited"){
      setColor("mood-indicator4");
    }else{
      setColor("");
    }
  }
  // console.log(color);
  return (
    <div id="main">
      <select onChange={handleChange}>
        <option>Select to change color</option>
        <option>Happy</option>
        <option>Sad</option>
        <option>Sleepy</option>
        <option>Excited</option>
      </select>
      <div id={color}></div>
    </div>
  )
}


export default App;
