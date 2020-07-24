import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import store from 'src/app/store'

import './App.scss'
import Feed from './app/containers/Feed/Feed.component'

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Feed />
    </Provider>
  )
}

export default App
