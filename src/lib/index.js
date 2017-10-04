import React from 'react';
import { Motion, spring } from 'react-motion';

export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isReady: false }
  }

  componentDidMount() {
    this.setState({ isReady:true })
    window.addEventListener('resize', this.adjustContainer, false)
  }

  adjustContainer = (e) => {
    this.setState({ height: window.innerHeight })
  }

  render() {
    const { children } = this.props

    if (this.state.isReady) {

      if( this.props.fullHeight ) {
        this.props.containerStyle.outter.height = window.innerHeight
      }

      return (
          <div
            ref="container"
            style={ this.props.containerStyle.outter }>
            <div ref="inner-container" style={ this.props.containerStyle.inner }>
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
          this.config = this.props.config
          this.state = {
            toStyle: {
              top: 0,
              left: 0,
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

          const { children } = this.props
          let config = this.props.config

          const fromStyle = {
            top: 0,
            left: 0,
          }

          const commonStyle = {
            position: 'relative',
            marginTop: '-60px'
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
