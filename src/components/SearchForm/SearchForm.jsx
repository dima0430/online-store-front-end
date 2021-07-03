import React from 'react'
import './index.scss'

const SearchForm = () => {
    return (
        <form className="search-form" >    
            <input className="search-input" type="search" placeholder='Пошук товарів'/>
            <button className="search-btn" type="submit" value="" >      
                Пошук
            </button>
        </form>
    )
}

export default SearchForm
