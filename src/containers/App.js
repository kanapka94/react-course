import React, { Component } from 'react'
import classes from './App.module.scss'

import Layout from '../components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1 className={classes.Header}>Hello Friends!</h1>
        </Layout>
      </div>
    )
  }
}

export default App
