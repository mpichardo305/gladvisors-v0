import React from 'react'
import Image from 'next/image'

const photos = [
  { src: '/gallery/IMG_0181.JPG', width: 1806 / 2048, height: 1 },
  { src: '/gallery/IMG_1807.JPG', width: 1536 / 2048, height: 1 },
  { src: '/gallery/IMG_4063.JPG', width: 1536 / 2048, height: 1 },
  { src: '/gallery/IMG_6349.JPG', width: 1536 / 2048, height: 1 },
  { src: '/gallery/IMG_6352.JPG', width: 1536 / 2048, height: 1 },
  { src: '/gallery/IMG_6353.JPG', width: 1536 / 2048, height: 1 },
  { src: '/gallery/IMG_6355.JPG', width: 1536 / 2048, height: 1 },
  { src: '/gallery/IMG_9050.JPG', width: 1536 / 2048, height: 1 },
  { src: '/gallery/IMG_6443.JPG', width: 2048 / 1536, height: 1 },
  { src: '/gallery/IMG_6454.JPG', width: 2048 / 1536, height: 1 },
]

const MyGallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4 gap-4 p-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {photos.map((photo, index) => (
        <div key={index} className="relative">
          <Image
            src={photo.src}
            alt={`Image ${index}`}
            layout="responsive"
            width={photo.width}
            height={photo.height}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  )
}

export default MyGallery
