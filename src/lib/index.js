import React from 'react';
import { Motion, spring } from 'react-motion';

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isReady: false }
  }

  componentDidMount() {
    this.setState({ isReady:true })
  }

  render() {
    const { children } = this.props

    if (this.state.isReady) {

      if( this.props.fullHeight ) {
        // override the height style if fullHeight is truthy
        this.props.containerStyle.height = window.innerHeight
      }

      const commonStyle = {
        backgroundImage: `url(${this.props.bgImgSrc})` || '',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }

      return (
          <div
            ref="container"
            style={ commonStyle }>
            <div ref="inner-container" style={ this.props.containerStyle }>
              { children }
            </div>
          </div>
      )}

    return <div>Parallax hover is not yet ready.</div>

  }

  static Layer = class extends React.Component {

        constructor(props) {
          super(props)
          this.resizeTimeout = false
          this.state = {
            toStyle: {
              top: 0,
              left: 0
            }
          }
        }

        componentDidMount() {
          window.addEventListener('mousemove', this.updatePosition, false)
        }

        updatePosition = (e) => {

          let config = this.props.config

          if ( !this.resizeTimeout ) {
            this.resizeTimeout = setTimeout(() => {
              this.resizeTimeout = null;
              const xFactor = config.xFactor
              const yFactor = config.yFactor
              var getYFromCenter = yFactor * ((e.view.innerHeight / 2) - e.clientY)
              var getXFromCenter = xFactor * ((e.view.innerWidth / 2) - e.clientX)
              this.setState({
                toStyle: {
                  top: spring(getYFromCenter, config.springSettings),
                  left: spring(getXFromCenter, config.springSettings)
                }
              })
            }, 75);
          }
        }

        render() {

          const { children } = this.props;

          const fromStyle = {
            top: 0,
            left: 0,
          }

          const commonStyle = {
            position: 'absolute'
          }

          return (
                <Motion defaultStyle={fromStyle} style={this.state.toStyle}>{motionStyle =>
                  <div ref="layer" style={{...motionStyle, ...commonStyle}}>
                    { children }
                  </div>
                }</Motion>
            )
        }
    }
}
