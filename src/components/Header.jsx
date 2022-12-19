import MenuItems from './MenuItems'
import ThemeChanger from './ThemeChanger'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <header className="md:pt-4 container max-w-screen-lg m-auto md:px-12 lg:px-20">
        <nav
          // className="hidden md:flex justify-center items-center h-full mt-auto space-x-6 text-sm lg:justify-center backdrop-filter backdrop-blur-sm  bg-opacity-30"
          className="relative
          w-full
          flex flex-wrap
          items-center
          justify-between
          py-4
          pt-0
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          backdrop-filter bg-opacity-30
          navbar navbar-expand-lg navbar-light"
          aria-label="Main Navigation"
        >
          {/* <Logo /> */}
          <MenuItems />
          <ThemeChanger
            styles={
              'hidden transition-transform ease-in-out focus:outline-none sm:block hover:text-accent group focus-visible:outline-accent'
            }
          />
        </nav>
        <Navbar />
      </header>
    </>
  )
}
export default Header
