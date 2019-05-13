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

    return (
      <div className="topbar">
        <div className="topbar__author">
          <Link to="/">
            <img
              src={profilePic}
              className="topbar__author-photo"
              width="50"
              height="50"
              alt={title}
            />
          </Link>
        </div>
        <div className="topbar__menu">
          <div className="topbar__menu-title">
            <Link className="topbar__menu-title-link" to="/">
              {title}
            </Link>
          </div>
          <Menu className="menu" data={menu} />
          <div className="topbar__menu-description">
            <span className="topbar__menu-description-subtitle">{subtitle}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Topbar;