var Foo =
/*#__PURE__*/
function (_Bar) {
  babelHelpers.inherits(Foo, _Bar);

  function Foo(...args) {
    var _temp, _this;

    babelHelpers.classCallCheck(this, Foo);
    return babelHelpers.possibleConstructorReturn(_this, (_temp = _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo).call(this, ...args)), Object.defineProperty(babelHelpers.assertThisInitialized(_this), "bar", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: "foo"
    }), _temp));
  }

  return Foo;
}(Bar);
