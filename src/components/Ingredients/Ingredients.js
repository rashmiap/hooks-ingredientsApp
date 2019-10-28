import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
	const [ingredientsState, addIngredientsState] = useState([]);

	const addIngredientsHandler = (name, amount) => {
		addIngredientsState(prevIngredients => [
			...prevIngredients,
			{ name, amount, id: Math.random().toString() }
		]);
	};
	const removeIngredientsHandler = ingredientId => {
		addIngredientsState(prevIngredients =>
			prevIngredients.filter(item => item.id !== ingredientId)
		);
	};
	return (
		<div className="App">
			<IngredientForm addIngredientToList={addIngredientsHandler} />
			<section>
				<Search />
				{/* Added list to display all ingredients here! */}
				<IngredientList
					onRemoveItem={removeIngredientsHandler}
					ingredients={ingredientsState}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
