import React, { useState, useEffect } from 'react'

import { getAllCategory } from '../api'
import { Preloader } from '../components/Preloader'
import { CategoriesList } from '../containers/CategoriesList'

function Home() {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      getAllCategory().then(data => setCategories(data));
   }, [])

    return (
     <>
        {categories.length !== undefined ? 
        <Preloader />
        : 
        <CategoriesList {...categories} />}
     </>
    );
  }
  
  export {Home};
  