import React from "react";
import styles from "./header.module.css";
import Page from "./pages/page";
import UserInfo from "./userInfo/userInfo";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      {/* left component : logo */}
      <div className={styles.logo}>
        <Link to="/" exact="true">
          <img
            className={styles.logoStyle}
            src="/Images/header/logo.png"
            alt="logo"
          ></img>
        </Link>
      </div>

      {/* rigth component : pages, search, alram, profile */}
      <div className={styles.rightComponent}>
        <div>
          <Page />
        </div>
        <div>
          <UserInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;
