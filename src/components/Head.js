import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import gatsbyIcon from "@/assets/gatsby-icon.png"

const Head = ({ pathname, title }) => {
  const {
    site: {
      siteMetadata: { siteUrl, siteTitle, twitter, description },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          siteTitle
          twitter
          description
        }
      }
    }
  `)

  return (
    <Helmet
      defer={false}
      defaultTitle={siteTitle}
      titleTemplate={`${title} | %s`}
    >
      <html lang="zh-cmn-Hans" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {/* <meta name="image" content={image} /> */}
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="zh-cmn-Hans" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${gatsbyIcon}`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </Helmet>
  )
}

export default Head
