"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

document.addEventListener('DOMContentLoaded', function () {
  var main = new Main();
});

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    this.header = document.querySelector('.header');
    this.sides = document.querySelectorAll('.side');
    this._observers = [];

    this._init();
  }

  _createClass(Main, [{
    key: "observers",
    get: function get() {
      return this._observers;
    },
    set: function set(val) {
      this._observers.push(val);
    }
  }, {
    key: "_init",
    value: function _init() {
      new MobileMenu();
      Pace.on('done', this._paceDone.bind(this));
    }
  }, {
    key: "_paceDone",
    value: function _paceDone() {
      this._scrollInit();
    }
  }, {
    key: "_inviewAnimation",
    value: function _inviewAnimation(el, inview) {
      if (inview) {
        el.classList.add('inview');
      } else {
        el.classList.remove('inview');
      }
    }
  }, {
    key: "_navAnimation",
    value: function _navAnimation(el, inview) {
      if (inview) {
        this.header.classList.remove('triggered');
      } else {
        this.header.classList.add('triggered');
      }
    }
  }, {
    key: "_destroyObservers",
    value: function _destroyObservers() {
      this.observers.forEach(function (ob) {
        ob.destroy();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroyObservers();
    }
  }, {
    key: "_scrollInit",
    value: function _scrollInit() {
      this.observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {
        once: false
      });
      this.observers = new ScrollObserver('.cover-slide', this._inviewAnimation);
      this.observers = new ScrollObserver('.appear', this._inviewAnimation);
    }
  }]);

  return Main;
}();
//# sourceMappingURL=main.js.map
