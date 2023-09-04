import { recipes} from './data';

const RecipeList = () => {
    const recipeItems = recipes.map((item) => {
        return (
            <>
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <ul>
                        {item.ingredients.map((ingredient) => {
                            return (
                                <li key={ingredient}>
                                        {ingredient}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>

        );
    });
    return (
        <div>
            <h1>Available Recipes</h1>
                {recipeItems}
        </div>
    )
}

export default RecipeList;