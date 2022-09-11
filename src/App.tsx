import React from 'react'

// components imports
import Nav from './components/Nav'
import Description from './components/Description'

// images import
import bgImg from './assets/bgimg.png'

function App(): JSX.Element {
  return (
    <main className="App" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="main-row">
        <Nav />
        <Description />
      </div>
    </main>
  )
}

export default App
