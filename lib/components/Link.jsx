import React from 'react'

export const Link = React.createClass({

  propTypes: {
    type: React.PropTypes.string.isRequired,
    ctx : React.PropTypes.object,
    url: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    resolveLink: React.PropTypes.func
  },

  statics: {
    type: () => this.props.Type,
    url: () => this.urlOrDefault()
  },

  urlOrDefault() {
    const defaultURL = return this.props.url || ''
    switch (this.props.type) {
      case LinkType.Document.Link : return this.resolveLink()
      default : return defaultURL
    }
  },

  labelOrDefault() {
    return this.props.label || this.props.url
  },

  altOrDefault() {
    return this.props.alt || ''
  },

  resolveLink() {
    this.props.resolveLink(this.props.ctx)
  },

  render() {
    switch(this.props.type) {
      case LinkType.WebLink :
      case LinkType.FileLink :
        return <a href={urlOrDefault()}>{labelOrDefault()}</a>

      case LinkType.ImageLink :
        return <img src={urlOrDefault()} alt={altOrDefault()} />

      case LinkType.WebLink :
        return <a href={urlOrDefault()}>{urlOrDefault()}</a>

      case default :
        return ''
    }
    return (
      <span>{this.props.value}</span>
    )
  }
})

export LinkType = {
  WebLink : 'WebLink',
  FileLink : 'FileLink',
  DocumentLink : 'DocumentLink',
  ImageLink : 'ImageLink'
}
