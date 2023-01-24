import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>JC | Resume</title>
        <meta
          name='description'
          content='I’m a full stack developer specializing in building exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Jânio Carvalho </h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/janio-carvalho-95966016b'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/janio02011998'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Front-end {' '}
              <span className='px-1'>|</span> Mobile <span className='px-1'>|</span> Back-end
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>Node.js
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Styled-Components
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>RESTAPI
            <span className='px-2'>|</span>GCP
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Pixter Technologies
            </span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic'>FullStack Developer(Set 2021 - Jan 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Development template of e-mail.
            </li>
            <li>
              Development webpages with React.
            </li>
            <li>
              Create/update app mobile with React-native (Typescript).
            </li>
            <li>
              Publish Play Store.
            </li>
            <li>
              Create/update new services on back-end with Node.js.
            </li>
            <li>
              Database Firebase and MongoDB.
            </li>
            <li>
              Google Cloud Platform.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Ruptiva
            </span>
            <span className='px-2'>|</span>Porto Alegra, RS
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (Marc 2021 - Set 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              - Development applications with React, React-Native and Typescript.
            </li>
            <li>
              - Serveless with Firebase
            </li>
            <li>
              - Documentation and Git.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Self-Employee
            </span>
            <span className='px-2'>|</span>Freelancer, Remote
          </p>
          <p className='py-1 italic'>FullStack Developer  (Jan 2020 - Mar 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              This project aims to research and build a middleware that is responsible for intermediating sensor requests used by sensors, using concepts already established in the Internet of Things and a dashboard for validating information.
            </li>
            <li>
              Front-end: React, Next.js, React-Native and Typescript.
            </li>
            <li>
              Back-end: Node.js, Express, Typescript.
            </li>
            <li>
              Tools: Figma, Git and Vercel.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              LIF
            </span>
            <span className='px-2'>|</span>Universidade Estadual de Santa Cruz, Ilhéus-BA
          </p>
          <p className='py-1 italic'>FullStack Developer Jr (Ago 2018 - Jul 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              This project aims to research and build a middleware that is responsible for intermediating sensor requests used by sensors, using concepts already established in the Internet of Things and a dashboard for validating information.
            </li>
            <li>
              Front-end: React, SCSS and Yup.
            </li>
            <li>
              Back-end: Node.js, Express, Typescript and Joi.
            </li>
            <li>
              Tools: Arduino
            </li>
          </ul>
        </div>



        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              LIF
            </span>
            <span className='px-2'>|</span>Universidade Estadual de Santa Cruz, Ilhéus-BA
          </p>
          <p className='py-1 italic'>FullStack Developer Jr (Ago 2017 - Set 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              This project has as main idea to create a back-end service to control the data of the water control system called &quot;IoTÁgua&quot;. This system obtains information from sensors and sends it to the back-end to store it while the front-end consumes the service for dashboard generation            </li>
            <li>
              Front: PrimeFaces and JSF.
            </li>
            <li>
              Back-end: Java, PostgreSQL and MySQL.
            </li>
            <li>
              Tools: Arduino and ESP8266.
            </li>
          </ul>
        </div>



        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Course Academic
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Universidade Estadual de Santa Cruz </span>
            <span className='px-2'>|</span>Ilhéus, BA
          </p>
          <p className='py-1 italic'>Computer Science  (2016 – 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
