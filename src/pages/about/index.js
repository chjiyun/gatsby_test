import React from "react"
import { Link } from "gatsby"
import Head from "@/components/Head"

// import gif from "/123.gif"

export default () => (
  <div>
    <Head pathname="/about" title="关于" />
    <h1>ABOUT</h1>
    {/* <img src="/123.gif" alt="" /> */}
    <div>
      <Link to="/">{`Back <————`}</Link>
    </div>
  </div>
)
