import noop from 'lodash/noop';
import requireCoercibleToString from 'src/require-coercible-to-string-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('requireCoercibleToString', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof requireCoercibleToString).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect.assertions(3);
    expect(function() {
      requireCoercibleToString();
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      requireCoercibleToString(void 0);
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      requireCoercibleToString(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return a string for everything', function() {
    expect.assertions(1);
    const values = [true, 'abc', 1, noop, [], /r/];
    const expected = values.map(String);
    const actual = values.map(requireCoercibleToString);
    expect(actual).toStrictEqual(expected);
  });

  it('should throw for Object.create(null)', function() {
    expect.assertions(1);
    expect(function() {
      requireCoercibleToString(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });

  ifSymbolIt('should throw for Symbol', function() {
    expect.assertions(2);

    const sym = Symbol('foo');
    expect(function() {
      requireCoercibleToString(sym);
    }).toThrowErrorMatchingSnapshot();

    const symObj = Object(sym);
    expect(function() {
      requireCoercibleToString(Object(symObj));
    }).toThrowErrorMatchingSnapshot();
  });
});
