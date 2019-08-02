import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
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
