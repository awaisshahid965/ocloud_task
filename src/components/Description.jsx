import React from 'react'

// partials imports
import DescriptionCard from '../partials/DescriptionCard'
import Button from '../partials/Button'

// images imports
import arrowIcon from '../assets/arrow.png'
import clock from '../assets/clock.png'
import _2ppl from '../assets/two-men.png'
import xmark from '../assets/x-mark.png'



const descprictionCardsData = [
    {
        title: 'Overview',
        image: clock,
        body: `<p>
        You'll have 60 minutes to help captain Roger on his adventure to save the botanist.<br />The time starts counting down as soon as anyone presses Start Game on the next screen.<br />You can continue playing if you don't make it within 60 minutes, but won't get a spot on the leaderboard.</p><p>For each challenge you can use Google or any other website to find answers.</p>`
    },
    {
        title: 'Teamwork',
        image: _2ppl,
        body: `<p>To be successful, you'll need to work closely together.<br />
        Make sure you have set up a video call in case you are not physically together.<br />
        You can use Zoom, Teams, The Pub Hub or any other app you'd like.<p/><p>
        Only 1 person in the team needs to submit an answer or request a hint.<br />
        Before submitting an answer or requesting a hint, first discuss with your team if everyone agrees.<br />After a few seconds everyone will see the result.<p/>`
    },
    {
        title: 'Penalties',
        image: xmark,
        body: `<p>You can get help in case you’re stuck. Simply press the Request Hint button.<br />
        Once you've requested a hint, a counter shows you when your next hint becomes available.</p>
        <p>Requesting a hint results in a 30 second time penalty.<br />
        Submitting an incorrect answer also results in a 30 second time penalty.</p>`
    }
];

export default function  () {
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

        <center>
            <Button title={"Continue"} image={arrowIcon} />
        </center>

    </section>
  )
}
