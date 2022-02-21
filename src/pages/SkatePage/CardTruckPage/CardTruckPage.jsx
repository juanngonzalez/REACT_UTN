import React from 'react'
import CardMapTruck from './CardMapTruck'

function CardTruckPage({dataTwo}) {
  return (
      <>
      <h3>Trucks</h3>
    <div className='cartContainerSkate'>
      {dataTwo.map((data) => (
        <CardMapTruck key={data.id} data={data}/>
  ))}
    </div>
    </>
  )
}

export default CardTruckPage