import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class Header extends React.Component {
  constructor() {
    super()
    this.state = { showMenu: false }
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }
  showMenu() {
    // event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu)
    })
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu)
    })
  }
  render() {
    return (
      <header>
        <div className="navbar">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignContent: "center",
              color: "white",
            }}
          >
            <ul className="ul-list">
              <li className="links">
                <Link className="links" to="/">
                  <button className="button-links-nav">HOME</button>
                </Link>
              </li>
              <li className="links">
                <Link className="links" to="/#projects">
                  <button className="button-links-nav"> PROJECTS</button>
                </Link>
              </li>
              <li className="links">
                <Link className="links" to="/#tech">
                  <button className="button-links-nav">ABOUT</button>
                </Link>
              </li>
              <li className="links">
                <Link className="links" to="/contact/">
                  <button className="button-links-nav">HIRE</button>
                </Link>
              </li>
            </ul>
            <div className="nav-flex-burger">
              <a className="icon" onClick={this.showMenu}>
                <i className="fa fa-bars" />
              </a>
              <div>
                {this.state.showMenu ? (
                  <div className="menu">
                    <div>
                      <Link to="/">
                        <button className="button-links">Home</button>
                      </Link>
                    </div>
                    <div className="links">
                      <Link className="links" to="/#projects">
                        <button className="button-links">Projects</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/#tech">
                        <button className="button-links">About</button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/contact/">
                        <button className="button-links">Hire</button>
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
