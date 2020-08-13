import React, { useState } from 'react';
import './FoodBox.style.css';


const FoodBox = (props) => {

  const { 
    name,
    image,
    calories,
    quantity,
    addCartList, 
  } = props;

  const [quantityState, setQuantityState] = useState(quantity);

  const handleOnClikQuantity = () => {
    addCartList({name:name, calories: calories, quantity: quantityState})
  }

  const handleOnChangeQuantity = (event) => {
    setQuantityState(event.target.value)
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="imageFood">
            <img className="imageFood" src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={quantityState} onChange={handleOnChangeQuantity} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => handleOnClikQuantity()}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
