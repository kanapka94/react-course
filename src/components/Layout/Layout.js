import React from 'react'
import styled from 'styled-components/macro'

const Header = styled.div`
  padding: 20px;
`

const Layout = (props) => (
  <>
    <Header>Toolbar, SidebarDrawer, Backdrop</Header>
    <main>{props.children}</main>
  </>
)

export default Layout
