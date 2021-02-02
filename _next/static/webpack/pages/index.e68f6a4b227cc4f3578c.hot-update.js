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

    _maxProductPrice = Math.max(_maxProductPrice, _minProductPrice);
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
          className: "mt-3",
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_input_range__WEBPACK_IMPORTED_MODULE_7___default.a, {
              maxValue: maxProductPrice,
              minValue: minProductPrice,
              value: priceFilter,
              formatLabel: function formatLabel(value) {
                return "".concat(formatter.format(value));
              },
              onChange: function onChange(value) {
                return setPriceFilter(value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
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
          lineNumber: 301,
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
          lineNumber: 323,
          columnNumber: 11
        }, this), "), \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "py-2",
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 348,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJIb21lIiwiY29kZXMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdyeSIsInNlbGVjdGVkU3ViQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2VsZWN0ZWRDb2RlIiwic2V0U2VsZWN0ZWRDb2RlIiwiZGlzcGxheWVkSXRlbXMiLCJzZXREaXNwbGF5ZWRJdGVtcyIsInNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2V0U2hvd1N1YmNhdGVnb3JpZXNGb3IiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtaW5Qcm9kdWN0UHJpY2UiLCJzZXRNaW5Qcm9kdWN0UHJpY2UiLCJtYXhQcm9kdWN0UHJpY2UiLCJzZXRNYXhQcm9kdWN0UHJpY2UiLCJtaW4iLCJtYXgiLCJwcmljZUZpbHRlciIsInNldFByaWNlRmlsdGVyIiwidXNlRWZmZWN0IiwiZmlsdHJlZFByb2R1Y3RzIiwiZmlsdGVyIiwiaXRlbSIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiaXNBZHVsdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfbWluUHJvZHVjdFByaWNlIiwiTWF0aCIsIm1hcCIsInAiLCJwcmljZSIsIl9tYXhQcm9kdWN0UHJpY2UiLCJfcHJpY2VGaWx0ZXIiLCJjb2x1bW5zIiwic2VsZWN0b3IiLCJjZWxsIiwicm93IiwiaW1nIiwiY2VudGVyIiwiZ3JvdyIsImNvbXBhY3QiLCJzb3J0YWJsZSIsIndyYXAiLCJvbGRfcHJpY2UiLCJtaW5XaWR0aCIsImRlZmF1bHRTb3J0QXNjIiwicmVhbF9kaXNjb3VudCIsInNvcnRGdW5jdGlvbiIsInJvd0EiLCJyb3dCIiwicGFyc2VJbnQiLCJtYXRjaCIsImlkIiwiY2F0ZWdvcmllcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYWRkIiwiU2V0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInN1YkNhdGVnb3JpZXMiLCJjb25maXJtIiwic2V0SXRlbSIsInN1YiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1hdCIsInJvd3NQZXJQYWdlVGV4dCIsInJhbmdlU2VwYXJhdG9yVGV4dCIsIm5vUm93c1BlclBhZ2UiLCJzZWxlY3RBbGxSb3dzSXRlbSIsInNlbGVjdEFsbFJvd3NJdGVtVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBSUEsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUM3Q0MsT0FBSyxFQUFFLFVBRHNDO0FBRTdDQyxVQUFRLEVBQUUsS0FGbUM7QUFJN0M7QUFDQUMsdUJBQXFCLEVBQUUsQ0FMc0I7QUFLbkI7QUFDMUJDLHVCQUFxQixFQUFFLENBTnNCLENBTW5COztBQU5tQixDQUEvQixDQUFoQjs7QUFTZSxTQUFTQyxJQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN6Q0MsZ0JBRHlDO0FBQUEsTUFDdkJDLGtCQUR1Qjs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxLQUFELENBRmQ7QUFBQSxNQUV6Q0csbUJBRnlDO0FBQUEsTUFFcEJDLHNCQUZvQjs7QUFBQSxtQkFHUkosc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQSxNQUd6Q0ssWUFIeUM7QUFBQSxNQUczQkMsZUFIMkI7O0FBQUEsbUJBSUpOLHNEQUFRLEVBSko7QUFBQSxNQUl6Q08sY0FKeUM7QUFBQSxNQUl6QkMsaUJBSnlCOztBQUFBLG1CQUtRUixzREFBUSxDQUFDLElBQUQsQ0FMaEI7QUFBQSxNQUt6Q1Msb0JBTHlDO0FBQUEsTUFLbkJDLHVCQUxtQjs7QUFBQSxtQkFNcEJWLHNEQUFRLENBQUMsRUFBRCxDQU5ZO0FBQUEsTUFNekNXLE1BTnlDO0FBQUEsTUFNakNDLFNBTmlDOztBQUFBLG1CQU9GWixzREFBUSxDQUFDLENBQUQsQ0FQTjtBQUFBLE1BT3pDYSxlQVB5QztBQUFBLE1BT3hCQyxrQkFQd0I7O0FBQUEsbUJBUUZkLHNEQUFRLENBQUMsQ0FBRCxDQVJOO0FBQUEsTUFRekNlLGVBUnlDO0FBQUEsTUFReEJDLGtCQVJ3Qjs7QUFBQSxtQkFTVmhCLHNEQUFRLENBQUM7QUFBRWlCLE9BQUcsRUFBRSxDQUFQO0FBQVVDLE9BQUcsRUFBRTtBQUFmLEdBQUQsQ0FURTtBQUFBLE1BU3pDQyxXQVR5QztBQUFBLE1BUzVCQyxjQVQ0Qjs7QUFXaERDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLGVBQWUsR0FBR3ZCLFFBQVEsQ0FBQ3dCLE1BQVQsQ0FDdEIsVUFBQ0MsSUFBRDtBQUFBLGFBQ0UsQ0FBQ25CLFlBQVksS0FBSyxLQUFqQixJQUNDbUIsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFdBQVYsT0FBNEJyQixZQUFZLENBQUNxQixXQUFiLEVBRDlCLE1BRUN6QixnQkFBZ0IsS0FBSyxLQUFyQixJQUE4QnVCLElBQUksQ0FBQ0csUUFBTCxLQUFrQjFCLGdCQUZqRCxNQUdDRSxtQkFBbUIsS0FBSyxLQUF4QixJQUNDcUIsSUFBSSxDQUFDSSxXQUFMLEtBQXFCekIsbUJBSnZCLEtBS0FxQixJQUFJLENBQUNLLElBQUwsQ0FBVUMsV0FBVixHQUF3QkMsT0FBeEIsQ0FBZ0NwQixNQUFNLENBQUNtQixXQUFQLEVBQWhDLE1BQTBELENBQUMsQ0FMM0QsS0FNQyxDQUFDTixJQUFJLENBQUNRLE9BQU4sSUFDRS9CLGdCQUFnQixLQUFLLHFCQUFyQixJQUNDZ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLE1BQW9DLE1BUnhDLENBREY7QUFBQSxLQURzQixDQUF4Qjs7QUFZQSxRQUFJQyxnQkFBZ0IsR0FBR0MsSUFBSSxDQUFDbkIsR0FBTCxPQUFBbUIsSUFBSSwrRkFBUWQsZUFBZSxDQUFDZSxHQUFoQixDQUFvQixVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxLQUFUO0FBQUEsS0FBcEIsQ0FBUixFQUEzQjs7QUFDQXpCLHNCQUFrQixDQUFDcUIsZ0JBQUQsQ0FBbEI7O0FBQ0EsUUFBSUssZ0JBQWdCLEdBQUdKLElBQUksQ0FBQ2xCLEdBQUwsT0FBQWtCLElBQUksK0ZBQVFkLGVBQWUsQ0FBQ2UsR0FBaEIsQ0FBb0IsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsS0FBVDtBQUFBLEtBQXBCLENBQVIsRUFBM0I7O0FBQ0FDLG9CQUFnQixHQUFHSixJQUFJLENBQUNsQixHQUFMLENBQVNzQixnQkFBVCxFQUEyQkwsZ0JBQTNCLENBQW5CO0FBQ0FuQixzQkFBa0IsQ0FBQ3dCLGdCQUFELENBQWxCO0FBQ0EsUUFBSUMsWUFBWSxHQUFHO0FBQ2pCeEIsU0FBRyxFQUNESixlQUFlLEtBQUtNLFdBQVcsQ0FBQ0YsR0FBaEMsR0FDSWtCLGdCQURKLEdBRUlDLElBQUksQ0FBQ2xCLEdBQUwsQ0FBU0MsV0FBVyxDQUFDRixHQUFyQixFQUEwQmtCLGdCQUExQixDQUpXO0FBS2pCakIsU0FBRyxFQUNESCxlQUFlLEtBQUtJLFdBQVcsQ0FBQ0QsR0FBaEMsR0FDSXNCLGdCQURKLEdBRUlKLElBQUksQ0FBQ25CLEdBQUwsQ0FBU0UsV0FBVyxDQUFDRCxHQUFyQixFQUEwQnNCLGdCQUExQjtBQVJXLEtBQW5COztBQVVBLFFBQ0VDLFlBQVksQ0FBQ3hCLEdBQWIsS0FBcUJFLFdBQVcsQ0FBQ0YsR0FBakMsSUFDQXdCLFlBQVksQ0FBQ3ZCLEdBQWIsS0FBcUJDLFdBQVcsQ0FBQ0QsR0FGbkMsRUFHRTtBQUNBRSxvQkFBYyxDQUFDcUIsWUFBRCxDQUFkO0FBQ0Q7O0FBQ0RqQyxxQkFBaUIsQ0FDZmMsZUFBZSxDQUFDQyxNQUFoQixDQUNFLFVBQUNlLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLEtBQUYsSUFBV0UsWUFBWSxDQUFDeEIsR0FBeEIsSUFBK0JxQixDQUFDLENBQUNDLEtBQUYsSUFBV0UsWUFBWSxDQUFDdkIsR0FBOUQ7QUFBQSxLQURGLENBRGUsQ0FBakI7QUFLRCxHQXZDUSxFQXVDTixDQUNEYixZQURDLEVBRURKLGdCQUZDLEVBR0RFLG1CQUhDLEVBSURRLE1BSkMsRUFLRFEsV0FMQyxDQXZDTSxDQUFUO0FBK0NBLE1BQU11QixPQUFPLEdBQUcsQ0FDZDtBQUNFYixRQUFJLEVBQUUsYUFEUjtBQUVFYyxZQUFRLEVBQUUsT0FGWjtBQUdFQyxRQUFJLEVBQUUsY0FBQ0MsR0FBRDtBQUFBLDBCQUNKO0FBQUssV0FBRyxFQUFFQSxHQUFHLENBQUNDLEdBQWQ7QUFBbUIsYUFBSyxFQUFDLElBQXpCO0FBQThCLGNBQU0sRUFBQyxJQUFyQztBQUEwQyxXQUFHLEVBQUVELEdBQUcsQ0FBQ2hCO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESTtBQUFBLEtBSFI7QUFNRWtCLFVBQU0sRUFBRSxJQU5WO0FBT0VDLFFBQUksRUFBRSxHQVBSO0FBUUVDLFdBQU8sRUFBRTtBQVJYLEdBRGMsRUFXZDtBQUNFcEIsUUFBSSxFQUFFLFVBRFI7QUFFRWMsWUFBUSxFQUFFLE1BRlo7QUFHRU8sWUFBUSxFQUFFLElBSFo7QUFJRUYsUUFBSSxFQUFFLEdBSlI7QUFLRUcsUUFBSSxFQUFFLElBTFI7QUFNRUYsV0FBTyxFQUFFO0FBTlgsR0FYYyxFQW1CZDtBQUNFcEIsUUFBSSxFQUFFLGFBRFI7QUFFRWMsWUFBUSxFQUFFLFdBRlo7QUFHRU8sWUFBUSxFQUFFLElBSFo7QUFJRU4sUUFBSSxFQUFFLGNBQUNDLEdBQUQ7QUFBQSwwQkFBUztBQUFBLG1CQUFPQSxHQUFHLENBQUNPLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7QUFBQSxLQUpSO0FBS0VKLFFBQUksRUFBRSxHQUxSO0FBTUVDLFdBQU8sRUFBRSxJQU5YO0FBT0VJLFlBQVEsRUFBRTtBQVBaLEdBbkJjLEVBNEJkO0FBQ0V4QixRQUFJLEVBQUUsaUJBRFI7QUFFRWMsWUFBUSxFQUFFLE9BRlo7QUFHRU8sWUFBUSxFQUFFLElBSFo7QUFJRU4sUUFBSSxFQUFFLGNBQUNDLEdBQUQ7QUFBQSwwQkFBUztBQUFBLG1CQUFPQSxHQUFHLENBQUNOLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVQ7QUFBQSxLQUpSO0FBS0VTLFFBQUksRUFBRSxHQUxSO0FBTUVDLFdBQU8sRUFBRSxJQU5YO0FBT0VJLFlBQVEsRUFBRTtBQVBaLEdBNUJjLEVBcUNkO0FBQ0V4QixRQUFJLEVBQUUsaUJBRFI7QUFFRWMsWUFBUSxFQUFFLGVBRlo7QUFHRU8sWUFBUSxFQUFFLElBSFo7QUFJRUksa0JBQWMsRUFBRSxLQUpsQjtBQUtFVixRQUFJLEVBQUUsY0FBQ0MsR0FBRDtBQUFBLDBCQUFTO0FBQUEsbUJBQU9BLEdBQUcsQ0FBQ1UsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQUFBLEtBTFI7QUFNRUMsZ0JBQVksRUFBRSxzQkFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsYUFDWixDQUFDQyxRQUFRLENBQUNGLElBQUksQ0FBQ0YsYUFBTixDQUFSLEdBQStCLEdBQS9CLElBQXNDLEdBQXZDLEtBQ0NJLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDSCxhQUFOLENBQVIsR0FBK0IsR0FBL0IsSUFBc0MsR0FEdkMsQ0FEWTtBQUFBLEtBTmhCO0FBU0VQLFFBQUksRUFBRSxHQVRSO0FBVUVDLFdBQU8sRUFBRSxJQVZYO0FBV0VJLFlBQVEsRUFBRTtBQVhaLEdBckNjLEVBa0RkO0FBQ0V4QixRQUFJLEVBQUUsVUFEUjtBQUVFYyxZQUFRLEVBQUUsTUFGWjtBQUdFTyxZQUFRLEVBQUUsSUFIWjtBQUlFTixRQUFJLEVBQUUsY0FBQ0MsR0FBRDtBQUFBLDBCQUFTO0FBQUEsa0JBQU9BLEdBQUcsQ0FBQ3BCLElBQUosQ0FBU0MsV0FBVDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQUFBLEtBSlI7QUFLRThCLGdCQUFZLEVBQUUsc0JBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLGFBQ1pDLFFBQVEsQ0FBQyxDQUFDRixJQUFJLENBQUNoQyxJQUFMLENBQVVtQyxLQUFWLENBQWdCLEtBQWhCLEtBQTBCLENBQUMsR0FBRCxDQUEzQixFQUFrQyxDQUFsQyxDQUFELENBQVIsR0FDQUQsUUFBUSxDQUFDLENBQUNELElBQUksQ0FBQ2pDLElBQUwsQ0FBVW1DLEtBQVYsQ0FBZ0IsS0FBaEIsS0FBMEIsQ0FBQyxHQUFELENBQTNCLEVBQWtDLENBQWxDLENBQUQsQ0FGSTtBQUFBLEtBTGhCO0FBUUVOLGtCQUFjLEVBQUUsS0FSbEI7QUFTRU4sUUFBSSxFQUFFLEdBVFI7QUFVRUMsV0FBTyxFQUFFLElBVlg7QUFXRUksWUFBUSxFQUFFO0FBWFosR0FsRGMsRUErRGQ7QUFDRXhCLFFBQUksRUFBRSxRQURSO0FBRUVjLFlBQVEsRUFBRSxLQUZaO0FBR0VDLFFBQUksRUFBRSxjQUFDQyxHQUFEO0FBQUEsMEJBQ0oscUVBQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUMsU0FEUjtBQUVFLFlBQUkscURBQThDQSxHQUFHLENBQUNnQixFQUFsRCxDQUZOO0FBR0UsY0FBTSxFQUFDLFFBSFQ7QUFJRSxXQUFHLEVBQUMsVUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURJO0FBQUEsS0FIUjtBQWFFUixZQUFRLEVBQUUsT0FiWjtBQWNFTCxRQUFJLEVBQUUsR0FkUjtBQWVFQyxXQUFPLEVBQUU7QUFmWCxHQS9EYyxDQUFoQjtBQWtGQSxNQUFNYSxVQUFVLElBQ2QsS0FEYyxzR0FFWCw2RkFDRS9ELFFBQVEsQ0FDUndCLE1BREEsQ0FFQyxVQUFDQyxJQUFEO0FBQUEsV0FDRW5CLFlBQVksS0FBSyxLQUFqQixJQUNBbUIsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFdBQVYsT0FBNEJyQixZQUFZLENBQUNxQixXQUFiLEVBRjlCO0FBQUEsR0FGRCxFQU1BcUMsTUFOQSxDQU1PLFVBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUN0QixXQUFPRCxJQUFJLENBQUNFLEdBQUwsQ0FBU0QsSUFBSSxDQUFDdEMsUUFBZCxDQUFQO0FBQ0QsR0FSQSxFQVFFLElBQUl3QyxHQUFKLEVBUkYsQ0FERixFQVVEQyxJQVZDLENBVUksVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDTEQsQ0FBQyxLQUFLLHFCQUFOLEdBQ0ksQ0FESixHQUVJQyxDQUFDLEtBQUsscUJBQU4sR0FDQSxDQUFDLENBREQsR0FFQUQsQ0FBQyxDQUFDRSxhQUFGLENBQWdCRCxDQUFoQixDQUxDO0FBQUEsR0FWSixDQUZXLEVBQWhCO0FBcUJBLE1BQU1FLGFBQWEsSUFDakIsS0FEaUIsc0dBRWQsNkZBQ0V6RSxRQUFRLENBQ1J3QixNQURBLENBRUMsVUFBQ0MsSUFBRDtBQUFBLFdBQ0UsQ0FBQ25CLFlBQVksS0FBSyxLQUFqQixJQUNDbUIsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFdBQVYsT0FBNEJyQixZQUFZLENBQUNxQixXQUFiLEVBRDlCLEtBRUFqQixvQkFBb0IsS0FBS2UsSUFBSSxDQUFDRyxRQUhoQztBQUFBLEdBRkQsRUFPQW9DLE1BUEEsQ0FPTyxVQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDdEIsV0FBT0QsSUFBSSxDQUFDRSxHQUFMLENBQVNELElBQUksQ0FBQ3JDLFdBQWQsQ0FBUDtBQUNELEdBVEEsRUFTRSxJQUFJdUMsR0FBSixFQVRGLENBREYsRUFXREMsSUFYQyxFQUZjLEVBQW5CO0FBZ0JBLHNCQUNFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFO0FBQVEsZUFBUyxFQUFDLGlCQUFsQjtBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBZ0JFO0FBQU0sZUFBUyxFQUFDLG9CQUFoQjtBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQVcsYUFBSyxFQUFDLElBQWpCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRyxDQUNDLENBQUMsS0FBRCxzR0FBV3RFLEtBQVgsR0FBa0J1QyxHQUFsQixDQUFzQixVQUFDWixJQUFEO0FBQUEsZ0NBQ3BCO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxxQkFBSyxFQUFFQSxJQUFJLEtBQUtwQixZQUFULEdBQXdCLFNBQXhCLEdBQW9DLFdBRDdDO0FBRUUsb0JBQUksTUFGTjtBQUdFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTUMsZUFBZSxDQUFDbUIsSUFBRCxDQUFyQjtBQUFBLGlCQUhYO0FBQUEsMEJBS0dBLElBQUksQ0FBQ0MsV0FBTDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUE4QkQsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEb0I7QUFBQSxXQUF0QixDQURELENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBaUJFO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUdxQyxVQUFVLENBQUN6QixHQUFYLENBQWUsVUFBQ1YsUUFBRDtBQUFBLGdDQUNkO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxxQkFBSyxFQUNIQSxRQUFRLEtBQUsxQixnQkFBYixHQUNJLFNBREosR0FFSTBCLFFBQVEsS0FBSyxxQkFBYixHQUNBLFFBREEsR0FFQSxXQU5SO0FBUUUsb0JBQUksTUFSTjtBQVNFLHVCQUFPLEVBQUUsbUJBQU07QUFDYixzQkFDRUEsUUFBUSxLQUFLLHFCQUFiLEtBQ0MsQ0FBQ00sWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQUQsSUFDQ0QsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLE1BQW9DLE1BRnRDLENBREYsRUFJRTtBQUNBLHdCQUFNRixPQUFPLEdBQUd5QyxPQUFPLENBQUMsa0JBQUQsQ0FBdkI7QUFDQXhDLGdDQUFZLENBQUN5QyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDMUMsT0FBaEM7O0FBQ0Esd0JBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1o7QUFDRDtBQUNGOztBQUNEOUIsb0NBQWtCLENBQUN5QixRQUFELENBQWxCO0FBQ0FqQix5Q0FBdUIsQ0FDckJpQixRQUFRLEtBQUssS0FBYixHQUFxQixJQUFyQixHQUE0QkEsUUFEUCxDQUF2QjtBQUdBdkIsd0NBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNELGlCQTFCSDtBQUFBLDBCQTRCR3VCO0FBNUJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUE4QkEsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYztBQUFBLFdBQWYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGLEVBc0RHbEIsb0JBQW9CLEtBQUssSUFBekIsZ0JBQ0M7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRytELGFBQWEsQ0FBQ25DLEdBQWQsQ0FBa0IsVUFBQ3NDLEdBQUQ7QUFBQSxnQ0FDakIscUVBQUMsZ0RBQUQ7QUFDRSxtQkFBSyxFQUFFQSxHQUFHLEtBQUt4RSxtQkFBUixHQUE4QixTQUE5QixHQUEwQyxXQURuRDtBQUVFLGtCQUFJLE1BRk47QUFHRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1DLHNCQUFzQixDQUFDdUUsR0FBRCxDQUE1QjtBQUFBLGVBSFg7QUFJRSx1QkFBUyxFQUFDLFdBSlo7QUFBQSx3QkFNR0E7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURpQjtBQUFBLFdBQWxCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEdBY0csSUFwRU4sZUFxRUUscUVBQUMsOENBQUQ7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDRSxxRUFBQyw4Q0FBRDtBQUFLLGNBQUUsRUFBRSxDQUFUO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSx5QkFBVyxFQUFDLGdDQURkO0FBRUUsbUJBQUssRUFBRWhFLE1BRlQ7QUFHRSxzQkFBUSxFQUFFLGtCQUFDaUUsQ0FBRDtBQUFBLHVCQUFPaEUsU0FBUyxDQUFDZ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBUUUscUVBQUMsOENBQUQ7QUFBSyxjQUFFLEVBQUUsQ0FBVDtBQUFBLG1DQUNFLHFFQUFDLHdEQUFEO0FBQ0Usc0JBQVEsRUFBRS9ELGVBRFo7QUFFRSxzQkFBUSxFQUFFRixlQUZaO0FBR0UsbUJBQUssRUFBRU0sV0FIVDtBQUlFLHlCQUFXLEVBQUUscUJBQUMyRCxLQUFEO0FBQUEsaUNBQWN4RixTQUFTLENBQUN5RixNQUFWLENBQWlCRCxLQUFqQixDQUFkO0FBQUEsZUFKZjtBQUtFLHNCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSx1QkFBVzFELGNBQWMsQ0FBQzBELEtBQUQsQ0FBekI7QUFBQTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyRUYsZUF1RkUscUVBQUMsaUVBQUQ7QUFDRSxrQkFBUSxFQUFFLElBRFo7QUFFRSxpQkFBTyxFQUFFcEMsT0FGWDtBQUdFLGNBQUksRUFBRW5DLGNBSFI7QUFJRSx5QkFBZSxFQUFDLG9PQUpsQjtBQUtFLG9CQUFVLEVBQUUsSUFMZDtBQU1FLHNDQUE0QixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQixJQUFuQixDQU5oQztBQU9FLG9DQUEwQixFQUFFO0FBQzFCeUUsMkJBQWUsRUFBRSxzQkFEUztBQUUxQkMsOEJBQWtCLEVBQUUsSUFGTTtBQUcxQkMseUJBQWEsRUFBRSxLQUhXO0FBSTFCQyw2QkFBaUIsRUFBRSxLQUpPO0FBSzFCQyxpQ0FBcUIsRUFBRTtBQUxHO0FBUDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkYsZUF5SEU7QUFBUSxlQUFTLEVBQUMsb0NBQWxCO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTyxhQUFLLEVBQUMsTUFBYjtBQUFvQixpQkFBUyxFQUFDLE1BQTlCO0FBQUEsdTVCQUd1QyxHQUh2QyxlQUlFO0FBQUcsY0FBSSxFQUFDLDBDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLDBqQkFNNEMsR0FONUMsZUFPRTtBQUNFLGNBQUksRUFBQyx1Q0FEUDtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGFBQUcsRUFBQyxVQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLEVBYU8sR0FiUCxvRUFjZSxHQWRmLGVBZUU7QUFBRyxjQUFJLEVBQUMsNkJBQVI7QUFBc0MsZ0JBQU0sRUFBQyxRQUE3QztBQUFzRCxhQUFHLEVBQUMsVUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUEwQkUscUVBQUMsb0RBQUQ7QUFBVyxpQkFBUyxFQUFDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpIRixlQXVKRSxxRUFBQyxrRUFBRDtBQUFlLGNBQVEsRUFBRSxDQUFDLFFBQUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJKRDs7R0E1VXVCdkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNjhmNmE0YjIyN2NjNGYzNTc4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQWxlcnQsIEJhZGdlLCBCdXR0b24sIENvbCwgQ29udGFpbmVyLCBJbnB1dCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY2F0ZWdvcmllc0hpZXJhcmh5IGZyb20gXCIuLi9jYXRlZ29yaWVzX2hpZXJhcmNoeS5qc29uXCI7XG5pbXBvcnQgeyBZTUluaXRpYWxpemVyIH0gZnJvbSBcInJlYWN0LXlhbmRleC1tZXRyaWthXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgSW5wdXRSYW5nZSBmcm9tIFwicmVhY3QtaW5wdXQtcmFuZ2VcIjtcblxudmFyIGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcInJ1LVJ1XCIsIHtcbiAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgY3VycmVuY3k6IFwiUlVCXCIsXG5cbiAgLy8gVGhlc2Ugb3B0aW9ucyBhcmUgbmVlZGVkIHRvIHJvdW5kIHRvIHdob2xlIG51bWJlcnMgaWYgdGhhdCdzIHdoYXQgeW91IHdhbnQuXG4gIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgLy8gKHRoaXMgc3VmZmljZXMgZm9yIHdob2xlIG51bWJlcnMsIGJ1dCB3aWxsIHByaW50IDI1MDAuMTAgYXMgJDIsNTAwLjEpXG4gIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgLy8gKGNhdXNlcyAyNTAwLjk5IHRvIGJlIHByaW50ZWQgYXMgJDIsNTAxKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjb2RlcywgcHJvZHVjdHMgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ3J5XSA9IHVzZVN0YXRlKFwi0JLRgdC1XCIpO1xuICBjb25zdCBbc2VsZWN0ZWRTdWJDYXRlZ29yeSwgc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29kZSwgc2V0U2VsZWN0ZWRDb2RlXSA9IHVzZVN0YXRlKFwi0JLRgdC1XCIpO1xuICBjb25zdCBbZGlzcGxheWVkSXRlbXMsIHNldERpc3BsYXllZEl0ZW1zXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzaG93U3ViY2F0ZWdvcmllc0Zvciwgc2V0U2hvd1N1YmNhdGVnb3JpZXNGb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21pblByb2R1Y3RQcmljZSwgc2V0TWluUHJvZHVjdFByaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbWF4UHJvZHVjdFByaWNlLCBzZXRNYXhQcm9kdWN0UHJpY2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtwcmljZUZpbHRlciwgc2V0UHJpY2VGaWx0ZXJdID0gdXNlU3RhdGUoeyBtaW46IDAsIG1heDogMSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICAoc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5KSAmJlxuICAgICAgICAoc2VsZWN0ZWRTdWJDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgIGl0ZW0uc3ViY2F0ZWdvcnkgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkpICYmXG4gICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMSAmJlxuICAgICAgICAoIWl0ZW0uaXNBZHVsdCB8fFxuICAgICAgICAgIChzZWxlY3RlZENhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiICYmXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgPT09IFwidHJ1ZVwiKSlcbiAgICApO1xuICAgIGxldCBfbWluUHJvZHVjdFByaWNlID0gTWF0aC5taW4oLi4uZmlsdHJlZFByb2R1Y3RzLm1hcCgocCkgPT4gcC5wcmljZSkpO1xuICAgIHNldE1pblByb2R1Y3RQcmljZShfbWluUHJvZHVjdFByaWNlKTtcbiAgICBsZXQgX21heFByb2R1Y3RQcmljZSA9IE1hdGgubWF4KC4uLmZpbHRyZWRQcm9kdWN0cy5tYXAoKHApID0+IHAucHJpY2UpKTtcbiAgICBfbWF4UHJvZHVjdFByaWNlID0gTWF0aC5tYXgoX21heFByb2R1Y3RQcmljZSwgX21pblByb2R1Y3RQcmljZSk7XG4gICAgc2V0TWF4UHJvZHVjdFByaWNlKF9tYXhQcm9kdWN0UHJpY2UpO1xuICAgIGxldCBfcHJpY2VGaWx0ZXIgPSB7XG4gICAgICBtaW46XG4gICAgICAgIG1pblByb2R1Y3RQcmljZSA9PT0gcHJpY2VGaWx0ZXIubWluXG4gICAgICAgICAgPyBfbWluUHJvZHVjdFByaWNlXG4gICAgICAgICAgOiBNYXRoLm1heChwcmljZUZpbHRlci5taW4sIF9taW5Qcm9kdWN0UHJpY2UpLFxuICAgICAgbWF4OlxuICAgICAgICBtYXhQcm9kdWN0UHJpY2UgPT09IHByaWNlRmlsdGVyLm1heFxuICAgICAgICAgID8gX21heFByb2R1Y3RQcmljZVxuICAgICAgICAgIDogTWF0aC5taW4ocHJpY2VGaWx0ZXIubWF4LCBfbWF4UHJvZHVjdFByaWNlKSxcbiAgICB9O1xuICAgIGlmIChcbiAgICAgIF9wcmljZUZpbHRlci5taW4gIT09IHByaWNlRmlsdGVyLm1pbiB8fFxuICAgICAgX3ByaWNlRmlsdGVyLm1heCAhPT0gcHJpY2VGaWx0ZXIubWF4XG4gICAgKSB7XG4gICAgICBzZXRQcmljZUZpbHRlcihfcHJpY2VGaWx0ZXIpO1xuICAgIH1cbiAgICBzZXREaXNwbGF5ZWRJdGVtcyhcbiAgICAgIGZpbHRyZWRQcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgIChwKSA9PiBwLnByaWNlID49IF9wcmljZUZpbHRlci5taW4gJiYgcC5wcmljZSA8PSBfcHJpY2VGaWx0ZXIubWF4XG4gICAgICApXG4gICAgKTtcbiAgfSwgW1xuICAgIHNlbGVjdGVkQ29kZSxcbiAgICBzZWxlY3RlZENhdGVnb3J5LFxuICAgIHNlbGVjdGVkU3ViQ2F0ZWdvcnksXG4gICAgc2VhcmNoLFxuICAgIHByaWNlRmlsdGVyLFxuICBdKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtVwiLFxuICAgICAgc2VsZWN0b3I6IFwiaW1hZ2VcIixcbiAgICAgIGNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPGltZyBzcmM9e3Jvdy5pbWd9IHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD17cm93Lm5hbWV9IC8+XG4gICAgICApLFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQndCw0LfQstCw0L3QuNC1XCIsXG4gICAgICBzZWxlY3RvcjogXCJuYW1lXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGdyb3c6IFwiMlwiLFxuICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCh0YLQsNGA0LDRjyDRhtC10L3QsFwiLFxuICAgICAgc2VsZWN0b3I6IFwib2xkX3ByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cub2xkX3ByaWNlfeKCvTwvc3Bhbj4sXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCm0LXQvdCwINGB0L4g0YHQutC40LTQutC+0LlcIixcbiAgICAgIHNlbGVjdG9yOiBcInByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cucHJpY2V94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KDQtdCw0LvRjNC90LDRjyDQstGL0LPQvtC00LBcIixcbiAgICAgIHNlbGVjdG9yOiBcInJlYWxfZGlzY291bnRcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZGVmYXVsdFNvcnRBc2M6IGZhbHNlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5yZWFsX2Rpc2NvdW50feKCvTwvc3Bhbj4sXG4gICAgICBzb3J0RnVuY3Rpb246IChyb3dBLCByb3dCKSA9PlxuICAgICAgICAocGFyc2VJbnQocm93QS5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpIC1cbiAgICAgICAgKHBhcnNlSW50KHJvd0IucmVhbF9kaXNjb3VudCkgKyAwLjEgfHwgMC41KSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0J/RgNC+0LzQvtC60L7QtFwiLFxuICAgICAgc2VsZWN0b3I6IFwiY29kZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LmNvZGUudG9VcHBlckNhc2UoKX08L3NwYW4+LFxuICAgICAgc29ydEZ1bmN0aW9uOiAocm93QSwgcm93QikgPT5cbiAgICAgICAgcGFyc2VJbnQoKHJvd0EuY29kZS5tYXRjaCgvXFxkKy8pIHx8IFtcIjBcIl0pWzBdKSAtXG4gICAgICAgIHBhcnNlSW50KChyb3dCLmNvZGUubWF0Y2goL1xcZCsvKSB8fCBbXCIwXCJdKVswXSksXG4gICAgICBkZWZhdWx0U29ydEFzYzogZmFsc2UsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI3MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCa0YPQv9C40YLRjFwiLFxuICAgICAgc2VsZWN0b3I6IFwiYnV5XCIsXG4gICAgICBjZWxsOiAocm93KSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3Bva3Vwa2kubWFya2V0LnlhbmRleC5ydS9wcm9kdWN0LyR7cm93LmlkfWB9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICDQmtGD0L/QuNGC0YxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApLFxuICAgICAgbWluV2lkdGg6IFwiMTAwcHhcIixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAgXCLQktGB0LVcIixcbiAgICAuLi5bXG4gICAgICAuLi5wcm9kdWN0c1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgICAgc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgICBpdGVtLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gc2VsZWN0ZWRDb2RlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuYWRkKGN1cnIuY2F0ZWdvcnkpO1xuICAgICAgICB9LCBuZXcgU2V0KCkpLFxuICAgIF0uc29ydCgoYSwgYikgPT5cbiAgICAgIGEgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCJcbiAgICAgICAgPyAxXG4gICAgICAgIDogYiA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICA/IC0xXG4gICAgICAgIDogYS5sb2NhbGVDb21wYXJlKGIpXG4gICAgKSxcbiAgXTtcblxuICBjb25zdCBzdWJDYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4uW1xuICAgICAgLi4ucHJvZHVjdHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgIChzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAgICAgc2hvd1N1YmNhdGVnb3JpZXNGb3IgPT09IGl0ZW0uY2F0ZWdvcnlcbiAgICAgICAgKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuYWRkKGN1cnIuc3ViY2F0ZWdvcnkpO1xuICAgICAgICB9LCBuZXcgU2V0KCkpLFxuICAgIF0uc29ydCgpLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdmgtMTAwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7Qn9GA0L7QvNC+0LrQvtC00Ysg0LTQu9GPINCv0L3QtNC10LrRgS7QnNCw0YDQutC10YLQsDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCLQmtCw0YLQsNC70L7QsyDQstGB0LXRhSDRgtC+0LLQsNGA0L7QsiDQtNC+0YHRgtGD0L/QvdGL0YUg0LTQu9GPINC/0L7QutGD0L/QutC4INC90LAg0K/QvdC00LXQutGBLtCc0LDRgNC60LXRgtC1INGB0L4g0YHQutC40LTQutC+0Lkg0L/QviDQv9GA0L7QvNC+0LrQvtC00LDQvCBDVVQ0LUNVVDI1INC4IEdPMy1HTzI5LlwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdhcm5pbmcgbWItM1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcHktMlwiPlxuICAgICAgICAgICAgPGgxPtCf0YDQvtC80L7QutC+0LTRiyDQtNC70Y8g0K/QvdC00LXQutGBLtCc0LDRgNC60LXRgtCwPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gbWItM1wiPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwibWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtci0yXCI+0J/RgNC+0LzQvtC60L7QtNGLOjwvaDM+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICBbXCLQktGB0LVcIiwgLi4uY29kZXNdLm1hcCgoY29kZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDMgbXItMVwiIGtleT17Y29kZX0+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvZGUgPT09IHNlbGVjdGVkQ29kZSA/IFwid2FybmluZ1wiIDogXCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENvZGUoY29kZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb2RlLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXItMlwiPtCa0LDRgtC10LPQvtGA0LjQuDo8L2g1PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IG1yLTFcIiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICA/IFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBjYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNBZHVsdFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkdWx0XCIpICE9PSBcInRydWVcIilcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBZHVsdCA9IGNvbmZpcm0oXCLQktCw0Lwg0LXRgdGC0YwgMTgg0LvQtdGCP1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQWR1bHRcIiwgaXNBZHVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0FkdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdyeShjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yKFxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBcItCS0YHQtVwiID8gbnVsbCA6IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnkoXCLQktGB0LVcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtzaG93U3ViY2F0ZWdvcmllc0ZvciAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0yIG1iLTBcIj7Qn9C+0LTQutCw0YLQtdCz0L7RgNC40Lg6PC9wPlxuICAgICAgICAgICAgICB7c3ViQ2F0ZWdvcmllcy5tYXAoKHN1YikgPT4gKFxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e3N1YiA9PT0gc2VsZWN0ZWRTdWJDYXRlZ29yeSA/IFwid2FybmluZ1wiIDogXCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICAgIHBpbGxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnkoc3ViKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTEgbXItMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N1Yn1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgPENvbCBtZD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQulwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezd9PlxuICAgICAgICAgICAgICA8SW5wdXRSYW5nZVxuICAgICAgICAgICAgICAgIG1heFZhbHVlPXttYXhQcm9kdWN0UHJpY2V9XG4gICAgICAgICAgICAgICAgbWluVmFsdWU9e21pblByb2R1Y3RQcmljZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2VGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgZm9ybWF0TGFiZWw9eyh2YWx1ZSkgPT4gYCR7Zm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSl9YH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRQcmljZUZpbHRlcih2YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8RGF0YVRhYmxlXG4gICAgICAgICAgICBub0hlYWRlcj17dHJ1ZX1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBkYXRhPXtkaXNwbGF5ZWRJdGVtc31cbiAgICAgICAgICAgIG5vRGF0YUNvbXBvbmVudD1cItCd0LUg0L3QsNC50LTQtdC90L4g0YLQvtCy0LDRgNC+0LIg0YHQvtC+0YLQstC10YLQstGD0YnQuNC5INC60YDQuNGC0LXRgNC40Y/QvFwiXG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt0cnVlfVxuICAgICAgICAgICAgcGFnaW5hdGlvblJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCA1MCwgMTAwLCA1MDAsIDEwMDBdfVxuICAgICAgICAgICAgcGFnaW5hdGlvbkNvbXBvbmVudE9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgcm93c1BlclBhZ2VUZXh0OiBcItCi0L7QstCw0YDQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtTpcIixcbiAgICAgICAgICAgICAgcmFuZ2VTZXBhcmF0b3JUZXh0OiBcItC40LdcIixcbiAgICAgICAgICAgICAgbm9Sb3dzUGVyUGFnZTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdEFsbFJvd3NJdGVtOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0QWxsUm93c0l0ZW1UZXh0OiBcItCS0YHQtVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMCB3LTEwMFwiPlxuICAgICAgICA8QWxlcnQgY29sb3I9XCJpbmZvXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCS0YvQs9GA0YPQt9C60LAg0YLQvtCy0LDRgNC+0LIg0L3QsNC70LDQttC10L3QsC4g0JrRgNC+0LzQtSDRjdGC0L7Qs9C+INCyINGC0LDQsdC70LjRhtGDINC00L7QsdCw0LLQu9C10L3QsCDQutC+0LvQvtC90LrQsFxuICAgICAgICAgIFwi0KDQtdCw0LvRjNC90LDRjyDQstGL0LPQvtC00LBcIiwg0L7QvdCwINC/0L7QutCw0LfRi9Cy0LDQtdGCINGA0LDQt9C90LjRhtGDINGBINC80LjQvdC40LzQsNC70YzQvdC+0Lkg0YbQtdC90L7QuSDQvdCwINGC0L7QstCw0YBcbiAgICAgICAgICDQv9C+INC80LDRgNC10LrRgtGDINCyINCc0L7RgdC60LLQtSAo0LfQsCDQuNC00LXRjiDRgdC/0LDRgdC40LHQvntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGVwcGVyLnJ1L3Byb2ZpbGUvUnVzdGlrX1VmYVwiPlJ1c3Rpa19VZmE8L2E+KSxcbiAgICAgICAgICDQv9C+0LrQsCDRh9GC0L4g0LIg0Y3RgtC+0Lkg0LrQvtC70L7QvdC60LUg0LLQvtC30LzQvtC20L3RiyDQvtGI0LjQsdC60Lgg0Lgg0L/RgNC+0L/Rg9GB0LrQuC4g0JLQvtC/0YDQvtGB0YssINGB0L7QstC10YLRiyDQuFxuICAgICAgICAgINC30LDQvNC10YfQsNC90LjRjyDQv9C+INGB0LDQudGC0YMsINC80L7QttC10YLQtSDQvdCw0L/QuNGB0LDRgtGMINC80L3QtSDQsntcIiBcIn1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnBlcHBlci5ydS9wcm9maWxlL3NldnNraWlcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDQu9C40YfQutGDINC90LAgUGVwcGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICDQuNC70Lgg0L3QsCDQv9C+0YfRgtGDe1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86c2V2c2tpaTExMUBnbWFpbC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAgc2V2c2tpaTExMUBnbWFpbC5jb21cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgICB7LyogPEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCa0LDRgNGC0LjQvdC60Lgg0L3QtdC60L7RgtC+0YDRi9GFINGC0L7QstCw0YDQvtCyINC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7RgiDRgtC+0LLQsNGA0L7QsiDRgSDQv9C+0YXQvtC20LjQvNC4XG4gICAgICAgICAg0L3QsNC30LLQsNC90LjRj9C80LguINCf0YDQvtCx0LvQtdC80LAg0LfQsNGC0YDQsNCz0LjQstCw0LXRgiDRgtC+0LvRjNC60L4g0YHQsNC80Lgg0LrQsNGA0YLQuNC90LrQuCDQuCDRjyDQv9C+0YHRgtCw0YDQsNGO0YHRjFxuICAgICAgICAgINC10ZEg0LrQsNC6INC80L7QttC90L4g0YHQutC+0YDQtdC1INC40YHQv9GA0LDQstC40YLRjC5cbiAgICAgICAgPC9BbGVydD4gKi99XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgINCh0L7Qt9C00LDRgtC10LvRjCDRgdCw0LnRgtCwINC90LUg0LjQvNC10LXRgiDQvtGC0L3QvtGI0LXQvdC40Y8g0Log0LrQvtC80L/QsNC90LjRj9C8INCv0L3QtNC10LrRgSDQuCDQr9C90LTQtdC60YEu0JzQsNGA0LXQutGCXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8WU1Jbml0aWFsaXplciBhY2NvdW50cz17WzcxMjU2NDg0XX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgbGV0IGNvZGVzID0gbmV3IFNldCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiLi9wcm9kdWN0cy5qc29uXCIpKTtcbiAgbGV0IHVuaXF1ZVByb2R1Y3RzID0gW107XG4gIGxldCBhZGRlZFByb2R1Y3RzID0gbmV3IFNldCgpO1xuICBsZXQgYmFkX3ByaWNlcyA9IFtdO1xuXG4gIGZvciAoY29uc3QgcHJvZHVjdCBvZiBwcm9kdWN0cykge1xuICAgIGlmICghYWRkZWRQcm9kdWN0cy5oYXMocHJvZHVjdC5pZCkpIHtcbiAgICAgIGlmICghcHJvZHVjdC5jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgICAgY29kZXMuYWRkKHByb2R1Y3QuY29kZSk7XG4gICAgICB1bmlxdWVQcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgcmVhbF9kaXNjb3VudDpcbiAgICAgICAgICBwcm9kdWN0Lm1pbl9wcmljZSA8IHByb2R1Y3Qub2xkX3ByaWNlXG4gICAgICAgICAgICA/IHByb2R1Y3QubWluX3ByaWNlIC0gcHJvZHVjdC5wcmljZVxuICAgICAgICAgICAgOiBcIj9cIixcbiAgICAgIH0pO1xuICAgICAgaWYgKHByb2R1Y3QubWluX3ByaWNlID4gcHJvZHVjdC5vbGRfcHJpY2UpIHtcbiAgICAgICAgYmFkX3ByaWNlcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgfVxuICAgICAgYWRkZWRQcm9kdWN0cy5hZGQocHJvZHVjdC5pZCk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGAke2JhZF9wcmljZXMubGVuZ3RofSBwcmljZXMgYXJlIGJhZGApO1xuICBjb25zb2xlLmxvZyhiYWRfcHJpY2VzKTtcbiAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHVuaXF1ZVByb2R1Y3RzKSB7XG4gICAgaWYgKCFwcm9kdWN0LnN1YmNhdGVnb3J5KSB7XG4gICAgICBwcm9kdWN0LnN1YmNhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcbiAgICAgIHByb2R1Y3QuY2F0ZWdvcnkgPSBjYXRlZ29yaWVzSGllcmFyaHlbcHJvZHVjdC5jYXRlZ29yeV07XG4gICAgICBwcm9kdWN0LmlzQWR1bHQgPSBwcm9kdWN0LmNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiO1xuICAgICAgaWYgKCFwcm9kdWN0LmNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZzLndyaXRlRmlsZVN5bmMoXCIuL3Byb2R1Y3RzX2pzb24uanNvblwiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cyksIFwidXRmOFwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb2RlczogWy4uLmNvZGVzXS5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAoYi5tYXRjaCgvXFxkKy8pID8gYi5tYXRjaCgvXFxkKy8pWzBdIDogMCkgLVxuICAgICAgICAgIChhLm1hdGNoKC9cXGQrLykgPyBhLm1hdGNoKC9cXGQrLylbMF0gOiAwKVxuICAgICAgKSxcbiAgICAgIHByb2R1Y3RzOiB1bmlxdWVQcm9kdWN0cy5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAocGFyc2VJbnQoYi5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpIC1cbiAgICAgICAgICAocGFyc2VJbnQoYS5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpXG4gICAgICApLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9