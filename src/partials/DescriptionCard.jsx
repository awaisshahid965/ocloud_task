import React, { useEffect, useRef } from 'react'

export default function DescriptionCard({ title, body, image }) {

    const bodyRef = useRef(null);

    useEffect(() => {
        bodyRef.current.innerHTML = body;
    }, [])

  return (
    <div className='descpriction_card'>
        <div className="descpriction_card--icon">
            <img src={image} alt="icon" />
        </div>
        <div className="descpriction_card--body">
            <h3>{title}</h3>
            <div ref={bodyRef}></div>
        </div>
    </div>
  )
}
