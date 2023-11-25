import {useEffect, useState} from 'react'
import {getAssets} from '../../src/services/assets.js'
import Asset from '../components/Asset.jsx'

function Assets() {

  const [assets , setAssets] = useState({ data: [] })

  useEffect(()=>{
    fetchAssets()
  },[]) //only fire this function one time 

  async function fetchAssets() {
    try {
      const allAssets = await getAssets();
      console.log('Fetched assets:', allAssets); // Log the fetched data
      setAssets({ data: allAssets });
    } catch (error) {
      console.error('Error fetching assets:', error);
      // Handle the error here (e.g., set an error state)
    }
  }
  const bitcoin = assets.data.data[0]
  const ethereum = assets.data.data[1]
  const litecoin = assets.data.data[16]
  const polygon = assets.data.data[12]
  const XLM =  assets.data.data[22]
  const Algo =  assets.data.data[44]
  const tezos =  assets.data.data[56]
  const gala =  assets.data.data[63]
  const ada =  assets.data.data[7]
  const axs =  assets.data.data[52]
  const qnt =  assets.data.data[41]
//   const yfi =  assets.data.data[97]


  const XRP =  assets.data.data[4]

  return (
    <div>
      <h1>All the Assets!</h1>
      <div className="assets-container">
        {/* {
            assets.data.data.map((asset,index)=>(   
             <Asset key={index} asset={asset} />
            ))
        } */}
        {bitcoin && <Asset asset={bitcoin} />}
        {ethereum && <Asset asset={ethereum} />}
        {litecoin && <Asset asset={litecoin} />}
        {polygon && <Asset asset={polygon} />}
        {XLM && <Asset asset={XLM} />}
        {Algo && <Asset asset={Algo} />}
        {tezos && <Asset asset={tezos} />}
        {gala && <Asset asset={gala} />}
        {ada && <Asset asset={ada} />}
        {axs && <Asset asset={axs} />}
        {qnt && <Asset asset={qnt} />}
        {/* {yfi && <Asset asset={yfi} />} */}

        {XRP && <Asset asset={XRP} />}
      </div>
    </div>
  )
}

export default Assets