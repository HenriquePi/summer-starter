import { useState } from "react";
import { NavigationLinks } from "./NavigationLinks";
import Sun from "../../assets/icons/sun.svg";
import style from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  return (
    <>    
      <nav className={style.nav + " margin"}>
        <div className={style["nav-desktop"]}>
          <Link href="/">
            <Image src={Sun} alt="Sun Icon"/>
          </Link>
          <NavigationLinks />
        </div>
        <div className={style["nav-mobile"]}>
          <Image src={Sun} alt="Sun Icon"/>
          <button 
            className={style["nav-burger"] + " " + (isBurgerActive ? style["nav-burger-active"] : "")}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={style["nav-mobile-menu"] + " " + (isBurgerActive ? style["nav-mobile-menu-active"] : "")}>
          <NavigationLinks />
        </div>
      </nav>
    </>
  );
};