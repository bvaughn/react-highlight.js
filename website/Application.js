import React from 'react'
import HighlightDemo from '../src/Highlight.example'
import Highlight from '../src/Highlight'

export default class Application extends React.Component {
  render () {
    return (
      <div>
        <h1 className='page-header'>
          react-highlight.js
          &nbsp;
          <small>
            <a href='https://github.com/bvaughn/react-highlight.js'>view in Github</a>
          </small>
        </h1>
        <p className='lead'>
          A lightweight React wrapper around the&nbsp;<a href='https://highlightjs.org/'>Highlight.js</a>&nbsp;syntaxt highlighting library
        </p>
        <h2>Demo</h2>
        <HighlightDemo />
        <h2>Installation</h2>
        <Highlight language='bash'>
          npm install react-highlight.js --save
        </Highlight>
        <h2>License</h2>
        <p>react-highlight.js is available under the MIT License.</p>
      </div>
    )
  }
}
