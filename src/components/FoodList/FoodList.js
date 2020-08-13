import React, { useState, useEffect } from 'react';
import './FoodList.css';

import FoodBox from '../FoodBox/FoodBox';
import FoodsJson from '../../foods.json';
import FoodForm from '../FoodForm/FoodForm';

import { v4 as uuidv4 } from 'uuid';
import CartList from '../CartList/CartList';

const FoodList = () => {
  const addId = (item) =>
    item.map((food) => (food = { ...food, id: uuidv4() }));

  const [foods, setFoods] = useState(addId(FoodsJson));
  const [search, setSearch] = useState('');
  const [form, setForm] = useState(false);

  const [cartList, setCartList] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleClickAddFood = () => {
    setForm(true);
  };

  useEffect(() => {
    if (search === '') {
      return setFoods(addId(FoodsJson));
    }

    const result = FoodsJson.filter((food) => food.name.includes(search));

    setFoods(addId(result));
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value.trim());
  };

  function addCartList(food) {
    let copy = [...cartList];

    let isFood = copy.find((foodW) => foodW.name === food.name);

    food.calories *= food.quantity;

    if (isFood) {
      isFood.quantity += food.quantity;
      isFood.calories += food.calories;
    } else {
      copy.push(food);
    }

    setTotalCalories(copy.reduce((acc, val) => acc + val.calories, 0));

    setCartList([...copy]);
  }

  const handleOnClickDelete = (item) => {
    const result = foods.filter((food) => food.name !== item.name);
    setFoods(addId(result));
  };

  return (
    <div>
      <div className="buttons-container">
        <label>Search:</label>
        <input
          className="input-search"
          value={search}
          onChange={(e) => handleChange(e)}
        />
        {form ? null : (
          <button onClick={() => handleClickAddFood()} className="add-button">
            Add food
          </button>
        )}
      </div>

      <div className="main-container">
        {form ? (
          <FoodForm foods={foods} setFoods={setFoods} setForm={setForm} />
        ) : (
          <>
            <div className="container-food">
              {foods.map(
                (food) =>
                  food && (
                    <FoodBox
                      key={uuidv4()}
                      {...food}
                      addCartList={addCartList}
                      handleOnClickDelete={handleOnClickDelete}
                    />
                  )
              )}
            </div>
            <div>
              <CartList
                cartList={cartList}
                setForm={setForm}
                totalCalories={totalCalories}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodList;
