import React from 'react';

export default function Skills() {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='w-max-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg-grid-cols-4 gap-8'></div>
      </div>
    </div>
  );
}
