import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer } from './style'

function Card ({ children }) {
  return (
    <>
      <CardContainer>
        {children}
      </CardContainer>
    </>
  )
}

Card.propTypes = {
  children: PropTypes.any.isRequired
}

export default Card
