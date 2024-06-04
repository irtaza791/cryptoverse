import React, { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import './coingecko.css'
const CoinGeckoApi = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-HN7WPSaBcUVbAxLE42Cqp1Kx');
      const data = await response.json();
      // Sort the data by price change percentage in the last 24 hours
      const sortedData = data.sort((a, b) => Math.abs(b.price_change_percentage_24h) - Math.abs(a.price_change_percentage_24h));
      // Select the top 5 movers
      const topMovers = sortedData.slice(0, 5);
      setPrices(topMovers);
      console.log(topMovers);
    };

    fetchPrices();
  }, []);

  return (
    <>
    <h1>Top 5 Movers in Cryptocurrency Market</h1>
    <Tooltip title="Test">hello</Tooltip>
    <div className='geckocontainer'>
      
      {Array.isArray(prices) && prices.map((crypto) => (
        <div key={crypto.id}>
           <Tooltip title={crypto.symbol.toUpperCase()}>
           <img src={crypto.image} alt={crypto.name} />
            </Tooltip> 
          
          <h3>{crypto.symbol.toUpperCase()}</h3>
          <p>Current Price: ${crypto.current_price}</p>
          <p>Price Change (24h): ${crypto.price_change_24h}</p>
          {/* <p>Price Change Percentage (24h): {crypto.price_change_percentage_24h}%</p> */}
          {/* <p>Market Cap: ${crypto.market_cap}</p> */}
          {/* <p>Market Cap Rank: {crypto.market_cap_rank}</p> */}
          {/* <p>24h High: ${crypto.high_24h}</p> */}
          {/* <p>24h Low: ${crypto.low_24h}</p> */}
          {/* <p>Circulating Supply: {crypto.circulating_supply}</p> */}
          {/* <p>Total Supply: {crypto.total_supply}</p> */}
          {/* <p>Max Supply: {crypto.max_supply}</p> */}
          {/* <p>Total Volume: ${crypto.total_volume}</p> */}
          {/* <p>Fully Diluted Valuation: ${crypto.fully_diluted_valuation}</p> */}
          <p>Last Updated: {new Date(crypto.last_updated).toLocaleString()}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default CoinGeckoApi;
