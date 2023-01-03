import { useState } from 'react'
import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostList from '@/components/PostList'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'

const EducationExperiences = ({ allPosts, allEducationExperiencesCategories, preview }) => {
  const [filterCategory, setFilterCategory] = useState('All')

  const filteredPosts = allPosts.filter(
    project => project.metadata.category.title === filterCategory
  )

  return (
    <>
      <PageMeta
        title="Education | Developer Portfolio"
        description="The projects of this developer"
      />
      <Layout preview={preview}>
        <h1 className="text-2xl md:text-3xl text-fore-primary font-bold">
            Education
        </h1>
        <PostList
          allPosts={filterCategory === 'All' ? allPosts : filteredPosts}
          postType="education-experiences"
          home={false}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'education-experiences')) || []
  const allEducationExperiencesCategories = (await getAllCategories('education-experiences-categories')) || []
  return {
    props: { allPosts, allEducationExperiencesCategories, preview },
  }
}
export default EducationExperiences
