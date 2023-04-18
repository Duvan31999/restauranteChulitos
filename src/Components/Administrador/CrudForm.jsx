import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Styles from './admin.module.css';

export const CrudForm = ({ addProd, editarInvent, editarDatos }) => {

  //Datos del formulario
  const [formData, setFormData] = useState({
    codigo: null,
    producto: '',
    cantidad: '',
    precio: ''
  });

  //UseEffect para la edición de datos, cada que editarDatos cambie, se ejecutará.
  useEffect(() =>{
    if(editarDatos !== null){
      setFormData(editarDatos)
    }else{
      setFormData({
        codigo: null,
        producto: '',
        cantidad: '',
        precio: ''
      })
    }
  }, [editarDatos])

  

  //Logica para el formulario, validaciones
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.producto !== ''&&
    formData.cantidad !== '' &&
    formData.precio !== ''){
      if (editarDatos !== null){
        editarInvent(formData);
      }else{
        formData.codigo = Date.now();
        addProd(formData);
        setFormData({
          codigo: null,
          producto: '',
          cantidad: '',
          precio: ''
        })
      }
    }else{
      alert("Ingrese los campos correspondientes.")
    }
  };

  //Captura del evento de lo que escribe el usuario
  const handleChange = (e) => {
    setFormData({
      //Desestructuro formData haciendo copia exacta de lo que contiene
      ...formData,
      //Luego recibo el name y valor de la información que se quiere actualizar
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={Styles.FormularioAgregar}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.InputsContainerForm}>
          <h3 className={Styles.Mensaje}>Aquí podrás ingresar productos a tu inventario ó editarlos.</h3>
            {/* <label htmlFor="codigo">Código:</label> */}
            {/* <input type="text" name="codigo" onChange={handleChange} value={formData.codigo}/> */}
            <label className={Styles.LabelStyles} htmlFor="producto">Nombre del Producto:</label>
            <input className={Styles.IngresoDatos} type="text" name="producto" onChange={handleChange} value={formData.producto}/>
            <label  className={Styles.LabelStyles} htmlFor="cantidad">Cantidad:</label>
            <input className={Styles.IngresoDatos} type="text" name="cantidad" onChange={handleChange} value={formData.cantidad}/>
            <label  className={Styles.LabelStyles} htmlFor="precio">Precio/Unidad:</label>
            <input className={Styles.IngresoDatos} type="text" name="precio" onChange={handleChange} value={formData.precio}/>
            <input className={Styles.Botones} type="submit" value="Aceptar" />
            {/* <input className={Styles.Botones} type="reset" value="Cancelar" /> */}
          </div>
        </form>
      
    </div>
  );
};
