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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-yandex-metrika */ "./node_modules/react-yandex-metrika/lib/index.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-input-range */ "./node_modules/react-input-range/lib/js/index.js");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "F:\\repos_master\\sortedRepos\\market\\market-promos\\pages\\index.js",
    _s = $RefreshSig$();







var formatter = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",
  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0,
  // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)

});
var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var codes = _ref.codes,
      products = _ref.products;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Все"),
      selectedCategory = _useState[0],
      setSelectedCategry = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Все"),
      selectedSubCategory = _useState2[0],
      setSelectedSubCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Все"),
      selectedCode = _useState3[0],
      setSelectedCode = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      displayedItems = _useState4[0],
      setDisplayedItems = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      showSubcategoriesFor = _useState5[0],
      setShowSubcategoriesFor = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      minProductPrice = _useState7[0],
      setMinProductPrice = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      maxProductPrice = _useState8[0],
      setMaxProductPrice = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    min: 0,
    max: 1
  }),
      priceFilter = _useState9[0],
      setPriceFilter = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var filtredProducts = products.filter(function (item) {
      return (selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase()) && (selectedCategory === "Все" || item.category === selectedCategory) && (selectedSubCategory === "Все" || item.subcategory === selectedSubCategory) && item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 && (!item.isAdult || selectedCategory === "Товары для взрослых" && localStorage.getItem("isAdult") === "true");
    });

    var _minProductPrice = Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(filtredProducts.map(function (p) {
      return p.price;
    })));

    setMinProductPrice(_minProductPrice);

    var _maxProductPrice = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(filtredProducts.map(function (p) {
      return p.price;
    })));

    _maxProductPrice = Math.max(_maxProductPrice, _minProductPrice + 1);
    setMaxProductPrice(_maxProductPrice);
    var _priceFilter = {
      min: minProductPrice === priceFilter.min ? _minProductPrice : Math.max(priceFilter.min, _minProductPrice),
      max: maxProductPrice === priceFilter.max ? _maxProductPrice : Math.min(priceFilter.max, _maxProductPrice)
    };

    if (_priceFilter.min !== priceFilter.min || _priceFilter.max !== priceFilter.max) {
      setPriceFilter(_priceFilter);
    }

    setDisplayedItems(filtredProducts.filter(function (p) {
      return p.price >= _priceFilter.min && p.price <= _priceFilter.max;
    }));
  }, [selectedCode, selectedCategory, selectedSubCategory, search, priceFilter]);
  var columns = [{
    name: "Изображение",
    selector: "image",
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: row.img,
        width: "50",
        height: "50",
        alt: row.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [row.old_price, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [row.price, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 22
      }, _this);
    },
    grow: "0",
    compact: true,
    minWidth: "60px"
  }, {
    name: "Реальная выгода",
    selector: "real_discount",
    sortable: true,
    defaultSortAsc: false,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: [row.real_discount, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 22
      }, _this);
    },
    sortFunction: function sortFunction(rowA, rowB) {
      return (parseInt(rowA.real_discount) + 0.1 || 0.5) - (parseInt(rowB.real_discount) + 0.1 || 0.5);
    },
    grow: "0",
    compact: true,
    minWidth: "60px"
  }, {
    name: "Промокод",
    selector: "code",
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: row.code.toUpperCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 22
      }, _this);
    },
    sortFunction: function sortFunction(rowA, rowB) {
      return parseInt((rowA.code.match(/\d+/) || ["0"])[0]) - parseInt((rowB.code.match(/\d+/) || ["0"])[0]);
    },
    defaultSortAsc: false,
    grow: "0",
    compact: true,
    minWidth: "70px"
  }, {
    name: "Купить",
    selector: "buy",
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "warning",
        href: "https://pokupki.market.yandex.ru/product/".concat(row.id),
        target: "_blank",
        rel: "noopener",
        children: "\u041A\u0443\u043F\u0438\u0442\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this);
    },
    minWidth: "100px",
    grow: "0",
    compact: true
  }];
  var categories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(products.filter(function (item) {
    return selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase();
  }).reduce(function (prev, curr) {
    return prev.add(curr.category);
  }, new Set())).sort(function (a, b) {
    return a === "Товары для взрослых" ? 1 : b === "Товары для взрослых" ? -1 : a.localeCompare(b);
  })));
  var subCategories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(products.filter(function (item) {
    return (selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase()) && showSubcategoriesFor === item.category;
  }).reduce(function (prev, curr) {
    return prev.add(curr.subcategory);
  }, new Set())).sort()));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-vh-100 d-flex flex-column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO29."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "bg-warning mb-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-100 py-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "overflow-auto mb-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        fluid: "md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "mr-2",
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, this), [["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(codes)).map(function (code) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "h3 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
                color: code === selectedCode ? "warning" : "secondary",
                pill: true,
                onClick: function onClick() {
                  return setSelectedCode(code);
                },
                children: code.toUpperCase()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 19
              }, _this)
            }, code, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this), categories.map(function (category) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "h5 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
                color: category === selectedCategory ? "warning" : category === "Товары для взрослых" ? "danger" : "secondary",
                pill: true,
                onClick: function onClick() {
                  if (category === "Товары для взрослых" && (!localStorage.getItem("isAdult") || localStorage.getItem("isAdult") !== "true")) {
                    var isAdult = confirm("Вам есть 18 лет?");
                    localStorage.setItem("isAdult", isAdult);

                    if (!isAdult) {
                      return;
                    }
                  }

                  setSelectedCategry(category);
                  setShowSubcategoriesFor(category === "Все" ? null : category);
                  setSelectedSubCategory("Все");
                },
                children: category
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 15
          }, this), subCategories.map(function (sub) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
              color: sub === selectedSubCategory ? "warning" : "secondary",
              pill: true,
              onClick: function onClick() {
                return setSelectedSubCategory(sub);
              },
              className: "my-1 mr-1",
              children: sub
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          className: "mt-3 align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
              placeholder: "\u041F\u043E\u0438\u0441\u043A",
              value: search,
              onChange: function onChange(e) {
                return setSearch(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 7,
            className: "pb-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_input_range__WEBPACK_IMPORTED_MODULE_7___default.a, {
              maxValue: maxProductPrice + 1,
              minValue: minProductPrice - 1,
              value: priceFilter,
              formatLabel: function formatLabel(value) {
                return "".concat(value === minProductPrice || value === maxProductPrice ? "" : formatter.format(value));
              },
              onChange: function onChange(value) {
                return setPriceFilter({
                  min: Math.max(value.min, minProductPrice),
                  max: Math.min(value.max, maxProductPrice)
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
          noHeader: true,
          columns: columns,
          data: displayedItems,
          noDataComponent: "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0432\u0443\u0449\u0438\u0439 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C",
          pagination: true,
          paginationRowsPerPageOptions: [10, 50, 100, 500, 1000],
          paginationComponentOptions: {
            rowsPerPageText: "Товаров на странице:",
            rangeSeparatorText: "из",
            noRowsPerPage: false,
            selectAllRowsItem: false,
            selectAllRowsItemText: "Все"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: "bg-secondary text-white py-0 w-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        color: "info",
        className: "mb-0",
        children: ["\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430\u043B\u0430\u0436\u0435\u043D\u0430. \u041A\u0440\u043E\u043C\u0435 \u044D\u0442\u043E\u0433\u043E \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \"\u0420\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u044B\u0433\u043E\u0434\u0430\", \u043E\u043D\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0446\u0435\u043D\u043E\u0439 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440 \u043F\u043E \u043C\u0430\u0440\u0435\u043A\u0442\u0443 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 (\u0437\u0430 \u0438\u0434\u0435\u044E \u0441\u043F\u0430\u0441\u0438\u0431\u043E", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/Rustik_Ufa",
          children: "Rustik_Ufa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 11
        }, this), "), \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "py-2",
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 197,
    columnNumber: 5
  }, this);
}

_s(Home, "/E11y22mKn7hdHi2QqayiLs/TKY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJIb21lIiwiY29kZXMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdyeSIsInNlbGVjdGVkU3ViQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2VsZWN0ZWRDb2RlIiwic2V0U2VsZWN0ZWRDb2RlIiwiZGlzcGxheWVkSXRlbXMiLCJzZXREaXNwbGF5ZWRJdGVtcyIsInNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2V0U2hvd1N1YmNhdGVnb3JpZXNGb3IiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtaW5Qcm9kdWN0UHJpY2UiLCJzZXRNaW5Qcm9kdWN0UHJpY2UiLCJtYXhQcm9kdWN0UHJpY2UiLCJzZXRNYXhQcm9kdWN0UHJpY2UiLCJtaW4iLCJtYXgiLCJwcmljZUZpbHRlciIsInNldFByaWNlRmlsdGVyIiwidXNlRWZmZWN0IiwiZmlsdHJlZFByb2R1Y3RzIiwiZmlsdGVyIiwiaXRlbSIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaXNBZHVsdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfbWluUHJvZHVjdFByaWNlIiwiTWF0aCIsIm1hcCIsInAiLCJwcmljZSIsIl9tYXhQcm9kdWN0UHJpY2UiLCJfcHJpY2VGaWx0ZXIiLCJjb2x1bW5zIiwic2VsZWN0b3IiLCJjZWxsIiwicm93IiwiaW1nIiwiY2VudGVyIiwiZ3JvdyIsImNvbXBhY3QiLCJzb3J0YWJsZSIsIndyYXAiLCJvbGRfcHJpY2UiLCJtaW5XaWR0aCIsImRlZmF1bHRTb3J0QXNjIiwicmVhbF9kaXNjb3VudCIsInNvcnRGdW5jdGlvbiIsInJvd0EiLCJyb3dCIiwicGFyc2VJbnQiLCJtYXRjaCIsImlkIiwiY2F0ZWdvcmllcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYWRkIiwiU2V0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInN1YkNhdGVnb3JpZXMiLCJjb25maXJtIiwic2V0SXRlbSIsInN1YiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1hdCIsInJvd3NQZXJQYWdlVGV4dCIsInJhbmdlU2VwYXJhdG9yVGV4dCIsIm5vUm93c1BlclBhZ2UiLCJzZWxlY3RBbGxSb3dzSXRlbSIsInNlbGVjdEFsbFJvd3NJdGVtVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBSUEsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUM3Q0MsT0FBSyxFQUFFLFVBRHNDO0FBRTdDQyxVQUFRLEVBQUUsS0FGbUM7QUFJN0M7QUFDQUMsdUJBQXFCLEVBQUUsQ0FMc0I7QUFLbkI7QUFDMUJDLHVCQUFxQixFQUFFLENBTnNCLENBTW5COztBQU5tQixDQUEvQixDQUFoQjs7QUFTZSxTQUFTQyxJQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN6Q0MsZ0JBRHlDO0FBQUEsTUFDdkJDLGtCQUR1Qjs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxLQUFELENBRmQ7QUFBQSxNQUV6Q0csbUJBRnlDO0FBQUEsTUFFcEJDLHNCQUZvQjs7QUFBQSxtQkFHUkosc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQSxNQUd6Q0ssWUFIeUM7QUFBQSxNQUcz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QUFsQjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQU8sYUFBSyxFQUFDLE1BQWI7QUFBb0IsaUJBQVMsRUFBQyxNQUE5QjtBQUFBLHU1QkFHdUMsR0FIdkMsZUFJRTtBQUFHLGNBQUksRUFBQywwQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRiwwakJBTTRDLEdBTjVDLGVBT0U7QUFDRSxjQUFJLEVBQUMsdUNBRFA7QUFFRSxnQkFBTSxFQUFDLFFBRlQ7QUFHRSxhQUFHLEVBQUMsVUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixFQWFPLEdBYlAsb0VBY2UsR0FkZixlQWVFO0FBQUcsY0FBSSxFQUFDLDZCQUFSO0FBQXNDLGdCQUFNLEVBQUMsUUFBN0M7QUFBc0QsYUFBRyxFQUFDLFVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBMEJFLHFFQUFDLG9EQUFEO0FBQVcsaUJBQVMsRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFySkYsZUFtTEUscUVBQUMsa0VBQUQ7QUFBZSxjQUFRLEVBQUUsQ0FBQyxRQUFEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1TEQ7O0dBeFd1QnZGLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdmNzk2NjE0MmJjYWVjNDRlZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEFsZXJ0LCBCYWRnZSwgQnV0dG9uLCBDb2wsIENvbnRhaW5lciwgSW5wdXQsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNhdGVnb3JpZXNIaWVyYXJoeSBmcm9tIFwiLi4vY2F0ZWdvcmllc19oaWVyYXJjaHkuanNvblwiO1xuaW1wb3J0IHsgWU1Jbml0aWFsaXplciB9IGZyb20gXCJyZWFjdC15YW5kZXgtbWV0cmlrYVwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IElucHV0UmFuZ2UgZnJvbSBcInJlYWN0LWlucHV0LXJhbmdlXCI7XG5cbnZhciBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJydS1SdVwiLCB7XG4gIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gIGN1cnJlbmN5OiBcIlJVQlwiLFxuXG4gIC8vIFRoZXNlIG9wdGlvbnMgYXJlIG5lZWRlZCB0byByb3VuZCB0byB3aG9sZSBudW1iZXJzIGlmIHRoYXQncyB3aGF0IHlvdSB3YW50LlxuICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vICh0aGlzIHN1ZmZpY2VzIGZvciB3aG9sZSBudW1iZXJzLCBidXQgd2lsbCBwcmludCAyNTAwLjEwIGFzICQyLDUwMC4xKVxuICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vIChjYXVzZXMgMjUwMC45OSB0byBiZSBwcmludGVkIGFzICQyLDUwMSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY29kZXMsIHByb2R1Y3RzIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdyeV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW3NlbGVjdGVkU3ViQ2F0ZWdvcnksIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtzZWxlY3RlZENvZGUsIHNldFNlbGVjdGVkQ29kZV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW2Rpc3BsYXllZEl0ZW1zLCBzZXREaXNwbGF5ZWRJdGVtc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2hvd1N1YmNhdGVnb3JpZXNGb3IsIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttaW5Qcm9kdWN0UHJpY2UsIHNldE1pblByb2R1Y3RQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21heFByb2R1Y3RQcmljZSwgc2V0TWF4UHJvZHVjdFByaWNlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcHJpY2VGaWx0ZXIsIHNldFByaWNlRmlsdGVyXSA9IHVzZVN0YXRlKHsgbWluOiAwLCBtYXg6IDEgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmaWx0cmVkUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgKHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKSkgJiZcbiAgICAgICAgKHNlbGVjdGVkQ2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSkgJiZcbiAgICAgICAgKHNlbGVjdGVkU3ViQ2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICBpdGVtLnN1YmNhdGVnb3J5ID09PSBzZWxlY3RlZFN1YkNhdGVnb3J5KSAmJlxuICAgICAgICBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT0gLTEgJiZcbiAgICAgICAgKCFpdGVtLmlzQWR1bHQgfHxcbiAgICAgICAgICAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIiAmJlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkdWx0XCIpID09PSBcInRydWVcIikpXG4gICAgKTtcbiAgICBsZXQgX21pblByb2R1Y3RQcmljZSA9IE1hdGgubWluKC4uLmZpbHRyZWRQcm9kdWN0cy5tYXAoKHApID0+IHAucHJpY2UpKTtcbiAgICBzZXRNaW5Qcm9kdWN0UHJpY2UoX21pblByb2R1Y3RQcmljZSk7XG4gICAgbGV0IF9tYXhQcm9kdWN0UHJpY2UgPSBNYXRoLm1heCguLi5maWx0cmVkUHJvZHVjdHMubWFwKChwKSA9PiBwLnByaWNlKSk7XG4gICAgX21heFByb2R1Y3RQcmljZSA9IE1hdGgubWF4KF9tYXhQcm9kdWN0UHJpY2UsIF9taW5Qcm9kdWN0UHJpY2UgKyAxKTtcbiAgICBzZXRNYXhQcm9kdWN0UHJpY2UoX21heFByb2R1Y3RQcmljZSk7XG4gICAgbGV0IF9wcmljZUZpbHRlciA9IHtcbiAgICAgIG1pbjpcbiAgICAgICAgbWluUHJvZHVjdFByaWNlID09PSBwcmljZUZpbHRlci5taW5cbiAgICAgICAgICA/IF9taW5Qcm9kdWN0UHJpY2VcbiAgICAgICAgICA6IE1hdGgubWF4KHByaWNlRmlsdGVyLm1pbiwgX21pblByb2R1Y3RQcmljZSksXG4gICAgICBtYXg6XG4gICAgICAgIG1heFByb2R1Y3RQcmljZSA9PT0gcHJpY2VGaWx0ZXIubWF4XG4gICAgICAgICAgPyBfbWF4UHJvZHVjdFByaWNlXG4gICAgICAgICAgOiBNYXRoLm1pbihwcmljZUZpbHRlci5tYXgsIF9tYXhQcm9kdWN0UHJpY2UpLFxuICAgIH07XG4gICAgaWYgKFxuICAgICAgX3ByaWNlRmlsdGVyLm1pbiAhPT0gcHJpY2VGaWx0ZXIubWluIHx8XG4gICAgICBfcHJpY2VGaWx0ZXIubWF4ICE9PSBwcmljZUZpbHRlci5tYXhcbiAgICApIHtcbiAgICAgIHNldFByaWNlRmlsdGVyKF9wcmljZUZpbHRlcik7XG4gICAgfVxuICAgIHNldERpc3BsYXllZEl0ZW1zKFxuICAgICAgZmlsdHJlZFByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgKHApID0+IHAucHJpY2UgPj0gX3ByaWNlRmlsdGVyLm1pbiAmJiBwLnByaWNlIDw9IF9wcmljZUZpbHRlci5tYXhcbiAgICAgIClcbiAgICApO1xuICB9LCBbXG4gICAgc2VsZWN0ZWRDb2RlLFxuICAgIHNlbGVjdGVkQ2F0ZWdvcnksXG4gICAgc2VsZWN0ZWRTdWJDYXRlZ29yeSxcbiAgICBzZWFyY2gsXG4gICAgcHJpY2VGaWx0ZXIsXG4gIF0pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCLQmNC30L7QsdGA0LDQttC10L3QuNC1XCIsXG4gICAgICBzZWxlY3RvcjogXCJpbWFnZVwiLFxuICAgICAgY2VsbDogKHJvdykgPT4gKFxuICAgICAgICA8aW1nIHNyYz17cm93LmltZ30gd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgYWx0PXtyb3cubmFtZX0gLz5cbiAgICAgICksXG4gICAgICBjZW50ZXI6IHRydWUsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCd0LDQt9Cy0LDQvdC40LVcIixcbiAgICAgIHNlbGVjdG9yOiBcIm5hbWVcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZ3JvdzogXCIyXCIsXG4gICAgICB3cmFwOiB0cnVlLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KHRgtCw0YDQsNGPINGG0LXQvdCwXCIsXG4gICAgICBzZWxlY3RvcjogXCJvbGRfcHJpY2VcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5vbGRfcHJpY2V94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KbQtdC90LAg0YHQviDRgdC60LjQtNC60L7QuVwiLFxuICAgICAgc2VsZWN0b3I6IFwicHJpY2VcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5wcmljZX3igr08L3NwYW4+LFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQoNC10LDQu9GM0L3QsNGPINCy0YvQs9C+0LTQsFwiLFxuICAgICAgc2VsZWN0b3I6IFwicmVhbF9kaXNjb3VudFwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBkZWZhdWx0U29ydEFzYzogZmFsc2UsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LnJlYWxfZGlzY291bnR94oK9PC9zcGFuPixcbiAgICAgIHNvcnRGdW5jdGlvbjogKHJvd0EsIHJvd0IpID0+XG4gICAgICAgIChwYXJzZUludChyb3dBLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSkgLVxuICAgICAgICAocGFyc2VJbnQocm93Qi5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQn9GA0L7QvNC+0LrQvtC0XCIsXG4gICAgICBzZWxlY3RvcjogXCJjb2RlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cuY29kZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj4sXG4gICAgICBzb3J0RnVuY3Rpb246IChyb3dBLCByb3dCKSA9PlxuICAgICAgICBwYXJzZUludCgocm93QS5jb2RlLm1hdGNoKC9cXGQrLykgfHwgW1wiMFwiXSlbMF0pIC1cbiAgICAgICAgcGFyc2VJbnQoKHJvd0IuY29kZS5tYXRjaCgvXFxkKy8pIHx8IFtcIjBcIl0pWzBdKSxcbiAgICAgIGRlZmF1bHRTb3J0QXNjOiBmYWxzZSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjcwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0JrRg9C/0LjRgtGMXCIsXG4gICAgICBzZWxlY3RvcjogXCJidXlcIixcbiAgICAgIGNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vcG9rdXBraS5tYXJrZXQueWFuZGV4LnJ1L3Byb2R1Y3QvJHtyb3cuaWR9YH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgINCa0YPQv9C40YLRjFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICksXG4gICAgICBtaW5XaWR0aDogXCIxMDBweFwiLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgICBcItCS0YHQtVwiLFxuICAgIC4uLltcbiAgICAgIC4uLnByb2R1Y3RzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICBzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJldi5hZGQoY3Vyci5jYXRlZ29yeSk7XG4gICAgICAgIH0sIG5ldyBTZXQoKSksXG4gICAgXS5zb3J0KChhLCBiKSA9PlxuICAgICAgYSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICA/IDFcbiAgICAgICAgOiBiID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiXG4gICAgICAgID8gLTFcbiAgICAgICAgOiBhLmxvY2FsZUNvbXBhcmUoYilcbiAgICApLFxuICBdO1xuXG4gIGNvbnN0IHN1YkNhdGVnb3JpZXMgPSBbXG4gICAgXCLQktGB0LVcIixcbiAgICAuLi5bXG4gICAgICAuLi5wcm9kdWN0c1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgICAgKHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgICBpdGVtLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gc2VsZWN0ZWRDb2RlLnRvVXBwZXJDYXNlKCkpICYmXG4gICAgICAgICAgICBzaG93U3ViY2F0ZWdvcmllc0ZvciA9PT0gaXRlbS5jYXRlZ29yeVxuICAgICAgICApXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJldi5hZGQoY3Vyci5zdWJjYXRlZ29yeSk7XG4gICAgICAgIH0sIG5ldyBTZXQoKSksXG4gICAgXS5zb3J0KCksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi12aC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCf0YDQvtC80L7QutC+0LTRiyDQtNC70Y8g0K/QvdC00LXQutGBLtCc0LDRgNC60LXRgtCwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cItCa0LDRgtCw0LvQvtCzINCy0YHQtdGFINGC0L7QstCw0YDQvtCyINC00L7RgdGC0YPQv9C90YvRhSDQtNC70Y8g0L/QvtC60YPQv9C60Lgg0L3QsCDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LUg0YHQviDRgdC60LjQtNC60L7QuSDQv9C+INC/0YDQvtC80L7QutC+0LTQsNC8IENVVDQtQ1VUMjUg0LggR08zLUdPMjkuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2FybmluZyBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBweS0yXCI+XG4gICAgICAgICAgICA8aDE+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ9XCJtZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1yLTJcIj7Qn9GA0L7QvNC+0LrQvtC00Ys6PC9oMz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFtcItCS0YHQtVwiLCAuLi5jb2Rlc10ubWFwKChjb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtci0xXCIga2V5PXtjb2RlfT5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29kZSA9PT0gc2VsZWN0ZWRDb2RlID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29kZShjb2RlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvZGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtci0yXCI+0JrQsNGC0LXQs9C+0YDQuNC4OjwvaDU+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbXItMVwiIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkdWx0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgIT09IFwidHJ1ZVwiKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FkdWx0ID0gY29uZmlybShcItCS0LDQvCDQtdGB0YLRjCAxOCDQu9C10YI/XCIpO1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNBZHVsdFwiLCBpc0FkdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQWR1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDYXRlZ3J5KGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1N1YmNhdGVnb3JpZXNGb3IoXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgPyBudWxsIDogY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeShcItCS0YHQtVwiKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Nob3dTdWJjYXRlZ29yaWVzRm9yICE9PSBudWxsID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTIgbWItMFwiPtCf0L7QtNC60LDRgtC10LPQvtGA0LjQuDo8L3A+XG4gICAgICAgICAgICAgIHtzdWJDYXRlZ29yaWVzLm1hcCgoc3ViKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICBjb2xvcj17c3ViID09PSBzZWxlY3RlZFN1YkNhdGVnb3J5ID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeShzdWIpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMSBtci0xXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c3VifVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0zIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPENvbCBtZD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQulwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIHsvKiA8Q29sIHhzPXs2fSBtZD17Mn0gY2xhc3NOYW1lPVwicHItMlwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Zm9ybWF0dGVyLmZvcm1hdChwcmljZUZpbHRlci5taW4pfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZUZpbHRlci5taW59XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgIHNldFByaWNlRmlsdGVyKHsgbWluOiBlLnRhcmdldC52YWx1ZSwgbWF4OiBwcmljZUZpbHRlci5tYXggfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAtXG4gICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17Mn0gY2xhc3NOYW1lPVwicGwtMVwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Zm9ybWF0dGVyLmZvcm1hdChwcmljZUZpbHRlci5tYXgpfVxuICAgICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICAgIDwvQ29sPiAqL31cbiAgICAgICAgICAgIDxDb2wgbWQ9ezd9IGNsYXNzTmFtZT1cInBiLTJcIj5cbiAgICAgICAgICAgICAgPElucHV0UmFuZ2VcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZT17bWF4UHJvZHVjdFByaWNlICsgMX1cbiAgICAgICAgICAgICAgICBtaW5WYWx1ZT17bWluUHJvZHVjdFByaWNlIC0gMX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2VGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgZm9ybWF0TGFiZWw9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9PT0gbWluUHJvZHVjdFByaWNlIHx8IHZhbHVlID09PSBtYXhQcm9kdWN0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdHRlci5mb3JtYXQodmFsdWUpXG4gICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0UHJpY2VGaWx0ZXIoe1xuICAgICAgICAgICAgICAgICAgICBtaW46IE1hdGgubWF4KHZhbHVlLm1pbiwgbWluUHJvZHVjdFByaWNlKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBNYXRoLm1pbih2YWx1ZS5tYXgsIG1heFByb2R1Y3RQcmljZSksXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxEYXRhVGFibGVcbiAgICAgICAgICAgIG5vSGVhZGVyPXt0cnVlfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGRhdGE9e2Rpc3BsYXllZEl0ZW1zfVxuICAgICAgICAgICAgbm9EYXRhQ29tcG9uZW50PVwi0J3QtSDQvdCw0LnQtNC10L3QviDRgtC+0LLQsNGA0L7QsiDRgdC+0L7RgtCy0LXRgtCy0YPRidC40Lkg0LrRgNC40YLQtdGA0LjRj9C8XCJcbiAgICAgICAgICAgIHBhZ2luYXRpb249e3RydWV9XG4gICAgICAgICAgICBwYWdpbmF0aW9uUm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDUwLCAxMDAsIDUwMCwgMTAwMF19XG4gICAgICAgICAgICBwYWdpbmF0aW9uQ29tcG9uZW50T3B0aW9ucz17e1xuICAgICAgICAgICAgICByb3dzUGVyUGFnZVRleHQ6IFwi0KLQvtCy0LDRgNC+0LIg0L3QsCDRgdGC0YDQsNC90LjRhtC1OlwiLFxuICAgICAgICAgICAgICByYW5nZVNlcGFyYXRvclRleHQ6IFwi0LjQt1wiLFxuICAgICAgICAgICAgICBub1Jvd3NQZXJQYWdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0QWxsUm93c0l0ZW06IGZhbHNlLFxuICAgICAgICAgICAgICBzZWxlY3RBbGxSb3dzSXRlbVRleHQ6IFwi0JLRgdC1XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSBweS0wIHctMTAwXCI+XG4gICAgICAgIDxBbGVydCBjb2xvcj1cImluZm9cIiBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAg0JLRi9Cz0YDRg9C30LrQsCDRgtC+0LLQsNGA0L7QsiDQvdCw0LvQsNC20LXQvdCwLiDQmtGA0L7QvNC1INGN0YLQvtCz0L4g0LIg0YLQsNCx0LvQuNGG0YMg0LTQvtCx0LDQstC70LXQvdCwINC60L7Qu9C+0L3QutCwXG4gICAgICAgICAgXCLQoNC10LDQu9GM0L3QsNGPINCy0YvQs9C+0LTQsFwiLCDQvtC90LAg0L/QvtC60LDQt9GL0LLQsNC10YIg0YDQsNC30L3QuNGG0YMg0YEg0LzQuNC90LjQvNCw0LvRjNC90L7QuSDRhtC10L3QvtC5INC90LAg0YLQvtCy0LDRgFxuICAgICAgICAgINC/0L4g0LzQsNGA0LXQutGC0YMg0LIg0JzQvtGB0LrQstC1ICjQt9CwINC40LTQtdGOINGB0L/QsNGB0LjQsdC+e1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wZXBwZXIucnUvcHJvZmlsZS9SdXN0aWtfVWZhXCI+UnVzdGlrX1VmYTwvYT4pLFxuICAgICAgICAgINC/0L7QutCwINGH0YLQviDQsiDRjdGC0L7QuSDQutC+0LvQvtC90LrQtSDQstC+0LfQvNC+0LbQvdGLINC+0YjQuNCx0LrQuCDQuCDQv9GA0L7Qv9GD0YHQutC4LiDQktC+0L/RgNC+0YHRiywg0YHQvtCy0LXRgtGLINC4XG4gICAgICAgICAg0LfQsNC80LXRh9Cw0L3QuNGPINC/0L4g0YHQsNC50YLRgywg0LzQvtC20LXRgtC1INC90LDQv9C40YHQsNGC0Ywg0LzQvdC1INCye1wiIFwifVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucGVwcGVyLnJ1L3Byb2ZpbGUvc2V2c2tpaVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgINC70LjRh9C60YMg0L3QsCBQZXBwZXJcbiAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgINC40LvQuCDQvdCwINC/0L7Rh9GC0YN7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpzZXZza2lpMTExQGdtYWlsLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICBzZXZza2lpMTExQGdtYWlsLmNvbVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIHsvKiA8QWxlcnQgY29sb3I9XCJkYW5nZXJcIiBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAg0JrQsNGA0YLQuNC90LrQuCDQvdC10LrQvtGC0L7RgNGL0YUg0YLQvtCy0LDRgNC+0LIg0LzQvtCz0YPRgiDQsdGL0YLRjCDQvtGCINGC0L7QstCw0YDQvtCyINGBINC/0L7RhdC+0LbQuNC80LhcbiAgICAgICAgICDQvdCw0LfQstCw0L3QuNGP0LzQuC4g0J/RgNC+0LHQu9C10LzQsCDQt9Cw0YLRgNCw0LPQuNCy0LDQtdGCINGC0L7Qu9GM0LrQviDRgdCw0LzQuCDQutCw0YDRgtC40L3QutC4INC4INGPINC/0L7RgdGC0LDRgNCw0Y7RgdGMXG4gICAgICAgICAg0LXRkSDQutCw0Log0LzQvtC20L3QviDRgdC60L7RgNC10LUg0LjRgdC/0YDQsNCy0LjRgtGMLlxuICAgICAgICA8L0FsZXJ0PiAqL31cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJweS0yXCI+XG4gICAgICAgICAg0KHQvtC30LTQsNGC0LXQu9GMINGB0LDQudGC0LAg0L3QtSDQuNC80LXQtdGCINC+0YLQvdC+0YjQtdC90LjRjyDQuiDQutC+0LzQv9Cw0L3QuNGP0Lwg0K/QvdC00LXQutGBINC4INCv0L3QtNC10LrRgS7QnNCw0YDQtdC60YJcbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxZTUluaXRpYWxpemVyIGFjY291bnRzPXtbNzEyNTY0ODRdfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBsZXQgY29kZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHByb2R1Y3RzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCIuL3Byb2R1Y3RzLmpzb25cIikpO1xuICBsZXQgdW5pcXVlUHJvZHVjdHMgPSBbXTtcbiAgbGV0IGFkZGVkUHJvZHVjdHMgPSBuZXcgU2V0KCk7XG4gIGxldCBiYWRfcHJpY2VzID0gW107XG5cbiAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHByb2R1Y3RzKSB7XG4gICAgaWYgKCFhZGRlZFByb2R1Y3RzLmhhcyhwcm9kdWN0LmlkKSkge1xuICAgICAgaWYgKCFwcm9kdWN0LmNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICB9XG4gICAgICBjb2Rlcy5hZGQocHJvZHVjdC5jb2RlKTtcbiAgICAgIHVuaXF1ZVByb2R1Y3RzLnB1c2goe1xuICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICByZWFsX2Rpc2NvdW50OlxuICAgICAgICAgIHByb2R1Y3QubWluX3ByaWNlIDwgcHJvZHVjdC5vbGRfcHJpY2VcbiAgICAgICAgICAgID8gcHJvZHVjdC5taW5fcHJpY2UgLSBwcm9kdWN0LnByaWNlXG4gICAgICAgICAgICA6IFwiP1wiLFxuICAgICAgfSk7XG4gICAgICBpZiAocHJvZHVjdC5taW5fcHJpY2UgPiBwcm9kdWN0Lm9sZF9wcmljZSkge1xuICAgICAgICBiYWRfcHJpY2VzLnB1c2gocHJvZHVjdCk7XG4gICAgICB9XG4gICAgICBhZGRlZFByb2R1Y3RzLmFkZChwcm9kdWN0LmlkKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coYCR7YmFkX3ByaWNlcy5sZW5ndGh9IHByaWNlcyBhcmUgYmFkYCk7XG4gIGNvbnNvbGUubG9nKGJhZF9wcmljZXMpO1xuICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdW5pcXVlUHJvZHVjdHMpIHtcbiAgICBpZiAoIXByb2R1Y3Quc3ViY2F0ZWdvcnkpIHtcbiAgICAgIHByb2R1Y3Quc3ViY2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5O1xuICAgICAgcHJvZHVjdC5jYXRlZ29yeSA9IGNhdGVnb3JpZXNIaWVyYXJoeVtwcm9kdWN0LmNhdGVnb3J5XTtcbiAgICAgIHByb2R1Y3QuaXNBZHVsdCA9IHByb2R1Y3QuY2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCI7XG4gICAgICBpZiAoIXByb2R1Y3QuY2F0ZWdvcnkpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnMud3JpdGVGaWxlU3luYyhcIi4vcHJvZHVjdHNfanNvbi5qc29uXCIsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzKSwgXCJ1dGY4XCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvZGVzOiBbLi4uY29kZXNdLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgIChiLm1hdGNoKC9cXGQrLykgPyBiLm1hdGNoKC9cXGQrLylbMF0gOiAwKSAtXG4gICAgICAgICAgKGEubWF0Y2goL1xcZCsvKSA/IGEubWF0Y2goL1xcZCsvKVswXSA6IDApXG4gICAgICApLFxuICAgICAgcHJvZHVjdHM6IHVuaXF1ZVByb2R1Y3RzLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgIChwYXJzZUludChiLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSkgLVxuICAgICAgICAgIChwYXJzZUludChhLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSlcbiAgICAgICksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=