import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import highlight from 'highlight.js';

export default function Highlight(props) {

  const { text, className, language, style } = props;

  const code = useRef(null);

  useEffect(() => highlight.highlightElement(code.current), [text])

  return (
    <pre
      className={className}
      style={style}
    >
      <code
        className={language}
        ref={code}
      >
        {text}
      </code>
    </pre>
  )
  
}

Highlight.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  language: PropTypes.string,
  style: PropTypes.object
}
