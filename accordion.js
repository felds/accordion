'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

document.registerElement('felds-accordion', function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'createdCallback',
    value: function createdCallback() {
      this.nextZIndex = 1;

      this._onMouseIn = this._onMouseIn.bind(this);

      this.addEventListener('mouseover', this._onMouseIn);
      this.addEventListener('touchstart', this._onMouseIn);
      this.addEventListener('mouseout', this._onMouseOut);
    }
  }, {
    key: '_onMouseIn',
    value: function _onMouseIn(e) {
      var _this2 = this;

      this.mapNodes(function (n) {
        var isInPath = e.path.indexOf(n) > -1;
        if (isInPath) {
          n.setAttribute('open', true);
          n.style.zIndex = _this2.nextZIndex++;
        } else {
          n.removeAttribute('open');
        }
      });
    }
  }, {
    key: '_onMouseOut',
    value: function _onMouseOut(e) {
      this.mapNodes(function (n) {
        return n.removeAttribute('open');
      });
    }
  }, {
    key: 'mapNodes',
    value: function mapNodes(f) {
      var nodes = document.evaluate('*/*', this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
      for (var i = 0; i < nodes.snapshotLength; i++) {
        f(nodes.snapshotItem(i));
      }
    }
  }]);

  return _class;
}(HTMLElement));
//# sourceMappingURL=accordion.js.map