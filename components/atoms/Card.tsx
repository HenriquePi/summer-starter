import style from "./Card.module.scss";

type Props = {
  children: React.ReactNode;
}

export const Card:React.FC<Props> = ({children}) => {
  return (
    <div className={style.card}>
      {children}
    </div>
  );
};