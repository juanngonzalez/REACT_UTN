import React from 'react'
import '../ClothesPage.css'
import CardShoesMap from '../CardShoesPage/CardShoesMap'

function CardMostWanted({dataWantd}) {
  return (
    <>
      <h3>Most wanted</h3>
    <div className='shoesCardContainer'>
        {dataWantd.map((data) => (
        <CardShoesMap key={data.id} data={data}/>
  ))}
    </div>
    </>
  )
}

export default CardMostWanted