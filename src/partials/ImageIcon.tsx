import React from 'react'

// interface import
import { ImageProp } from '../interface'

function ImageIcon({ image }: ImageProp): JSX.Element {
  return (
    <img src={image} alt="image_icon" />
  )
}

export default ImageIcon;