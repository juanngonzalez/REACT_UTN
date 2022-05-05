import React, {useState, useEffect} from 'react'
import {getWantedProm} from '../../../ClothesPageData'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../../ItemDetail'
function MostWantedDetail() {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    useEffect(()=>{
        getWantedProm
        .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
    },[idDetalle])
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default MostWantedDetail