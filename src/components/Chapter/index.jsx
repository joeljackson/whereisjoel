import React from 'react'
import ReactDOM from 'react-dom'
import Section from '../Section'

class Chapter extends React.Component {
  constructor(props) {
    super(props)

    this.attributeName = this.attributeName.bind(this)
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this)
    this.props.setSectionPosition(
      `chapter-${this.props.chapter}`,
      node.offsetTop
    )
  }

  attributeName(title) {
    return `${title.replace(/ /gi, '-')}`
  }

  render() {
    const name = this.props.chapter
    const sections = this.props.sections

    return (
      <div>
        <a name={`chapter-${this.attributeName(name)}`} />
        <h1>{name}</h1>
        {sections.map(section => {
          return (
            <Section
              setSectionPosition={this.props.setSectionPosition}
              title={section.frontmatter.title}
              html={section.html}
            />
          )
        })}
      </div>
    )
  }
}

export default Chapter
