import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import LayoutDefault from '../pages/Layouts/Default'

function CustomRouter ({ component: Component, isPrivate, ...rest }) {
  const Layout = LayoutDefault
  return (
        <Route
            {...rest}
            render={ (props) =>
              (
                <Layout>
                  <Component
                      {...props}
                  />
                </Layout>
              )
            }
        />
  )
}

CustomRouter.defaultProps = {
  isPrivate: false
}

CustomRouter.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  isPrivate: PropTypes.bool
}

export default CustomRouter
