import style from "./StoreInfo.module.css";

type StoreTitle = {
  title: string;
  info: string;
};

const StoreInfo = ({ title, info }: StoreTitle) => {
  return (
    <div className={style.storeInfo}>
      <h3>{title}</h3>
      <p className={style.description}>{info}</p>
    </div>
  );
};

export default StoreInfo;
