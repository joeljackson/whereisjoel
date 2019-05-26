import React from 'react'
import ReactDOM from 'react-dom'
import Section from '../Section'

class Chapter extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this)
    this.props.setSectionPosition(
      `chapter-${this.props.chapter}`,
      node.offsetTop
    )
  }

  render() {
    const name = this.props.chapter
    const sections = this.props.sections

    return (
      <div>
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
