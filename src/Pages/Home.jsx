import React from 'react'
import EbWelcome from '../assets/EbWelcome.png'
import healthbattery from '../assets/healthbattery.png'
import naturallight from '../assets/naturallight.jpg'
import sealleaks from '../assets/sealleaks.jpg'
import unplugdevices from '../assets/unplugdevices.jpg'
import switchled from '../assets/switchled.png'


const Home = () => {
  return(
    <div className='home'>
   <div className='homewel'>
    <div className='homepara'>
    <img src={EbWelcome} className='img' /></div>
    <div className='wel'>
      <h1 className='one'>"Welcome! Let's Cut Down Your Electricity Bill Together!"</h1>
      <h2 className='two'>Save Energy, Save Money</h2>
      </div>
         <p className='three' style={{fontSize:`25px`,}}>Welcome to our comprehensive guide on how to reduce your electricity bill. Our goal is to provide you with the knowledge and tools you need to lower your energy consumption and save money. Explore our resources and take control of your energy usage today</p>
      </div>
      <div className='hometips' style={{fontSize:`20px`}}>
        <h2>Techniques To Reduce Electricity Bill</h2>
        </div>
        <div>
        <div className='tips' style={{fontSize:`25px`}}>
        <img src={switchled} className='image0'/>
        <p> <b>Switch to LED Bulbs:</b> LED bulbs use up to 80% less energy and last much longer than traditional bulbs.</p>
</div>

<div className='tips1' style={{fontSize:`25px`}}>
  <img src={unplugdevices} className='image'/>
        <p><b>Unplug Devices:</b> When Not in Use
Many electronics draw power even when turned off (known as “phantom load”). Unplug or use a smart power strip.
</p>
</div>
<div className='tips2' style={{fontSize:`25px`}}>
  <img src={sealleaks} className='image1'/>
  <p><b>Seal Windows and Doors:</b> Prevent cool or warm air from escaping by sealing leaks—this reduces the load on your AC or heater.</p>
</div>
<div className='tips3' style={{fontSize:`25px`}}>
  <img src={naturallight} className='image2'/>
  <p> <b>Maximize Natural Light:</b> Open curtains and blinds during the day to reduce the need for artificial lighting.</p>
     </div>
     </div>
     <div className='bonus' style={{fontSize:`25px`}}>
      <h2>Bonus Tips</h2>
        <p>Check the reading meter weekly once and use this Calculator for calculating a weekly payable amount it may be very useful to you know your eb bill without consulting others</p>
         <p>This Chart is clearly describe the units and its rate this helps you to reduce your eb bill. This chart aware you the usage of electricity. With the help of this chart you itself know the amount according to the units you consumed</p>
     <img src={healthbattery} className='image3'/>
     </div>
     <div className='saving' style={{fontSize:`25px`}}>
         <h2>Start Saving Today</h2>
         <p>Implement these strategies and make use of our tools to see a noticeable difference in your electricity bill. Every small change adds up to significant savings over time. Let's work together to make your home more energy-efficient and your bills more manageable.</p>
     </div>
   </div>


  )
}

export default Home