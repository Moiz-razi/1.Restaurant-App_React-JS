import React, {useState} from "react";
import CartContext from "./cart-context";


const CartProvider = props =>{

    const[ items, updateItems] = useState([]);

    const addItemToCartHandler = (item) => {
       updateItems([...items, item]);
       console.log('inside addItemToCartHandler', cartContext)
    };

    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items:items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message: "Click here"
    }
       return(
        <CartContext.Provider value={cartContext}>
         {console.log('inside CartContext.providerCartContext',cartContext)}
         {props.children}
       </CartContext.Provider>
    );
};

export default CartProvider;