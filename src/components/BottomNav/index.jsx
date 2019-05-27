import React from 'react'

import './style.scss'

class BottomNav extends React.Component {
  constructor(props) {
    super(props)

    this.hiddenClass = this.hiddenClass.bind(this)
  }

  hiddenClass(name) {
    return this.props.currentSectionName == name ? 'visible' : 'hidden'
  }

  render() {
    const chapters = this.props.chapters

    return (
      <div className="bottom-nav">
        {chapters.map(chapter => {
          const sections = this.props.chapterMap[chapter]

          return (
            <div>
              <div
                className={`section ${this.hiddenClass(`chapter-${chapter}`)}`}
              >
                <div className="bottom-nav__back">Back</div>
                <div className="bottom-nav__chapter-heading">
                  <p>{chapter}</p>
                </div>
                <div className="bottom-nav__forward">For</div>
              </div>
              {sections.map(section => {
                return (
                  <div
                    className={`section ${this.hiddenClass(
                      `section-${section.frontmatter.title}`
                    )}`}
                  >
                    <div className="bottom-nav__back">Back</div>
                    <div className="bottom-nav__chapter-heading">
                      <p>{section.frontmatter.title}</p>
                    </div>
                    <div className="bottom-nav__forward">For</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default BottomNav
