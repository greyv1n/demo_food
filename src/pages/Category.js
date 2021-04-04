import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { getFilteredCategory } from '../api'
import { Preloader } from '../components/Preloader'
import { MealList } from '../containers/MealsList'


function Category() {
   const { name } = useParams();
   const { goBack } = useHistory();
   const [meals, setMeals] = useState([]);

   useEffect(() => {
      getFilteredCategory(name).then(data => setMeals(data))
   }, [name]);

   return (
      <>
         <button className='btn' onClick={goBack}>GO BACK</button>

         {meals.length !== undefined ?
            <Preloader />
            :
            <MealList {...meals} />}

      </>
   );
}

export { Category };
