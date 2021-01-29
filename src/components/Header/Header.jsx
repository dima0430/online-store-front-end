/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { HeaderTopLine,HeaderBottomLine} from '../'


export default function Header(){
    return(
        <header className="header">    
            <HeaderTopLine/>
            <HeaderBottomLine/>
        </header>
    )
}
