import React from 'react';
import ParallaxMousemove from '../lib';

class App extends React.Component {
  render() {

    const style = {
      outter: {
        background: 'radial-gradient(50% 150%, #6CD7E8 50%, #59C2D3 100%)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width:'100%',
        height:500,
        position: 'relative',
        overflow: 'hidden'
      },
      inner: {
        width:700,
        height:500,
        position: 'absolute',
        margin:'auto',
        top:0,
        left:0,
        right:0,
        bottom:0,
        textAlign:'center'
      },
      header: {
        fontFamily: 'Open Sans Condensed',
        textTransform: 'uppercase',
        color: 'white',
        textShadow: '0px 0px 2px #43AABA',
        fontSize: '50px',
        marginTop: '35px',
        fontWeight: 600
      },
      paragraph: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        color: '#247B8A',
        letterSpacing: '0.62px',
        textShadow: '0px 0px 2px #43AABA',
        lineHeight: '30px',
        fontWeight: 300
      },
      button: {
        fontFamily: 'Roboto',
        borderRadius: '100px',
        background: '#247B8A',
        textDecoration: 'none',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        fontWeight: 100,
        display: 'block'
      }
    }

    return (
      <ParallaxMousemove containerStyle={style} fullHeight={true}>
        <ParallaxMousemove.Layer config={{
            xFactor: 0.2,
            yFactor: 0,
            springSettings: {
              stiffness: 50,
              damping: 30
            }
          }}>
          {/* Add any markup here as children */}
          <img src={require('./imgs/bg1.png')} alt="Parallax hover layer 1"></img>
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer config={{
            xFactor: 0.3,
            yFactor: 0,
            springSettings: {
              stiffness: 50,
              damping: 30
            }
          }}>
          {/* Add any markup here as children */}
          <img src={require('./imgs/bg2.png')} alt="Parallax hover layer 2"></img>
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer config={{
            xFactor: 0.4,
            yFactor: 0,
            springSettings: {
              stiffness: 50,
              damping: 30
            }
          }}>
          {/* This .Layer will be on top or 'closer' than the previous */}
          <img src={require('./imgs/bg3.png')} alt="Parallax hover layer 3"></img>
        </ParallaxMousemove.Layer>

        <h1 style={style.header}>REACT-PARALLAX-MOUSEMOVE</h1>
        <p style={style.paragraph}>A simple react component for creating a parallax effect connected to the mousemove event.</p>
        <a href="https://www.npmjs.com/package/react-parallax-mousemove" style={style.button}>npm install react-parallax-mousemove --save</a>

      </ParallaxMousemove>
    )
  }
}

export default App;
