import React, { useState, useEffect } from 'react';

import FoodBox from '../FoodBox/FoodBox';
import FoodsJson from '../../foods.json';
import FoodForm from '../FoodForm/FoodForm';

import { v4 as uuidv4 } from 'uuid';
import CartList from '../CartList/CartList';

const FoodList = () => {

  const [foods, setFoods] = useState(FoodsJson);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState(false);

  const [cartList, setCartList] = useState([]);

  const handleClickAddFood = () => {
    setForm(true);
  };

  useEffect(() => {
    if (search === '') {
      return setFoods(FoodsJson);
    }

    const result = FoodsJson.filter((food) => food.name.includes(search));

    setFoods(result);
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value.trim());
  };

  let count = 0;
  
  function addCartList (food) {
    let copy = [...cartList];

    let isFood = copy.find(foodW => foodW.name === food.name);

    food.calories *= food.quantity;

    if(isFood) {
      // si la comida ya existe en el array de comidas de hoy, le sumamos al objeto comida la cantidad y calorías que se añadieron nuevamente
      isFood.quantity += food.quantity;
      isFood.calories += food.calories;
    } else {
      copy.push(food);
    }

    // calculamos el total de calorías de todas las comidas de hoy
    const totalCalories = copy.reduce(
      (acc, val) => acc + val.calories, 0
    );

    console.log('Totalcalories', totalCalories);
    console.log('Copy ', copy);
    // seteamos el state con la lista actualizada de comidas de hoy y el nuevo total de calorías
    setCartList([...copy, totalCalories]);
  }

  return (
    <div>
      <button onClick={() => handleClickAddFood()}>Add food</button>

      Search:
      <input value={search} onChange={(e) => handleChange(e)} />

      {
        form ? 
        
          <FoodForm foods={foods} setFoods={setFoods} setForm={setForm} />

          : 

          foods.map(
            (food) =>
              food && <FoodBox key={uuidv4()} {...food} addCartList={addCartList}/>

        )
      
      }

      <CartList cartList={cartList} setForm={setForm}/>
    </div>
  );
};

export default FoodList;
