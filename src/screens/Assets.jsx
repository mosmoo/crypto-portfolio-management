import { useEffect, useState } from "react";
import { getAssets } from "../../src/services/assets.js";
import Asset from "../components/Asset.jsx";
import "../css/assets.css"

function Assets() {
  const [assets, setAssets] = useState({ data: [] });

  useEffect(() => {
    fetchAssets();
  }, []); //only fire this function one time

  async function fetchAssets() {
    try {
      const allAssets = await getAssets();
      //   console.log('Fetched assets:', allAssets); // Log the fetched data
      setAssets({ data: allAssets });
    } catch (error) {
      console.error("Error fetching assets:", error);
      // Handle the error here (e.g., set an error state)
    }
  }

const assetSearch= assets.data.data
const btc = assetSearch.find(item => item.symbol === 'BTC');
btc.tokensOwned=4
const eth = assetSearch.find(item => item.symbol === 'ETH');
const ltc = assetSearch.find(item => item.symbol === 'LTC');
const matic = assetSearch.find(item => item.symbol === 'MATIC');
const xlm = assetSearch.find(item => item.symbol === 'XLM');
const xtz = assetSearch.find(item => item.symbol === 'XTZ');
const algo = assetSearch.find(item => item.symbol === 'ALGO');
const gala = assetSearch.find(item => item.symbol === 'GALA');
const ada = assetSearch.find(item => item.symbol === 'ADA');
const axs = assetSearch.find(item => item.symbol === 'AXS');
const qnt = assetSearch.find(item => item.symbol === 'QNT');
const yfi = assetSearch.find(item => item.symbol === 'YFI');
const uni = assetSearch.find(item => item.symbol === 'UNI');
const mana = assetSearch.find(item => item.symbol === 'MANA');
const xrp = assetSearch.find(item => item.symbol === 'XRP');
const agix = assetSearch.find(item => item.symbol === 'AGIX');
const hbar = assetSearch.find(item => item.symbol === 'HBAR');
const fil = assetSearch.find(item => item.symbol === 'FIL');
const rndr  = assetSearch.find(item => item.symbol === 'RNDR');
const atom  = assetSearch.find(item => item.symbol === 'ATOM');
const doge  = assetSearch.find(item => item.symbol === 'DOGE');
const link  = assetSearch.find(item => item.symbol === 'LINK');
const shib  = assetSearch.find(item => item.symbol === 'SHIB');
const dot  = assetSearch.find(item => item.symbol === 'DOT');
const aave  = assetSearch.find(item => item.symbol === 'AAVE');
  return (
    <div>
      <h1>All the Assets!</h1>
      <div className="assets-container">
        {/* {
            assets.data.data.map((asset,index)=>(   
             <Asset key={index} asset={asset} />
            ))
        } */}
        {btc && <Asset asset={btc} />}
        {eth && <Asset asset={eth} />}
        {ltc && <Asset asset={ltc} />}
        {matic && <Asset asset={matic} />}
        {xlm && <Asset asset={xlm} />}
        {xtz && <Asset asset={xtz} />}
        {algo && <Asset asset={algo} />}
        {gala && <Asset asset={gala} />}
        {ada && <Asset asset={ada} />}
        {axs && <Asset asset={axs} />}
        {qnt && <Asset asset={qnt} />}
        {yfi && <Asset asset={yfi} />}
        {uni && <Asset asset={uni} />}
        {mana && <Asset asset={mana} />}
        {xrp && <Asset asset={xrp} />}
        {agix && <Asset asset={agix} />}
        {hbar && <Asset asset={hbar} />}
        {fil && <Asset asset={fil} />}
        {rndr && <Asset asset={rndr} />}
        {atom && <Asset asset={atom} />}
        {doge && <Asset asset={doge} />}
        {link && <Asset asset={link} />}
        {shib && <Asset asset={shib} />}
        {dot && <Asset asset={dot} />}
        {aave && <Asset asset={aave} />}
      </div>
    </div>
  );
}

export default Assets;
