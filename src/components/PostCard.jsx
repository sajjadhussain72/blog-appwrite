import React from 'react'
import appwriteService from "../Appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
 

  return (
    <Link to={`/post/${$id}`}>
    
        <div className='relative h-80 w-full overflow-hidden rounded-lg
            bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1
            lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
          
                <img src={appwriteService.getFilePreview(featuredImage)} alt="ljk"
                className='h-full w-full object-cover object-center' />
               <h1 className="text-base font-semibold text-gray-90 ">{title}</h1>
        </div>
    </Link>
  )
}


export default PostCard