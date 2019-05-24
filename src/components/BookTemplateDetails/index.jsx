import React from 'react'
import Topbar from '../Topbar'
import Chapter from '../Chapter'
import ChapterHeader from '../ChapterHeader'
import { withScroll } from 'react-window-decorators'
import './style.scss'

class BookTemplateDetails extends React.Component {
  constructor(props) {
    super(props)

    this.sectionsForChapter = this.sectionsForChapter.bind(this)
    this.setSectionPosition = this.setSectionPosition.bind(this)

    this.state = {
      chapterPositions: {},
      scrollPositionY: 0,
    }
  }

  sectionsForChapter(chapter, sections) {
    const sectionNodes = sections.edges.map(section => {
      return section.node
    })

    return sectionNodes.filter(section => {
      return section.frontmatter.chapter === chapter
    })
  }

  componentDidMount() {
    window.addEventListener('window-scroll', event => {
      this.state.scrollPositionY = event.detail.scrollPositionY
    })
  }

  setSectionPosition(sectionName, position) {
    this.state.chapterPositions[sectionName] = position

    this.setState(this.state)
  }

  render() {
    const page = this.props.data.markdownRemark
    const sections = this.props.data.allMarkdownRemark
    const chapters = page.frontmatter.chapters

    return (
      <div className="page">
        <Topbar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{page.frontmatter.title}</h1>
              <div className="page__body">
                <div
                  className="page__body-header"
                  /* eslint-disable-next-line react/no-danger */
                  dangerouslySetInnerHTML={{ __html: page.html }}
                />
                <div className="page__body-book">
                  <div className="page__body-book-nav">
                    <h2>Contents</h2>
                    {chapters.map(chapter => {
                      return (
                        <ChapterHeader
                          key={chapter.name}
                          chapter={chapter}
                          sections={this.sectionsForChapter(chapter, sections)}
                        />
                      )
                    })}
                  </div>
                  <div className="page__body-book-content">
                    {chapters.map(chapter => {
                      return (
                        <Chapter
                          key={chapter.name}
                          chapter={chapter}
                          sections={this.sectionsForChapter(chapter, sections)}
                          setSectionPosition={this.setSectionPosition}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withScroll(BookTemplateDetails)
