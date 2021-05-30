import { IRecipe } from './IRecipe';

const RecipeComponent = (props: {recipe: IRecipe}) => {
    const {recipe } = props;

    return (
        <div className="recipe">
            <div className="title">
                <img src={recipe.thumbnail || 'http://localhost:3000/placeholder.jpg'} alt={recipe.title}/>
            </div>
        </div>
    );
}

export default RecipeComponent;