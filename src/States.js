import React from 'react'

function States({ covidData }) {



  return (
    <div>
      <h1>States</h1>
      <h3>{covidData.map( el => {console.log(el.state)} )}</h3>
    </div>
  )
}

export default States