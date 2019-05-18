import React from 'react'

class ChapterHeader extends React.Component {
  render() {
    const name = this.props.chapter
    const sections = this.props.sections

    return (
      <nav>
        <h3>{name}</h3>
        {sections.map(section => {
          return <h4>{section.frontmatter.title}</h4>
        })}
      </nav>
    )
  }
}

export default ChapterHeader
