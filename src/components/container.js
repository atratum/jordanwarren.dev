import React from "react"

import { rhythm } from "../utils/typography"

const Container = ({children}) => {
  return (
    <div
      style={{
        maxWidth: rhythm(24),
        marginLeft: `auto`,
        marginRight: `auto`,
        paddingLeft: `${rhythm(.5)}`,
        paddingRight: `${rhythm(.5)}`,
      }}
    >
      {children}
    </div>
  )
}

export default Container;