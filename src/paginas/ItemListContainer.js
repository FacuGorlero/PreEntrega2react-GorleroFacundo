import React from 'react'
import { pedirDatos } from '../helpers/pedirdatos'
import { useEffect } from 'react'
import { useState} from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;  
  const [titulo, setTitulo] = useState("Productos");

  useEffect(() => {
      pedirDatos()
        .then((res) =>{
          if (categoria){
            setProductos(res.filter((prod) => prod.categoria === categoria));
            setTitulo(categoria);
          }else{ 
            setProductos(res);
            setTitulo("Productos")
          }
        })

  }, [categoria]);
  
  return (
    <div>
      <ItemList productos = {productos} titulo={titulo}/>
    </div>
  )
}