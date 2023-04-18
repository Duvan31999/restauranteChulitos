import { Link } from "react-router-dom";
import Styles from "./menu.module.css";

const MenuCard = ({ foods }) => {
  return (
    <div>
      <li className={Styles.MenuSeparado}>
        <Link to={"/MenuDetalles/" + foods.id}>
          <div className={Styles.NombrePlato}>{foods.title}</div>

          <img
            src={foods.poster_path}
            className={Styles.MenuImage}
            alt={foods.title}
          />
        </Link>
      </li>
    </div>
  );
};

export default MenuCard;
