import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo/WHITE/logo.svg'
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
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-blue">
          <div className="container has-background-blue">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Packages and Testimonials
                      </Link>
                    </li>                  
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>                       
              
              <div className="column is-3 social">       
                <a title="instagram" href="https://instagram.com/goodenoughpt">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />                
                </a> 
                <a title="facebook" href="https://www.facebook.com/goodenoughpt">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>                
              </div>
              <div className="column is-3 social">       
                {/*<a title="facebook" href="https://www.facebook.com/goodenoughpt">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                 </a>  */}              
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
