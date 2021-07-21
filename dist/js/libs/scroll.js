"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollObserver = /*#__PURE__*/function () {
  function ScrollObserver(els, cb, options) {
    _classCallCheck(this, ScrollObserver);

    this.els = document.querySelectorAll(els);
    var defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;

    this._init();
  }

  _createClass(ScrollObserver, [{
    key: "_init",
    value: function _init() {
      var _this2 = this;

      var callback = function callback(entries, observer) {
        var _this = this;

        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            _this.cb(entry.target, true);

            if (_this.once) {
              observer.unobserve(entry.target);
            }
          } else {
            _this.cb(entry.target, false);
          }
        });
      };

      this.io = new IntersectionObserver(callback.bind(this), this.options); // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill

      this.io.POLL_INTERVAL = 100;
      this.els.forEach(function (el) {
        return _this2.io.observe(el);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.io.disconnect();
    }
  }]);

  return ScrollObserver;
}();
//# sourceMappingURL=scroll.js.map
