import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function CardShoesMap({data}) {
  return (
    <div className='cardShoes'>

    <Card style={{ width: '12rem' }}>
    <Card.Img variant="top" src={data.image} />
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
      $ {data.price}
      </Card.Text>
      <Link to={`/detail/man/shoes/${data.id}`}><Button variant="primary">COMPRAR</Button></Link>
    </Card.Body>
  </Card>
      </div>
  )
}

export default CardShoesMap