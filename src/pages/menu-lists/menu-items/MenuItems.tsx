import React from "react";
import styles from "./MenuItems.module.css";
import { useNavigate } from "react-router-dom";
import routeConfigurations from "../../../routes/RoutConfigurations";

interface Props {
  menu: any;
}

export const MenuItems = (props: Props) => {
  const { menu } = props;
  const navigate = useNavigate();

  const showMenuDetails = (event: any) => {
    navigate(routeConfigurations.menuDetail, { state: { menu } });
  };
  return (
    <div className={styles["container"]} onClick={showMenuDetails}>
      <img src={menu?.strMealThumb} alt="" />
      <div className={styles["description"]}>
        <p className={styles["menu-name"]}>{menu?.strMeal}</p>
        <p className={styles["menu-tags"]}>{menu?.strTags}</p>
      </div>
    </div>
  );
};
