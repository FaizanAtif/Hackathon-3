'use client'
import React from 'react';
import { NavbarCenter } from './ui/navbarCenter';
import Image from 'next/image';
import logo from '@/public/33671a8e057f2690c4272821871507bf-removebg-preview.png';
import { SignUpButton, UserButton, useUser } from '@clerk/nextjs';

const Navber = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="navbar bg-base-100">
      {/* Navbar Start (Logo and Mobile Menu) */}
      <div className="navbar-start flex items-center">
        {/* Mobile Menu Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md z-10"
          >
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

        {/* Logo and Brand Name */}
        <a className="flex title-font font-bold items-center text-gray-900">
          <Image src={logo} alt="logo" className="w-16 h-16 md:w-20 md:h-20 md:ml-8" />
          <span className="scroll-m-20 text-2xl md:text-3xl tracking-tight ml-2">Urban Walks</span>
        </a>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex items-center mr-28">
        <NavbarCenter />
      </div>

      {/* Navbar End (Search, Cart, User) */}
      <div className="navbar-end flex">
        {/* Search Bar - Hidden on Mobile */}
        <div className="relative text-gray-900 lg:block hidden ">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-slate-100 h-10 px-5 pr-10 rounded-2xl text-sm focus:outline-none "
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>

        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle relative">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 mt-3 w-52 shadow-md"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* User Avatar and Sign Up Button */}
        <div className="navbar-end md:space-x-7">
          <UserButton />
          {!isSignedIn && (
            <SignUpButton>
               <button className="px-4 py-2 bg-primary text-white rounded-lg bg-red-600 hover:bg-red-800 transition-colors duration-300 font-semibold text-sm">
                Sign Up
              </button>
            </SignUpButton>
            )}
        </div>
      </div>
    </div>
  );
};

export default Navber;