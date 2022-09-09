import React from 'react'

export default function ({ title, image }) {
  return (
    <button className="btn btn-danger btn-large">
        {title} { image !== null && <img src={image} alt="arrow_icon" /> }
    </button>
  )
}
