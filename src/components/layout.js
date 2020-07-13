import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

import Container from "../components/container";

const Layout = ({ title, children }) => {

  return (
    <div style={{
      height: `100%`,
      display: `flex`,
      flexDirection: `column`,
    }}>
      <header style={{
        paddingTop: `${rhythm(1)}`,
        paddingBottom: `${rhythm(1)}`,
      }}>
        <Container>
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </Container>
      </header>
      <main style={{
        paddingTop: `${rhythm(1)}`,
        paddingBottom: `${rhythm(1)}`,
        flex: 1,
      }}>
        <Container>
          {children}
        </Container>
      </main>
      <footer style={{
        paddingTop: `${rhythm(1)}`,
        paddingBottom: `${rhythm(1)}`,
      }}>
        <Container>
          <a
          href="https://www.copyleft.org/"
          rel="nofollow"
          style={{
            display: `inline-block`,
            transform: `rotateY(180deg)`,
          }}>©</a>&nbsp;
          {new Date().getFullYear()}
        </Container>
      </footer>
    </div>
  )
}

export default Layout
