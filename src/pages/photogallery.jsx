import React from 'react'
import Gallery from 'react-photo-gallery'

const photos = [
  { src: '/src/images/gallery/IMG_0181.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_1807.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_4063.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_6349.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_6352.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_6353.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_6355.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_6443.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_6454.JPG', width: 4, height: 3 },
  { src: '/src/images/gallery/IMG_9050.JPG', width: 4, height: 3 },
]

const MyGallery = () => {
  return <Gallery photos={photos} />
}

export default MyGallery
