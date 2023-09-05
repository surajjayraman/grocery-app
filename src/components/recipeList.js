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
        const stockImageUrl = 'https://media.istockphoto.com/id/1357113949/photo/food.webp?s=170667a&w=0&k=20&c=Bi9PCCV6PTvD6Jg3vht2nQRn7htRJfps8us3YaDNdv8=';
        return (
            <div>
                <img
                    className="avatar"
                    src={stockImageUrl}
                    alt="Cookies"
                    width="100"
                    height="100"
                    />
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