import Date from './Date'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import { ExternalLinkIcon } from '@/configs/icons'
import Image from 'next/image'
// import avatar from '../../public/images/avatar_4.png'
const PostHeader = ({ post }) => {
  var gravatar = require('gravatar');
  var secureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '500'}, true);
  var smallSecureUrl = gravatar.url('charles.bleisch@gmail.com', {s: '100'}, true);
  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <div className="flex items-center mb-8">
        <div className="flex items-center relative">
          <Image
            src={secureUrl}
            width={60}
            height={60}
            alt="Charlie Bleisch"
            className="rounded-full"
            placeholder="blur"
            blurDataURL={smallSecureUrl}
          />
          <span className="ml-2 text-sm">
            Charlie Bleisch |{' '}
            <Date dateString={post.created_at} formatStyle="LLLL dd, yyyy" /> |{' '}
            {post.metadata.category?.title || null}
          </span>
        </div>
      </div>
      {post.metadata.cover_image?.imgix_url
        ?
        <CoverImage
          title={post.title}
          url={post.metadata.cover_image.imgix_url}
        />
        : null
      }
      <div className="flex flex-row justify-between sm:items-center pb-8 border-b">
        <div className="sm:flex items-center gap-x-2">
          {post.metadata.live_url ? (
            <>
              <Link
                href={post.metadata.live_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-accent hover:text-gray-500 text-sm md:ml-4 w-fit"
              >
                Live Site
                <span>
                  <ExternalLinkIcon />
                </span>
              </Link>

              <Link
                href={post.metadata.repo_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-accent hover:text-gray-500 text-sm"
              >
                Github Repo
                <span>
                  <ExternalLinkIcon />
                </span>
              </Link>
            </>
          ) : undefined}
        </div>
      </div>
    </>
  )
}
export default PostHeader
