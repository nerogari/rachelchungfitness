import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo/Logo.png'
import instagram from '../img/social/instagram.svg'
import facebook from '../img/social/facebook.svg'

//Bottom of the page layout
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="logo"
            style={{ width: '14em', height: '14em' }}
          />
        </div>
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item is-family-primary">
                        HOME
                      </Link> 
                    </li>
                    <li>
                      <Link className="navbar-item is-family-primary" to="/about">
                        ABOUT
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item is-family-primary" to="/products">
                        PACKAGES
                      </Link>
                    </li>                  
                    <li>
                      <Link className="navbar-item is-family-primary" to="/contact">
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>                       
              
              <div className="column is-3 social is-centered">       
                <a title="instagram" href="https://instagram.com/goodenoughpt">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em', marginBottom: "0px" }}
                  />                
                </a> 
                <a title="facebook" href="https://www.facebook.com/goodenoughpt">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em', marginBottom: "0px" }}
                  />
                </a>                
              </div>
              <div className="column is-3">       
                {/* empty   */}              
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
