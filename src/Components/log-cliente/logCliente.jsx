import Styles from "./logCliente.module.css";
import { React, useState } from "react";
import useForm from "../../Hooks/useForm";
import ErrorFail from "../error/error";
import { Link, useNavigate } from "react-router-dom";

const LogCliente = () => {
  // const [direccion, setDireccion] = useState("Menu");
  //RETORNAMOS LAS MISMAS VARIABLES QUE RECIBIMOS EN USEFORM.JS
  const initialData = {
    nombre: "",
    documento: "",
    correo: "",
    telefono: "",
  };
  const history = useNavigate();
  
  //onValidate hace el control de errores.
  const onValidate = (form) => {
    let errors = {};
    let validarNombre = /[A-Za-z]/;
    let validarCorreo = /@./;
    let validarNumeros = /[0-9]/;
    //Lo que hace el .trim elimina espacios en blanco a ambos extremos del string.   
  if (!form.nombre.trim()) {
      errors.nombre = 'El campo "nombre" no debe ser vacío.';
    }else if(!validarNombre.test(form.nombre)){
      errors.nombre = 'Sólo se admiten letras y espacios.';
    }
    if (!form.documento.trim()) {
      errors.documento = 'El campo "documento" no debe ser vacío.';
    }else if(!validarNumeros.test(form.documento)){
      errors.documento=('El campo "documento" solo acepta números.');
    }
    if (!form.telefono.trim()) {
      errors.telefono = 'El campo "teléfono" no debe ser vacío.';
    }else if(!validarNumeros.test(form.telefono)){
      errors.telefono=('El campo "teléfono" solo acepta números.');
    }
    if (!form.correo.trim()) {
      errors.correo = 'El campo "correo" no debe ser vacío.';
    }else if(!validarCorreo.test(form.correo)){
      errors.correo = "Introduzca bien el correo.";
    }
        return Object.keys(errors).length ===0 ? history('/Menu') : errors
  };
  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  return (
    <div className={Styles.Container}>
      <div>
        {/* <h1>INGRESA CON TUS DATOS.</h1> */}
        <h1 className={Styles.Chulitos}>LOS CHULITOS</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {/* action={`/${direccion}`} */}
        <div className={Styles.InputsContainer}>
        <p>Ingrese con sus datos.</p>
          <div>
            <input
              type="text"
              className={Styles.IngresoDatos}
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="NOMBRE"
            />
            {errors.nombre && <div className={Styles.ErrorMessage}>{errors.nombre}</div>}
          </div>
          <div>
            <input
              type="text"
              className={Styles.IngresoDatos}
              name="documento"
              value={form.documento}
              onChange={handleChange}
              placeholder="DOCUMENTO"
            />
            {errors.documento && <div className={Styles.ErrorMessage}>{errors.documento}</div>}
          </div>
          <div>
            <input
              type="text"
              className={Styles.IngresoDatos}
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="TELEFONO"
            />
            {errors.telefono && <div className={Styles.ErrorMessage}>{errors.telefono}</div>}
          </div>
          <div>
            <input
              type="text"
              className={Styles.IngresoDatos}
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="CORREO"
            />
            {errors.correo && <div className={Styles.ErrorMessage}>{errors.correo}</div>}
          </div>
        </div>

        <div className={Styles.BotonContainer}>
          <button className={Styles.Botones} disabled={loading}>{loading ? "ENTRANDO..." : "INGRESAR"}</button>
        </div>
        <div className={Styles.BotonContainer2}>
          <h6>Iniciar como:</h6>
          <Link to="logAdmin">
              <input type="submit" value="ADMINISTRADOR" className={Styles.Botones}/>
          </Link>
        </div>
        
      </form>
      {/* <h1 className={Styles.Chulitos}>LOS CHULITOS</h1> */}
    </div>
  );
};

export default LogCliente;
