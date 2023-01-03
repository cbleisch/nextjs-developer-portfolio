import PostList from '@/components/PostList'
import { PencilIcon } from '@/configs/icons'
import Link from 'next/link'

const ResumeSection = ({ posts }) => {
  return (
    <section className="w-full h-screen bg-cover bg-center bg-fixed flex justify-center items-center bg-gradient-to-r from-cyan-300 to-indigo-400 dark:from-cyan-500 dark:to-indigo-800" id={'resume-section'}>
      
      
        <div className="flex flex-col md:flex-row gap-12 mx-4 content-center justify-center">
            <div className={"max-w-md sm:mx-auto"}>
                <h4 className="text-xl text-accent uppercase font-semibold underline decoration-rose-300 underline-offset-4 tracking-widest text-slate-700 dark:text-white">
                    Career
                </h4>
            </div>
            <div className="sm:w-full max-w-3xl flex flex-col">
                <PostList
                    allPosts={posts}
                    postType="career-experiences"
                    home={true}
                    orderField={'start_date'}
                    disableItemLink
                    showContent
                />
                { posts.length > 2 ?
                    <Link href="/career-experiences">More Career Experiences</Link>
                    : null
                }
            </div>
        </div>
    </section>
  )
}

export default ResumeSection
