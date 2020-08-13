import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartList = (props) => {
  const { cartList, totalCalories } = props;

  return (
    <div className="today-container">
      <h2>Today's food</h2>
      <ul>
        {
          cartList && cartList.map((food) => {
            return (
              <li key={uuidv4()}>
                {food.quantity} {food.name} = {food.calories} cal
              </li>
            );
          })
        }
      </ul>
      <p>Total= {totalCalories} cal</p>
    </div>
  );
};

export default CartList;
