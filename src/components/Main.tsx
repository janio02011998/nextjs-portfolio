import React from 'react';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

const Main: React.FC = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#5651e5]'>Janio</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A FullStack Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a fullstack developer specializing in building exceptional
            digital experiences. Currently, I&apos;m focused on building mobile,
            front-end and back-end applications while learning AWS technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/janio-carvalho-95966016b/'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href='https://github.com/janio02011998'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
