import React from 'react';
import {Motion, spring} from 'react-motion';

export default class extends React.Component {

  constructor(props) {
    super(props)

    this.state = { isReady: false }
    this.layers = []
  }

  componentDidMount() {
    this.setState({isReady: true})
  }

  render() {
    const { children } = this.props
    return (
      <div ref="container">
          { children }
      </div>
    )
  }

  static Layer = class extends React.Component {

        constructor(props) {
          super(props)
          this.state = {
            finalStyle: {
              top: spring(0, {stiffness:120, damping:20}),
              left: spring(0, {stiffness:120, damping:20})
            }
          }
        }

        componentDidMount() {
          window.addEventListener('mousemove', this.updatePosition, false)
        }

        updatePosition = (e) => {
          const xFactor = this.props.xFactor
          const yFactor = this.props.yFactor
          var getYFromCenter = yFactor * ((e.view.innerHeight / 2) - e.clientY)
          var getXFromCenter = xFactor * ((e.view.innerWidth / 2) - e.clientX)
          this.setState(prevState => ({
            finalStyle: {
              top: spring(getYFromCenter, {stiffness:120, damping:20}),
              left: spring(getXFromCenter, {stiffness:120, damping:20})
            }
          }))
        }

        render() {

          const { children, moveRatio } = this.props;

          const initialStyle = {
            top: 0,
            left: 0,
          }

          const commonStyle = {
            position: 'absolute'
          }

          return (
                <Motion defaultStyle={initialStyle} style={this.state.finalStyle}>{motionStyle =>
                  <div ref="layer" style={{...motionStyle, ...commonStyle}}>
                    { children }
                  </div>
                }</Motion>
            )
        }
    }
}
