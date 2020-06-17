import React from 'react'

import BreadTop from './ingredients/BreadTop'
import Cheese from './ingredients/Cheese'
import Salad from './ingredients/Salad'

const BurgerIngredient = (props) => {
  let ingredient = null

  switch (props.type) {
    case 'bread-top':
      ingredient = <BreadTop />
      break
    case 'salad':
      ingredient = <Salad />
      break
    case 'cheese':
      ingredient = <Cheese />
      break
    case 'bread-bottom':
      ingredient = <div></div>
      break
    default:
      ingredient = <div></div>
      break
  }

  return <div></div>
}

export default BurgerIngredient
