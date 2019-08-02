import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>ABOUT</h1>
    <img src="/123.gif" alt="" />
    <div>
      <Link to="/">{`Back <————`}</Link>
    </div>
  </div>
)
