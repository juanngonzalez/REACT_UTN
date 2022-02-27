import React from 'react'
import CardShoesMap from './CardShoesMap'
import '../ClothesPage.css'

function CardShoesContainer({dataShoes}) {
  return (
      <>
      <h3>Shoes</h3>
    <div className='shoesCardContainer'>
        {dataShoes.map((data) => (
        <CardShoesMap key={data.id} data={data}/>
  ))}
    </div>
    </>
  )
}

export default CardShoesContainer