import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>Account</h1>
    <div>
      <Link to="/account/account/" activeStyle={{ color: "salmon" }}>
        Account
      </Link>
      <Link to="/account/settings/">Settings</Link>
    </div>
    <div>
      <Link to="/">{`Back <————`}</Link>
    </div>
  </div>
)
