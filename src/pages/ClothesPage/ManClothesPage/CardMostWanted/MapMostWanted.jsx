import React from 'react'
import '../ClothesPage.css'

function MapMostWanted({data}) {
  return (
    <div className='cardShoes'>
    <Card style={{ width: '10rem' }}>
    <Card.Img variant="top" src={data.image} />
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
      $ {data.price}
      </Card.Text>
      <Button variant="primary">COMPRAR</Button>
    </Card.Body>
  </Card>
      </div>
  )
}

export default MapMostWanted