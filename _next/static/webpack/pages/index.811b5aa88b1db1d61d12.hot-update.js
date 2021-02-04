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
/* harmony import */ var vanilla_back_to_top__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vanilla-back-to-top */ "./node_modules/vanilla-back-to-top/dist/vanilla-back-to-top.umd.js");
/* harmony import */ var vanilla_back_to_top__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vanilla_back_to_top__WEBPACK_IMPORTED_MODULE_8__);



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

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      itemsLoaded = _useState10[0],
      setItemsLoaded = _useState10[1];

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
    setItemsLoaded(true);
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
        lineNumber: 85,
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
        lineNumber: 103,
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
        lineNumber: 112,
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
        lineNumber: 122,
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
        lineNumber: 134,
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
        lineNumber: 147,
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

  if (true) {
    Object(vanilla_back_to_top__WEBPACK_IMPORTED_MODULE_8__["addBackToTop"])();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-vh-100 d-flex flex-column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO29."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 204,
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
            lineNumber: 215,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
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
            lineNumber: 222,
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
                lineNumber: 226,
                columnNumber: 19
              }, _this)
            }, code, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap overflow-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
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
                lineNumber: 241,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
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
              lineNumber: 278,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
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
              lineNumber: 291,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 7,
            className: "py-4 mx-3 pt-md-0 mx-md-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_input_range__WEBPACK_IMPORTED_MODULE_7___default.a, {
              maxValue: maxProductPrice + 0.001,
              minValue: minProductPrice - 0.001,
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
              lineNumber: 315,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 314,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
          noHeader: true,
          columns: columns,
          data: displayedItems,
          noDataComponent: itemsLoaded ? "Не найдено товаров соответвущий критериям" : "Идёт загрузка товаров...",
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
          lineNumber: 335,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
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
          lineNumber: 361,
          columnNumber: 11
        }, this), "), \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "py-2",
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 5
  }, this);
}

