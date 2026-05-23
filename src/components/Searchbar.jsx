'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Searchbar = () => {
   const [searchInput,setSearchInput]=useState("")

const searchParams = useSearchParams()
const pathname = usePathname()
const router = useRouter()

const handleSearch = ()=>{
const params = new URLSearchParams(searchParams)
console.log('params',params);
console.log('pathname',pathname);
console.log('router',router);
if(searchInput){
  params.set("search",searchInput)
}else{
  params.delete("search")
}
router.push(`${pathname}?${params.toString()}`)
}
  return (
  <div className="relative md:w-3xl flex items-center bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden focus-within:ring-2 focus-within:ring-[var(--primary-color)]/10 transition-all">

  {/* icon */}
  <div className="pl-4 text-slate-400">
    <BiSearch className="w-5 h-5" />
  </div>

  {/* input */}
  <input
    type="text"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    placeholder="Search your doctor..."
    className="flex-1 h-12 px-3 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
  />

  {/* button */}
  <button
    onClick={handleSearch}
    className="h-12 px-8 bg-[var(--primary-color)] text-white font-semibold hover:brightness-110 transition-all"
  >
    Search
  </button>

</div>
    );
};

export default Searchbar;