import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import {Card} from "./Card";

function App() {
  const [data, setData] = useState ([]);

  useEffect(()=>{

    function buscaDados() {
            fetch("https://disease.sh/v3/covid-19/states")
            .then((response) => {
              if (response.ok) {
                return response.json();
            }
          })
          .then((data) => setData(data));
        } 
        buscaDados();

  },[] );

console.log(data);
 

  return (
    <div className="space">
      <h1>Quadro covid 19 pôr estado nos USA</h1>
      <div className="items">

        {
        
        data.map((item) => (

          <Card 
        state = {item.state}
        cases = {item.cases}
        deaths = {item.deaths} 
        
        />

  

        ))}
      </div>
    </div>
  )
}

export default App
