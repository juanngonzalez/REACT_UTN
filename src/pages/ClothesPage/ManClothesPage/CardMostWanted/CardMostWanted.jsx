import React from 'react'
import '../ClothesPage.css'
import MapMostWanted from './MapMostWanted'

function CardMostWanted({dataWantd}) {
  return (
    <>
      <h3>Most wanted</h3>
    <div className='shoesCardContainer'>
        {dataWantd.map((data) => (
        <MapMostWanted key={data.id} data={data}/>
  ))}
    </div>
    </>
  )
}

export default CardMostWanted