import SocialIcons from '@/components/SocialIcons'
import React from 'react'
import { PaperIcon } from '@/configs/icons'
import Image from 'next/image'
import Link from 'next/link'
// import avatar from '../../public/images/avatar_4.png'
const IntroSection = () => {
  var gravatar = require('gravatar');
  var secureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '500'}, true);
  var smallSecureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '100'}, true);

  return (
    // <section className="w-full h-screen flex flex-col-reverse md:flex-row justify-start">
    <section
      className="w-full h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/bgs/pine-berries.jpg')"
        // backgroundImage: "linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)), url('/images/bgs/pine-berries.jpg')"
      }}
    >
      <div className="w-full h-screen backdrop-blur-md bg-white/30 flex flex-col content-center justify-center">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            
                <h1 className="text-4xl font-bold tracking-tight sm:mx-auto lg:mx-0 sm:text-6xl border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
                  Charlie Bleisch
                </h1>
                <div className="mt-6 text-2xl leading-8 text-fore-primary text-center md:text-justify">
                  I am a Software Engineer with experience developing scalable web applications. I am passionate about building user-focused, community driven services. I love working closely with other developers, sharing knowledge, and growing as the industry constantly changes.
                </div>
                <div className="mt-8 flex justify-center gap-x-4">
                  <Link
                    href="#about-section"
                    to={'about-section'}
                    className="text-fore-primary transition-colors anchor-link px-4 py-1.5 flex text-xl font-semibold leading-7 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 mr-2 dark:fill-white">
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/>
                    </svg>
                    Scroll Down
                  </Link>
                </div>
              
          </div>
        </div>
      </div>
      {/* <div className="fixed top-16 right-0 bottom-0 left-0 w-full h-screen overflow-hidden bg-fixed bg-black z-0 opacity-20" /> */}
    </section>
  )
}

export default IntroSection
