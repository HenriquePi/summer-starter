import Link from "next/link";
import style from "./Button.module.scss";

type Props = {
  buttonStyle: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  isLink?: boolean;
  isLocalLink?: boolean;
  isOpenNewWindow?: boolean;
  href?: string;
}

export const Button:React.FC<Props> = (
    {
      buttonStyle = "", 
      isLocalLink = false, 
      isLink = false, 
      isOpenNewWindow = false,
      onClick = () => {}, 
      href = "",
      children
    }
  ) => {
    // style construct
    const buttonStyleClass = style.button + " " + style[`button-${buttonStyle}`];
    // link components
    if (isLink) {
      if (isLocalLink) {
        return (
          <Link href={href} className={buttonStyleClass}>
            {children}
          </Link>
        );
      } else if (isOpenNewWindow) {
        return (
          <a href={href} target="_blank" rel="noreferrer" className={buttonStyleClass}>
            {children}
          </a>
        );
      } else {
        return (
          <a href={href} className={buttonStyleClass}>
            {children}
          </a>
        );
      }


    }
  return (
    <button className={buttonStyleClass}>
      {children}
    </button>
  );
};