import React, { useState } from "react";
import styles from "./CheckOut.module.css";
import { useNavigate } from "react-router-dom";
import routeConfigurations from "../../routes/RoutConfigurations";

const CheckOut = () => {
  const navigate = useNavigate();

  const [addressOne, setAddressOne] = useState<string>("");
  const [addressTwo, setAddressTwo] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [pinCode, setPinCode] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const formStateFunctions: any = {
    addressOne: setAddressOne,
    addressTwo: setAddressTwo,
    city: setCity,
    state: setState,
    pinCode: setPinCode,
    name: setName,
    phoneNumber: setPhoneNumber,
    email: setEmail,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      name,
      phoneNumber,
      email,
      addressOne,
      addressTwo,
      city,
      state,
      pinCode,
    };
    navigate(routeConfigurations.orderConfirmed, {
      state: { userDetail: formData },
    });
  };

  const handleBack = (e: any) => {
    navigate(-1);
  };
  const handleChange = (event: any) => {
    const setState = formStateFunctions[event?.target?.name];
    setState(event?.target?.value);
  };
  return (
    <div className={styles["container"]}>
      <form onSubmit={handleSubmit}>
        <div className={styles["sub-category"]}>
          <p className={styles["title"]}>Shipping Address :</p>
          <div className={styles["inputs"]}>
            <div>
              <label>Address line 1 :</label>
              <input
                type="text"
                name={"addressOne"}
                value={addressOne}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Address line 2:</label>
              <input
                type="text"
                name={"addressTwo"}
                value={addressTwo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                name={"city"}
                value={city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>State:</label>
              <input
                type="text"
                name={"state"}
                value={state}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Pincode:</label>
              <input
                type="text"
                name={"pinCode"}
                value={pinCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles["sub-category"]}>
          <p className={styles["title"]}>Contact Information :</p>
          <div className={styles["inputs"]}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name={"name"}
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="text"
                name={"phoneNumber"}
                value={phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                name={"email"}
                value={email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className={styles["form-bottom-btns"]}>
          <button className={styles["back-button"]} onClick={handleBack}>
            Back
          </button>
          <button className={styles["order-button"]} type="submit">
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
