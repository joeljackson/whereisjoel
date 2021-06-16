import React from 'react'
import ReactDOM from 'react-dom'

class Section extends React.Component {
  constructor(props) {
    super(props)

    this.attributeName = this.attributeName.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      const node = ReactDOM.findDOMNode(this)
      this.props.setSectionPosition(`section-${this.props.title}`, node.offsetTop)
    }, 500)
  }

  attributeName(title) {
    return `${title.replace(/ /gi, '-')}`
  }

  render() {
    return (
      <div key={this.props.title}>
        <a name={`section-${this.attributeName(this.props.title)}`} />

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
