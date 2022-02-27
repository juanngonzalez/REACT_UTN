import React, { useState,useEffect } from 'react'
import CardSkatePage from './CardSkatePage/CardSkatePage'
import {getSkatesProm, getTrucksProm} from '../SkatePage/SkatePageData'
import CardTruckPage from './CardTruckPage/CardTruckPage'
import './SkatePage.css'
import GiftCard from '../../componentes/GiftCard/GiftCard'
import BlackBar from '../../componentes/BlackBar/BlackBar'
function SkatePage() {
  const [skates,getSkates] = useState([])
  const [trucks,getTrucks] = useState([])
  useEffect(() => {
    getSkatesProm
    .then((resp) => {
      getSkates(resp)
    })
    .catch(err => console.log(err))
    .finally(console.log('finalizado'));
    
    
  },[])
  useEffect(() => {
  getTrucksProm
    .then((resp) => {
      getTrucks(resp)
    })
    .catch(err => console.log(err))
    .finally(console.log('finalizado'));
  },[])
  return (
    <div>
      <CardSkatePage dataOne={skates}/>
      <BlackBar/>
      <CardTruckPage dataTwo={trucks}/>
      <GiftCard/>
    </div>
  )
}

export default SkatePage