import React from 'react'

export const Text = React.createClass({

  propTypes: {
    value: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <span>{this.props.value}</span>
    )
  }
})
