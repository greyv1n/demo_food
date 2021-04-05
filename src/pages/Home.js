import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { getAllCategory } from '../api'
import { Preloader } from '../components/Preloader'
import { CategoriesList } from '../containers/CategoriesList'
import { Search } from '../containers/Search'

function Home() {
   const [categories, setCategories] = useState([]);
   const [filteredCatalog, setFilteredCatalog] = useState([])

   const { pathname, search } = useLocation();
   const { push } = useHistory();

   const handleSearch = (str) => {
      setFilteredCatalog(
         filteredCatalog.filter(item =>
            item.strCategory.toLowerCase().includes(str.toLowerCase()))
      )
      push({
         pathname,
         search: `?serch=${str}`
      })
   }

   useEffect(() => {
      getAllCategory().then(data => {
         setCategories(data);
         setFilteredCatalog(
            search
               ?
               data.categories.filter(item =>
                  item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
               )
               :
               data.categories)
      });

   }, [search])

   return (
      <>
         <Search cb={handleSearch} />
         {categories.length !== undefined ?
            <Preloader />
            :
            <CategoriesList categories={filteredCatalog} />}
      </>
   );
}

export { Home };
