import React from 'react';
import Image from 'next/image';
import men1 from '../../public/men1.jpg';
import men2 from '../../public/men2.jpg';
import men3 from '../../public/men3.jpg';
import men4 from '../../public/men4.jpg';
import { StaticImageData } from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alper Kamu',
    role: 'UI Developer',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
    image: men1,
  },
  {
    id: 2,
    name: 'Holden Caulfield',
    role: 'UI Developer',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
    image: men2,
  },
  {
    id: 3,
    name: 'Atticus Finch',
    role: 'UI Developer',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
    image: men3,
  },
  {
    id: 4,
    name: 'Jean-Baptiste Grenouille',
    role: 'UI Developer',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
    image: men4,
  },
];

const Team: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-bold title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably havent
            heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.image}
                  width={200}
                  height={200}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.description}</p>
                  <span className="inline-flex">
                    <a className="text-gray-500" aria-label="LinkedIn">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500" aria-label="Twitter">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500" aria-label="GitHub">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;