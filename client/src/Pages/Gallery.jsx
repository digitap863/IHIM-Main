import React from 'react'
import Layout from '../components/Shared/Layout'
import GalleryComponent from '../components/Gallery/GalleryComponent'
import GalleryHeader from '../components/Gallery/Header'

function Gallery() {
  return (
    <div>
       <Layout header={<GalleryHeader/>}>
            <GalleryComponent/>
       </Layout>
    </div>
  )
}

export default Gallery