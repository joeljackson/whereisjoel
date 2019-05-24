import React from 'react'
import './style.scss'

class ChapterHeader extends React.Component {
  constructor(props) {
    super(props)

    this.attributeName = this.attributeName.bind(this)
  }

  attributeName(title) {
    return `#${title.replace(/ /gi, '-')}`
  }

  render() {
    const name = this.props.chapter
    const sections = this.props.sections
    const boldClass = this.props.isBold ? 'Bold' : ''

    return (
      <nav>
        <h3 className={boldClass}>{name}</h3>
        {sections.map(section => {
          return (
            <h4>
              <a href={this.attributeName(section.frontmatter.title)}>
                {section.frontmatter.title}
              </a>
            </h4>
          )
        })}
      </nav>
    )
  }
}

export default ChapterHeader
