import React from 'react'
import HoverParallax from './hoverParallax'

class App extends React.Component {

  render() {
    return (
      <HoverParallax>
        <HoverParallax.Layer xFactor={0.02} yFactor={0.002}>
          <span>This is the first layer.</span>
        </HoverParallax.Layer>
        <HoverParallax.Layer xFactor={0.04} yFactor={0.004}>
          <span>This is the second layer.</span>
        </HoverParallax.Layer>
        <HoverParallax.Layer xFactor={0.05} yFactor={.005}>
          <span>This is the third layer.</span>
        </HoverParallax.Layer>
      </HoverParallax>
    )
  }
}

export default App
