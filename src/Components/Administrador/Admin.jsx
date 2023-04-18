import React, { useState } from 'react'
import { CrudForm } from './CrudForm'
import { InfoTable } from './InfoTable'
import Styles from './admin.module.css';
import { useEffect } from 'react';

export const Admin = () => {

  // const database = [
  //   {codigo:1000, producto:'Maiz Dulce', cantidad:'19', precio:'6800' },
  //   {codigo:1001, producto:'Frijoles', cantidad:'25', precio:'5000' },
  //   {codigo:1002, producto:'Arroz Blanco', cantidad:'33', precio:'5500' },
  //   {codigo:1003, producto:'Coca-Cola', cantidad:'27', precio:'1500' }
  // ]

  // const [inventario, setInventario] = useState(database); *************************************
  //Se lee el localStorage y se usa condición por si existen datos, lea la info que se tenga.
  const [inventario, setInventario] = useState(() =>{
    const SaveInventario = window.localStorage.getItem("inventarioData");
    if(SaveInventario){
      return JSON.parse(SaveInventario)
    }else{
      return []
    }
  });
  const [editarDatos, setEditarDatos] = useState(null);
  
  //Hook escucha la variable inventario desde el localStorage.
  //Cada cambio de inventario se va a guardar el arreglo en la clave inventarioData.
  useEffect(() =>{
    window.localStorage.setItem("inventarioData", JSON.stringify(inventario))
  }, [inventario])
  //Función para añadir datos.
  const addProd = (inv) => {
    setInventario([
      ...inventario,
      inv
    ])
  };

  //Función para editar datos.

  const editarInvent = (inv) =>{
    const nuevoInventario = inventario.map((nuevo) => nuevo.codigo === inv.codigo ? inv : nuevo);
    setInventario(nuevoInventario);
    setEditarDatos(null);
  }

  //Función para eliminar datos.

  const EliminarInvent = (cod, prod) =>{
   const seguroEliminar = window.confirm(`¿Seguro desea eliminar ${prod} del inventario? `);
   if(EliminarInvent){
    const nuevoInventario = inventario.filter(inv => inv.codigo !== cod)
    setInventario(nuevoInventario);
   }
  }
  
  return (
    <div className={Styles.container}>
      {/* <h1>LOS CHULITOS</h1> */}
      <CrudForm addProd={addProd} editarInvent={editarInvent} editarDatos={editarDatos}/>
      <InfoTable inventario={inventario} setEditarDatos={setEditarDatos} EliminarInvent={EliminarInvent}/>
    </div>  
  )
}
