import React, {useContext} from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import CartCntx from '../../../store/cart-context';

const MealItemForm = (props) =>{
  const cartcntx = useContext(CartCntx);

  console.log('reinitialize cartcntx', cartcntx);

   const addItemToCart =(event)  =>{
     event.preventDefault();
     //Updating the cartcntx.items
    //  cartcntx.items.push(props.item);
    //  console.log(event.target);
    //  console.log(cartcntx.items)
    // cartcntx.addItem(props.item)
    // console.log('after addItemToCart',cartcntx)
 
    const quantity = document.getElementById('amount_' +props.id).value
     cartcntx.addItem({...props.item, quantity : quantity})
     console.log('after addItemToCart', cartcntx)
   }
    return(
    <form className={classes.form}>
       {console.log('inside render', cartcntx.items)}
       <Input label="Amount" input={{
        id: 'amount_' +props.id,
        type: "number",
        min:"1",
        max:"5",
        step: "1",
        defaultValue: "1"
       }} />
       <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;