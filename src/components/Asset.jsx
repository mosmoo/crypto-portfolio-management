import React from 'react'
import {Link} from 'react-router-dom'

function Asset({asset, quantity}) { //destructuring props
  
  return (
    <tr>
      <Link to ={`/assets/${asset.id}`}>
        <td>{asset.name}</td>
        <td>{asset.priceUsd}</td>
        <td>{quantity}</td>
        <td>{quantity * asset.priceUsd}</td>
      </Link> 
    </tr>
  )
}

export default Asset