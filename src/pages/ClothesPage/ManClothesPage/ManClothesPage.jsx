import React, { useState, useEffect } from 'react'
import CardShoesContainer from './CardShoesPage/CardShoesContainer'
import {getShoesProm, getWantedProm} from '../ClothesPageData'
import BlackBar from '../../../componentes/BlackBar/BlackBar'
import CardMostWanted from './CardMostWanted/CardMostWanted'

function ManClothesPage() {
  const [shoes,setShoes] = useState([])
  const [wanted,setWanted] = useState([])
  useEffect(() => {
    getShoesProm
    .then((resp) => {
      setShoes(resp)
    })
    .catch(err => console.log(err))
    .finally(console.log('finalizado'));
    
    
  },[])
  useEffect(() => {
    getWantedProm
    .then((resp) => {
      setWanted(resp)
    })
    .catch(err => console.log(err))
    .finally(console.log('finalizado'));
    
    
  },[])
  return (
    <div>
      <CardMostWanted dataWantd={wanted}/>
      <BlackBar/>
      <CardShoesContainer dataShoes={shoes}/>
    </div>
  )
}

export default ManClothesPage