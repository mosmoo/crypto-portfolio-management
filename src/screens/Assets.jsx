import { useEffect, useState } from "react";
import { getAssets } from "../../src/services/assets.js";
import Asset from "../components/Asset.jsx";
import "../css/assets.css";

function Assets() {
  const [assets, setAssets] = useState([]);
  const [coins, setCoins] = useState({
    "BTC": 0.75,
    "ETH": 5,
    "LTC": 15,
    "MATIC": 982,
    "XLM": 1100,
    "XTZ": 159,
    "ALGO": 3069,
    "GALA": 13582,
    "ADA": 1326,
    "AXS": 62,
    "QNT": 5,
    "YFI": 0.09,
    "UNI": 50,
    "MANA": 274,
    "XRP": 6323,
    "AGIX": 2663,
    "HBAR": 7583,
    "FIL": 100,
    "RNDR": 220,
    "ATOM": 26,
    "DOGE": 9792,
    "LINK": 35,
    "SHIB": 28959222,
    "DOT": 72,
    "AAVE": 7.3,
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
