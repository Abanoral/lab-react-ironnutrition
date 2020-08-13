import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartList = (props) => {
  const { cartList } = props;

  console.log('cartList componente cartList ', cartList);

  return (
    <>
      <h2>Today's food</h2>
      <ul>
        {
          cartList && cartList.map((food) => {
            console.log("valor: ", food)
            console.log('food.quantity', food.quantity)
            console.log('food.name', food.name)
            return (
              <li key={uuidv4()}>
                {food.quantity} {food.name} = {cartList[cartList.length-1]} cal
              </li>
            );
          })
        }
      </ul>
      <p>Total= {cartList[cartList.length-1]} cal</p>
    </>
  );
};

export default CartList;
