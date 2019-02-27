import React from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import profilePic from '../../pages/photo.jpg'

class Topbar extends React.Component {
  render() {
    const { location } = this.props
    const {
      author,
      subtitle,
      copyright,
      menu,
    } = this.props.data.site.siteMetadata

    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="topbar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        <h1 className="sidebar__author-title">
          <Link className="sidebar__author-title-link" to="/">
            {author.name}
          </Link>
        </h1>
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    )

    return (
      <div className="topbar">
        <div>
          <Menu data={menu} />
          <div className="topbar__author">{authorBlock}</div>
          <p className="topbar__copyright">{copyright}</p>
        </div>
      </div>
    )
  }
}

export default Topbar;