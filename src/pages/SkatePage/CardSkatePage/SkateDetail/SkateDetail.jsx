import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSkatesProm } from '../../SkatePageData'
import ItemDetail from '../../ItemDetail'


function SkateDetail() {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    useEffect(()=>{
           getSkatesProm
           .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
    },[idDetalle])
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default SkateDetail