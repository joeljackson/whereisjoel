import React from 'react'

class Chapter extends React.Component {
  constructor(props) {
    super(props)

    this.attributeName = this.attributeName.bind(this)
  }

  attributeName(title) {
    return `${title.replace(/ /gi, '-')}`
  }

  render() {
    const name = this.props.chapter
    const sections = this.props.sections

    return (
      <div>
        <h1>{name}</h1>
        {sections.map(section => {
          return (
            <div key={section.frontmatter.title}>
              <a name={this.attributeName(section.frontmatter.title)} />

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
