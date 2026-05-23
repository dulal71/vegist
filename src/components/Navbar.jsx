'use client'

import { BsLeafFill } from "react-icons/bs";
import { FaLeaf, FaShoppingBag } from "react-icons/fa";
import { MdOutlineHeadset, MdOutlineMailOutline } from "react-icons/md";
import Searchbar from "./Searchbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import MobileSearch from "./MobileSearch";
const Navbar = () => {
const pathname = usePathname()
const [openSearch , setOpenSearch]=useState(false)
  const navLinks=[
    {name : "Home", path:"/"},
    {name : "Shop", path:"/shop"},
    {name : "Collection", path:"/collection"},
    {name : "Blogs", path:"/blogs"},
   
  ]
    return (
        <nav className="bg-[var(--bg-secondary)] relative">
         <div className="container mx-auto flex items-center justify-between py-7 px-4 md:px-0">
            {/* logo */}
           <div className="flex items-center gap-1">
          <div className="flex">
             <BsLeafFill className="text-2xl md:text-3xl text-[var(--primary-color)]" /> <FaLeaf className="text-2xl md:text-3xl text-[var(--primary-color)]" />
          </div>
           <h2 className="font-bold text-3xl md:text-4xl">Vegist</h2>
            </div>



 {/* navlink  */}
 <div className="hidden md:flex items-center gap-10">
 {
          navLinks.map((link)=>{
            const isActive = pathname ===link.path;
return(
  <Link key={link.path} href={link.path} className={`text-lg font-medium transition-colors duration-300 hover:text-[var(--primary-color)] ${
  isActive ? 'text-[var(--primary-color)]' : 'text-gray-700'
}`}>
 {link.name}  
  </Link>
)


          })} 
          
 </div>

<div className="flex items-center gap-5">
<IoIosSearch
  onClick={() => setOpenSearch(!openSearch)}
  className="text-2xl cursor-pointer"
/>

<div
  className={`absolute left-0 right-0 top-full w-full bg-white shadow-md overflow-hidden z-50
  transition-all duration-500 ease-in-out
  ${
    openSearch
      ? "h-20 opacity-100 translate-y-0"
      : "h-0 opacity-0"
  }`}
>
  <MobileSearch
    openSearch={openSearch}
    setOpenSearch={setOpenSearch}
  />
</div>

<CiUser className="text-2xl" />
 <div className="flex items-center gap-4">
 
  <div className="relative">
<IoBagOutline className="text-2xl" />

  <span className="absolute px-1.5 rounded-full -top-3 -right-2 bg-[var(--primary-color)]">0</span>
 
  </div>


 </div>
</div>


 <div className="hidden lg:flex items-center gap-4">
            {/* call */}
            <div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-500 hover:rotate-[360deg] hover:bg-red-50">
  <MdOutlineHeadset className="text-red-800 text-2xl" />
</div>
<div>
 <p className="text-xl font-bold">Call Now:</p>  
 <p className="text-zinc-600">+1259640542</p> 
</div>
            </div>
            {/* email */}
            <div className="flex items-center gap-3">
<div  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-500 hover:rotate-[360deg] hover:bg-red-50">
<MdOutlineMailOutline className="text-red-800 text-2xl" /> 
</div>
<div>
 <p className="text-xl font-bold">Email Now:</p>  
 <p className="text-zinc-600" >email@gmail.com</p> 
</div>

            </div>
            </div>
        
           
            {/* call and email */}
             </div>
        <div className="hidden  md:block  absolute -bottom-8 left-1/2 -translate-x-1/2">
  <Searchbar />
</div>   
        </nav>
    );
};

export default Navbar;