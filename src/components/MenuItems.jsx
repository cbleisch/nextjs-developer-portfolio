import Link from 'next/link'
import { useRouter } from 'next/router'

export const routes = [
  {
    path: '/',
    label: 'Home',
  },
  {
    label: 'About',
    path: '/about',
    to: 'about-section',
  },
  {
    label: 'Resume',
    path: '/resume',
    to: '#resume-section',
  },
  {
    label: 'Posts',
    path: '/posts',
    to: 'posts-section',
  },
  {
    path: 'projects',
    label: 'Projects',
    to: 'projects-section',
  },
  {
    path: '/skills',
    label: 'Skills',
    to: 'skills-section'
  },
]

const MenuItems = () => {
  const removeFocus = e => {
    e.currentTarget.blur()
  }
  const currentRoute = useRouter().pathname
  return (
    <>
      <div className="relative items-center justify-center flex-grow hidden space-x-6 md:flex">
        {routes.map(route => (
          <Link
            key={route.path}
            to={route.to || null}
            href={route.to || route.path}
            className={
              route.path === currentRoute
                ? 'text-fore-primary transition-colors font-bold tracking-wide'
                : 'text-fore-subtle transition-colors tracking-wide nav--item'
            }
            
          >
            <div onClick={removeFocus}>
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
export default MenuItems
