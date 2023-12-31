import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = (props) => {
  return (
    <div className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>{CartIcon}</span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </div>
  )
}

export default HeaderCartButton