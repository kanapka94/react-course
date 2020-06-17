import React from 'react'

import BreadTop from './ingredients/BreadTop'
import Cheese from './ingredients/Cheese'

const BurgerIngredient = (props) => {
  let ingredient = null

  switch (props.type) {
    case 'bread-top':
      ingredient = <div></div>
      break
    case 'salad':
      ingredient = <div></div>
      break
    case 'bread-bottom':
      ingredient = <div></div>
      break
    default:
      ingredient = <div></div>
      break
  }

  return <div>
  </div>
}

export default BurgerIngredient
