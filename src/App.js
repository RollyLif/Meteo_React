import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("Goma");

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+data+"&appid=eac0fb388a3b92e0d649df28f5b0adb9&units=metric")
    .then(result => result.json())
    .then(result => console.log(result))
  }); 

  return (
    <div className="App">
      <label for="fname">Ville:</label>
      <input type="text" id="fname" name="fname" value={data} onChange={(e) => {setData(e.target.value)}}/><br/>
    </div>
  );
}

export default App;
