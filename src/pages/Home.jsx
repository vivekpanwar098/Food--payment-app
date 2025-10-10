import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import { Categories } from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food.js";
import { dataContext } from "../Components/UserContext.jsx";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2.jsx";

function Home() {
  let { cate, setCate, input,showCart,setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {Categories.map((item, index) => (
            <div
              key={index}
              className="w-[150px] h-[150px] flex flex-col justify-center items-center bg-white rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-300"
              onClick={() => filter(item.name)}
            >
              {item.icon}
              <span className="mt-2 text-lg font-semibold text-gray-700">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap justify-center items-center gap-10 p-5">
        {cate &&
          cate.map((item, index) => (
            <Card
              key={index}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))}
      </div>

      <div className= {`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-transform duration-500 ${showCart? "translate-x-0":"translate-x-full" }`} >
        <header className="w-[100%] flex justify-between items-center">
          <span className=" text-green-400 text-[18px] font-semibold">order item </span>
          <RxCross2 className="w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-amber-600" 
          onClick={()=> setShowCart(false)}
          />

        </header>
        <Card2/>
      </div>
    </div>
  );
}

export default Home;
