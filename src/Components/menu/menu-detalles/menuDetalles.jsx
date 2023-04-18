import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import food from '../../food.json'
import Styles from './menuDetalles.module.css';

console.log(food);
const MenuDetalles = () => {
  const { foodId } = useParams();
  const [contador, setContador] = useState(1);
  const [valor, setValor] = useState(15000);
  const mas = "+";
  const menos = "-";
  return (
    <> 
    {food.length > 0 && food.map((foods) =>{
      if(foods.id === Number(foodId)){
        return(
          <>
            <div className={Styles.Container}>
              <Link to='/Menu'><h1 className={Styles.prueba}>CHULITOS</h1></Link>
              <img className={Styles.Col + " " + Styles.Imagen} src={foods.poster_path} alt="error"/>
              <div className={Styles.Col + " " + Styles.Detallescontainer}>
                <h1>{foods.title}</h1>
                <br />
               <p className={Styles.parrafo} ><strong>Tipo: </strong>  {foods.categorie}</p> 
                <p><strong>Valor: </strong>{valor}</p>
                <br /><br /><br />
                <div className={Styles.ContadorContainer}>
                  <button type='button' className={Styles.BotonesCont} name={menos} onClick={() => contador <= 1 ? setContador(1) : setContador(contador-1)}>-</button>
                  <p>{contador}</p>
                  <button type='button' className={Styles.BotonesCont} name={mas} onClick={() => contador >= 8 ? setContador(8) : setContador(contador+1)}>+</button>
                </div>
                <button className={Styles.Botones} disabled>Ordenar</button>
              </div>
          </div>  
          </>
        )
      }
    })}
    </>
  )
}

export default MenuDetalles;