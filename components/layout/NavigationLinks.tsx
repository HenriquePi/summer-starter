import Link from "next/link";
import { Border } from "../atoms/Border";
import style from "./Navigation.module.scss";

export const NavigationLinks = () => {
  return (
    <div className={style["nav-links"]}>
      <div className={style.border}>
        <Border />
      </div>
      <Link href="/">
        Home
      </Link>
      <div className={style.border}>
        <Border />
      </div>
      <Link href="/usage">
        Usage
      </Link>
      <div className={style.border}>
        <Border />
      </div>
      <Link href="/components">
        Components
      </Link>
    </div>
  );
};