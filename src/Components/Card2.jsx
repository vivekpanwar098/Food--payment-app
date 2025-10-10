import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBinLine } from "react-icons/ri";

const Card2 = () => {
  return (
    <div className='w-full h-[120px]  p-2 shadow-lg'>
        <div className='w-[60%] h-full  flex'>
            <div className='w-[60%] h-full overflow-hidden rounded-b-xl '>
                <img src={image1} alt=""  className='object-center '/>

            </div>
            <div className='w-[40%] h-full flex flex-col gap-5'>
                <div className='text-lg text-gray-600 font-semibold'>Pancake</div>
                <div className='w-[110px] h-50[50px] bg-slate-400 flex rounded-lg shadow-lg overflow-hidden font-semibold border-2 border-green-400 text-xl'>
                    <button  className='w-[30%] h-full bg-amber-50 flex justify-center items-center text-green-400 hover:bg-gray-300'>-</button>
                    <span className='w-[40%] h-full bg-slate-300 flex justify-center items-center  text-green-400'>1</span>
                    <button className='w-[30%] h-full bg-amber-50 flex justify-center items-center  text-green-400  hover:bg-gray-300'>+</button>
                </div>
            </div>
        </div>
      <div>
<span>Rs-400</span>
<RiDeleteBinLine />

      </div>
    </div>
  )
}

export default Card2
