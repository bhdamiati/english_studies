import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

function CustomRouter ({ component: Component, isPrivate, ...rest }) {
  return (
        <Route
            {...rest}
            render={ (props) =>
              (
                <Component
                    {...props}
                />
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
