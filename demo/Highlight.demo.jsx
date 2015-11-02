import React, { Component } from 'react'
import Highlight from '../source/Highlight.jsx'

export default class HighlightDemoDemo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      language: 'javascript',
      content: 'var three = 1 + 2; // This is a comment'
    }

    this._debouncedSetState = this._debouncedSetState.bind(this)
  }

  _debouncedSetState (property, value) {
    if (this._debouncedSetStateTimeoutId) {
      clearTimeout(this._debouncedSetStateTimeoutId)
    }

    if (!this._pendingState) {
      this._pendingState = { ...this.state }
    }

    this._pendingState[property] = value

    this._debouncedSetStateTimeoutId = setTimeout(() => {
      this.setState(this._pendingState)
    }, 500)
  }

  render () {
    const { content, language } = this.state

    return (
      <div {...this.props}>
        <p>
          The <code>Highlight</code> component is a lightweight React wrapper around the
          <a href="https://highlightjs.org/">highlight.js</a> library.
          To use it, simply specify a language and provide it with content (children) to highlight.
          For example:
        </p>
        <Highlight language='html'>
          {`<Highlight language='css'>
  .example {
    font-weight: bold;
  }
</Highlight>`}
        </Highlight>
        <p>
          To use this component simply <code>npm install react-highlight</code> and optionally choose a custom stylesheet from
          <a href="https://highlightjs.org/">highlight.js</a>.
        </p>
        <h2>Demo</h2>
        <p>
          Try it yourself by specifying a language and content below:
        </p>
        <form>
          <div className='form-group'>
            <label>Language</label>
            <input
              className='form-control'
              type='text'
              name='language'
              defaultValue={language}
              onChange={event => this._debouncedSetState('language', event.target.value)}/>
          </div>
          <div className='form-group'>
            <label>Content</label>
            <textarea
              className='form-control'
              type='text'
              name='content'
              defaultValue={content}
              onChange={event => this._debouncedSetState('content', event.target.value)}/>
          </div>
          <label>Highlight</label>
          <Highlight language={language}>
            {content}
          </Highlight>
        </form>
      </div>
    )
  }
}
