import { useState } from 'react'
import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostList from '@/components/PostList'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'

const Projects = ({ allPosts, allProjectCategories, preview }) => {
  const [filterCategory, setFilterCategory] = useState('All')

  const filteredPosts = allPosts;
  // const filteredPosts = allPosts.filter(
  //   project => project.metadata.category.title === filterCategory
  // )

  return (
    <>
      <PageMeta
        title="Projects | Developer Portfolio"
        description="The projects of this developer"
      />
      <Layout preview={preview}>
        <h1 className="text-2xl md:text-3xl text-fore-primary font-bold">
          Projects
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
          {allProjectCategories.map(category => (
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
          postType="projects"
          home={false}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'projects')) || []
  // const allProjectCategories = (await getAllCategories('project-categories')) || []
  const allProjectCategories = []
  return {
    props: { allPosts, allProjectCategories, preview },
  }
}
export default Projects
