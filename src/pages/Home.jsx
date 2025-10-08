import React from "react";
import Nav from "../Components/Nav";
import { Categories } from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food.js";

const Home = () => {
  
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {Categories.map((item) => {
            return<div className="w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-300">
              {item.icon}
              <span className="mt-2 text-lg font-semibold text-gray-700">{item.name}</span>
            </div>;
        })}
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-10 p-5">
        {food_items.map((item) => (
             <Card  name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        ))}
      </div>
    </div>
  );
};

export default Home;
