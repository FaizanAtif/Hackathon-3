import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
        <li>
          <Link href={'/shop'}>Shop</Link>
          <ul className="p-2">
            <li><Link href={'/shop'}>Men's Running Shoes</Link></li>
            <li><Link href={'/shop'}>Men's Shoes</Link></li>
            <li><Link href={'/shop'}>Women's Shoes</Link></li>
          </ul>
        </li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
      </ul>
    </div>
    <Link href={'#'} className=" text-3xl font-bold ">Urban Walks</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal menu-lg px-1">
      <li><Link href={'/'}>Home</Link></li>
      <li>
        <details>
          <summary>Shop</summary>
          <ul className="p-2">
            <li><Link href={'/shop'}>Men's Running Shoes</Link></li>
            <li><Link href={'/shop'}>Men's Shoes</Link></li>
            <li><Link href={'/shop'}>Women's Shoes</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href={'about'}>About</Link></li>
      <li><Link href={'/contact'}>Contact</Link></li>
      </ul>
  </div>
  <div className=" navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm badge-neutral indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-gray-800">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-accent btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
          <Link href={''} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link href={''}>Settings</Link></li>
        <li><Link href={''}>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
</div>

  )
}

export default Navbar