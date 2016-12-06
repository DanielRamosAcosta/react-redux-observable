import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import Layout from 'components/Layout'
import Chat from 'components/Chat'

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store} >
    <Layout>
      <Chat />
    </Layout>
  </Provider>,
app)
