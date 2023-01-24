import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';

import Podcast from '../../public/assets/projects/podcast.png';

const podcast = () => {
  return (
    <>
      <Head>
        <title>JC - Nossa UESC </title>
      </Head>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
          <Image
            fill
            style={{ objectFit: 'cover', position: 'absolute', zIndex: 1 }}
            src={Podcast}
            alt='Nossa UESC APP'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Nossa UESC</h2>
            <h3>TypeScript / React-Native / Firebase</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This app was built using Typescript, React-Native and MongoDB. The
              app there two user target, student and professo that are able to
              make connection in 6 different group and handle events like study,
              sport, research academic and scholarship more efficiently and
              easily. The app there option to help other people to share
              equipment and object not used. Was publish in end of 2021 to
              conclusion of my graduation on Universidade Estadual de Santa Cruz
              to acquire Bachelor on Computer Science.
            </p>
            <a
              href='https://play.google.com/store/apps/details?id=com.nossauesc.app'
              target='_blank'
              rel='noreferrer'>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a
              href='https://github.com/janio02011998/nossauesc'
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
                  <RiRadioButtonFill className='pr-1' /> React-Native
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Context API
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Typescript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Firebase Storage
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Firebase Firestore
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> JWT
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

export default podcast;
