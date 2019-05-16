import React from 'react'

class Chapter extends React.Component {
  render() {
    const name = this.props.chapter
    const sections = this.props.sections

    return (
      <div>
        <h2>{name}</h2>
        {sections.map(section => {
          return (
            <div key={section.frontmatter.title}>
              <h2>{section.frontmatter.title}</h2>
              <div
                className="page__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: section.html }}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Chapter
