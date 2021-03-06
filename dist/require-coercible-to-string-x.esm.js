import requireObjectCoercible from 'require-object-coercible-x';
import toStr from 'to-string-x';
/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

var requireCoercibleToString = function requireCoercibleToString(value) {
  return toStr(requireObjectCoercible(value));
};

export default requireCoercibleToString;

//# sourceMappingURL=require-coercible-to-string-x.esm.js.map