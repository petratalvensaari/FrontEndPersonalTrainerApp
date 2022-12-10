import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import Addcustomer from "./Addcustomer";
import Addtraining from "./Addtraining";
import Editcustomer from "./Editcustomer";


export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
          fetch('https://customerrest.herokuapp.com/api')
                    .then(response => response.json())
                    .then(data => setCustomers(data.content));
      
  };

  const deleteCustomer = link => {
		    if (window.confirm("Are you sure to delete customer?")) {
			      fetch(link, { method: "DELETE" })
				      .then(res => fetchData())
				      .catch(err => console.error(err));
		}
	};


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
}

