import React from 'react'
import Topbar from '../Topbar'
import Chapter from '../Chapter'
import ChapterHeader from '../ChapterHeader'
import BottomNav from '../BottomNav'
import { withScroll } from 'react-window-decorators'
import SortedArray from 'sorted-array'
import './style.scss'

class BookTemplateDetails extends React.Component {
  constructor(props) {
    super(props)

    this.sectionsForChapter = this.sectionsForChapter.bind(this)
    this.setSectionPosition = this.setSectionPosition.bind(this)

    this.state = {
      sectionPositions: new SortedArray([], (elementA, elementB) => {
        return elementA.position >= elementB.position ? 1 : -1
      }),
      scrollPositionY: 0,
      currentSectionName: '',
    }
  }

  sectionsForChapter(chapter, sections) {
    const sectionNodes = sections.edges.map(section => {
      return section.node
    })

    return sectionNodes.filter(section => {
      return section.frontmatter.chapter === chapter
    }).sort((e1, e2) => {
      return e1.frontmatter.order - e2.frontmatter.order
    })
  }

  buildChapterMap(chapters, sections) {
    var chapterMap = {}

    chapters.forEach(chapter => {
      chapterMap[chapter] = []
    })

    console.log(chapterMap)
    sections.edges.forEach(section => {
      console.log(section.node.frontmatter.chapter)
      chapterMap[section.node.frontmatter.chapter].push(section.node)
    })

    return chapterMap
  }

  findCurrentSection() {
    var indexOfChapter = -1
    this.state.sectionPositions.array.every(element => {
      if (element.position > this.state.scrollPositionY) {
        return false
      }
      indexOfChapter = indexOfChapter + 1
      return true
    })

    return (this.state.sectionPositions.array[indexOfChapter] || {}).name
  }

  componentDidMount() {
    // eslint-disable-line
    window.addEventListener('window-scroll', event => {
      this.state.scrollPositionY = event.detail.scrollPositionY
      this.state.currentSectionName = this.findCurrentSection()
      this.setState(this.state)
    })
  }

  setSectionPosition(sectionName, position) {
    this.state.sectionPositions.insert({
      name: sectionName,
      position: position,
    })

    this.setState(this.state)
  }

  render() {
    const page = this.props.data.markdownRemark
    const sections = this.props.data.allMarkdownRemark
    const chapters = page.frontmatter.chapters
    const chapterMap = this.buildChapterMap(chapters, sections)

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
                          key={chapter}
                          chapter={chapter}
                          sections={this.sectionsForChapter(chapter, sections)}
                          currentSectionName={this.state.currentSectionName}
                        />
                      )
                    })}
                  </div>
                  <div className="page__body-book-content">
                    {chapters.map(chapter => {
                      return (
                        <Chapter
                          key={chapter}
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
        <BottomNav
          chapters={chapters}
          chapterMap={chapterMap}
          currentSectionName={this.state.currentSectionName}
        />
      </div>
    )
  }
}

export default withScroll(BookTemplateDetails)
