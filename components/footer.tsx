import Image from 'next/image';
import React from 'react';
import logo from '@/public/33671a8e057f2690c4272821871507bf-removebg-preview.png';

// Define types for better TypeScript support


const Footer: React.FC = () => {
  return (
    <footer className="text-black body-font bg-slate-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* First Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-black hover:text-red-600">First Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Second Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Third Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Fourth Link</a>
              </li>
            </nav>
          </div>

          {/* Second Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-black hover:text-red-600">First Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Second Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Third Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Fourth Link</a>
              </li>
            </nav>
          </div>

          {/* Third Column */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-black hover:text-red-600">First Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Second Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Third Link</a>
              </li>
              <li>
                <a className="text-black hover:text-red-600">Fourth Link</a>
              </li>
            </nav>
          </div>

          {/* Fourth Column - Subscribe Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-black"
                >
                  Enter Email
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 focus:border-red-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  aria-label="Email input for subscription"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-700 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo and Brand Name */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={logo}
              alt="Urban Walks Logo"
              className="w-20 h-16"
              priority // Prioritize loading the logo for better SEO
            />
            <span className="ml-3 text-xl">Urban Walks</span>
          </a>

          {/* Copyright Text */}
          <p className="text-sm text-gray-700 sm:ml-6 sm:mt-0 mt-4">
            © 2025 UrbanWalks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-black ml-1"
              target="_blank"
              aria-label="Twitter profile of Faizan Atif"
            >
              @faizanatif
            </a>
          </p>

          {/* Social Media Icons */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="#"
              className="text-gray-700"
              aria-label="Facebook profile"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="ml-3 text-gray-700"
              aria-label="Twitter profile"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="ml-3 text-gray-700"
              aria-label="Instagram profile"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a
              href="#"
              className="ml-3 text-gray-700"
              aria-label="LinkedIn profile"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;