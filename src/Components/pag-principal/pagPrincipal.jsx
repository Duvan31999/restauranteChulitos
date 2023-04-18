import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Styles from './pagPrincipal.module.css';


const PagPrincipal = () =>{

    return(
        <div className={Styles.Container} img>
            <div className={Styles.Bienvenida}>
                <h2 className={Styles.Chulito}>BIENVENIDO AL RESTAURANTE</h2>
                <h1 className={Styles.Chulitos}>LOS CHULITOS</h1>
                <p>En este lugar podrás disfrutar y descubrir sabores únicos, disfruta la experiencia!</p>
            </div>
            <div className={Styles.ContBotones}>
                <div className={Styles.Separador}></div>
                    <div>
                        <Link to="login">
                            <input type="submit" value="ENTRAR" className={Styles.Botones}/>
                        </Link>
                    </div>  
            </div>
            
        </div>
    );
}

export default PagPrincipal;