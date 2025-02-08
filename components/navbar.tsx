'use client';
import React, { useState } from 'react';
import { NavbarCenter } from './ui/navbarCenter';
import Image from 'next/image';
import logo from '@/public/33671a8e057f2690c4272821871507bf-removebg-preview.png';
import { SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useAppSelector } from '@/app/store/hooks/useAppSelector';
import { useRouter } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const { isSignedIn } = useUser();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="navbar bg-base-100 fixed antialiased max-w-[90%] max-h-[10%]  mx-auto z-20">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h8" />
          </svg>
        </button>

        <Link href="/" className="flex title-font font-bold items-center text-gray-900">
          <Image src={logo} alt="Urban Walks Logo" className="w-16 h-16 md:w-20 md:h-20 md:ml-8" priority />
          <span className="text-2xl md:text-3xl tracking-tight ml-2">Urban Walks</span>
        </Link>
      </div>

      {/* Navbar Center (Desktop Only) */}
      <div className="navbar-center hidden lg:flex items-center mr-28">
        <NavbarCenter />
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center mr-6 lg:mr-16 sm:mr-16 md:mr-16 space-x-2">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative text-gray-900 hidden lg:block">
          <input
            type="search"
            name="search"
            placeholder="Search products..."
            className="bg-slate-100 h-10 px-5 pr-10 rounded-2xl text-sm focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute right-3 top-2.5 text-gray-600">
            <CiSearch className="h-5 w-5" />
          </button>
        </form>

        {/* Cart Icon with Badge */}
        <div className="dropdown dropdown-end z-10">
          <Link href="/cart" aria-label="Cart">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle relative">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="badge badge-md indicator-item bg-red-600 text-white">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>

        {/* User Actions */}
        <UserButton />
        {!isSignedIn && (
          <SignUpButton>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 transition">Sign Up</button>
          </SignUpButton>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute  top-full left-0 w-full bg-white shadow-lg z-50 p-10 rounded-b-lg border-t border-gray-200 flex flex-col gap-4">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="absolute top-2 right-4 text-gray-700 text-2xl">
            <IoClose />
          </button>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="search"
              name="search"
              placeholder="Search products..."
              className="bg-slate-100 h-10 px-5 pr-10 rounded-xl text-sm focus:outline-none w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-600">
              <CiSearch className="h-5 w-5" />
            </button>
          </form>

          {/* Navigation Links */}
          <ul className="w-full text-gray-800 font-medium space-y-3 border-b pb-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/shop">Shop</Link></li>
          </ul>

          {/* Category Links */}
          <ul className="w-full text-gray-800 font-medium space-y-3">
            <li className="border-b pb-2"><Link href="/shop/boots">Boots</Link></li>
            <li className="border-b pb-2"><Link href="/shop/running-shoes">Running Shoes</Link></li>
            <li className="border-b pb-2"><Link href="/shop/training-shoes">Training Shoes</Link></li>
            <li className="pb-2"><Link href="/shop/football-shoes">Football Shoes</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;