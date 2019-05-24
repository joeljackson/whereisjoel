import React from 'react'

class Section extends React.Component {
  constructor(props) {
    super(props)

    this.attributeName = this.attributeName.bind(this)
  }

  attributeName(title) {
    return `${title.replace(/ /gi, '-')}`
  }

  render() {
    return (
      <div key={this.props.title}>
        <a name={this.attributeName(this.props.title)} />

        <h2>{this.props.title}</h2>
        <div
          className="page__body"
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{ __html: this.props.html }}
        />
      </div>
    )
  }
}

export default Section
