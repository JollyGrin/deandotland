webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MasonryGrid.js":
/*!***********************************!*\
  !*** ./components/MasonryGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MasonryGrid; });
/* harmony import */ var _mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-responsive-masonry */ "./node_modules/react-responsive-masonry/es/index.js");
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _InstaComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InstaComponent */ "./components/InstaComponent.js");






var _jsxFileName = "/mnt/c/Users/masle/Documents/github/deandotland/components/MasonryGrid.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var MasonryGrid = /*#__PURE__*/function (_Component) {
  Object(_mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MasonryGrid, _Component);

  var _super = _createSuper(MasonryGrid);

  function MasonryGrid(props) {
    Object(_mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MasonryGrid);

    return _super.call(this, props);
  }

  Object(_mnt_c_Users_masle_Documents_github_deandotland_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MasonryGrid, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          id: "thegrid",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: this.props.feed.map(function (post, i) {
              return (
                /*#__PURE__*/
                //   <img key={i} src={post.displayUrl} />
                Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_InstaComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  instaobject: post
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 25
                }, _this)
              );
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this);
    }
  }]);

  return MasonryGrid;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXNvbnJ5R3JpZC5qcyJdLCJuYW1lcyI6WyJNYXNvbnJ5R3JpZCIsInByb3BzIiwiZmVlZCIsIm1hcCIsInBvc3QiLCJpIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBS3FCQSxXOzs7OztBQUNqQix1QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZCQUNSQSxLQURRO0FBRWpCOzs7OzZCQUNRO0FBQUE7O0FBQ0wsMEJBQ0kscUVBQUMsOENBQUQ7QUFBQSwrQkFDSTtBQUFLLFlBQUUsRUFBQyxTQUFSO0FBQUEsaUNBQ0EscUVBQUMsK0RBQUQ7QUFBQSxzQkFDTyxLQUFLQSxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFDbkI7QUFDQSxxRkFBQyx1REFBRDtBQUFnQiw2QkFBVyxFQUFFRDtBQUE3QixtQkFBd0NDLENBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGbUI7QUFBQSxhQUFwQjtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBWUg7Ozs7RUFqQm9DQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MmUyNWE4Yzc0ZTQ2ODMwOGY2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYXNvbnJ5LCB7UmVzcG9uc2l2ZU1hc29ucnl9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLW1hc29ucnlcIlxuaW1wb3J0IEluc3RhQ29tcG9uZW50IGZyb20gJy4vSW5zdGFDb21wb25lbnQnO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNvbnJ5R3JpZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGhlZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxNYXNvbnJ5PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZlZWQubWFwKChwb3N0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDxpbWcga2V5PXtpfSBzcmM9e3Bvc3QuZGlzcGxheVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnN0YUNvbXBvbmVudCBpbnN0YW9iamVjdD17cG9zdH0ga2V5PXtpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9NYXNvbnJ5PiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9