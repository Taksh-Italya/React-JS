import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {

  const [login , logout] = useState(false)

  function Taksh () {
    console.Taksh();
    
  }

  return (
    <>
      <center>
        <h1>welcome to you🎁</h1>
        <button className='btn btn-primary' onClick={(Taksh)=>}>login</button>
      </center>
    </>
  )
}

