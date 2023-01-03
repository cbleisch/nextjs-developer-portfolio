// import {Date as Date2} from './Date'
import Link from 'next/link'
import { ForwardArrowIcon } from '@/configs/icons'
import ReactHtmlParser from 'react-html-parser'
import { parse, format } from 'date-fns';
// import { faMinus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Minus, Circle } from 'react-feather'
// import RemoveIcon from '@mui/icons-material/Remove';
function sortByDirection(field1, field2, direction) {

  const date1 = Number(parse(field1, 'yyyy-MM-dd', new Date('1988-04-16')))
  const date2 = Number(parse(field2, 'yyyy-MM-dd', new Date('1988-04-16')))
  if(date1 === 'Invalid Date' || date2 === 'Invalid Date') {
    console.warn(`Invalid Date provided: ${field1}; ${field2}`)
  }

  if(direction.toLowerCase() === 'asc') {
    return date1 - date2;
  } else if(direction.toLowerCase() === 'desc') {
    return date2 - date1;
  }
}
// orderDirection: default to desc causes blog-like, LIFO behavior: most recent content first
const PostList = ({ allPosts, postType, home, orderField, orderDirection = 'desc', disableItemLink, showContent }) => {
  console.log(allPosts)
  let orderedPosts = null;
  if(orderField) {
    orderedPosts = allPosts.sort((a,b) => {
      if(a.hasOwnProperty(orderField) && b.hasOwnProperty((orderField))) {
        return sortByDirection(a[orderField], b[orderField], orderDirection);  
        } else if(a.metadata.hasOwnProperty(orderField) && b.metadata.hasOwnProperty(orderField)) {
          return sortByDirection(a.metadata[orderField], b.metadata[orderField], orderDirection)
        } else {
          console.warn(`Post Type ${postType} cannot be ordered by attribute ${orderField}`)
        }
      })
    
    
    // console.warn('')
    allPosts = orderedPosts;
  }

  

  return (
    <>
      <ul
        className={!home ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : undefined}
      >
        { allPosts.map(post => (
          <li
            className={
              home
                ? ''
                : 'flex flex-col bg-white dark:bg-gray-800 rounded shadow-sm hover:shadow-md transition-all relative'
            }
            key={post.title}
          >

            <Link href={`/${postType}/${post.slug}`}
              className={
                home
                  ? 'group flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 py-5 -my-5 -mx-7 hover:bg-back-subtle transition-colors mb-12 w-full'
                  : 'group flex flex-col justify-start gap-y-6 p-8 h-full'
              }
            >
             
                <div className="w-full">
                  <h3 className="text-3xl font-semibold mb-1 group-hover:text-accent transition-colors tracking-wide">
                    {post.title}{' '}
                    {post.status === 'draft' && home && (
                      <span className="text-fore-subtle ml-2">
                        &#40;Draft&#41;
                      </span>
                    )}
                  </h3>
                  <span className="flex items-center">
                    { post.metadata?.position_title ?
                      <>
                        <h4 className="text-xl mb-1 italic font-serif mb-0">{post.metadata?.position_title}</h4><Circle className="mx-2" strokeWidth={1} width={18} height={18} />
                      </>
                      : null
                    }
                    <i className="fat fa-circle fa-xl fa-fw" />
                    { postType === 'career-experiences' ?
                      <>
                        { post.metadata?.start_date ?
                          <h4 className="text-lg mb-1 text-fore-primary font-thin tracking-wide uppercase mb-0">{format(new Date(post.metadata.start_date), 'LLLL yyyy')}</h4>
                          : null
                        }
                        <Minus strokeWidth={0.5} />
                        {/* <RemoveIcon strokeWidth={0.5} /> */}
                        { post.metadata?.end_date ?
                          <h4 className="text-lg mb-1 text-fore-primary font-thin tracking-wide uppercase mb-0">{format(new Date(post.metadata.end_date), 'LLLL yyyy')}</h4>
                          : <h4 className="text-lg mb-1 text-fore-primary font-thin tracking-wide uppercase mb-0">PRESENT</h4>
                        }
                      </>
                      : null
                    }
                  </span>
                  <div className="text-fore-subtle mb-3 lg:mb-0 lg:pr-6">
                    {post.metadata.excerpt}
                  </div>
                  { showContent && post.content ?
                    <div className="text-lg text-justify md:mt-8 mb-3 lg:mb-0 lg:pr-6">
                      {/* {ReactHtmlParser(post.content)} */}
                      {post.content}
                    </div>
                    : null
                  }
                </div>
                {home ? (
                  // <Date2
                  //   dateString={post.created_at}
                  //   formatStyle="LLLL, yyyy"
                  // ></Date2>
                  null
                ) : (
                  <div className="flex items-center text-fore-subtle text-sm">
                    Read more
                    <span className="group hidden group-hover:block ml-2">
                      <ForwardArrowIcon />
                    </span>
                    {post.status === 'draft' && (
                      <span className="absolute right-1 top-1 bg-back-subtle px-3 py-1 rounded text-accent">
                        Draft
                      </span>
                    )}
                  </div>
                )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default PostList
