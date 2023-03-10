import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';

import MoveIt from '../../public/assets/projects/moveit.png';

const moveit = () => {
  return (
    <>
      <Head>
        <title>JC - MoveIt </title>
        <link rel='icon' href='/fav.png' />
      </Head>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
          <Image
            fill
            style={{ objectFit: 'cover', position: 'absolute', zIndex: 1 }}
            src={MoveIt}
            alt='MoveIt'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>MoveIt</h2>
            <h3>TypeScript / Next / CSS</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='text-sm'>Project</p>
            <h2 className='py-4'>Overview</h2>
            <p>
              Application to help developer to make samples workout in the day
              of work to relieve the muscles.
            </p>
            <a
              href='https://focus-ugq3z0405-janio02011998.vercel.app/'
              target='_blank'
              rel='noreferrer'>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a
              href='https://github.com/janio02011998/nlw-04-reacjs'
              target='_blank'
              rel='noreferrer'>
              <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            </a>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Next
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Context API
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Typescript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> CSS
                </p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default moveit;
