import React, { useEffect, useState } from 'react';
import './App.css';
import States from './States';
import MapChart from "./MapChart";

function App() {

  const [ covidData, setCovidData ] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch('https://api.covidtracking.com/v1/states/current.json')
      const states = await response.json()
      setCovidData(states)
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <MapChart />
      <States covidData={covidData} />
    </div>
  );
}

export default App;
