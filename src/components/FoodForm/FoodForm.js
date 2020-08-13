import React, { useState } from 'react';

const FoodForm = (props) => {
  const { foods, setFoods, setForm } = props;

  const [food, setFood] = useState({
    name: '',
    calories: '',
    iamge: '',
  });

  // When a user clicks the button, a form will appear with fields for a name, number of calories, and an image.
  const handleChange = (event) => {
    let { name, value } = event.target;
    setFood({ ...food ,[name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFoods([...foods, food]);
    setFood({
      name: '',
      calories: '',
      iamge: '',
    });
    setForm(false)
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={food.name}
        onChange={(e) => handleChange(e)}
      />

      <label>Number of calories:</label>
      <input
        type="text"
        name="calories"
        value={food.calories}
        onChange={(e) => handleChange(e)}
      />

      <label>Image</label>
      <input
        type="text"
        name="image"
        value={food.image}
        onChange={(e) => handleChange(e)}
      />

      <button type="submit">Add new food</button>
    </form>
  );
};

export default FoodForm;
