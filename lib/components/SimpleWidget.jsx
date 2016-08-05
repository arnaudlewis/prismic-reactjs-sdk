import React from 'react'

export const SimpleWidget = React.createClass({

  propTypes: {
    value: React.PropTypes.string.isRequired
  },

  statics : {
    value: () => this.props.value
  },

  render() {
    return (
      <span>{this.props.value}</span>
    )
  }
})
