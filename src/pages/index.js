import React from "react"
import { Link } from "gatsby"
import Head from "@/components/Head"
import dog from "@/assets/puppy-dog-ajax-spinner.svg"
import "./index.scss"

export default () => (
  <div className="content">
    <Head pathname="/" title="首页" />
    <h1>Hi, chjiyun!</h1>
    <div>
      <div className="links">
        <Link to="/" className="aLink" activeStyle={{ color: "salmon" }}>
          Home
        </Link>
        <Link className="aLink" to="/about/">
          About
        </Link>
        <Link className="aLink" to="/account/account/">
          Account
        </Link>
      </div>
      <p>What a world.</p>
      <img
        style={{ maxWidth: "100%" }}
        src="https://source.unsplash.com/random/400x200"
        alt=""
      />
    </div>
    <div className="spin">
      <img src={dog} alt="" />
    </div>
  </div>
)
