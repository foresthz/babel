var Foo =
/*#__PURE__*/
function (_Bar) {
  babelHelpers.inherits(Foo, _Bar);

  function Foo() {
    var _this;

    babelHelpers.classCallCheck(this, Foo);

    var t = () => babelHelpers.get(babelHelpers.getPrototypeOf(Foo.prototype), "test", babelHelpers.assertThisInitialized(_this)).call(_this);

    _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Foo).call(this));
    t();
    return _this;
  }

  return Foo;
}(Bar);
