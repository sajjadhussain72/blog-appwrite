import React from 'react'

const Logo = ({width = '100px'}) => {
  return (
    <div className='w-12  h-12'>
     {/* <img className='h-full w-full object-cover object-center rounded-full' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" /> */}
       <img className='w-12  h-12 rounded-full' src="https://images.pexels.com/photos/4414506/pexels-photo-4414506.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
       
    </div>
  )
}

export default Logo;