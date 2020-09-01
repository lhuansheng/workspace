import React from 'react'
import Header from './common/Header/Header'
import { renderRoutes } from 'react-router-config'
const App = (props) => {
  return (
    <div>
      <Header />
      {/* <Route path='' component={} /> */}
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default App
