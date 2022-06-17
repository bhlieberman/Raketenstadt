import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }): JSX.Element => {
  const data = useStaticQuery(graphql`query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`)
  
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
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
          <li><Link to="/blog" className={navLinkItem}>
            Blog
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