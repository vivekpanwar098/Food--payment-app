import React from 'react'
import { createContext, useState } from 'react'
import { food_items } from '../food'
export const dataContext = createContext()

function UseContext({ children }) {
  let [cate, setCate] = useState(food_items)
    let [input,setInput] =useState("")
    let[showCart, setShowCart] = useState(false);
    let data={
        input,
        setInput,
        cate,
        setCate,
        showCart,
        setShowCart
    }

  return (
    <div>
      <dataContext.Provider value={{ input, setInput, cate, setCate, showCart, setShowCart }}>
   {children}
</dataContext.Provider>

    </div>
  )
}

export const useUser = () => {
  return UseContext(dataContext)
}

export default UseContext
