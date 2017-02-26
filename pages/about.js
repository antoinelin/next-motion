import React, { Component } from 'react'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'

// Import from /components
import Link from './../components/link'

export default class extends Component {
  state = {
    isReady: false,
  }
  /*
  * Begin animation when component is mount
  */
  componentDidMount = () => {
    this.setState({ isReady: !this.state.isReady })
  }
  /*
  * Transition off trigered by Link component
  */
  onClickDo = () => {
    this.setState({ isReady: !this.state.isReady })
  }
  /*
  * Transition on
  */
  isEntering = () => {
    return {
      opacity: 1,
      translateY: spring(50, { stiffness: 120, damping: 17 }),
    }
  }
  /*
  * Transition off
  */
  isLeaving = () => {
    return {
      opacity: 0,
      translateY: 0,
    }
  }
  render = () => {
    // JSX
    return (
      <div>
        <button>
          <Link
            to="/"
            onClickDo={this.onClickDo}
            status={this.state.isLeaving}
          >
            Index
          </Link>
        </button>
        <Transition
          component={false}
          enter={this.isEntering()}
          leave={this.isLeaving()}
        >
          {
            // If state = true, display content
            this.state.isReady &&
            <div key="title" className="title">
              <h1>about</h1>
            </div>
          }
        </Transition>
      </div>
    )
  }
}
