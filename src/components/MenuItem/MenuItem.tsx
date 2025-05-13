import style from "./MenuItem.module.css";

type Menu = {
  name: string;
  price: string;
};

const MenuItem = ({ name, price }: Menu) => {
  return (
    <div className={style.menuItem}>
      <div className={style.contents}>
        <h4>{name}</h4>
        <p className={style.price}>{price}원</p>
      </div>
    </div>
  );
};

export default MenuItem;
