import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import { getMealById } from '../api'
import { Preloader } from './Preloader'

function Recipe() {
    const { id } = useParams();
    const { goBack } = useHistory();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id])

    return (
        <>
            {!recipe.idMeal ?
                <Preloader />
                :
                <>
                    <h4>{recipe.strMeal}</h4>
                    <div>Category: {recipe.strCategory}</div>
                    {recipe.strArea ? <div>Area: {recipe.strArea}</div> : null}
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <p>{recipe.strInstructions}</p>
                    {recipe.strYoutube ?

                        <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} title={id} allowFullScreen></iframe>
                        :
                        null
                    }
                </>
            }
            <button className='btn' onClick={goBack}>GO BACK</button>
        </>
    )
}

export { Recipe };