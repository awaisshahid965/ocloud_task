import React from 'react'

// partials imports
import ImageIcon from '../partials/ImageIcon'

// interface import
import { ButtonProp } from '../interface'


function Button({ title, image }: ButtonProp): JSX.Element {
  return (
    <button className="btn btn-danger btn-large">
        {title} { image !== null && <ImageIcon image={image} /> }
    </button>
  )
}

export default Button;
