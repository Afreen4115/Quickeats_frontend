import React from 'react'
import TopBar from '../Components/TopBar'
import ItemsDisplay from '../Components/ItemsDisplay'
import Chains from '../Components/Chains'
import FirmCollections from '../Components/FirmCollections'

const LandingPage = () => {
  return (
    <div>
      <TopBar/>
      <div className='landingSection'>
          <ItemsDisplay/>
          <Chains/>
          <FirmCollections/>
      </div>
     
    </div>
  )
}

export default LandingPage
