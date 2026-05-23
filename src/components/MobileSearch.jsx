

'use client'


import { IoIosSearch } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

const MobileSearch = ({ openSearch, setOpenSearch }) => {
  return (
    <div
      className={` top-24 left-0 w-full bg-white z-50 shadow transition-all duration-500 ${
          openSearch
      ? "translate-y-0 opacity-100 pointer-events-auto"
      : "-translate-y-5 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-3 p-4">

        {/* Input */}
        <div className="flex items-center overflow-hidden rounded-full border border-gray-300 flex-1">
          
          <input
            type="text"
            placeholder="Search food..."
            className="w-full px-4 py-3 outline-none"
          />

          <button onClick={()=>setOpenSearch(false)} className=" text-[var(--primary-color)] text-3xl px-5 py-3">
           <IoIosSearch></IoIosSearch>
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setOpenSearch(false)}
          className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <IoClose className="text-2xl" />
        </button>

      </div>
    </div>
  )
}

export default MobileSearch