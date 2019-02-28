import React from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import profilePic from '../../pages/photo.jpg'
import './style.scss'

class Topbar extends React.Component {
  render() {
    const {
      title,
      subtitle,
      menu,
    } = this.props.data.site.siteMetadata

    const authorBlock = (
      <div>
        <Link className="topbar__author-photo-container" to="/">
          <img
            src={profilePic}
            className="topbar__author-photo"
            width="25"
            height="25"
            alt={title}
          />
        </Link>
        <span className="topbar__author-title">
          <Link className="topbar__author-title-link" to="/">
            {title}
          </Link>
        </span>
      </div>
    )

    return (
      <div className="topbar">
        <div className="row">
          <div className="topbar__author">{authorBlock}</div>
          <Menu data={menu} />
        </div>
        <div className="topbar__description">
          <p className="topbar__author-subtitle">{subtitle}</p>
        </div>
      </div>
    )
  }
}

export default Topbar;