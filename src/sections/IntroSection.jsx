import SocialIcons from '@/components/SocialIcons'
import React from 'react'
import { PaperIcon } from '@/configs/icons'
import Image from 'next/image'
// import avatar from '../../public/images/avatar_4.png'
const IntroSection = () => {
  var gravatar = require('gravatar');
  var secureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '500'}, true);
  var smallSecureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '100'}, true);

  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-start">
      {/* <div className="flex-1 flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary">
          Charlie Bleisch
        </h1>
          <SocialIcons />
      </div>
      <div className="w-[80px] sm:w-[186px] relative mb-6 sm:mb-0 rounded-full">
        <Image
          src={secureUrl}
          alt="Charlie Bleisch"
          height={250}
          width={250}
          quality={60}
          className="rounded-full"
          placeholder="blur"
          blurDataURL={smallSecureUrl}
        />

      </div> */}
      <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
          <div>
            <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl md:text-left">
              Charlie Bleisch
            </h1>
            <div class="mt-6 text-lg leading-8 text-gray-600 sm:text-center md:text-left">
              I am a Software Engineer with experience developing scalable web applications. I am passionate about building user-focused, community driven services. I love working closely with other developers, sharing knowledge, and growing as the industry constantly changes.
            </div>
            <div class="mt-8 flex gap-x-4 sm:justify-center">
              <a href="#" class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Get started
                <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
              </a>
              <a href="#" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Live demo
                <span class="text-gray-400" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default IntroSection
