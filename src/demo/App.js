import React from 'react';
import HoverParallax from '../lib';

class App extends React.Component {
  render() {

    const style = {
      backgroundImage: `url(${require('./imgs/bg1.png')})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width:'100%',
      height:500,
      position: 'relative',
      overflow: 'hidden'
    }

    return (
      <HoverParallax containerStyle={style} fullHeight={true}>
        <HoverParallax.Layer config={{
            xFactor: 0.2,
            yFactor: 0,
            springSettings: {
              stiffness: 100,
              damping: 100
            }
          }}>
          {/* Add any markup here as children */}
          <img src={require('./imgs/bg2.png')} alt="Parallax hover layer 1"></img>
        </HoverParallax.Layer>
        <HoverParallax.Layer config={{
            xFactor: 0.4,
            yFactor: 0,
            springSettings: {
              stiffness: 100,
              damping: 50
            }
          }}>
          {/* This .Layer will be on top or 'closer' than the previous */}
          <img src={require('./imgs/bg3.png')} alt="Parallax hover layer 2"></img>
        </HoverParallax.Layer>
      </HoverParallax>
    )
  }
}

export default App;
