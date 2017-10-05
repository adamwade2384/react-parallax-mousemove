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
        color: 'white',
        letterSpacing: '0.62px',
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
      },
      infoLayerStyle: {
        position: 'relative',
        marginTop: '-60px'
      },
      bgLayerStyle: {
        position: 'absolute',
        height: '100%',
        transform: 'translate(-15%, 17%)',
      }
    }

    return (
      <div>
        <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.05,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={require('./imgs/bg4.png')} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.15,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={require('./imgs/bg5.png')} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.25,
              yFactor: 0.025,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={require('./imgs/bg7.png')} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer layerStyle={style.bgLayerStyle} config={{
              xFactor: 0.4,
              yFactor: 0.05,
              springSettings: {
                stiffness: 50,
                damping: 30
              }
            }}>
            <img src={require('./imgs/bg6.png')} alt="Parallax Layer"></img>
          </ParallaxMousemove.Layer>
          <div style={style.inner}>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.2,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={require('./imgs/bg1.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={require('./imgs/bg2.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.4,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={require('./imgs/bg3.png')} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <h1 style={style.header}>REACT-PARALLAX-MOUSEMOVE</h1>
            <p style={style.paragraph}>A simple react component for creating a parallax effect connected to the mousemove event.</p>
            <a href="https://www.npmjs.com/package/react-parallax-mousemove" style={style.button}>npm install react-parallax-mousemove --save</a>
          </div>
        </ParallaxMousemove>
      </div>
    )
  }
}

export default App;
