import React from 'react'
import {Link} from 'react-router-dom'

function Asset({asset}) { //destructuring props
  return (
    <div> 
    <Link to ={`/assets/${asset.id}`}>
      <h1>{asset.id}</h1>
      <h2>{asset.priceUsd}</h2>
      </Link> 
  </div>
  )
}

export default Asset