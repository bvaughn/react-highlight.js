import 'purecss'
import 'highlight.js/styles/github.css'
import './highlight.css'
import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

main()

function main () {
  const app = document.getElementsByClassName('demonstration')[0]

  ReactDOM.render(<App />, app)
}
