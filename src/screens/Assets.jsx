import { useEffect, useState } from "react";
import { getAssets } from "../../src/services/assets.js";
import Asset from "../components/Asset.jsx";
import "../css/assets.css";

function Assets() {
  const [assets, setAssets] = useState([]);
  const [coins, setCoins] = useState({
    "BTC": 10,
    "ETH": 20,
    "LTC": 10,
    "MATIC": 5,
    "XLM": 5,
    "XTZ": 5,
    "ALGO": 5,
    "GALA": 5,
    "ADA": 5,
    "AXS": 5,
    "QNT": 5,
    "YFI": 5,
    "UNI": 5,
    "MANA": 5,
    "XRP": 5,
    "AGIX": 5,
    "HBAR": 5,
    "FIL": 5,
    "RNDR": 5,
    "ATOM": 5,
    "DOGE": 5,
    "LINK": 5,
    "SHIB": 5,
    "DOT": 5,
    "AAVE": 5,
  })
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetchAssets();
  }, []); //only fire this function one time

  async function fetchAssets() {
    try {
      const allAssets = await getAssets();

      const filteredCoins = []

      allAssets.forEach((fullAsset)=>{
        if (coins[fullAsset.symbol]){
          filteredCoins.push(fullAsset)
        }
      })

      let portfolioTotal = filteredCoins.reduce((num1, num2)=>{
        return num1 + (num2.priceUsd * coins[num2.symbol])
      }, 0)

      setAssets(filteredCoins);
      setTotal(portfolioTotal)
    } catch (error) {
      console.error("Error fetching assets:", error);
      // Handle the error here (e.g., set an error state)
    }
  }

  return (
    <div>
      <h1>Portfolio Value: {total}</h1>
      <div className="assets-container">
      <table>
        <tr>
          <th>Name</th>
          <th>Price (usd)</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {
          assets.map((asset,index)=>(   
            <Asset key={index} asset={asset} quantity={coins[asset.symbol]}/>
          ))
        }
      </table>
      </div>
    </div>
  );
}

export default Assets;
