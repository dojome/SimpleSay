import React from 'react'
import { Helmet } from "react-helmet"
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

function Meta({ meta, title }) {
  return (
    <StaticQuery
      query={graphql`
        query FrontPage {
          nodeFrontPage {
            title
            body {
              value
            }
          }
        }
      `}
      render={data => (
        <Helmet
          meta={[
            {
              name: `description`,
              content: data.nodeFrontPage.body.value,
            },           
          ].concat(meta)}
          title={title}
          titleTemplate={`%s | ${data.nodeFrontPage.title}`}
        >
          <html lang="en" />
        </Helmet>
      )}
    />
  )
}

Meta.propTypes = {
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
}

Meta.defaultProps = {
  title: `Simply Say`,
  meta: [],
}

export default Meta