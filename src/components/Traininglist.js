import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Moment from "react-moment";
import DeleteIcon from "@material-ui/icons/Delete";


export default function TrainingList() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch("https://customerrest.herokuapp.com/api")
  
      .then((response) => response.json())
      .then((data) => setTrainings(data.links));
  };
  
  return (
    <div className="App">
  
      {
        trainings.map((training,index) => {
          return (
            <div key={index}>
            <div>{training.rel}</div>
            <div>{training.href}</div>
            </div>
          )
        })
      }
      
    </div>
  );
}
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  
