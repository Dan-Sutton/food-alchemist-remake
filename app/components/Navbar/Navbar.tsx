import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.leftNav}>
        <Image
          className={styles.logo}
          alt="Food Alchemist Logo"
          src={logo}
        ></Image>
      </div>
      <div className={styles.rightNav}>
        <Link href={"/"}>HOME</Link>
        <Link href={"/"}>BRITISH CRYSTALS</Link>
        <Link href={"/"}>UPCOMING EVENTS</Link>
        <Link href={"/"}>CONTACT</Link>
      </div>
    </div>
  );
}

export default Navbar;
