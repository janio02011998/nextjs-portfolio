import Image from 'next/image';
import React from 'react';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import ContactPNG from '../../public/assets/contact.jpg';
import Link from 'next/link';

export default function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen flex items-center'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get in Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactPNG}
                  alt='Contact image'
                />
              </div>
              <div>
                <h2 className='py-2'>Jânio Carvalho</h2>
                <p>FullStack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me add and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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

          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                method='POST'
                encType='multipart/form-data'
                action={process.env.FORM_API}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      required
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      name='phone'
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    required
                    name='email'
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    name='subject'
                    required
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    name='message'
                    required
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows={10}
                  />
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
