import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ForwardArrowIcon } from '@/configs/icons'

const AboutMeSection = () => {
  var gravatar = require('gravatar');
  var secureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '800'}, true);
  var smallSecureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '100'}, true);
  return (
    <section id={'about-section'}
      className="w-full h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/bgs/journal.jpg')"
        // backgroundImage: "linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)), url('/images/bgs/pine-berries.jpg')"
      }}
    >
      <div className="w-full h-screen backdrop-blur bg-white/30 dark:bg-black/50 flex flex-col content-center justify-center">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            
            <div className="flex flex-col md:flex-row gap-12 mx-4">
              <div className={"max-w-md md:max-width-lg sm:mx-auto"}>
                <Image
                  src={secureUrl}
                  width={500}
                  height={500}
                  alt="Charlie Bleisch"
                  className="rounded-full w-full border-color-white outline-slate-500 max-w-sm align-center mx-auto"
                  placeholder="blur"
                  blurDataURL={smallSecureUrl}
                />
              </div>
              <div className="sm:w-full max-w-2xl flex flex-col">
                <h2 className="text-2xl md:text-3xl mb-8 text-fore-primary font-bold w-fit border-b border-b-slate-200 dark:border-b-gray-600">
                  About Me
                </h2>
                <div className="text-2xl text-fore-primary text-center md:text-justify">
                  I am a Software Engineer with experience developing scalable web applications. I am passionate about building user-focused, community driven services. I love working closely with other developers, sharing knowledge, and growing as the industry constantly changes.
                </div>
              </div>
            </div>
            
            {/* <Link to={'resume-section'} className="flex items-center text-accent underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit">
                <span className="mr-1">
                  <ForwardArrowIcon />
                </span>
            </Link> */}

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
