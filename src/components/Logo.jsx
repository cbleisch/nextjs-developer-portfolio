import Link from 'next/link'
import Image from 'next/image'
const Logo = () => {
  return (
    <Link
        href="/"
        aria-label="Website logo, go back to homepage."
        className="flex items-center border-white group focus-visible:outline-accent"
      >
        <div>
        <Image
          src={'/images/logos/logo-no-background.svg'}
          quality={60}
          alt={`Charlie Bleisch Logo`}
          // fill
          width={300}
          height={200}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          // priority
        />
        </div>
        {/* <div className="overflow-hidden transition ease-in-out rounded-full  hover:opacity-60">
          <span className="text-sm">cosmicjs</span>
          <span className="text-sm text-accent">.com</span>
        </div> */}
      
    </Link>
  )
}
export default Logo
