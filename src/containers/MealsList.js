import {Meals} from '../components/Meals'

function MealList ({meals = []}) {

    return(
        <div className='list'>
            {meals.map(item => <Meals key={item.idMeal} {...item}/>)}
        </div>
    )
}

export {MealList}