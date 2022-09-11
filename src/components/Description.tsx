import React from 'react'

// partials imports
import DescriptionCard from '../partials/DescriptionCard'
import Button from '../partials/Button'

// images imports
import arrowIcon from '../assets/arrow.png'

// json data imports
import descprictionCardsData from '../descprictionCardsData'


function Description(): JSX.Element {
  return (
    <section className='description'>

        <p className="description--p">
            Echo Bravo Charlie, we have lift off.
        </p>

        <p className="description--p">
         We've just received a distress signal from an botanist named Louis, who is carrying out research on a remote island. According to the local weather reports, a cyclone is about to hit the island, potentially destroying everything in its path.
        </p>

        <p className="description--p">
         Most people have already made it to safety, but this stubborn man refused to leave his work behind. It is our task to rescue him and bring him and his valuable work back to safety.<br />
         With the power down, there's no way to get in touch, so I'm not sure what to expect.
        </p>

        <p className="description--p">
         I'm currently flying towards one of the islands that he was last known to visit and could really use your help.<br />Let's work together and rescue him, before the cyclone hits the island.
        </p>

        <div className="descpriction_card--wrapper">
            {
                descprictionCardsData.map((data, index) => {
                    return (
                        <DescriptionCard {...data} key={data.title +index} />
                    )
                })
            }
        </div>

        <div style={{textAlign: 'center'}}>
            <Button title={"Continue"} image={arrowIcon} />
        </div>

    </section>
  )
}


export default Description;