_s(Home, "6O066cf2FxIVI1iebeeAaA4Dh4Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJIb21lIiwiY29kZXMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdyeSIsInNlbGVjdGVkU3ViQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2VsZWN0ZWRDb2RlIiwic2V0U2VsZWN0ZWRDb2RlIiwiZGlzcGxheWVkSXRlbXMiLCJzZXREaXNwbGF5ZWRJdGVtcyIsInNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2V0U2hvd1N1YmNhdGVnb3JpZXNGb3IiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtaW5Qcm9kdWN0UHJpY2UiLCJzZXRNaW5Qcm9kdWN0UHJpY2UiLCJtYXhQcm9kdWN0UHJpY2UiLCJzZXRNYXhQcm9kdWN0UHJpY2UiLCJtaW4iLCJtYXgiLCJwcmljZUZpbHRlciIsInNldFByaWNlRmlsdGVyIiwiaXRlbXNMb2FkZWQiLCJzZXRJdGVtc0xvYWRlZCIsInVzZUVmZmVjdCIsImZpbHRyZWRQcm9kdWN0cyIsImZpbHRlciIsIml0ZW0iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjYXRlZ29yeSIsInN1YmNhdGVnb3J5IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImlzQWR1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX21pblByb2R1Y3RQcmljZSIsIk1hdGgiLCJtYXAiLCJwIiwicHJpY2UiLCJfbWF4UHJvZHVjdFByaWNlIiwiX3ByaWNlRmlsdGVyIiwiY29sdW1ucyIsInNlbGVjdG9yIiwiY2VsbCIsInJvdyIsImltZyIsImNlbnRlciIsImdyb3ciLCJjb21wYWN0Iiwic29ydGFibGUiLCJ3cmFwIiwib2xkX3ByaWNlIiwibWluV2lkdGgiLCJkZWZhdWx0U29ydEFzYyIsInJlYWxfZGlzY291bnQiLCJzb3J0RnVuY3Rpb24iLCJyb3dBIiwicm93QiIsInBhcnNlSW50IiwibWF0Y2giLCJpZCIsImNhdGVnb3JpZXMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFkZCIsIlNldCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzdWJDYXRlZ29yaWVzIiwiYWRkQmFja1RvVG9wIiwiY29uZmlybSIsInNldEl0ZW0iLCJzdWIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtYXQiLCJyb3dzUGVyUGFnZVRleHQiLCJyYW5nZVNlcGFyYXRvclRleHQiLCJub1Jvd3NQZXJQYWdlIiwic2VsZWN0QWxsUm93c0l0ZW0iLCJzZWxlY3RBbGxSb3dzSXRlbVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQSxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQzdDQyxPQUFLLEVBQUUsVUFEc0M7QUFFN0NDLFVBQVEsRUFBRSxLQUZtQztBQUk3QztBQUNBQyx1QkFBcUIsRUFBRSxDQUxzQjtBQUtuQjtBQUMxQkMsdUJBQXFCLEVBQUUsQ0FOc0IsQ0FNbkI7O0FBTm1CLENBQS9CLENBQWhCOztBQVNlLFNBQVNDLElBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBLE1BQ3pDQyxnQkFEeUM7QUFBQSxNQUN2QkMsa0JBRHVCOztBQUFBLG1CQUVNRixzREFBUSxDQUFDLEtBQUQsQ0FGZDtBQUFBLE1BRXpDRyxtQkFGeUM7QUFBQSxNQUVwQkMsc0JBRm9COztBQUFBLG1C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cy9pbmRleC44MTFiNWFhODhiMWRiMWQ2MWQxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQWxlcnQsIEJhZGdlLCBCdXR0b24sIENvbCwgQ29udGFpbmVyLCBJbnB1dCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY2F0ZWdvcmllc0hpZXJhcmh5IGZyb20gXCIuLi9jYXRlZ29yaWVzX2hpZXJhcmNoeS5qc29uXCI7XG5pbXBvcnQgeyBZTUluaXRpYWxpemVyIH0gZnJvbSBcInJlYWN0LXlhbmRleC1tZXRyaWthXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgSW5wdXRSYW5nZSBmcm9tIFwicmVhY3QtaW5wdXQtcmFuZ2VcIjtcbmltcG9ydCB7IGFkZEJhY2tUb1RvcCB9IGZyb20gXCJ2YW5pbGxhLWJhY2stdG8tdG9wXCI7XG5cbnZhciBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJydS1SdVwiLCB7XG4gIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gIGN1cnJlbmN5OiBcIlJVQlwiLFxuXG4gIC8vIFRoZXNlIG9wdGlvbnMgYXJlIG5lZWRlZCB0byByb3VuZCB0byB3aG9sZSBudW1iZXJzIGlmIHRoYXQncyB3aGF0IHlvdSB3YW50LlxuICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vICh0aGlzIHN1ZmZpY2VzIGZvciB3aG9sZSBudW1iZXJzLCBidXQgd2lsbCBwcmludCAyNTAwLjEwIGFzICQyLDUwMC4xKVxuICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vIChjYXVzZXMgMjUwMC45OSB0byBiZSBwcmludGVkIGFzICQyLDUwMSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY29kZXMsIHByb2R1Y3RzIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdyeV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW3NlbGVjdGVkU3ViQ2F0ZWdvcnksIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtzZWxlY3RlZENvZGUsIHNldFNlbGVjdGVkQ29kZV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW2Rpc3BsYXllZEl0ZW1zLCBzZXREaXNwbGF5ZWRJdGVtc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2hvd1N1YmNhdGVnb3JpZXNGb3IsIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttaW5Qcm9kdWN0UHJpY2UsIHNldE1pblByb2R1Y3RQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21heFByb2R1Y3RQcmljZSwgc2V0TWF4UHJvZHVjdFByaWNlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcHJpY2VGaWx0ZXIsIHNldFByaWNlRmlsdGVyXSA9IHVzZVN0YXRlKHsgbWluOiAwLCBtYXg6IDEgfSk7XG4gIGNvbnN0IFtpdGVtc0xvYWRlZCwgc2V0SXRlbXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmlsdHJlZFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+XG4gICAgICAgIChzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICBpdGVtLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gc2VsZWN0ZWRDb2RlLnRvVXBwZXJDYXNlKCkpICYmXG4gICAgICAgIChzZWxlY3RlZENhdGVnb3J5ID09PSBcItCS0YHQtVwiIHx8IGl0ZW0uY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpICYmXG4gICAgICAgIChzZWxlY3RlZFN1YkNhdGVnb3J5ID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgaXRlbS5zdWJjYXRlZ29yeSA9PT0gc2VsZWN0ZWRTdWJDYXRlZ29yeSkgJiZcbiAgICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xICYmXG4gICAgICAgICghaXRlbS5pc0FkdWx0IHx8XG4gICAgICAgICAgKHNlbGVjdGVkQ2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCIgJiZcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNBZHVsdFwiKSA9PT0gXCJ0cnVlXCIpKVxuICAgICk7XG4gICAgbGV0IF9taW5Qcm9kdWN0UHJpY2UgPSBNYXRoLm1pbiguLi5maWx0cmVkUHJvZHVjdHMubWFwKChwKSA9PiBwLnByaWNlKSk7XG4gICAgc2V0TWluUHJvZHVjdFByaWNlKF9taW5Qcm9kdWN0UHJpY2UpO1xuICAgIGxldCBfbWF4UHJvZHVjdFByaWNlID0gTWF0aC5tYXgoLi4uZmlsdHJlZFByb2R1Y3RzLm1hcCgocCkgPT4gcC5wcmljZSkpO1xuICAgIF9tYXhQcm9kdWN0UHJpY2UgPSBNYXRoLm1heChfbWF4UHJvZHVjdFByaWNlLCBfbWluUHJvZHVjdFByaWNlICsgMSk7XG4gICAgc2V0TWF4UHJvZHVjdFByaWNlKF9tYXhQcm9kdWN0UHJpY2UpO1xuICAgIGxldCBfcHJpY2VGaWx0ZXIgPSB7XG4gICAgICBtaW46XG4gICAgICAgIG1pblByb2R1Y3RQcmljZSA9PT0gcHJpY2VGaWx0ZXIubWluXG4gICAgICAgICAgPyBfbWluUHJvZHVjdFByaWNlXG4gICAgICAgICAgOiBNYXRoLm1heChwcmljZUZpbHRlci5taW4sIF9taW5Qcm9kdWN0UHJpY2UpLFxuICAgICAgbWF4OlxuICAgICAgICBtYXhQcm9kdWN0UHJpY2UgPT09IHByaWNlRmlsdGVyLm1heFxuICAgICAgICAgID8gX21heFByb2R1Y3RQcmljZVxuICAgICAgICAgIDogTWF0aC5taW4ocHJpY2VGaWx0ZXIubWF4LCBfbWF4UHJvZHVjdFByaWNlKSxcbiAgICB9O1xuICAgIGlmIChcbiAgICAgIF9wcmljZUZpbHRlci5taW4gIT09IHByaWNlRmlsdGVyLm1pbiB8fFxuICAgICAgX3ByaWNlRmlsdGVyLm1heCAhPT0gcHJpY2VGaWx0ZXIubWF4XG4gICAgKSB7XG4gICAgICBzZXRQcmljZUZpbHRlcihfcHJpY2VGaWx0ZXIpO1xuICAgIH1cbiAgICBzZXREaXNwbGF5ZWRJdGVtcyhcbiAgICAgIGZpbHRyZWRQcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgIChwKSA9PiBwLnByaWNlID49IF9wcmljZUZpbHRlci5taW4gJiYgcC5wcmljZSA8PSBfcHJpY2VGaWx0ZXIubWF4XG4gICAgICApXG4gICAgKTtcbiAgICBzZXRJdGVtc0xvYWRlZCh0cnVlKTtcbiAgfSwgW1xuICAgIHNlbGVjdGVkQ29kZSxcbiAgICBzZWxlY3RlZENhdGVnb3J5LFxuICAgIHNlbGVjdGVkU3ViQ2F0ZWdvcnksXG4gICAgc2VhcmNoLFxuICAgIHByaWNlRmlsdGVyLFxuICBdKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtVwiLFxuICAgICAgc2VsZWN0b3I6IFwiaW1hZ2VcIixcbiAgICAgIGNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPGltZyBzcmM9e3Jvdy5pbWd9IHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD17cm93Lm5hbWV9IC8+XG4gICAgICApLFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQndCw0LfQstCw0L3QuNC1XCIsXG4gICAgICBzZWxlY3RvcjogXCJuYW1lXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGdyb3c6IFwiMlwiLFxuICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCh0YLQsNGA0LDRjyDRhtC10L3QsFwiLFxuICAgICAgc2VsZWN0b3I6IFwib2xkX3ByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cub2xkX3ByaWNlfeKCvTwvc3Bhbj4sXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCm0LXQvdCwINGB0L4g0YHQutC40LTQutC+0LlcIixcbiAgICAgIHNlbGVjdG9yOiBcInByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cucHJpY2V94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KDQtdCw0LvRjNC90LDRjyDQstGL0LPQvtC00LBcIixcbiAgICAgIHNlbGVjdG9yOiBcInJlYWxfZGlzY291bnRcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZGVmYXVsdFNvcnRBc2M6IGZhbHNlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5yZWFsX2Rpc2NvdW50feKCvTwvc3Bhbj4sXG4gICAgICBzb3J0RnVuY3Rpb246IChyb3dBLCByb3dCKSA9PlxuICAgICAgICAocGFyc2VJbnQocm93QS5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpIC1cbiAgICAgICAgKHBhcnNlSW50KHJvd0IucmVhbF9kaXNjb3VudCkgKyAwLjEgfHwgMC41KSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0J/RgNC+0LzQvtC60L7QtFwiLFxuICAgICAgc2VsZWN0b3I6IFwiY29kZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LmNvZGUudG9VcHBlckNhc2UoKX08L3NwYW4+LFxuICAgICAgc29ydEZ1bmN0aW9uOiAocm93QSwgcm93QikgPT5cbiAgICAgICAgcGFyc2VJbnQoKHJvd0EuY29kZS5tYXRjaCgvXFxkKy8pIHx8IFtcIjBcIl0pWzBdKSAtXG4gICAgICAgIHBhcnNlSW50KChyb3dCLmNvZGUubWF0Y2goL1xcZCsvKSB8fCBbXCIwXCJdKVswXSksXG4gICAgICBkZWZhdWx0U29ydEFzYzogZmFsc2UsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI3MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCa0YPQv9C40YLRjFwiLFxuICAgICAgc2VsZWN0b3I6IFwiYnV5XCIsXG4gICAgICBjZWxsOiAocm93KSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3Bva3Vwa2kubWFya2V0LnlhbmRleC5ydS9wcm9kdWN0LyR7cm93LmlkfWB9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICDQmtGD0L/QuNGC0YxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApLFxuICAgICAgbWluV2lkdGg6IFwiMTAwcHhcIixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAgXCLQktGB0LVcIixcbiAgICAuLi5bXG4gICAgICAuLi5wcm9kdWN0c1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgICAgc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgICBpdGVtLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gc2VsZWN0ZWRDb2RlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuYWRkKGN1cnIuY2F0ZWdvcnkpO1xuICAgICAgICB9LCBuZXcgU2V0KCkpLFxuICAgIF0uc29ydCgoYSwgYikgPT5cbiAgICAgIGEgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCJcbiAgICAgICAgPyAxXG4gICAgICAgIDogYiA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICA/IC0xXG4gICAgICAgIDogYS5sb2NhbGVDb21wYXJlKGIpXG4gICAgKSxcbiAgXTtcblxuICBjb25zdCBzdWJDYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4uW1xuICAgICAgLi4ucHJvZHVjdHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgIChzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAgICAgc2hvd1N1YmNhdGVnb3JpZXNGb3IgPT09IGl0ZW0uY2F0ZWdvcnlcbiAgICAgICAgKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuYWRkKGN1cnIuc3ViY2F0ZWdvcnkpO1xuICAgICAgICB9LCBuZXcgU2V0KCkpLFxuICAgIF0uc29ydCgpLFxuICBdO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGFkZEJhY2tUb1RvcCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi12aC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCf0YDQvtC80L7QutC+0LTRiyDQtNC70Y8g0K/QvdC00LXQutGBLtCc0LDRgNC60LXRgtCwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cItCa0LDRgtCw0LvQvtCzINCy0YHQtdGFINGC0L7QstCw0YDQvtCyINC00L7RgdGC0YPQv9C90YvRhSDQtNC70Y8g0L/QvtC60YPQv9C60Lgg0L3QsCDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LUg0YHQviDRgdC60LjQtNC60L7QuSDQv9C+INC/0YDQvtC80L7QutC+0LTQsNC8IENVVDQtQ1VUMjUg0LggR08zLUdPMjkuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2FybmluZyBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBweS0yXCI+XG4gICAgICAgICAgICA8aDE+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ9XCJtZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1yLTJcIj7Qn9GA0L7QvNC+0LrQvtC00Ys6PC9oMz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFtcItCS0YHQtVwiLCAuLi5jb2Rlc10ubWFwKChjb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtci0xXCIga2V5PXtjb2RlfT5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29kZSA9PT0gc2VsZWN0ZWRDb2RlID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29kZShjb2RlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvZGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXAgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1yLTJcIj7QmtCw0YLQtdCz0L7RgNC40Lg6PC9oNT5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBtci0xXCIga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgPyBcIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIDogY2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHBpbGxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNBZHVsdFwiKSAhPT0gXCJ0cnVlXCIpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWR1bHQgPSBjb25maXJtKFwi0JLQsNC8INC10YHRgtGMIDE4INC70LXRgj9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0FkdWx0XCIsIGlzQWR1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNBZHVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZENhdGVncnkoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG93U3ViY2F0ZWdvcmllc0ZvcihcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gXCLQktGB0LVcIiA/IG51bGwgOiBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5KFwi0JLRgdC1XCIpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2hvd1N1YmNhdGVnb3JpZXNGb3IgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMiBtYi0wXCI+0J/QvtC00LrQsNGC0LXQs9C+0YDQuNC4OjwvcD5cbiAgICAgICAgICAgICAge3N1YkNhdGVnb3JpZXMubWFwKChzdWIpID0+IChcbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtzdWIgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkgPyBcIndhcm5pbmdcIiA6IFwic2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5KHN1Yil9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0xIG1yLTFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzdWJ9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LpcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICB7LyogPENvbCB4cz17Nn0gbWQ9ezJ9IGNsYXNzTmFtZT1cInByLTJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1hdHRlci5mb3JtYXQocHJpY2VGaWx0ZXIubWluKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2VGaWx0ZXIubWlufVxuICAgICAgICAgICAgICAgIG9uQmx1cj17KGUpID0+XG4gICAgICAgICAgICAgICAgICBzZXRQcmljZUZpbHRlcih7IG1pbjogZS50YXJnZXQudmFsdWUsIG1heDogcHJpY2VGaWx0ZXIubWF4IH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgLVxuICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9ezJ9IGNsYXNzTmFtZT1cInBsLTFcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1hdHRlci5mb3JtYXQocHJpY2VGaWx0ZXIubWF4KX1cbiAgICAgICAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgICAgICA8L0NvbD4gKi99XG4gICAgICAgICAgICA8Q29sIG1kPXs3fSBjbGFzc05hbWU9XCJweS00IG14LTMgcHQtbWQtMCBteC1tZC0wXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFJhbmdlXG4gICAgICAgICAgICAgICAgbWF4VmFsdWU9e21heFByb2R1Y3RQcmljZSArIDAuMDAxfVxuICAgICAgICAgICAgICAgIG1pblZhbHVlPXttaW5Qcm9kdWN0UHJpY2UgLSAwLjAwMX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2VGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgZm9ybWF0TGFiZWw9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9PT0gbWluUHJvZHVjdFByaWNlIHx8IHZhbHVlID09PSBtYXhQcm9kdWN0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdHRlci5mb3JtYXQodmFsdWUpXG4gICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0UHJpY2VGaWx0ZXIoe1xuICAgICAgICAgICAgICAgICAgICBtaW46IE1hdGgubWF4KHZhbHVlLm1pbiwgbWluUHJvZHVjdFByaWNlKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBNYXRoLm1pbih2YWx1ZS5tYXgsIG1heFByb2R1Y3RQcmljZSksXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxEYXRhVGFibGVcbiAgICAgICAgICAgIG5vSGVhZGVyPXt0cnVlfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGRhdGE9e2Rpc3BsYXllZEl0ZW1zfVxuICAgICAgICAgICAgbm9EYXRhQ29tcG9uZW50PXtcbiAgICAgICAgICAgICAgaXRlbXNMb2FkZWRcbiAgICAgICAgICAgICAgICA/IFwi0J3QtSDQvdCw0LnQtNC10L3QviDRgtC+0LLQsNGA0L7QsiDRgdC+0L7RgtCy0LXRgtCy0YPRidC40Lkg0LrRgNC40YLQtdGA0LjRj9C8XCJcbiAgICAgICAgICAgICAgICA6IFwi0JjQtNGR0YIg0LfQsNCz0YDRg9C30LrQsCDRgtC+0LLQsNGA0L7Qsi4uLlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt0cnVlfVxuICAgICAgICAgICAgcGFnaW5hdGlvblJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCA1MCwgMTAwLCA1MDAsIDEwMDBdfVxuICAgICAgICAgICAgcGFnaW5hdGlvbkNvbXBvbmVudE9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgcm93c1BlclBhZ2VUZXh0OiBcItCi0L7QstCw0YDQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtTpcIixcbiAgICAgICAgICAgICAgcmFuZ2VTZXBhcmF0b3JUZXh0OiBcItC40LdcIixcbiAgICAgICAgICAgICAgbm9Sb3dzUGVyUGFnZTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdEFsbFJvd3NJdGVtOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0QWxsUm93c0l0ZW1UZXh0OiBcItCS0YHQtVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMCB3LTEwMFwiPlxuICAgICAgICA8QWxlcnQgY29sb3I9XCJpbmZvXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCS0YvQs9GA0YPQt9C60LAg0YLQvtCy0LDRgNC+0LIg0L3QsNC70LDQttC10L3QsC4g0JrRgNC+0LzQtSDRjdGC0L7Qs9C+INCyINGC0LDQsdC70LjRhtGDINC00L7QsdCw0LLQu9C10L3QsCDQutC+0LvQvtC90LrQsFxuICAgICAgICAgIFwi0KDQtdCw0LvRjNC90LDRjyDQstGL0LPQvtC00LBcIiwg0L7QvdCwINC/0L7QutCw0LfRi9Cy0LDQtdGCINGA0LDQt9C90LjRhtGDINGBINC80LjQvdC40LzQsNC70YzQvdC+0Lkg0YbQtdC90L7QuSDQvdCwINGC0L7QstCw0YBcbiAgICAgICAgICDQv9C+INC80LDRgNC10LrRgtGDINCyINCc0L7RgdC60LLQtSAo0LfQsCDQuNC00LXRjiDRgdC/0LDRgdC40LHQvntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGVwcGVyLnJ1L3Byb2ZpbGUvUnVzdGlrX1VmYVwiPlJ1c3Rpa19VZmE8L2E+KSxcbiAgICAgICAgICDQv9C+0LrQsCDRh9GC0L4g0LIg0Y3RgtC+0Lkg0LrQvtC70L7QvdC60LUg0LLQvtC30LzQvtC20L3RiyDQvtGI0LjQsdC60Lgg0Lgg0L/RgNC+0L/Rg9GB0LrQuC4g0JLQvtC/0YDQvtGB0YssINGB0L7QstC10YLRiyDQuFxuICAgICAgICAgINC30LDQvNC10YfQsNC90LjRjyDQv9C+INGB0LDQudGC0YMsINC80L7QttC10YLQtSDQvdCw0L/QuNGB0LDRgtGMINC80L3QtSDQsntcIiBcIn1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnBlcHBlci5ydS9wcm9maWxlL3NldnNraWlcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDQu9C40YfQutGDINC90LAgUGVwcGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICDQuNC70Lgg0L3QsCDQv9C+0YfRgtGDe1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86c2V2c2tpaTExMUBnbWFpbC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAgc2V2c2tpaTExMUBnbWFpbC5jb21cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgICB7LyogPEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCa0LDRgNGC0LjQvdC60Lgg0L3QtdC60L7RgtC+0YDRi9GFINGC0L7QstCw0YDQvtCyINC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7RgiDRgtC+0LLQsNGA0L7QsiDRgSDQv9C+0YXQvtC20LjQvNC4XG4gICAgICAgICAg0L3QsNC30LLQsNC90LjRj9C80LguINCf0YDQvtCx0LvQtdC80LAg0LfQsNGC0YDQsNCz0LjQstCw0LXRgiDRgtC+0LvRjNC60L4g0YHQsNC80Lgg0LrQsNGA0YLQuNC90LrQuCDQuCDRjyDQv9C+0YHRgtCw0YDQsNGO0YHRjFxuICAgICAgICAgINC10ZEg0LrQsNC6INC80L7QttC90L4g0YHQutC+0YDQtdC1INC40YHQv9GA0LDQstC40YLRjC5cbiAgICAgICAgPC9BbGVydD4gKi99XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgINCh0L7Qt9C00LDRgtC10LvRjCDRgdCw0LnRgtCwINC90LUg0LjQvNC10LXRgiDQvtGC0L3QvtGI0LXQvdC40Y8g0Log0LrQvtC80L/QsNC90LjRj9C8INCv0L3QtNC10LrRgSDQuCDQr9C90LTQtdC60YEu0JzQsNGA0LXQutGCXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8WU1Jbml0aWFsaXplciBhY2NvdW50cz17WzcxMjU2NDg0XX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgbGV0IGNvZGVzID0gbmV3IFNldCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiLi9wcm9kdWN0cy5qc29uXCIpKTtcbiAgbGV0IHVuaXF1ZVByb2R1Y3RzID0gW107XG4gIGxldCBhZGRlZFByb2R1Y3RzID0gbmV3IFNldCgpO1xuICBsZXQgYmFkX3ByaWNlcyA9IFtdO1xuXG4gIGZvciAoY29uc3QgcHJvZHVjdCBvZiBwcm9kdWN0cykge1xuICAgIGlmICghYWRkZWRQcm9kdWN0cy5oYXMocHJvZHVjdC5pZCkpIHtcbiAgICAgIGlmICghcHJvZHVjdC5jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgICAgY29kZXMuYWRkKHByb2R1Y3QuY29kZSk7XG4gICAgICB1bmlxdWVQcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgcmVhbF9kaXNjb3VudDpcbiAgICAgICAgICBwcm9kdWN0Lm1pbl9wcmljZSA8IHByb2R1Y3Qub2xkX3ByaWNlXG4gICAgICAgICAgICA/IHByb2R1Y3QubWluX3ByaWNlIC0gcHJvZHVjdC5wcmljZVxuICAgICAgICAgICAgOiBcIj9cIixcbiAgICAgIH0pO1xuICAgICAgaWYgKHByb2R1Y3QubWluX3ByaWNlID4gcHJvZHVjdC5vbGRfcHJpY2UpIHtcbiAgICAgICAgYmFkX3ByaWNlcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgfVxuICAgICAgYWRkZWRQcm9kdWN0cy5hZGQocHJvZHVjdC5pZCk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGAke2JhZF9wcmljZXMubGVuZ3RofSBwcmljZXMgYXJlIGJhZGApO1xuICBjb25zb2xlLmxvZyhiYWRfcHJpY2VzKTtcbiAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHVuaXF1ZVByb2R1Y3RzKSB7XG4gICAgaWYgKCFwcm9kdWN0LnN1YmNhdGVnb3J5KSB7XG4gICAgICBwcm9kdWN0LnN1YmNhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcbiAgICAgIHByb2R1Y3QuY2F0ZWdvcnkgPSBjYXRlZ29yaWVzSGllcmFyaHlbcHJvZHVjdC5jYXRlZ29yeV07XG4gICAgICBwcm9kdWN0LmlzQWR1bHQgPSBwcm9kdWN0LmNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiO1xuICAgICAgaWYgKCFwcm9kdWN0LmNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZzLndyaXRlRmlsZVN5bmMoXCIuL3Byb2R1Y3RzX2pzb24uanNvblwiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cyksIFwidXRmOFwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb2RlczogWy4uLmNvZGVzXS5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAoYi5tYXRjaCgvXFxkKy8pID8gYi5tYXRjaCgvXFxkKy8pWzBdIDogMCkgLVxuICAgICAgICAgIChhLm1hdGNoKC9cXGQrLykgPyBhLm1hdGNoKC9cXGQrLylbMF0gOiAwKVxuICAgICAgKSxcbiAgICAgIHByb2R1Y3RzOiB1bmlxdWVQcm9kdWN0c1xuICAgICAgICAuc29ydChcbiAgICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAgIChwYXJzZUludChiLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSkgLVxuICAgICAgICAgICAgKHBhcnNlSW50KGEucmVhbF9kaXNjb3VudCkgKyAwLjEgfHwgMC41KVxuICAgICAgICApXG4gICAgICAgIC5tYXAoKHByb2R1Y3QpID0+ICh7XG4gICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgIGltZzogcHJvZHVjdC5pbWcsXG4gICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgY29kZTogcHJvZHVjdC5jb2RlLFxuICAgICAgICAgIG9sZF9wcmljZTogcHJvZHVjdC5vbGRfcHJpY2UsXG4gICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnksXG4gICAgICAgICAgcmVhbF9kaXNjb3VudDogcHJvZHVjdC5yZWFsX2Rpc2NvdW50LFxuICAgICAgICB9KSksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=