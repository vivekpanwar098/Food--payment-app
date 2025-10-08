import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";

const Card = ({name,image,id,price,type}) => {
  return (
    <div className="flex items-center  bg-gray-100 p-4 rounded-lg shadow-lg hover:border-5 hover:border-green-300 transition-all scroll-smooth duration-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80">
        <div className="relative h-64 bg-gray-200">
          <img
            src={image}
            alt="Pancakes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{name}</h2>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-green-600 font-bold text-xl">Rs {price}/-</span>
            <div className="flex justify-center items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <span className="text-green-600 text-2xl">{type==="veg"? "🥬" : "🍗"}</span>
              <span >{type}</span>
            </div>
          </div>
          <button className="w-full bg-green-400 hover:bg-green-500 text-gray-800 font-semibold py-3 rounded-lg transition-colors">
            Add to Dish
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
