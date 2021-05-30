import { IRecipe } from './IRecipe';

const RecipeComponent = (props: {recipe: IRecipe}) => {
    const {recipe } = props;

    return(
        <div className="recipe">
            <div className="title">
                <img src="" alt="" srcset="" />
            </div>
        </div>
    )
}

export default RecipeComponent;