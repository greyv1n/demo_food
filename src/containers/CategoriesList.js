import { Categories } from '../components/Categories'

function CategoriesList({categories =[]}) {
    
    return (
        <div className='list'>
            {categories.map(item => <Categories key={item.idCategory} {...item}/>)}
        </div>
    )
}

export {CategoriesList}