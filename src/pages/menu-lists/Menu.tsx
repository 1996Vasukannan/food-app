import React, { useEffect } from "react";
import { getMenuListsRequest } from "../../redux/menu/MenuRedux";
import { useDispatch, useSelector } from "react-redux";
import { MenuItems } from "./menu-items/MenuItems";
import styles from "./Menu.module.css";
import MediaAssets from "../../assets";

const Menu = () => {
  const { menuLists, isLoading } = useSelector(
    (state: any) => state?.MenuReducer
  );

  const actionDispatch = (dispatch: any) => {
    return {
      getMenuLists: () => {
        dispatch(getMenuListsRequest());
      },
    };
  }; // to dispatch multiple redux actions

  const { getMenuLists } = actionDispatch(useDispatch());

  useEffect(() => {
    getMenuLists();
  }, []);

  return (
    <div className={styles["menu-lists-container"]}>
      {!isLoading ? (
        menuLists?.map((menuList: any, index: any) => {
          return <MenuItems key={index} menu={menuList} />;
        })
      ) : (
        <img src={MediaAssets.loading_gif} alt="" />
      )}
    </div>
  );
};

export default Menu;
