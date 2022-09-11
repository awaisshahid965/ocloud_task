import React, { useEffect, useRef } from 'react'

// partials imports
import ImageIcon from '../partials/ImageIcon'

// interface import
import { DescriptionCardProp } from '../interface'

function DescriptionCard({ title, body, image }: DescriptionCardProp): JSX.Element {

    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (null !== bodyRef.current) {
            bodyRef.current.innerHTML = body;
        }
    }, [])

  return (
    <div className='descpriction_card'>
        <div className="descpriction_card--icon">
            <ImageIcon image={image} />
        </div>
        <div className="descpriction_card--body">
            <h3>{title}</h3>
            <div ref={bodyRef}></div>
        </div>
    </div>
  )
}


export default DescriptionCard;