import React from 'react'
import { findDOMNode, render } from 'react-dom'
import expect from 'expect.js'
import Highlight from './Highlight'

describe('Highlight', () => {
  const language = 'javascript'
  const content = 'var foo = "Foo"; // comment'
  const node = document.createElement('div')
  const highlight = render(
    <Highlight language={language}>
      {content}
    </Highlight>,
    node
  )
  const highlightDOMNode = findDOMNode(highlight)

  it('should render content with basic markup', () => {
    expect(highlightDOMNode.className).to.contain('hljs')
    expect(highlightDOMNode.querySelector('code').className).to.contain('javascript')
    expect(highlightDOMNode.querySelector('.hljs-keyword').textContent).to.contain('var')
    expect(highlightDOMNode.querySelector('.hljs-variable').textContent).to.contain('foo')
    expect(highlightDOMNode.querySelector('.hljs-string').textContent).to.contain('"Foo"')
    expect(highlightDOMNode.querySelector('.hljs-comment').textContent).to.contain('// comment')
  })
})
