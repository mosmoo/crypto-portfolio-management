import React from 'react'
import {Link} from 'react-router-dom'

function Asset({asset}) { //destructuring props
    const total = asset.tokensOwned * asset.priceUsd


  return (
    <div> 
    <Link to ={`/assets/${asset.id}`}>
        <h1>{}</h1>
        <table>
            <tr>
            <td>{asset.id}</td>
            <td>{asset.priceUsd}</td>
            <td>{asset.tokensOwned}</td>
            <td>{total}</td>
            </tr>
        </table>
      </Link> 
  </div>
  )
}

export default Asset