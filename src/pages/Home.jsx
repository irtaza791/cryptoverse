import React from 'react'
import './home.css'
import video from '../assets/herovideo.mp4'
import CoinGeckoApi from '../components/CoinGeckoApi'
import Button from '@mui/material/Button';
import AllCoins from '../components/AllCoins';




const Home = () => {
  return (
    <div>
      

      <div className="hero-container">
  
            <div className="textbox">
            <h1>Welcome to Crypto Verse</h1>
            <Button variant="outlined">Outlined</Button>
            </div>


          <div className="video-box">
          <video src={video} autoPlay loop muted/>
          </div>


       
            
        

       </div>
       <div className="cryptoprices">
      <CoinGeckoApi />
       </div>

       <div>
        <AllCoins/>
       </div>
      
    
       
        
    </div>
  )
}

export default Home
