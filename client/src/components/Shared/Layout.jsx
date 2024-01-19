import React from 'react'
import Footer from './Footer'

// eslint-disable-next-line react/prop-types
function Layout({ children, header }) {
  return (
    <div className='max-w-[1920px] mx-auto'>
     {header}
      {children}
      <Footer />
     </div>
  )
}

export default Layout