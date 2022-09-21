// types
import * as t from './types';

// prism-okaidia.css
// https://github.com/PrismJS/prism/blob/master/themes/prism-okaidia.css
export default {
  background: '#000000',
  comment: '#8292a2',
  punctuation: '#f8f8f2',
  constant: '#f92672',
  boolean: '#ae81ff',
  number: '#ae81ff',
  builtin: '#a6e22e',
  string: '#a6e22e',
  operator: '#f8f8f2',
  function: '#e6db74',
  'class-name': '#e6db74',
  keyword: '#66d9ef',
  regex: '#fd971f',
  object: '#a6e22e', // added for better graphql highlighting
} as t.TokenColor;
