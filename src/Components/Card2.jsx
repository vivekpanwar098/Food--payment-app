import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DecrementQty, RemoveItem, InrementQty } from "../redux/CartSlice";

const Card2 = ({ name, id, image, price, qty }) => {
  let dispatch = useDispatch();

  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between">
      <div className="w-[60%] h-full flex">
        <div className="w-[60%] h-full overflow-hidden rounded-b-xl">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3 p-2">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg shadow-lg overflow-hidden font-semibold border-2 border-green-400 text-xl">
            <button
              className="w-[30%] h-full bg-amber-50 flex justify-center items-center text-green-400 hover:bg-gray-300"
              onClick={() => {
                qty > 1 ? dispatch(DecrementQty(id)) : dispatch(RemoveItem(id));
              }}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center text-green-400">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-amber-50 flex justify-center items-center text-green-400 hover:bg-gray-300"
              onClick={() => {
                dispatch(InrementQty(id));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-6">
        <span className="text-xl text-green-400 font-semibold">
          Rs {price}/-
        </span>
        <RiDeleteBinLine
          className="w-[30px] h-[30px] text-red-600 cursor-pointer"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
};

export default Card2;
