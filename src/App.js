import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("Goma");

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+data+"&appid=eac0fb388a3b92e0d649df28f5b0adb9&units=metric")
    .then(result => result.json())
    .then(result => console.log(result))
    .catch(error => {
      console.error('There was an error!', error);
  });
  }); 

  return (
    <div className="App">
      <label for="fname">Ville:</label>
      <input type="text" id="fname" name="fname" value={data} onChange={(e) => {setData(e.target.value)}}/><br/>
      <div className='card'>
        <h2>Goma</h2>
        <section className='date'>
          <img src="" alt="img meteo"/>
          <p>25/08/2022 18:00:00</p>
        </section>
        <h1>20°</h1>
      </div>
    </div>
  );
}

export default App;
