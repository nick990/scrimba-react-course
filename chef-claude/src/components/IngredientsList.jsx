export default function IngredientsList(prop) {
  const ingredientsListItems = prop.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {prop.ingredients.length > 3 && (
        <div className="get-recipe-container" ref={prop.ref}>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={prop.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
