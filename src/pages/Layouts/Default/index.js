import React from 'react'
import PropTypes from 'prop-types'
import { Main, Header, Content, Footer } from './style'
import Logo from '../../../assets/images/Logo.svg'

function Default ({ children }) {
  return (
    <Main>
        <Header>
            <img src={Logo}></img>
            <h1>English Studies</h1>
        </Header>
        <Content>
            {children}
        </Content>
        <Footer></Footer>
    </Main>
  )
}

Default.propTypes = {
  children: PropTypes.element.isRequired
}

export default Default
