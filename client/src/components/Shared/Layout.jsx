import React from 'react'
import Footer from './Footer'

// eslint-disable-next-line react/prop-types
function Layout({children,header}) {
  return (
    <div>
        {header}
         {/* <div className='relative overflow-hiden'> */}
               
                {children}
                <Footer />
            {/* </div> */}
    </div>
  )
}

export default Layout