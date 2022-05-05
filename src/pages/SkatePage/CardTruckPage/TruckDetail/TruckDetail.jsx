import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTrucksProm } from '../../SkatePageData'
import ItemDetail from '../../ItemDetail'


function TruckDetail() {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    useEffect(()=>{
           getTrucksProm
           .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
    },[idDetalle])
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default TruckDetail