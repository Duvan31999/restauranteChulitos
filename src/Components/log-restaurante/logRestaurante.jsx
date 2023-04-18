import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Styles from './logRestaurante.module.css';

const LogRestaurante = () => {
  //Creé las variables de los inputs
  const initialData = {
    usuario: "",
    contrasena: "",
  };
  //Creé el hook para enviar a la ruta.
  const history = useNavigate();
  //Función que valida los campos y decide si pasa o no.
  const Validar = (form) => {
    let errors = {};

    if(!form.usuario.trim()){
      errors.usuario = 'El campo "usuario" no debe ser vacío.';
    }else if(form.usuario !== "loschulitos@gmail.com"){
      errors.usuario = 'Usuario Incorrecto';
    }
    if(!form.contrasena.trim()){
      errors.contrasena = 'El campo "contraseña" no debe ser vacío.';
    }else if(form.contrasena !== "12345"){
      errors.contrasena = 'Contraseña Incorrecta.';
    }
    return Object.keys(errors).length ===0 ? history('/Admon') : errors
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    Validar
  );
  return (
    <div className={Styles.Container}>
      <div>
        <h1>BIENVENIDO</h1>  
      </div >
      <form onSubmit={handleSubmit}>
        <div className={Styles.InputsContainer}>
        <h4>Ingresa tu usuario y contraseña.</h4>
          <input
            className={Styles.IngresoDatos}
            type="email"
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
            placeholder="USUARIO"
          />
          {errors.usuario && <div className={Styles.ErrorMessage}>{errors.usuario}</div>}
          <input
            className={Styles.IngresoDatos}
            type="password"
            value={form.contrasena}
            name="contrasena"
            onChange={handleChange}
            placeholder="CONTASEÑA"
          />
          {errors.contrasena && <div className={Styles.ErrorMessage}>{errors.contrasena}</div>}
        </div>
        <div className={Styles.BotonContainer}>
          <input type="submit" name="Ingresar" value="INGRESAR" className={Styles.Botones} />
        </div>
      </form>
    </div>
  );
};

export default LogRestaurante;
