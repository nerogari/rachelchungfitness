import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand" style= {{ backgroundColor: "FFFFFF"}}>
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Rachel Chung Fitness" style={{ width: '50px', height: '50px', marginBottom: '0', maxHeight: '100px'}} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start is-family-secondary is-align-content-space-evenly">
              <Link className="navbar-item" to="/">
                HOME
              </Link>
              <Link className="navbar-item" to="/about">
                ABOUT
              </Link> 
              <Link className="navbar-item" to="/products">
                PACKAGES
              </Link>    
              <Link className="navbar-item" to="/contact">
                CONTACT
              </Link>                              
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
