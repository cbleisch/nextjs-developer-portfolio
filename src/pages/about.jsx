import React from 'react'
import { PaperIcon } from '@/configs/icons'
import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image'
// import avatar from '../../public/images/avatar_4.png'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'
import { getAllPosts } from '@/lib/cosmic'

const About = ({ preview }) => {
  var gravatar = require('gravatar');
  var secureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '500'}, true);
  var smallSecureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '100'}, true);
  return (
    <>
      <PageMeta
        title="About | Developer Portfolio"
        description="About the developer"
      />
      <Layout preview={preview}>
        <section>
          <h1 className="text-2xl md:text-3xl mb-12 font-bold">About Me</h1>
          <div className="flex flex-col md:flex-row-reverse border-b pb-12">
            <div className="flex-1 relative">
              <Image
                src={secureUrl}
                alt="Charlie Bleisch"
                quality={85}
                layout="responsive"
                className="rounded-md"
                placeholder="blur"
                priority
                width={500}
                height={500}
                blurDataURL={smallSecureUrl}
              />
            </div>
            <div className="flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-20">
              <p>I love solving problems!</p>
              <p>
                My name is Charlie Bleisch.
              </p>
              <p>Get in touch to create something awesome together!</p>
              <div className="flex items-center md:mt-6">
                {/* <a
                  href="/your_resume_here.pdf"
                  className="flex items-center mr-4 text-fore-primary border-2 border-accent w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors"
                >
                  <span className="mr-2">
                    <PaperIcon />
                  </span>
                  Resume
                </a> */}
                <SocialIcons />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'posts')) || []
  return {
    props: { allPosts, preview },
  }
}

export default About
