import React, { useContext } from "react";
import Nav from "../Components/Nav";
import { Categories } from "../Category";
import Card from "../Components/Card";
import { food_items } from "../food.js";
import { dataContext } from "../Components/UserContext.jsx";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2.jsx";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  const items = useSelector((state) => state.cart.items || []);

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

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryfee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryfee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full p-5">
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

      <div className="w-full flex flex-wrap justify-center items-center gap-10 p-5 pt-8 pb-8">
        {cate && cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="text-green-400 font-semibold text-3xl">Not found</div>
        )}
      </div>

      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-transform duration-500 flex flex-col items-center overflow-auto ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span
            className="text-green-400 text-[18px] font-semibold cursor-pointer"
            onClick={() => {
              toast.success("Order placed successfully!");
            }}
          >
            Order Items
          </span>
          <RxCross2
            className="w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-amber-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        <div className="w-full">
          {items && items.length > 0 ? (
            items.map((item) => (
              <Card2
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-4">Cart is empty</p>
          )}
        </div>
        <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-4 p-8">
          <div className="w-full flex justify-between items-center">
            <span className="text-xl text-gray-600 font-semibold">
              Subtotal
            </span>
            <span className="text-green-400 font-semibold text-lg">
              Rs {subtotal}/-
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-xl text-gray-600 font-semibold">
              Delivery
            </span>
            <span className="text-green-400 font-semibold text-lg">
              Rs {deliveryfee}/-
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-xl text-gray-600 font-semibold">Taxes</span>
            <span className="text-green-400 font-semibold text-lg">
              Rs {taxes.toFixed(2)}/-
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center p-8">
          <span className="text-2xl text-gray-600 font-semibold">Total</span>
          <span className="text-green-400 font-semibold text-2xl">
            Rs {total}/-
          </span>
        </div>
        <button className="w-[80%] bg-green-400 hover:bg-green-500 text-gray-800 font-semibold py-3 rounded-lg transition-colors">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Home;
