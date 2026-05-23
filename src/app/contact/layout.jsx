import Link from 'next/link';
import React from 'react';

const ContactLayout = ({children}) => {
    return (
        <div className=''>
<div className="drawer">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
<path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth="2"
 d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2">Navbar Title</div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><Link href='/contact/support'>Support</Link></li>
          <li><Link href='/contact/help'>Help</Link></li>
        </ul>
      </div>
    </div>
    {children}
   </div>
  <div className="drawer-side mt-10">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {children}
      <li><Link href='/contact/support' className='text-black'>Support</Link></li>
      <li><Link href='/contact/help' className='text-black'>Help</Link></li>
    </ul>
  </div>
</div>
        </div>
         );
};

export default ContactLayout;