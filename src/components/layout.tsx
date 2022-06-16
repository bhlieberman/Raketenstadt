import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }): JSX.Element => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li><Link to="/" className={navLinkItem}>
            Home
            </Link>
          </li>
          <li><Link to="/about" className={navLinkItem}>
            About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout