import classes from '../UI/CartItem.module.css';

const CartItem = (props) => {
  const price = `$${(props.amount * props.price).toFixed(2)}`;
  console.log(price);

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <img className={classes['cart-item-img']} src={props.image} alt={props.image} />
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

