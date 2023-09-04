import { recipes} from './data';

export const Recipe = ({id, name, ingredients}) => {
    const items = ingredients.map((item) => {
        return (
            <div key={id}>
               <ul>
                    <li key={item}>
                    {item}
                    </li>
                </ul>
            </div>
        )
    })

    return (
        <div>
            <h2>{name}</h2>
            {items}
        </div>
    )

}
const RecipeList = () => {
    const recipeItems = recipes.map((item) => {
        return (
            <div>
                <Recipe id={item.id} name={item.name} 
                    ingredients={item.ingredients} key={item.id} />
            </div>

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