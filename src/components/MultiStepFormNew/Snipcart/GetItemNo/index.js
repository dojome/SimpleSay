import React, { useState, useEffect } from "react";
import { Grid } from '@material-ui/core';
import * as Styles from './styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function GetItemNo(props) {
  const [cartItems, setCartItems] = useState("");

  useEffect(() => {
    async function fetchCartItems() {
        try {
            const cartItems = await window.Snipcart.store.getState().cart.items.count
            console.log('INFO: ', cartItems)
            setCartItems(cartItems);
        } catch (error) {
            console.log('ERROR: ', error)
        }        
    }
    fetchCartItems();
  });

  return (
    <React.Fragment>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                {cartItems ? (
                    <Styles.ShoppingCartItemsMessage><a button className="snipcart-checkout" ><ShoppingCartIcon/> ({cartItems})</a></Styles.ShoppingCartItemsMessage>
                ) : (
                    <Styles.ShoppingCartItemsMessage><ShoppingCartIcon/> (0)</Styles.ShoppingCartItemsMessage>
                )}
            </Grid>
        </Grid>
    </React.Fragment>                
  );
};

export default GetItemNo;