import React from 'react'

import './style.scss'

class BottomNav extends React.Component {
  constructor(props) {
    super(props)

    this.orderedSections = this.calculateOrderedSections()
    this.hiddenClass = this.hiddenClass.bind(this)
  }

  calculateOrderedSections() {
    var orderedSections = []

    this.props.chapters.forEach(chapter => {
      orderedSections.push({
        name: `chapter-${chapter}`,
        title: chapter,
        link: `#chapter-${this.attributeName(chapter)}`,
      })
      const sections = this.props.chapterMap[chapter]
      sections.forEach(section => {
        orderedSections.push({
          name: `section-${section.frontmatter.title}`,
          title: section.frontmatter.title,
          link: `#section-${this.attributeName(section.frontmatter.title)}`,
        })
      })
    })

    return orderedSections
  }

  attributeName(title) {
    return `${title.replace(/ /gi, '-')}`
  }

  hiddenClass(name) {
    return (this.props.currentSectionName ||
      `chapter-${this.props.chapters[0]}`) == name
      ? 'visible'
      : 'hidden'
  }

  render() {
    return (
      <div className="bottom-nav">
        {this.orderedSections.map((section, index) => {
          return (
            <div className={`section ${this.hiddenClass(section.name)}`}>
              <div className="bottom-nav__back">
                <a href={(this.orderedSections[index - 1] || {}).link}>
                  <img src="/images/back.svg" />
                </a>
              </div>
              <div className="bottom-nav__chapter-heading">
                <p>{section.title}</p>
              </div>
              <div className="bottom-nav__forward">
                <a href={(this.orderedSections[index + 1] || {}).link}>
                  <img src="/images/next.svg" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BottomNav
