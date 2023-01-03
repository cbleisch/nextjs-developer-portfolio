import { getAllPosts } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ToolboxSection from '@/sections/ToolboxSection'
import ProjectsSection from '@/sections/ProjectsSection'
import PostsSection from '@/sections/PostsSection'
import ContactSection from '@/sections/ContactSection'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'
import ResumeSection from '@/sections/ResumeSection';
import EducationSection from '@/sections/EducationSection'

const Index = ({ allPosts, allProjects, allCareerExperiences, allEducationExperiences, preview }) => {
  return (
    <>
      <PageMeta
        title="Charlie Bleisch | Developer Portfolio"
        description="Developer Portfolio "
      />
      <Layout preview={preview} className="scroll-smooth">
        <IntroSection />
        <AboutMeSection />
        <ResumeSection posts={allCareerExperiences} />
        <EducationSection posts={allEducationExperiences} />
        <ToolboxSection />
        <ProjectsSection posts={allProjects} />
        <PostsSection posts={allPosts} />
        <ContactSection />
      </Layout>
    </>
  )
}

// Below, we are calling the function in our cosmic.js file, and getting the posts from our Cosmic bucket. Since we are fetching from a single function in our cosmic.js file, we state whether we are viewing a preview of our page, what kind of posts we want (since we have blog posts and works posts), and the amount of posts we want to grab. In this case on the home page, I specified a limit of 3 posts.

export async function getStaticProps({ preview = null }) {
  let allPosts = [];
  let allProjects = [];
  let allCareerExperiences = [];
  let allEducationExperiences = [];


  try {
    allPosts = (await getAllPosts(preview, 'posts', 3))
  } catch(err) {
    console.log(err)
  }
  try {
    allCareerExperiences = (await getAllPosts(preview, 'career-experiences', 3))
  } catch(err) {
    console.log(err)
  }

  try {
    allEducationExperiences = (await getAllPosts(preview, 'education-experiences', 3))
  } catch(err) {
    console.log(err)
  }
  try {
    allProjects = (await getAllPosts(preview, 'projects', 3))
  } catch(err) {
    console.log(err)
  }

  
  return {
    props: { allPosts, allProjects, allCareerExperiences, allEducationExperiences, preview },
  }
}
export default Index
