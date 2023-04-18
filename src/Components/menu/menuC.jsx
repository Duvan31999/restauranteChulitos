import food from '../food.json';
import Styles from './menu.module.css'
import MenuDetalles from './menuCard';

const Menu = () =>{
    return(
        <div>
            <ul className={Styles.MenuFormato}>
                {food.map((foods) =>(
                    <div  key={foods.id}>
                        <MenuDetalles foods={foods}/>
                    </div>
                    
                )   
                )}
            </ul>
        </div>
    );
}

export default Menu;