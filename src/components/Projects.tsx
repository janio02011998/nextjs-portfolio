import React from 'react';

import ProjectItem from './ProjectItem';

import NossaUESC from '../../public/assets/projects/nossauesc.png';
import MoveIt from '../../public/assets/projects/moveit.png';
import Podcast from '../../public/assets/projects/podcast.png';
import EventPlatform from '../../public/assets/projects/event-plataform.png';

export default function Projects() {
  const projects = [
    {
      title: 'Nossa UESC App',
      image: NossaUESC,
      link: '',
      technologies: 'TypeScript | React-Native | Firebase',
    },
    {
      title: 'Podcast List',
      image: Podcast,
      link: '',
      technologies: 'TypeScript | Next | Rest API',
    },
    {
      title: 'EventPlatform',
      image: EventPlatform,
      link: '',
      technologies: 'TypeScript | Next | GraphQL',
    },
    {
      title: 'MoveIt',
      image: MoveIt,
      link: '',
      technologies: 'TypeScript | Next',
    },
  ];

  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 py-4>What I&apos;ve Built</h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map(item => (
            <ProjectItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
