import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IProjectItem {
  title: string;
  image: StaticImageData;
  link: string;
  technologies: string;
}

export default function ProjectItem({
  image,
  link,
  technologies,
  title,
}: IProjectItem) {
  return (
    <div className='relative flex item-centers justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image
        src={image}
        alt={title}
        className='rounded-xl group-hover:opacity-10'
      />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{technologies}</p>
        <Link href={link}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            More info
          </p>
        </Link>
      </div>
    </div>
  );
}
