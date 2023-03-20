import { AspectRatio } from '@chakra-ui/react'
import React from 'react'

const Video = ({data}) => {
  return (
    <div>
    
    <AspectRatio maxH="300px" maxW='360px' ratio={1}>
    <iframe
    title='naruto'
    src={data}
    allowFullScreen
    height="100px"
  />
        {/* <iframe width="auto" src={data} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </AspectRatio>
    </div>
  )
}

export default Video