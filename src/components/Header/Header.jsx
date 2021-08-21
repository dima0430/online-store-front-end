import React from 'react'
import { HeaderTopLine,HeaderBottomLine,CatalogList} from '..'
import './index.scss'

const Header = () => {
    return (
    <header className="header-wrapper">
            <HeaderTopLine/>
            <HeaderBottomLine/>
            <CatalogList/>
            
    </header>
    )
}

export default Header;
