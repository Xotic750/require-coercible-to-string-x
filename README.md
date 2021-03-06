<a
  href="https://travis-ci.org/Xotic750/require-coercible-to-string-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/require-coercible-to-string-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/require-coercible-to-string-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/require-coercible-to-string-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/require-coercible-to-string-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/require-coercible-to-string-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/require-coercible-to-string-x"
  title="npm version">
<img src="https://badge.fury.io/js/require-coercible-to-string-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/require-coercible-to-string-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/require-coercible-to-string-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/require-coercible-to-string-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/require-coercible-to-string-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/require-coercible-to-string-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/require-coercible-to-string-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_require-coercible-to-string-x"></a>

## require-coercible-to-string-x

Requires an argument is corecible then converts using ToString.

**Version**: 1.0.2  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](https://opensource.org/licenses/MIT)  
**Copyright**: Xotic750  
<a name="exp_module_require-coercible-to-string-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>string</code> ⏏

This method requires an argument is corecible then converts using ToString.

**Kind**: Exported function  
**Returns**: <code>string</code> - The value as a string.  
**Throws**:

- <code>TypeError</code> If value is null or undefined.

| Param | Type            | Description                         |
| ----- | --------------- | ----------------------------------- |
| value | <code>\*</code> | The value to converted to a string. |

**Example**

```js
import requireCoercibleToString from 'require-coercible-to-string-x';

requireCoercibleToString(); // TypeError
requireCoercibleToString(null); // TypeError
requireCoercibleToString(Symbol('')); // TypeError
requireCoercibleToString(Object.create(null)); // TypeError
console.log(requireCoercibleToString(1)); // '1'
console.log(requireCoercibleToString(true)); // 'true'
```
