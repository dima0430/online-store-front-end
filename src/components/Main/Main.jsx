import React from 'react'
import {Slider,NewProducts, PopularProducts} from '..'

import './index.scss'

const Main = () => {
  return (
    <main>
      
      <div className ='wrapper-sliders'>
        <Slider/>
        <NewProducts/>
        <PopularProducts/>
      </div>
    </main>
  )
}

export default Main
