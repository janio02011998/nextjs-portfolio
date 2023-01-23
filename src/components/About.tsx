import Image from 'next/image';
import React from 'react';

import AboutImg from '../../public/assets/about.jpg';

export default function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>

          <p className='py-2 text-gray-600'>
            Hello, I have spent the last 5 years in the development working like
            as professional multi stack developer. Started my career with
            development in 2016 in the University when i get my Bachelor by
            Universidade Estadual de Santa Cruz in Computer Science. I had
            working with huge clients on Brazil with companies like PortoSeguro
            and Agrow.pay in my last company.
          </p>
          <p className='py-2 text-gray-600'>
            I specialize in building multiples types of application like mobile
            and front-end UI applications that connect with REST API&apos;s and
            other backend technologies. I&apos;m passionate about learning new
            technologies and understand there is more than one way to accomplish
            a task. Though I am most proficient in building solutions with
            Typescript, React and Node.js, I am a quick learner and can pick up
            new tech stacks as needed. I believe that being a great developer is
            not using one specific language, but choosing the best tool for the
            job.
          </p>
          <p>Check out some of my latest projects</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
}
