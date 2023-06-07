import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./MenuDetails.module.css";
import MediaAssets from "../../../assets";
import routeConfigurations from "../../../routes/RoutConfigurations";

const MenuDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { menu } = state;

  const [activeCategory, setActiveCategory] = useState<string | null>("");

  const handleAccordion = (event: React.MouseEvent<HTMLElement>) => {
    const value = event.currentTarget.getAttribute("data-value");
    setActiveCategory((state: any) => {
      return state === value ? "" : value;
    });
  };

  const handleBack = (event: any) => {
    navigate(-1);
  };

  const handleCheckOut = (event: React.MouseEvent<HTMLElement>) => {
    navigate(routeConfigurations.checkOut);
  };

  return (
    <div className={styles["menu-detail-container"]}>
      <div className={styles["menu-banner"]}>
        <img src={menu?.strMealThumb} alt=""/>
      </div>
      <div className={styles["menu-action"]}>
        <p className={styles["menu-name"]}>{menu?.strMeal}</p>
        <div>
          <button className={styles["back-button"]} onClick={handleBack}>
            Back to Lists
          </button>
          <button className={styles["order-button"]} onClick={handleCheckOut}>Check out</button>
        </div>
      </div>
      <div className={styles["menu-description"]}>
        <span>{menu?.strArea}</span>
        <span>{menu?.strCategory}</span>
        <span>{menu?.strTags}</span>
      </div>
      <div className={styles["accordion"]}>
        <div
          className={styles["accordion-heading"]}
          onClick={handleAccordion}
          data-value={"instruction"}
        >
          <p>{"Instructions"}</p>
          <span>
            <img
              src={
                activeCategory === "instruction"
                  ? MediaAssets?.ic_up_arrow
                  : MediaAssets?.ic_down_arrow
              }
              alt=""
            />
          </span>
        </div>

        <div
          className={`${styles["accordion-content"]} ${
            activeCategory === "instruction" && styles["active"]
          }`}
        >
          <ul>
            <li>{menu?.strInstructions}</li>
          </ul>
        </div>
      </div>
      <div className={styles["accordion"]}>
        <div
          className={styles["accordion-heading"]}
          onClick={handleAccordion}
          data-value={"ingredients"}
        >
          <p>{"Ingredients"}</p>
          <span>
            <img
              src={
                activeCategory === "ingredients"
                  ? MediaAssets?.ic_up_arrow
                  : MediaAssets?.ic_down_arrow
              }
              alt=""
            />
          </span>
        </div>

        <div
          className={`${styles["accordion-content"]} ${
            activeCategory === "ingredients" && styles["active"]
          }`}
        >
          <ul>
            {Object.keys(menu)
              .filter((key) => /strIngredient/.test(key))
              ?.map((ingredient: string, index: any) => {
                return  menu[ingredient] && menu[ingredient] !== "" ? (
                  <li key={index}>{menu[ingredient]}</li>
                ) : null;
              })}
          </ul>
        </div>
      </div>
      <div className={styles["accordion"]}>
        <div
          className={styles["accordion-heading"]}
          onClick={handleAccordion}
          data-value={"measures"}
        >
          <p>{"Measures"}</p>
          <span>
            <img
              src={
                activeCategory === "measures"
                  ? MediaAssets?.ic_up_arrow
                  : MediaAssets?.ic_down_arrow
              }
              alt=""
            />
          </span>
        </div>

        <div
          className={`${styles["accordion-content"]} ${
            activeCategory === "measures" && styles["active"]
          }`}
        >
          <ul>
            {Object.keys(menu)
              .filter((key) => /strMeasure/.test(key))
              ?.map((measure: string, index: any) => {
                return menu[measure] !== "" ? (
                  <li key={index}>{menu[measure]}</li>
                ) : null;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
