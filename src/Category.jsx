import { SiCoderwall } from "react-icons/si";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";



export const Categories = [
    {
        id:1,
        name:"All",
        icon:<SiCoderwall className="w-[60px] h-[60px] text-green-500"/>
    },
   {
        id:2,
        name:"breakfast",
        icon:<MdFreeBreakfast className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id:3,
        name:"soups",
        icon:<LuSoup className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id:4,
        name:"pasta",
        icon:<CiBowlNoodles className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id:5,
        name:"pizza",
        icon:<FaPizzaSlice className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id:6,
        name:"burger",
        icon:<GiHamburger className="w-[60px] h-[60px] text-green-500" />

    },
    {
        id:1,
        name:"main_course",
        icon:<BiFoodMenu className="w-[60px] h-[60px] text-green-500" />
    },
]

export default Categories