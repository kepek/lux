/* @flow */

import template from '../../template'

/**
 * @private
 */
export default (): string => template`
  {
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "env": {
      "node": true
    },
    "globals": {
      "Map": true,
      "Set": true,
      "Proxy": true,
      "Promise": true,
      "Reflect": true,
      "WeakMap": true,
      "WeakSet": true,
      "Iterable": true
    }
  }
`
