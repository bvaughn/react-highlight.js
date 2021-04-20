import React, { Component } from 'react';
import PropTypes from 'prop-types';
import highlight from 'highlight.js';

export default class Highlight extends Component {

  constructor(props) {
    super(props);
    this.code = React.createRef();
  }

  componentDidMount () {
    highlight.highlightElement(this.code.current);
  }

  componentDidUpdate () {
    highlight.initHighlighting.called = false;
    highlight.highlightElement(this.code.current);
  }

  render () {
    const { children, className, language, style } = this.props;

    return (
      <pre
        className={className}
        style={style}
      >
        <code
          className={language}
          ref={this.code}
        >
          {children}
        </code>
      </pre>
    )
  }
}

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  language: PropTypes.string,
  style: PropTypes.object
}
