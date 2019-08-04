import React from "react"
import { Link } from "gatsby"
import Head from "components/Head"

export default () => (
  <div>
    <Head pathname="/" />
    <h1>Hi, chjiyun!</h1>
    <div style={{ color: `purple` }}>
      <Link to="/" className="aLink" activeStyle={{ color: "salmon" }}>
        Home
      </Link>
      <Link to="/about/">About</Link>
      <Link to="/account/account/">Account</Link>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  </div>
)
