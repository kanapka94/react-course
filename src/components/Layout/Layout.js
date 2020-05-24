import React from 'react'

const Layout = (props) => (
  <>
    <div>Toolbar, SidebarDrawer, Backdrop</div>
    <main>{props.children}</main>
  </>
)

export default Layout
