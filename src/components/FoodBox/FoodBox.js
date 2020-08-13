import React, { useState } from 'react';
import './FoodBox.style.css';

const FoodBox = (props) => {
  const { id, name, image, calories, addCartList, handleOnClickDelete } = props;

  const [count, setCount] = useState(0);
  const [quantityState, setQuantityState] = useState(count);

  const handleOnClikQuantity = () => {
    addCartList({ name: name, calories: calories, quantity: quantityState });
  };
  const handleOnChangeQuantity = (event) => {
    setCount(count + 1);
    setQuantityState(Number(event.target.value));
  };

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
              <input
                className="input"
                type="number"
                onChange={handleOnChangeQuantity}
                defaultValue={quantityState}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => handleOnClikQuantity()}
              >
                +
              </button>
            </div>
            <div className="delete">
              <button
                className="delete-button"
                onClick={() => handleOnClickDelete({ name })}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
