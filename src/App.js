import React from 'react'
import HoverParallax from './hoverParallax'

class App extends React.Component {

  render() {
    return (
      <HoverParallax>
        <HoverParallax.Layer xFactor={0.05} yFactor={0.2}>
          <span>This is the first layer.</span>
        </HoverParallax.Layer>
        <HoverParallax.Layer xFactor={0.1} yFactor={0.5}>
          <span>This is the second layer.</span>
        </HoverParallax.Layer>
        <HoverParallax.Layer xFactor={0.5} yFactor={1}>
          <span>This is the third layer.</span>
        </HoverParallax.Layer>
      </HoverParallax>
    )
  }
}

export default App
