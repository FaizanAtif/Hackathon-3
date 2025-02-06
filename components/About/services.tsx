'use client'
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

// Types
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Metadata
export const metadata: Metadata = {
  title: 'Our Services | Sneaker Spot',
  description: 'Discover our premium services including free delivery, expert shoe fitting, and customer support.',
};

// Service Icons as components for better organization
const DeliveryIcon: React.FC = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-10 h-10"
    viewBox="0 0 24 24"
  >
    <path d="M12 2L4 8v8l8 6 8-6V8L12 2z M12 22V12 M20 8L12 12 4 8" />
  </svg>
);

const SupportIcon: React.FC = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-10 h-10"
    viewBox="0 0 24 24"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx={12} cy={7} r={4} />
  </svg>
);

const QualityIcon: React.FC = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-10 h-10"
    viewBox="0 0 24 24"
  >
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

// Service Card Component
const ServiceCard: React.FC<ServiceItem> = ({ title, description, icon }) => (
  <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-50 text-red-600 mb-5 flex-shrink-0 transition-transform hover:scale-110">
      {icon}
    </div>
    <div className="flex-grow">
      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
        {title}
      </h2>
      <p className="leading-relaxed text-base text-gray-600">
        {description}
      </p>
      <button className="mt-3 text-red-600 inline-flex items-center transition-colors hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md px-2 py-1">
        Learn More
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

// Services data
const services: ServiceItem[] = [
  {
    id: 'free-delivery',
    title: 'Free Express Delivery',
    description: 'Enjoy complimentary next-day delivery on all orders over $100. Our efficient shipping service ensures your new shoes arrive quickly and safely at your doorstep.',
    icon: <DeliveryIcon />,
  },
  {
    id: 'customer-support',
    title: '24/7 Customer Support',
    description: 'Our dedicated team is available around the clock to assist you with sizing questions, order tracking, or any other inquiries you might have about your purchase.',
    icon: <SupportIcon />,
  },
  {
    id: 'expert-fitting',
    title: 'Expert Shoe Fitting',
    description: 'Visit our store for a personalized fitting experience. Our expert staff will help you find the perfect shoe size and style for your unique needs.',
    icon: <QualityIcon />,
  },
]

const Services: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Premium Services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Welcome to Sneaker Spot, where we prioritize your shopping experience.
            From free express delivery to dedicated customer support, we ensure
            every step of your journey with us is exceptional.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-600 inline-flex" />
          </div>
        </div>
        
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            * Free delivery applies to orders over $100. Standard shipping available for all other orders.
          </p>
          <Link href= '/shop'>
          <button className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;