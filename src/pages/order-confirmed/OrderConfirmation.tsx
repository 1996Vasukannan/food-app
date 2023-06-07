import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./OrderConfirmation.module.css";
import routeConfigurations from "../../routes/RoutConfigurations";
import MediaAssets from "../../assets";

const OrderConfirmation = () => {
  const location = useLocation();
  const { state } = location;
  const { userDetail } = state;
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    navigate(routeConfigurations.menuLists);
  };
  return (
    <div className={styles["container"]}>
      <p className={styles["title"]}>
        <span>Order Confirmed</span>{" "}
        <img src={MediaAssets.ic_check_icon} alt="" />
      </p>
      <div className={styles["order-detail"]}>
        <p className={styles["order-summary"]}>Order Summary</p>
        {Object.values(userDetail).map((detail: any, index: any) => (
          <span key={index}>{`${detail} ,`}</span>
        ))}
      </div>
      <button onClick={handleClick}>Back to lists</button>
    </div>
  );
};

export default OrderConfirmation;
