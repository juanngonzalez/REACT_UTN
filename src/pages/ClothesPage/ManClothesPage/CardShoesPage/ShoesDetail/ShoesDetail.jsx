import React, {useState, useEffect} from 'react'
import {getShoesProm} from '../../../ClothesPageData'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../../ItemDetail'
function ShoesDetail() {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    useEffect(()=>{
        getShoesProm
        .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
    },[idDetalle])
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ShoesDetail