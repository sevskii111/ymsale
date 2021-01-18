webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-yandex-metrika */ "./node_modules/react-yandex-metrika/lib/index.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "F:\\repos_master\\sortedRepos\\market\\market-promos\\pages\\index.js",
    _s = $RefreshSig$();






var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this,
      _jsxDEV2;

  var codes = _ref.codes,
      products = _ref.products;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("Все"),
      selectedCategory = _useState[0],
      setSelectedCategry = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("Все"),
      selectedSubCategory = _useState2[0],
      setSelectedSubCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(codes[0].code),
      selectedCode = _useState3[0],
      setSelectedCode = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(products.slice(0, 10)),
      displayedItems = _useState4[0],
      setDisplayedItems = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      showSubcategoriesFor = _useState5[0],
      setShowSubcategoriesFor = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      search = _useState6[0],
      setSearch = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setDisplayedItems(products.filter(function (item) {
      return (selectedCode === "Все" || item.code === selectedCode) && (selectedCategory === "Все" || item.category === selectedCategory) && (selectedSubCategory === "Все" || item.subcategory === selectedSubCategory) && item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }));
  }, [selectedCode, selectedCategory, selectedSubCategory, search]);
  var columns = [{
    name: "Изображение",
    selector: "image",
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: row.img,
        width: "64"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 22
      }, _this);
    },
    center: true,
    grow: "0",
    compact: true
  }, {
    name: "Название",
    selector: "name",
    sortable: true,
    grow: "2",
    wrap: true,
    compact: true
  }, {
    name: "Старая цена",
    selector: "old_price",
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [row.old_price, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 22
      }, _this);
    },
    grow: "0",
    compact: true,
    minWidth: "60px"
  }, {
    name: "Цена со скидкой",
    selector: "price",
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
        children: [row.price, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 22
      }, _this);
    },
    grow: "0",
    compact: true,
    minWidth: "60px"
  }, {
    name: "Купить",
    selector: "buy",
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "warning",
        href: "https://pokupki.market.yandex.ru/product/".concat(row.id),
        target: "_blank",
        children: "\u041A\u0443\u043F\u0438\u0442\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this);
    },
    minWidth: "100px",
    grow: "0",
    compact: true
  }];
  var categories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(products.filter(function (item) {
    return selectedCode === "Все" || item.code === selectedCode;
  }).reduce(function (prev, curr) {
    return prev.add(curr.category);
  }, new Set())));
  var subCategories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(products.filter(function (item) {
    return (selectedCode === "Все" || item.code === selectedCode) && showSubcategoriesFor === item.category;
  }).reduce(function (prev, curr) {
    return prev.add(curr.subcategory);
  }, new Set())));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "min-vh-100",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "yandex-verification",
        content: "8b9b2457041ebe9e"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("header", {
      className: "bg-warning mb-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "w-100 py-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "overflow-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
            className: "mr-2",
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, this), [[{
            code: "Все"
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(codes)).map(function (code) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "h3 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                color: code.code === selectedCode ? "warning" : "secondary",
                pill: true,
                onClick: function onClick() {
                  return setSelectedCode(code.code);
                },
                children: code.code
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, _this)
            }, code.code, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), categories.map(function (category) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "h5 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                color: category === selectedCategory ? "warning" : "secondary",
                pill: true,
                onClick: function onClick() {
                  setSelectedCategry(category);
                  setShowSubcategoriesFor(category === "Все" ? null : category);
                  setSelectedSubCategory("Все");
                },
                children: category
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, this), subCategories.map(function (sub) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
              color: sub === selectedSubCategory ? "warning" : "secondary",
              pill: true,
              onClick: function onClick() {
                return setSelectedSubCategory(sub);
              },
              className: "my-1 mr-1",
              children: sub
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              placeholder: "\u041F\u043E\u0438\u0441\u043A",
              value: search,
              onChange: function onChange(e) {
                return setSearch(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_data_table_component__WEBPACK_IMPORTED_MODULE_6___default.a, (_jsxDEV2 = {
          noHeader: true,
          columns: columns,
          data: displayedItems,
          noDataComponent: true
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "noDataComponent", "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0432\u0443\u0449\u0438\u0439 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "pagination", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "paginationRowsPerPageOptions", [10, 50, 100, 500, 1000]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsxDEV2, "paginationComponentOptions", {
          rowsPerPageText: "Товаров на странице:",
          rangeSeparatorText: "из",
          noRowsPerPage: false,
          selectAllRowsItem: false,
          selectAllRowsItemText: "Все"
        }), _jsxDEV2), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
      className: "bg-secondary text-white py-3 w-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_7__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

_s(Home, "+yH6bASvZiyJK/1fR8kk4kKUxK8=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvZGVzIiwicHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVncnkiLCJzZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2V0U2VsZWN0ZWRTdWJDYXRlZ29yeSIsImNvZGUiLCJzZWxlY3RlZENvZGUiLCJzZXRTZWxlY3RlZENvZGUiLCJzbGljZSIsImRpc3BsYXllZEl0ZW1zIiwic2V0RGlzcGxheWVkSXRlbXMiLCJzaG93U3ViY2F0ZWdvcmllc0ZvciIsInNldFNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY29sdW1ucyIsInNlbGVjdG9yIiwiY2VsbCIsInJvdyIsImltZyIsImNlbnRlciIsImdyb3ciLCJjb21wYWN0Iiwic29ydGFibGUiLCJ3cmFwIiwib2xkX3ByaWNlIiwibWluV2lkdGgiLCJwcmljZSIsImlkIiwiY2F0ZWdvcmllcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYWRkIiwiU2V0Iiwic3ViQ2F0ZWdvcmllcyIsIm1hcCIsInN1YiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvd3NQZXJQYWdlVGV4dCIsInJhbmdlU2VwYXJhdG9yVGV4dCIsIm5vUm93c1BlclBhZ2UiLCJzZWxlY3RBbGxSb3dzSXRlbSIsInNlbGVjdEFsbFJvd3NJdGVtVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTs7QUFFZSxTQUFTQSxJQUFULE9BQW1DO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMs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QUFrQixFQUFFLElBRk07QUFHMUJDLHVCQUFhLEVBQUUsS0FIVztBQUkxQkMsMkJBQWlCLEVBQUUsS0FKTztBQUsxQkMsK0JBQXFCLEVBQUU7QUFMRyxTQVI5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFnR0U7QUFBUSxlQUFTLEVBQUMsb0NBQWxCO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEdGLGVBcUdFLHFFQUFDLGtFQUFEO0FBQWUsY0FBUSxFQUFFLENBQUMsUUFBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUdEOztHQXpNdUJ4RCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRlMTUwMmNkMzFiZTBjMmVhMWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBCYWRnZSwgQnV0dG9uLCBDb2wsIENvbnRhaW5lciwgSW5wdXQsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgY29kZXMgZnJvbSBcIi4uL2NvZGVzLmpzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgY2F0ZWdvcmllc0hpZXJhcmh5IGZyb20gXCIuLi9jYXRlZ29yaWVzX2hpZXJhcmNoeS5qc29uXCI7XG5pbXBvcnQgeyBZTUluaXRpYWxpemVyIH0gZnJvbSBcInJlYWN0LXlhbmRleC1tZXRyaWthXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjb2RlcywgcHJvZHVjdHMgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ3J5XSA9IHVzZVN0YXRlKFwi0JLRgdC1XCIpO1xuICBjb25zdCBbc2VsZWN0ZWRTdWJDYXRlZ29yeSwgc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29kZSwgc2V0U2VsZWN0ZWRDb2RlXSA9IHVzZVN0YXRlKGNvZGVzWzBdLmNvZGUpO1xuICBjb25zdCBbZGlzcGxheWVkSXRlbXMsIHNldERpc3BsYXllZEl0ZW1zXSA9IHVzZVN0YXRlKHByb2R1Y3RzLnNsaWNlKDAsIDEwKSk7XG4gIGNvbnN0IFtzaG93U3ViY2F0ZWdvcmllc0Zvciwgc2V0U2hvd1N1YmNhdGVnb3JpZXNGb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERpc3BsYXllZEl0ZW1zKFxuICAgICAgcHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAoc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8IGl0ZW0uY29kZSA9PT0gc2VsZWN0ZWRDb2RlKSAmJlxuICAgICAgICAgIChzZWxlY3RlZENhdGVnb3J5ID09PSBcItCS0YHQtVwiIHx8IGl0ZW0uY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpICYmXG4gICAgICAgICAgKHNlbGVjdGVkU3ViQ2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgIGl0ZW0uc3ViY2F0ZWdvcnkgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkpICYmXG4gICAgICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgICApXG4gICAgKTtcbiAgfSwgW3NlbGVjdGVkQ29kZSwgc2VsZWN0ZWRDYXRlZ29yeSwgc2VsZWN0ZWRTdWJDYXRlZ29yeSwgc2VhcmNoXSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcItCY0LfQvtCx0YDQsNC20LXQvdC40LVcIixcbiAgICAgIHNlbGVjdG9yOiBcImltYWdlXCIsXG4gICAgICBjZWxsOiAocm93KSA9PiA8aW1nIHNyYz17cm93LmltZ30gd2lkdGg9XCI2NFwiIC8+LFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQndCw0LfQstCw0L3QuNC1XCIsXG4gICAgICBzZWxlY3RvcjogXCJuYW1lXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGdyb3c6IFwiMlwiLFxuICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCh0YLQsNGA0LDRjyDRhtC10L3QsFwiLFxuICAgICAgc2VsZWN0b3I6IFwib2xkX3ByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cub2xkX3ByaWNlfeKCvTwvc3Bhbj4sXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCm0LXQvdCwINGB0L4g0YHQutC40LTQutC+0LlcIixcbiAgICAgIHNlbGVjdG9yOiBcInByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cucHJpY2V94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0JrRg9C/0LjRgtGMXCIsXG4gICAgICBzZWxlY3RvcjogXCJidXlcIixcbiAgICAgIGNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vcG9rdXBraS5tYXJrZXQueWFuZGV4LnJ1L3Byb2R1Y3QvJHtyb3cuaWR9YH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAg0JrRg9C/0LjRgtGMXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSxcbiAgICAgIG1pbldpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4ucHJvZHVjdHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fCBpdGVtLmNvZGUgPT09IHNlbGVjdGVkQ29kZSlcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXYuYWRkKGN1cnIuY2F0ZWdvcnkpO1xuICAgICAgfSwgbmV3IFNldCgpKSxcbiAgXTtcblxuICBjb25zdCBzdWJDYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4ucHJvZHVjdHNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgIChzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHwgaXRlbS5jb2RlID09PSBzZWxlY3RlZENvZGUpICYmXG4gICAgICAgICAgc2hvd1N1YmNhdGVnb3JpZXNGb3IgPT09IGl0ZW0uY2F0ZWdvcnlcbiAgICAgIClcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXYuYWRkKGN1cnIuc3ViY2F0ZWdvcnkpO1xuICAgICAgfSwgbmV3IFNldCgpKSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXZoLTEwMFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7Qn9GA0L7QvNC+0LrQvtC00Ysg0LTQu9GPINCv0L3QtNC10LrRgS7QnNCw0YDQtdC60YLQsDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInlhbmRleC12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiOGI5YjI0NTcwNDFlYmU5ZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdhcm5pbmcgbWItM1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcHktMlwiPlxuICAgICAgICAgICAgPGgxPtCf0YDQvtC80L7QutC+0LTRiyDQtNC70Y8g0K/QvdC00LXQutGBLtCc0LDRgNC10LrRgtCwPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtci0yXCI+0J/RgNC+0LzQvtC60L7QtNGLOjwvaDM+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICBbeyBjb2RlOiBcItCS0YHQtVwiIH0sIC4uLmNvZGVzXS5tYXAoKGNvZGUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzIG1yLTFcIiBrZXk9e2NvZGUuY29kZX0+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvZGUuY29kZSA9PT0gc2VsZWN0ZWRDb2RlID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29kZShjb2RlLmNvZGUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29kZS5jb2RlfVxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICBdfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1yLTJcIj7QmtCw0YLQtdCz0L7RgNC40Lg6PC9oNT5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBtci0xXCIga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5ID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdyeShjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yKFxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBcItCS0YHQtVwiID8gbnVsbCA6IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnkoXCLQktGB0LVcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtzaG93U3ViY2F0ZWdvcmllc0ZvciAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0yIG1iLTBcIj7Qn9C+0LTQutCw0YLQtdCz0L7RgNC40Lg6PC9wPlxuICAgICAgICAgICAgICB7c3ViQ2F0ZWdvcmllcy5tYXAoKHN1YikgPT4gKFxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e3N1YiA9PT0gc2VsZWN0ZWRTdWJDYXRlZ29yeSA/IFwid2FybmluZ1wiIDogXCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICAgIHBpbGxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnkoc3ViKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTEgbXItMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N1Yn1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgPENvbCBtZD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQulwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8RGF0YVRhYmxlXG4gICAgICAgICAgICBub0hlYWRlcj17dHJ1ZX1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBkYXRhPXtkaXNwbGF5ZWRJdGVtc31cbiAgICAgICAgICAgIG5vRGF0YUNvbXBvbmVudFxuICAgICAgICAgICAgbm9EYXRhQ29tcG9uZW50PVwi0J3QtSDQvdCw0LnQtNC10L3QviDRgtC+0LLQsNGA0L7QsiDRgdC+0L7RgtCy0LXRgtCy0YPRidC40Lkg0LrRgNC40YLQtdGA0LjRj9C8XCJcbiAgICAgICAgICAgIHBhZ2luYXRpb249e3RydWV9XG4gICAgICAgICAgICBwYWdpbmF0aW9uUm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDUwLCAxMDAsIDUwMCwgMTAwMF19XG4gICAgICAgICAgICBwYWdpbmF0aW9uQ29tcG9uZW50T3B0aW9ucz17e1xuICAgICAgICAgICAgICByb3dzUGVyUGFnZVRleHQ6IFwi0KLQvtCy0LDRgNC+0LIg0L3QsCDRgdGC0YDQsNC90LjRhtC1OlwiLFxuICAgICAgICAgICAgICByYW5nZVNlcGFyYXRvclRleHQ6IFwi0LjQt1wiLFxuICAgICAgICAgICAgICBub1Jvd3NQZXJQYWdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0QWxsUm93c0l0ZW06IGZhbHNlLFxuICAgICAgICAgICAgICBzZWxlY3RBbGxSb3dzSXRlbVRleHQ6IFwi0JLRgdC1XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSB0ZXh0LXdoaXRlIHB5LTMgdy0xMDBcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICDQodC+0LfQtNCw0YLQtdC70Ywg0YHQsNC50YLQsCDQvdC1INC40LzQtdC10YIg0L7RgtC90L7RiNC10L3QuNGPINC6INC60L7QvNC/0LDQvdC40Y/QvCDQr9C90LTQtdC60YEg0Lgg0K/QvdC00LXQutGBLtCc0LDRgNC10LrRglxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPFlNSW5pdGlhbGl6ZXIgYWNjb3VudHM9e1s3MTI1NjQ4NF19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGZvciAoY29uc3QgcHJvZHVjdCBvZiBwcm9kdWN0cykge1xuICAgIGlmICghcHJvZHVjdC5zdWJjYXRlZ29yeSkge1xuICAgICAgcHJvZHVjdC5zdWJjYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcnk7XG4gICAgICBwcm9kdWN0LmNhdGVnb3J5ID0gY2F0ZWdvcmllc0hpZXJhcmh5W3Byb2R1Y3QuY2F0ZWdvcnldO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb2RlcyxcbiAgICAgIHByb2R1Y3RzLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9