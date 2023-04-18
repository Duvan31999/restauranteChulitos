import React from 'react'
import Styles from './admin.module.css';

export const InfoTable = ({inventario, setEditarDatos, EliminarInvent}) => {
  return (
    <div>
        <h2>INVENTARIO</h2>
        <table border='1' className={Styles.TableContainer}>
            <thead className={Styles.HeadTable}>
                <tr>
                    <td>Código</td>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Precio/Unidad</td>
                </tr>
            </thead>
            <tbody className={Styles.bodyTable}>
                {
                    inventario.length === 0 ? <td>No hay datos</td> : 
                inventario.map((inven, index) =>{
                    return <tr key={index}>
                    <td>{inven.codigo}</td>
                    <td>{inven.producto}</td>
                    <td>{inven.cantidad}</td>
                    <td>{inven.precio}</td>
                    <td>
                        <button className={Styles.BotonesTableEditar} onClick={() => setEditarDatos(inven)}>Editar</button>
                        <button className={Styles.BotonesTableEliminar} onClick={() => EliminarInvent(inven.codigo, inven.producto)}>Borrar</button>
                    </td>
                </tr>
                })
                }
            </tbody>
        </table>
    </div>
  )
}
