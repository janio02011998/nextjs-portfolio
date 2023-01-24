import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';

import EventPlatform from '../../public/assets/projects/event-plataform.png';

const eventPlatform = () => {
  return (
    <>
      <Head>
        <title>JC - Nossa UESC </title>
      </Head>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
          <Image
            fill
            style={{ objectFit: 'cover', position: 'absolute', zIndex: 1 }}
            src={EventPlatform}
            alt='Event Platform'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Nossa UESC</h2>
            <h3>TypeScript / React / Tailwind / Apollo / GraphQL</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p className='text-sm'>Project</p>
            <h2 className='py-4'>Overview</h2>
            <p>
              This app is a dashboard manager to access a platform event
              generic, is buil&apos;t to schedule new lessons and videos,
              control the access date of resource and capture new users by
              e-mail.
            </p>
            <a
              href='https://ignite-p5xfc9oxg-janio02011998.vercel.app/'
              target='_blank'
              rel='noreferrer'>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a
              href='https://github.com/janio02011998/ignite-lab'
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
                  <RiRadioButtonFill className='pr-1' /> React
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Typescript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Tailwind
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> GraphQL
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Apollo
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

export default eventPlatform;
