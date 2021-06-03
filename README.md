# Demo

See the demo [here](http://bvaughn.github.io/react-highlight.js/).

# Installation

Install react-highlight.js using NPM:
```bash
npm install react-highlight.js --save
```

Choose a highlight.js theme and make sure it's included in your index file.
```html
<link rel="stylesheet"
      href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.0.0/build/styles/default.min.css">
<script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.0.0/build/highlight.min.js"></script>
```

And then use react-highlight.js to display your text like so:
```jsx
import Highlight from 'react-highlight.js';

<Highlight language={language}>
  {content}
</Highlight>
```

# License

*react-highlight.js* is available under the MIT License.

