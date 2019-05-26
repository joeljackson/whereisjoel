import React from 'react'
import './style.scss'

class ChapterHeader extends React.Component {
  constructor(props) {
    super(props)

    this.attributeName = this.attributeName.bind(this)
    this.boldClass = this.boldClass.bind(this)
  }

  attributeName(title) {
    return `#${title.replace(/ /gi, '-')}`
  }

  boldClass(name) {
    return this.props.boldSectionName == name ? 'Bold' : ''
  }

  render() {
    const name = this.props.chapter
    const sections = this.props.sections

    return (
      <nav>
        <h3 className={this.boldClass(`chapter-${name}`)}>{name}</h3>
        {sections.map(section => {
          return (
            <h4>
              <a
                href={this.attributeName(section.frontmatter.title)}
                className={this.boldClass(
                  `section-${section.frontmatter.title}`
                )}
              >
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
