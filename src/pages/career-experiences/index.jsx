import { useState } from 'react'
import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostList from '@/components/PostList'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'

const CareerExperiences = ({ allPosts, allCareerExperiencesCategories, preview }) => {
  const [filterCategory, setFilterCategory] = useState('All')

  const filteredPosts = allPosts.filter(
    project => project.metadata.category.title === filterCategory
  )

  return (
    <>
      <PageMeta
        title="Career Experiences | Developer Portfolio"
        description="The projects of this developer"
      />
      <Layout preview={preview}>
        <h1 className="text-2xl md:text-3xl text-fore-primary font-bold">
            Career Experiences
        </h1>
        <ul className="flex gap-x-4 my-4">
          <li
            className={
              'All' === filterCategory
                ? 'cursor-pointer font-bold filter--active transition'
                : 'cursor-pointer text-fore-subtle transition'
            }
            onClick={() => setFilterCategory('All')}
            key={'All'}
          >
            All
          </li>
          {allCareerExperiencesCategories.map(category => (
            <li
              className={
                category.title === filterCategory
                  ? 'cursor-pointer font-bold filter--active transition'
                  : 'cursor-pointer text-fore-subtle transition hover:text-accent'
              }
              onClick={() => setFilterCategory(category.title)}
              key={category.title}
            >
              {category.title}
            </li>
          ))}
        </ul>
        <PostList
          allPosts={filterCategory === 'All' ? allPosts : filteredPosts}
          postType="career-experiences"
          home={false}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'career-experiences')) || []
  const allCareerExperiencesCategories = (await getAllCategories('career-experiences-categories')) || []
  return {
    props: { allPosts, allCareerExperiencesCategories, preview },
  }
}
export default CareerExperiences
