import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [ ingredientsState, addIngredientsState ] = useState([]);

  const addIngredientsHandler = (name, amount) => {
    addIngredientsState(prevState => [...prevState, {name: name, amount: amount, id: Math.random.toString()}])
    console.log(name, amount)
  }
  return (
    <div className="App">
      <IngredientForm addIngredientToList={addIngredientsHandler}/>

      <section>
        <Search />
        {
          ingredientsState.map(item => <div key={item.id}>{item.name} {item.amount}</div>)
        }
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
