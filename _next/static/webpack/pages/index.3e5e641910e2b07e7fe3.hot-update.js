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
        lineNumber: 84,
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
        lineNumber: 102,
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
        lineNumber: 111,
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
        lineNumber: 121,
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
        lineNumber: 133,
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
        lineNumber: 146,
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
        lineNumber: 201,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO29."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 200,
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
            lineNumber: 211,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
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
            lineNumber: 218,
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
                lineNumber: 222,
                columnNumber: 19
              }, _this)
            }, code, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap overflow-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
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
                lineNumber: 237,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
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
              lineNumber: 274,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
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
              lineNumber: 287,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 7,
            className: "py-4 mx-3 pt-md-0 mx-md-0",
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
              lineNumber: 311,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 285,
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
          lineNumber: 331,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
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
          lineNumber: 357,
          columnNumber: 11
        }, this), "), \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "py-2",
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 199,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJIb21lIiwiY29kZXMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdyeSIsInNlbGVjdGVkU3ViQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2VsZWN0ZWRDb2RlIiwic2V0U2VsZWN0ZWRDb2RlIiwiZGlzcGxheWVkSXRlbXMiLCJzZXREaXNwbGF5ZWRJdGVtcyIsInNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2V0U2hvd1N1YmNhdGVnb3JpZXNGb3IiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtaW5Qcm9kdWN0UHJpY2UiLCJzZXRNaW5Qcm9kdWN0UHJpY2UiLCJtYXhQcm9kdWN0UHJpY2UiLCJzZXRNYXhQcm9kdWN0UHJpY2UiLCJtaW4iLCJtYXgiLCJwcmljZUZpbHRlciIsInNldFByaWNlRmlsdGVyIiwiaXRlbXNMb2FkZWQiLCJzZXRJdGVtc0xvYWRlZCIsInVzZUVmZmVjdCIsImZpbHRyZWRQcm9kdWN0cyIsImZpbHRlciIsIml0ZW0iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjYXRlZ29yeSIsInN1YmNhdGVnb3J5IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImlzQWR1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX21pblByb2R1Y3RQcmljZSIsIk1hdGgiLCJtYXAiLCJwIiwicHJpY2UiLCJfbWF4UHJvZHVjdFByaWNlIiwiX3ByaWNlRmlsdGVyIiwiY29sdW1ucyIsInNlbGVjdG9yIiwiY2VsbCIsInJvdyIsImltZyIsImNlbnRlciIsImdyb3ciLCJjb21wYWN0Iiwic29ydGFibGUiLCJ3cmFwIiwib2xkX3ByaWNlIiwibWluV2lkdGgiLCJkZWZhdWx0U29ydEFzYyIsInJlYWxfZGlzY291bnQiLCJzb3J0RnVuY3Rpb24iLCJyb3dBIiwicm93QiIsInBhcnNlSW50IiwibWF0Y2giLCJpZCIsImNhdGVnb3JpZXMiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFkZCIsIlNldCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzdWJDYXRlZ29yaWVzIiwiY29uZmlybSIsInNldEl0ZW0iLCJzdWIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtYXQiLCJyb3dzUGVyUGFnZVRleHQiLCJyYW5nZVNlcGFyYXRvclRleHQiLCJub1Jvd3NQZXJQYWdlIiwic2VsZWN0QWxsUm93c0l0ZW0iLCJzZWxlY3RBbGxSb3dzSXRlbVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBLElBQUlBLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDN0NDLE9BQUssRUFBRSxVQURzQztBQUU3Q0MsVUFBUSxFQUFFLEtBRm1DO0FBSTdDO0FBQ0FDLHVCQUFxQixFQUFFLENBTHNCO0FBS25CO0FBQzFCQyx1QkFBcUIsRUFBRSxDQU5zQixDQU1uQjs7QUFObUIsQ0FBL0IsQ0FBaEI7O0FBU2UsU0FBU0MsSUFBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDekNDLGdCQUR5QztBQUFBLE1BQ3ZCQyxrQkFEdUI7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsS0FBRCxDQUZkO0FBQUEsTUFFekNHLG1CQUZ5QztBQUFBLE1BRXBCQyxzQkFGb0I7O0FBQUEsbUJBR1JKLHNEQUFRLENBQUMsS0FBRCxDQUhBO0FBQUEsTUFHekNLLFlBSHlDO0FBQUEsTUFHM0JDLGVBSDJCOztBQUFBLG1CQUlKTixzREFBUSxFQUpKO0FBQUEsTUFJekNPLGNBSnlDO0FBQUEsTUFJekJDLGlCQUp5Qjs7QUFBQSxtQkFLUVIsc0RBQVEsQ0FBQyxJQUFELENBTGhCO0FBQUEsTUFLekNTLG9CQUx5QztBQUFBLE1BS25CQyx1QkFMbUI7O0FBQUEsbUJBTXBCVixzREFBUSxDQUFDLEVBQUQsQ0FOWTtBQUFBLE1BTXpDVyxNQU55QztBQUFBLE1BTWpDQyxTQU5pQzs7QUFBQSxtQkFPRlosc0RBQVEsQ0FBQyxDQUFELENBUE47QUFBQSxNQU96Q2EsZUFQeUM7QUFBQSxNQU94QkMsa0JBUHdCOztBQUFBLG1CQVFGZCxzREFBUSxDQUFDLENBQUQsQ0FSTjtBQUFBLE1BUXpDZSxlQVJ5QztBQUFBLE1BUXhCQyxrQkFSd0I7O0FBQUEsbUJBU1ZoQixzREFBUSxDQUFDO0FBQUVpQixPQUFHLEVBQUUsQ0FBUDtBQUFVQyxPQUFHLEVBQUU7QUFBZixHQUFELENBVEU7QUFBQSxNQVN6Q0MsV0FUeUM7QUFBQSxNQVM1QkMsY0FUNEI7O0FBQUEsb0JBVVZwQixzREFBUSxDQUFDLEtBQUQsQ0FWRTtBQUFBLE1BVXpDcUIsV0FWeUM7QUFBQSxNQVU1QkMsY0FWNEI7O0FBWWhEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxlQUFlLEdBQUd6QixRQUFRLENBQUMwQixNQUFULENBQ3RCLFVBQUNDLElBQUQ7QUFBQSxhQUNFLENBQUNyQixZQUFZLEtBQUssS0FBakIsSUFDQ3FCLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxXQUFWLE9BQTRCdkIsWUFBWSxDQUFDdUIsV0FBYixFQUQ5QixNQUVDM0IsZ0JBQWdCLEtBQUssS0FBckIsSUFBOEJ5QixJQUFJLENBQUNHLFFBQUwsS0FBa0I1QixnQkFGakQsTUFHQ0UsbUJBQW1CLEtBQUssS0FBeEIsSUFDQ3VCLElBQUksQ0FBQ0ksV0FBTCxLQUFxQjNCLG1CQUp2QixLQUtBdUIsSUFBSSxDQUFDSyxJQUFMLENBQVVDLFdBQVYsR0FBd0JDLE9BQXhCLENBQWdDdEIsTUFBTSxDQUFDcUIsV0FBUCxFQUFoQyxNQUEwRCxDQUFDLENBTDNELEtBTUMsQ0FBQ04sSUFBSSxDQUFDUSxPQUFOLElBQ0VqQyxnQkFBZ0IsS0FBSyxxQkFBckIsSUFDQ2tDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixNQUFvQyxNQVJ4QyxDQURGO0FBQUEsS0FEc0IsQ0FBeEI7O0FBWUEsUUFBSUMsZ0JBQWdCLEdBQUdDLElBQUksQ0FBQ3JCLEdBQUwsT0FBQXFCLElBQUksK0ZBQVFkLGVBQWUsQ0FBQ2UsR0FBaEIsQ0FBb0IsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsS0FBVDtBQUFBLEtBQXBCLENBQVIsRUFBM0I7O0FBQ0EzQixzQkFBa0IsQ0FBQ3VCLGdCQUFELENBQWxCOztBQUNBLFFBQUlLLGdCQUFnQixHQUFHSixJQUFJLENBQUNwQixHQUFMLE9BQUFvQixJQUFJLCtGQUFRZCxlQUFlLENBQUNlLEdBQWhCLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUNDLEtBQVQ7QUFBQSxLQUFwQixDQUFSLEVBQTNCOztBQUNBQyxvQkFBZ0IsR0FBR0osSUFBSSxDQUFDcEIsR0FBTCxDQUFTd0IsZ0JBQVQsRUFBMkJMLGdCQUFnQixHQUFHLENBQTlDLENBQW5CO0FBQ0FyQixzQkFBa0IsQ0FBQzBCLGdCQUFELENBQWxCO0FBQ0EsUUFBSUMsWUFBWSxHQUFHO0FBQ2pCMUIsU0FBRyxFQUNESixlQUFlLEtBQUtNLFdBQVcsQ0FBQ0YsR0FBaEMsR0FDSW9CLGdCQURKLEdBRUlDLElBQUksQ0FBQ3BCLEdBQUwsQ0FBU0MsV0FBVyxDQUFDRixHQUFyQixFQUEwQm9CLGdCQUExQixDQUpXO0FBS2pCbkIsU0FBRyxFQUNESCxlQUFlLEtBQUtJLFdBQVcsQ0FBQ0QsR0FBaEMsR0FDSXdCLGdCQURKLEdBRUlKLElBQUksQ0FBQ3JCLEdBQUwsQ0FBU0UsV0FBVyxDQUFDRCxHQUFyQixFQUEwQndCLGdCQUExQjtBQVJXLEtBQW5COztBQVVBLFFBQ0VDLFlBQVksQ0FBQzFCLEdBQWIsS0FBcUJFLFdBQVcsQ0FBQ0YsR0FBakMsSUFDQTBCLFlBQVksQ0FBQ3pCLEdBQWIsS0FBcUJDLFdBQVcsQ0FBQ0QsR0FGbkMsRUFHRTtBQUNBRSxvQkFBYyxDQUFDdUIsWUFBRCxDQUFkO0FBQ0Q7O0FBQ0RuQyxxQkFBaUIsQ0FDZmdCLGVBQWUsQ0FBQ0MsTUFBaEIsQ0FDRSxVQUFDZSxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxLQUFGLElBQVdFLFlBQVksQ0FBQzFCLEdBQXhCLElBQStCdUIsQ0FBQyxDQUFDQyxLQUFGLElBQVdFLFlBQVksQ0FBQ3pCLEdBQTlEO0FBQUEsS0FERixDQURlLENBQWpCO0FBS0FJLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0QsR0F4Q1EsRUF3Q04sQ0FDRGpCLFlBREMsRUFFREosZ0JBRkMsRUFHREUsbUJBSEMsRUFJRFEsTUFKQyxFQUtEUSxXQUxDLENBeENNLENBQVQ7QUFnREEsTUFBTXlCLE9BQU8sR0FBRyxDQUNkO0FBQ0ViLFFBQUksRUFBRSxhQURSO0FBRUVjLFlBQVEsRUFBRSxPQUZaO0FBR0VDLFFBQUksRUFBRSxjQUFDQyxHQUFEO0FBQUEsMEJBQ0o7QUFBSyxXQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsR0FBZDtBQUFtQixhQUFLLEVBQUMsSUFBekI7QUFBOEIsY0FBTSxFQUFDLElBQXJDO0FBQTBDLFdBQUcsRUFBRUQsR0FBRyxDQUFDaEI7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURJO0FBQUEsS0FIUjtBQU1Fa0IsVUFBTSxFQUFFLElBTlY7QUFPRUMsUUFBSSxFQUFFLEdBUFI7QUFRRUMsV0FBTyxFQUFFO0FBUlgsR0FEYyxFQVdkO0FBQ0VwQixRQUFJLEVBQUUsVUFEUjtBQUVFYyxZQUFRLEVBQUUsTUFGWjtBQUdFTyxZQUFRLEVBQUUsSUFIWjtBQUlFRixRQUFJLEVBQUUsR0FKUjtBQUtFRyxRQUFJLEVBQUUsSUFMUjtBQU1FRixXQUFPLEVBQUU7QUFOWCxHQVhjLEVBbUJkO0FBQ0VwQixRQUFJLEVBQUUsYUFEUjtBQUVFYyxZQUFRLEVBQUUsV0FGWjtBQUdFTyxZQUFRLEVBQUUsSUFIWjtBQUlFTixRQUFJLEVBQUUsY0FBQ0MsR0FBRDtBQUFBLDBCQUFTO0FBQUEsbUJBQU9BLEdBQUcsQ0FBQ08sU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQUFBLEtBSlI7QUFLRUosUUFBSSxFQUFFLEdBTFI7QUFNRUMsV0FBTyxFQUFFLElBTlg7QUFPRUksWUFBUSxFQUFFO0FBUFosR0FuQmMsRUE0QmQ7QUFDRXhCLFFBQUksRUFBRSxpQkFEUjtBQUVFYyxZQUFRLEVBQUUsT0FGWjtBQUdFTyxZQUFRLEVBQUUsSUFIWjtBQUlFTixRQUFJLEVBQUUsY0FBQ0MsR0FBRDtBQUFBLDBCQUFTO0FBQUEsbUJBQU9BLEdBQUcsQ0FBQ04sS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVDtBQUFBLEtBSlI7QUFLRVMsUUFBSSxFQUFFLEdBTFI7QUFNRUMsV0FBTyxFQUFFLElBTlg7QUFPRUksWUFBUSxFQUFFO0FBUFosR0E1QmMsRUFxQ2Q7QUFDRXhCLFFBQUksRUFBRSxpQkFEUjtBQUVFYyxZQUFRLEVBQUUsZUFGWjtBQUdFTyxZQUFRLEVBQUUsSUFIWjtBQUlFSSxrQkFBYyxFQUFFLEtBSmxCO0FBS0VWLFFBQUksRUFBRSxjQUFDQyxHQUFEO0FBQUEsMEJBQVM7QUFBQSxtQkFBT0EsR0FBRyxDQUFDVSxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFUO0FBQUEsS0FMUjtBQU1FQyxnQkFBWSxFQUFFLHNCQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSxhQUNaLENBQUNDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDRixhQUFOLENBQVIsR0FBK0IsR0FBL0IsSUFBc0MsR0FBdkMsS0FDQ0ksUUFBUSxDQUFDRCxJQUFJLENBQUNILGFBQU4sQ0FBUixHQUErQixHQUEvQixJQUFzQyxHQUR2QyxDQURZO0FBQUEsS0FOaEI7QUFTRVAsUUFBSSxFQUFFLEdBVFI7QUFVRUMsV0FBTyxFQUFFLElBVlg7QUFXRUksWUFBUSxFQUFFO0FBWFosR0FyQ2MsRUFrRGQ7QUFDRXhCLFFBQUksRUFBRSxVQURSO0FBRUVjLFlBQVEsRUFBRSxNQUZaO0FBR0VPLFlBQVEsRUFBRSxJQUhaO0FBSUVOLFFBQUksRUFBRSxjQUFDQyxHQUFEO0FBQUEsMEJBQVM7QUFBQSxrQkFBT0EsR0FBRyxDQUFDcEIsSUFBSixDQUFTQyxXQUFUO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFUO0FBQUEsS0FKUjtBQUtFOEIsZ0JBQVksRUFBRSxzQkFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsYUFDWkMsUUFBUSxDQUFDLENBQUNGLElBQUksQ0FBQ2hDLElBQUwsQ0FBVW1DLEtBQVYsQ0FBZ0IsS0FBaEIsS0FBMEIsQ0FBQyxHQUFELENBQTNCLEVBQWtDLENBQWxDLENBQUQsQ0FBUixHQUNBRCxRQUFRLENBQUMsQ0FBQ0QsSUFBSSxDQUFDakMsSUFBTCxDQUFVbUMsS0FBVixDQUFnQixLQUFoQixLQUEwQixDQUFDLEdBQUQsQ0FBM0IsRUFBa0MsQ0FBbEMsQ0FBRCxDQUZJO0FBQUEsS0FMaEI7QUFRRU4sa0JBQWMsRUFBRSxLQVJsQjtBQVNFTixRQUFJLEVBQUUsR0FUUjtBQVVFQyxXQUFPLEVBQUUsSUFWWDtBQVdFSSxZQUFRLEVBQUU7QUFYWixHQWxEYyxFQStEZDtBQUNFeEIsUUFBSSxFQUFFLFFBRFI7QUFFRWMsWUFBUSxFQUFFLEtBRlo7QUFHRUMsUUFBSSxFQUFFLGNBQUNDLEdBQUQ7QUFBQSwwQkFDSixxRUFBQyxpREFBRDtBQUNFLGFBQUssRUFBQyxTQURSO0FBRUUsWUFBSSxxREFBOENBLEdBQUcsQ0FBQ2dCLEVBQWxELENBRk47QUFHRSxjQUFNLEVBQUMsUUFIVDtBQUlFLFdBQUcsRUFBQyxVQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREk7QUFBQSxLQUhSO0FBYUVSLFlBQVEsRUFBRSxPQWJaO0FBY0VMLFFBQUksRUFBRSxHQWRSO0FBZUVDLFdBQU8sRUFBRTtBQWZYLEdBL0RjLENBQWhCO0FBa0ZBLE1BQU1hLFVBQVUsSUFDZCxLQURjLHNHQUVYLDZGQUNFakUsUUFBUSxDQUNSMEIsTUFEQSxDQUVDLFVBQUNDLElBQUQ7QUFBQSxXQUNFckIsWUFBWSxLQUFLLEtBQWpCLElBQ0FxQixJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixPQUE0QnZCLFlBQVksQ0FBQ3VCLFdBQWIsRUFGOUI7QUFBQSxHQUZELEVBTUFxQyxNQU5BLENBTU8sVUFBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQ3RCLFdBQU9ELElBQUksQ0FBQ0UsR0FBTCxDQUFTRCxJQUFJLENBQUN0QyxRQUFkLENBQVA7QUFDRCxHQVJBLEVBUUUsSUFBSXdDLEdBQUosRUFSRixDQURGLEVBVURDLElBVkMsQ0FVSSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNMRCxDQUFDLEtBQUsscUJBQU4sR0FDSSxDQURKLEdBRUlDLENBQUMsS0FBSyxxQkFBTixHQUNBLENBQUMsQ0FERCxHQUVBRCxDQUFDLENBQUNFLGFBQUYsQ0FBZ0JELENBQWhCLENBTEM7QUFBQSxHQVZKLENBRlcsRUFBaEI7QUFxQkEsTUFBTUUsYUFBYSxJQUNqQixLQURpQixzR0FFZCw2RkFDRTNFLFFBQVEsQ0FDUjBCLE1BREEsQ0FFQyxVQUFDQyxJQUFEO0FBQUEsV0FDRSxDQUFDckIsWUFBWSxLQUFLLEtBQWpCLElBQ0NxQixJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixPQUE0QnZCLFlBQVksQ0FBQ3VCLFdBQWIsRUFEOUIsS0FFQW5CLG9CQUFvQixLQUFLaUIsSUFBSSxDQUFDRyxRQUhoQztBQUFBLEdBRkQsRUFPQW9DLE1BUEEsQ0FPTyxVQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDdEIsV0FBT0QsSUFBSSxDQUFDRSxHQUFMLENBQVNELElBQUksQ0FBQ3JDLFdBQWQsQ0FBUDtBQUNELEdBVEEsRUFTRSxJQUFJdUMsR0FBSixFQVRGLENBREYsRUFXREMsSUFYQyxFQUZjLEVBQW5CO0FBZ0JBLHNCQUNFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFO0FBQVEsZUFBUyxFQUFDLGlCQUFsQjtBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFlBQWY7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBZ0JFO0FBQU0sZUFBUyxFQUFDLG9CQUFoQjtBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQVcsYUFBSyxFQUFDLElBQWpCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRyxDQUNDLENBQUMsS0FBRCxzR0FBV3hFLEtBQVgsR0FBa0J5QyxHQUFsQixDQUFzQixVQUFDWixJQUFEO0FBQUEsZ0NBQ3BCO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxxQkFBSyxFQUFFQSxJQUFJLEtBQUt0QixZQUFULEdBQXdCLFNBQXhCLEdBQW9DLFdBRDdDO0FBRUUsb0JBQUksTUFGTjtBQUdFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTUMsZUFBZSxDQUFDcUIsSUFBRCxDQUFyQjtBQUFBLGlCQUhYO0FBQUEsMEJBS0dBLElBQUksQ0FBQ0MsV0FBTDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUE4QkQsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEb0I7QUFBQSxXQUF0QixDQURELENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBaUJFO0FBQUssbUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUdxQyxVQUFVLENBQUN6QixHQUFYLENBQWUsVUFBQ1YsUUFBRDtBQUFBLGdDQUNkO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQUEscUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxxQkFBSyxFQUNIQSxRQUFRLEtBQUs1QixnQkFBYixHQUNJLFNBREosR0FFSTRCLFFBQVEsS0FBSyxxQkFBYixHQUNBLFFBREEsR0FFQSxXQU5SO0FBUUUsb0JBQUksTUFSTjtBQVNFLHVCQUFPLEVBQUUsbUJBQU07QUFDYixzQkFDRUEsUUFBUSxLQUFLLHFCQUFiLEtBQ0MsQ0FBQ00sWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQUQsSUFDQ0QsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLE1BQW9DLE1BRnRDLENBREYsRUFJRTtBQUNBLHdCQUFNRixPQUFPLEdBQUd5QyxPQUFPLENBQUMsa0JBQUQsQ0FBdkI7QUFDQXhDLGdDQUFZLENBQUN5QyxPQUFiLENBQXFCLFNBQXJCLEVBQWdDMUMsT0FBaEM7O0FBQ0Esd0JBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1o7QUFDRDtBQUNGOztBQUNEaEMsb0NBQWtCLENBQUMyQixRQUFELENBQWxCO0FBQ0FuQix5Q0FBdUIsQ0FDckJtQixRQUFRLEtBQUssS0FBYixHQUFxQixJQUFyQixHQUE0QkEsUUFEUCxDQUF2QjtBQUdBekIsd0NBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNELGlCQTFCSDtBQUFBLDBCQTRCR3lCO0FBNUJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUE4QkEsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYztBQUFBLFdBQWYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGLEVBc0RHcEIsb0JBQW9CLEtBQUssSUFBekIsZ0JBQ0M7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFR2lFLGFBQWEsQ0FBQ25DLEdBQWQsQ0FBa0IsVUFBQ3NDLEdBQUQ7QUFBQSxnQ0FDakIscUVBQUMsZ0RBQUQ7QUFDRSxtQkFBSyxFQUFFQSxHQUFHLEtBQUsxRSxtQkFBUixHQUE4QixTQUE5QixHQUEwQyxXQURuRDtBQUVFLGtCQUFJLE1BRk47QUFHRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1DLHNCQUFzQixDQUFDeUUsR0FBRCxDQUE1QjtBQUFBLGVBSFg7QUFJRSx1QkFBUyxFQUFDLFdBSlo7QUFBQSx3QkFNR0E7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURpQjtBQUFBLFdBQWxCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEdBY0csSUFwRU4sZUFxRUUscUVBQUMsOENBQUQ7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FDRSxxRUFBQyw4Q0FBRDtBQUFLLGNBQUUsRUFBRSxDQUFUO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSx5QkFBVyxFQUFDLGdDQURkO0FBRUUsbUJBQUssRUFBRWxFLE1BRlQ7QUFHRSxzQkFBUSxFQUFFLGtCQUFDbUUsQ0FBRDtBQUFBLHVCQUFPbEUsU0FBUyxDQUFDa0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBeUJFLHFFQUFDLDhDQUFEO0FBQUssY0FBRSxFQUFFLENBQVQ7QUFBWSxxQkFBUyxFQUFDLDJCQUF0QjtBQUFBLG1DQUNFLHFFQUFDLHdEQUFEO0FBQ0Usc0JBQVEsRUFBRWpFLGVBQWUsR0FBRyxDQUQ5QjtBQUVFLHNCQUFRLEVBQUVGLGVBQWUsR0FBRyxDQUY5QjtBQUdFLG1CQUFLLEVBQUVNLFdBSFQ7QUFJRSx5QkFBVyxFQUFFLHFCQUFDNkQsS0FBRDtBQUFBLGlDQUVUQSxLQUFLLEtBQUtuRSxlQUFWLElBQTZCbUUsS0FBSyxLQUFLakUsZUFBdkMsR0FDSSxFQURKLEdBRUl6QixTQUFTLENBQUMyRixNQUFWLENBQWlCRCxLQUFqQixDQUpLO0FBQUEsZUFKZjtBQVdFLHNCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSx1QkFDUjVELGNBQWMsQ0FBQztBQUNiSCxxQkFBRyxFQUFFcUIsSUFBSSxDQUFDcEIsR0FBTCxDQUFTOEQsS0FBSyxDQUFDL0QsR0FBZixFQUFvQkosZUFBcEIsQ0FEUTtBQUViSyxxQkFBRyxFQUFFb0IsSUFBSSxDQUFDckIsR0FBTCxDQUFTK0QsS0FBSyxDQUFDOUQsR0FBZixFQUFvQkgsZUFBcEI7QUFGUSxpQkFBRCxDQUROO0FBQUE7QUFYWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJFRixlQW1IRSxxRUFBQyxpRUFBRDtBQUNFLGtCQUFRLEVBQUUsSUFEWjtBQUVFLGlCQUFPLEVBQUU2QixPQUZYO0FBR0UsY0FBSSxFQUFFckMsY0FIUjtBQUlFLHlCQUFlLEVBQ2JjLFdBQVcsR0FDUCwyQ0FETyxHQUVQLDBCQVBSO0FBU0Usb0JBQVUsRUFBRSxJQVRkO0FBVUUsc0NBQTRCLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLElBQW5CLENBVmhDO0FBV0Usb0NBQTBCLEVBQUU7QUFDMUI2RCwyQkFBZSxFQUFFLHNCQURTO0FBRTFCQyw4QkFBa0IsRUFBRSxJQUZNO0FBRzFCQyx5QkFBYSxFQUFFLEtBSFc7QUFJMUJDLDZCQUFpQixFQUFFLEtBSk87QUFLMUJDLGlDQUFxQixFQUFFO0FBTEc7QUFYOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQXlKRTtBQUFRLGVBQVMsRUFBQyxvQ0FBbEI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFPLGFBQUssRUFBQyxNQUFiO0FBQW9CLGlCQUFTLEVBQUMsTUFBOUI7QUFBQSx1NUJBR3VDLEdBSHZDLGVBSUU7QUFBRyxjQUFJLEVBQUMsMENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsMGpCQU00QyxHQU41QyxlQU9FO0FBQ0UsY0FBSSxFQUFDLHVDQURQO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0UsYUFBRyxFQUFDLFVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsRUFhTyxHQWJQLG9FQWNlLEdBZGYsZUFlRTtBQUFHLGNBQUksRUFBQyw2QkFBUjtBQUFzQyxnQkFBTSxFQUFDLFFBQTdDO0FBQXNELGFBQUcsRUFBQyxVQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQTBCRSxxRUFBQyxvREFBRDtBQUFXLGlCQUFTLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekpGLGVBdUxFLHFFQUFDLGtFQUFEO0FBQWUsY0FBUSxFQUFFLENBQUMsUUFBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkxEOztHQTlXdUJ6RixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlNWU2NDE5MTBlMmIwN2U3ZmUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBBbGVydCwgQmFkZ2UsIEJ1dHRvbiwgQ29sLCBDb250YWluZXIsIElucHV0LCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcbmltcG9ydCBjYXRlZ29yaWVzSGllcmFyaHkgZnJvbSBcIi4uL2NhdGVnb3JpZXNfaGllcmFyY2h5Lmpzb25cIjtcbmltcG9ydCB7IFlNSW5pdGlhbGl6ZXIgfSBmcm9tIFwicmVhY3QteWFuZGV4LW1ldHJpa2FcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gXCJyZWFjdC1pbnB1dC1yYW5nZVwiO1xuXG52YXIgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwicnUtUnVcIiwge1xuICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICBjdXJyZW5jeTogXCJSVUJcIixcblxuICAvLyBUaGVzZSBvcHRpb25zIGFyZSBuZWVkZWQgdG8gcm91bmQgdG8gd2hvbGUgbnVtYmVycyBpZiB0aGF0J3Mgd2hhdCB5b3Ugd2FudC5cbiAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCAvLyAodGhpcyBzdWZmaWNlcyBmb3Igd2hvbGUgbnVtYmVycywgYnV0IHdpbGwgcHJpbnQgMjUwMC4xMCBhcyAkMiw1MDAuMSlcbiAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCAvLyAoY2F1c2VzIDI1MDAuOTkgdG8gYmUgcHJpbnRlZCBhcyAkMiw1MDEpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGNvZGVzLCBwcm9kdWN0cyB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVncnldID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFN1YkNhdGVnb3J5LCBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5XSA9IHVzZVN0YXRlKFwi0JLRgdC1XCIpO1xuICBjb25zdCBbc2VsZWN0ZWRDb2RlLCBzZXRTZWxlY3RlZENvZGVdID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtkaXNwbGF5ZWRJdGVtcywgc2V0RGlzcGxheWVkSXRlbXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Nob3dTdWJjYXRlZ29yaWVzRm9yLCBzZXRTaG93U3ViY2F0ZWdvcmllc0Zvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWluUHJvZHVjdFByaWNlLCBzZXRNaW5Qcm9kdWN0UHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttYXhQcm9kdWN0UHJpY2UsIHNldE1heFByb2R1Y3RQcmljZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3ByaWNlRmlsdGVyLCBzZXRQcmljZUZpbHRlcl0gPSB1c2VTdGF0ZSh7IG1pbjogMCwgbWF4OiAxIH0pO1xuICBjb25zdCBbaXRlbXNMb2FkZWQsIHNldEl0ZW1zTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICAoc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5KSAmJlxuICAgICAgICAoc2VsZWN0ZWRTdWJDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgIGl0ZW0uc3ViY2F0ZWdvcnkgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkpICYmXG4gICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMSAmJlxuICAgICAgICAoIWl0ZW0uaXNBZHVsdCB8fFxuICAgICAgICAgIChzZWxlY3RlZENhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiICYmXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgPT09IFwidHJ1ZVwiKSlcbiAgICApO1xuICAgIGxldCBfbWluUHJvZHVjdFByaWNlID0gTWF0aC5taW4oLi4uZmlsdHJlZFByb2R1Y3RzLm1hcCgocCkgPT4gcC5wcmljZSkpO1xuICAgIHNldE1pblByb2R1Y3RQcmljZShfbWluUHJvZHVjdFByaWNlKTtcbiAgICBsZXQgX21heFByb2R1Y3RQcmljZSA9IE1hdGgubWF4KC4uLmZpbHRyZWRQcm9kdWN0cy5tYXAoKHApID0+IHAucHJpY2UpKTtcbiAgICBfbWF4UHJvZHVjdFByaWNlID0gTWF0aC5tYXgoX21heFByb2R1Y3RQcmljZSwgX21pblByb2R1Y3RQcmljZSArIDEpO1xuICAgIHNldE1heFByb2R1Y3RQcmljZShfbWF4UHJvZHVjdFByaWNlKTtcbiAgICBsZXQgX3ByaWNlRmlsdGVyID0ge1xuICAgICAgbWluOlxuICAgICAgICBtaW5Qcm9kdWN0UHJpY2UgPT09IHByaWNlRmlsdGVyLm1pblxuICAgICAgICAgID8gX21pblByb2R1Y3RQcmljZVxuICAgICAgICAgIDogTWF0aC5tYXgocHJpY2VGaWx0ZXIubWluLCBfbWluUHJvZHVjdFByaWNlKSxcbiAgICAgIG1heDpcbiAgICAgICAgbWF4UHJvZHVjdFByaWNlID09PSBwcmljZUZpbHRlci5tYXhcbiAgICAgICAgICA/IF9tYXhQcm9kdWN0UHJpY2VcbiAgICAgICAgICA6IE1hdGgubWluKHByaWNlRmlsdGVyLm1heCwgX21heFByb2R1Y3RQcmljZSksXG4gICAgfTtcbiAgICBpZiAoXG4gICAgICBfcHJpY2VGaWx0ZXIubWluICE9PSBwcmljZUZpbHRlci5taW4gfHxcbiAgICAgIF9wcmljZUZpbHRlci5tYXggIT09IHByaWNlRmlsdGVyLm1heFxuICAgICkge1xuICAgICAgc2V0UHJpY2VGaWx0ZXIoX3ByaWNlRmlsdGVyKTtcbiAgICB9XG4gICAgc2V0RGlzcGxheWVkSXRlbXMoXG4gICAgICBmaWx0cmVkUHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAocCkgPT4gcC5wcmljZSA+PSBfcHJpY2VGaWx0ZXIubWluICYmIHAucHJpY2UgPD0gX3ByaWNlRmlsdGVyLm1heFxuICAgICAgKVxuICAgICk7XG4gICAgc2V0SXRlbXNMb2FkZWQodHJ1ZSk7XG4gIH0sIFtcbiAgICBzZWxlY3RlZENvZGUsXG4gICAgc2VsZWN0ZWRDYXRlZ29yeSxcbiAgICBzZWxlY3RlZFN1YkNhdGVnb3J5LFxuICAgIHNlYXJjaCxcbiAgICBwcmljZUZpbHRlcixcbiAgXSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcItCY0LfQvtCx0YDQsNC20LXQvdC40LVcIixcbiAgICAgIHNlbGVjdG9yOiBcImltYWdlXCIsXG4gICAgICBjZWxsOiAocm93KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXtyb3cuaW1nfSB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBhbHQ9e3Jvdy5uYW1lfSAvPlxuICAgICAgKSxcbiAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0J3QsNC30LLQsNC90LjQtVwiLFxuICAgICAgc2VsZWN0b3I6IFwibmFtZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBncm93OiBcIjJcIixcbiAgICAgIHdyYXA6IHRydWUsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQodGC0LDRgNCw0Y8g0YbQtdC90LBcIixcbiAgICAgIHNlbGVjdG9yOiBcIm9sZF9wcmljZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93Lm9sZF9wcmljZX3igr08L3NwYW4+LFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQptC10L3QsCDRgdC+INGB0LrQuNC00LrQvtC5XCIsXG4gICAgICBzZWxlY3RvcjogXCJwcmljZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LnByaWNlfeKCvTwvc3Bhbj4sXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCg0LXQsNC70YzQvdCw0Y8g0LLRi9Cz0L7QtNCwXCIsXG4gICAgICBzZWxlY3RvcjogXCJyZWFsX2Rpc2NvdW50XCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGRlZmF1bHRTb3J0QXNjOiBmYWxzZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cucmVhbF9kaXNjb3VudH3igr08L3NwYW4+LFxuICAgICAgc29ydEZ1bmN0aW9uOiAocm93QSwgcm93QikgPT5cbiAgICAgICAgKHBhcnNlSW50KHJvd0EucmVhbF9kaXNjb3VudCkgKyAwLjEgfHwgMC41KSAtXG4gICAgICAgIChwYXJzZUludChyb3dCLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSksXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCf0YDQvtC80L7QutC+0LRcIixcbiAgICAgIHNlbGVjdG9yOiBcImNvZGVcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5jb2RlLnRvVXBwZXJDYXNlKCl9PC9zcGFuPixcbiAgICAgIHNvcnRGdW5jdGlvbjogKHJvd0EsIHJvd0IpID0+XG4gICAgICAgIHBhcnNlSW50KChyb3dBLmNvZGUubWF0Y2goL1xcZCsvKSB8fCBbXCIwXCJdKVswXSkgLVxuICAgICAgICBwYXJzZUludCgocm93Qi5jb2RlLm1hdGNoKC9cXGQrLykgfHwgW1wiMFwiXSlbMF0pLFxuICAgICAgZGVmYXVsdFNvcnRBc2M6IGZhbHNlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNzBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQmtGD0L/QuNGC0YxcIixcbiAgICAgIHNlbGVjdG9yOiBcImJ1eVwiLFxuICAgICAgY2VsbDogKHJvdykgPT4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9wb2t1cGtpLm1hcmtldC55YW5kZXgucnUvcHJvZHVjdC8ke3Jvdy5pZH1gfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICA+XG4gICAgICAgICAg0JrRg9C/0LjRgtGMXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSxcbiAgICAgIG1pbldpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4uW1xuICAgICAgLi4ucHJvZHVjdHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgIHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmV2LmFkZChjdXJyLmNhdGVnb3J5KTtcbiAgICAgICAgfSwgbmV3IFNldCgpKSxcbiAgICBdLnNvcnQoKGEsIGIpID0+XG4gICAgICBhID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiXG4gICAgICAgID8gMVxuICAgICAgICA6IGIgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCJcbiAgICAgICAgPyAtMVxuICAgICAgICA6IGEubG9jYWxlQ29tcGFyZShiKVxuICAgICksXG4gIF07XG5cbiAgY29uc3Qgc3ViQ2F0ZWdvcmllcyA9IFtcbiAgICBcItCS0YHQtVwiLFxuICAgIC4uLltcbiAgICAgIC4uLnByb2R1Y3RzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICAoc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKSkgJiZcbiAgICAgICAgICAgIHNob3dTdWJjYXRlZ29yaWVzRm9yID09PSBpdGVtLmNhdGVnb3J5XG4gICAgICAgIClcbiAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmV2LmFkZChjdXJyLnN1YmNhdGVnb3J5KTtcbiAgICAgICAgfSwgbmV3IFNldCgpKSxcbiAgICBdLnNvcnQoKSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXZoLTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwi0JrQsNGC0LDQu9C+0LMg0LLRgdC10YUg0YLQvtCy0LDRgNC+0LIg0LTQvtGB0YLRg9C/0L3Ri9GFINC00LvRjyDQv9C+0LrRg9C/0LrQuCDQvdCwINCv0L3QtNC10LrRgS7QnNCw0YDQutC10YLQtSDRgdC+INGB0LrQuNC00LrQvtC5INC/0L4g0L/RgNC+0LzQvtC60L7QtNCw0LwgQ1VUNC1DVVQyNSDQuCBHTzMtR08yOS5cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy13YXJuaW5nIG1iLTNcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHB5LTJcIj5cbiAgICAgICAgICAgIDxoMT7Qn9GA0L7QvNC+0LrQvtC00Ysg0LTQu9GPINCv0L3QtNC10LrRgS7QnNCw0YDQutC10YLQsDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIG1iLTNcIj5cbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD1cIm1kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXItMlwiPtCf0YDQvtC80L7QutC+0LTRizo8L2gzPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgW1wi0JLRgdC1XCIsIC4uLmNvZGVzXS5tYXAoKGNvZGUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzIG1yLTFcIiBrZXk9e2NvZGV9PlxuICAgICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2RlID09PSBzZWxlY3RlZENvZGUgPyBcIndhcm5pbmdcIiA6IFwic2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICAgIHBpbGxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDb2RlKGNvZGUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29kZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICBdfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXItMlwiPtCa0LDRgtC10LPQvtGA0LjQuDo8L2g1PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IG1yLTFcIiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICA/IFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBjYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNBZHVsdFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkdWx0XCIpICE9PSBcInRydWVcIilcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBZHVsdCA9IGNvbmZpcm0oXCLQktCw0Lwg0LXRgdGC0YwgMTgg0LvQtdGCP1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQWR1bHRcIiwgaXNBZHVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0FkdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdyeShjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yKFxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBcItCS0YHQtVwiID8gbnVsbCA6IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnkoXCLQktGB0LVcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtzaG93U3ViY2F0ZWdvcmllc0ZvciAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0yIG1iLTBcIj7Qn9C+0LTQutCw0YLQtdCz0L7RgNC40Lg6PC9wPlxuICAgICAgICAgICAgICB7c3ViQ2F0ZWdvcmllcy5tYXAoKHN1YikgPT4gKFxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e3N1YiA9PT0gc2VsZWN0ZWRTdWJDYXRlZ29yeSA/IFwid2FybmluZ1wiIDogXCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICAgIHBpbGxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnkoc3ViKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTEgbXItMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N1Yn1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgPENvbCBtZD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQulwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIHsvKiA8Q29sIHhzPXs2fSBtZD17Mn0gY2xhc3NOYW1lPVwicHItMlwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Zm9ybWF0dGVyLmZvcm1hdChwcmljZUZpbHRlci5taW4pfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZUZpbHRlci5taW59XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgIHNldFByaWNlRmlsdGVyKHsgbWluOiBlLnRhcmdldC52YWx1ZSwgbWF4OiBwcmljZUZpbHRlci5tYXggfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAtXG4gICAgICAgICAgICA8Q29sIHhzPXs2fSBtZD17Mn0gY2xhc3NOYW1lPVwicGwtMVwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Zm9ybWF0dGVyLmZvcm1hdChwcmljZUZpbHRlci5tYXgpfVxuICAgICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICAgIDwvQ29sPiAqL31cbiAgICAgICAgICAgIDxDb2wgbWQ9ezd9IGNsYXNzTmFtZT1cInB5LTQgbXgtMyBwdC1tZC0wIG14LW1kLTBcIj5cbiAgICAgICAgICAgICAgPElucHV0UmFuZ2VcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZT17bWF4UHJvZHVjdFByaWNlICsgMX1cbiAgICAgICAgICAgICAgICBtaW5WYWx1ZT17bWluUHJvZHVjdFByaWNlIC0gMX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2VGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgZm9ybWF0TGFiZWw9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9PT0gbWluUHJvZHVjdFByaWNlIHx8IHZhbHVlID09PSBtYXhQcm9kdWN0UHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdHRlci5mb3JtYXQodmFsdWUpXG4gICAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgc2V0UHJpY2VGaWx0ZXIoe1xuICAgICAgICAgICAgICAgICAgICBtaW46IE1hdGgubWF4KHZhbHVlLm1pbiwgbWluUHJvZHVjdFByaWNlKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBNYXRoLm1pbih2YWx1ZS5tYXgsIG1heFByb2R1Y3RQcmljZSksXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxEYXRhVGFibGVcbiAgICAgICAgICAgIG5vSGVhZGVyPXt0cnVlfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGRhdGE9e2Rpc3BsYXllZEl0ZW1zfVxuICAgICAgICAgICAgbm9EYXRhQ29tcG9uZW50PXtcbiAgICAgICAgICAgICAgaXRlbXNMb2FkZWRcbiAgICAgICAgICAgICAgICA/IFwi0J3QtSDQvdCw0LnQtNC10L3QviDRgtC+0LLQsNGA0L7QsiDRgdC+0L7RgtCy0LXRgtCy0YPRidC40Lkg0LrRgNC40YLQtdGA0LjRj9C8XCJcbiAgICAgICAgICAgICAgICA6IFwi0JjQtNGR0YIg0LfQsNCz0YDRg9C30LrQsCDRgtC+0LLQsNGA0L7Qsi4uLlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt0cnVlfVxuICAgICAgICAgICAgcGFnaW5hdGlvblJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCA1MCwgMTAwLCA1MDAsIDEwMDBdfVxuICAgICAgICAgICAgcGFnaW5hdGlvbkNvbXBvbmVudE9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgcm93c1BlclBhZ2VUZXh0OiBcItCi0L7QstCw0YDQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtTpcIixcbiAgICAgICAgICAgICAgcmFuZ2VTZXBhcmF0b3JUZXh0OiBcItC40LdcIixcbiAgICAgICAgICAgICAgbm9Sb3dzUGVyUGFnZTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdEFsbFJvd3NJdGVtOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0QWxsUm93c0l0ZW1UZXh0OiBcItCS0YHQtVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMCB3LTEwMFwiPlxuICAgICAgICA8QWxlcnQgY29sb3I9XCJpbmZvXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCS0YvQs9GA0YPQt9C60LAg0YLQvtCy0LDRgNC+0LIg0L3QsNC70LDQttC10L3QsC4g0JrRgNC+0LzQtSDRjdGC0L7Qs9C+INCyINGC0LDQsdC70LjRhtGDINC00L7QsdCw0LLQu9C10L3QsCDQutC+0LvQvtC90LrQsFxuICAgICAgICAgIFwi0KDQtdCw0LvRjNC90LDRjyDQstGL0LPQvtC00LBcIiwg0L7QvdCwINC/0L7QutCw0LfRi9Cy0LDQtdGCINGA0LDQt9C90LjRhtGDINGBINC80LjQvdC40LzQsNC70YzQvdC+0Lkg0YbQtdC90L7QuSDQvdCwINGC0L7QstCw0YBcbiAgICAgICAgICDQv9C+INC80LDRgNC10LrRgtGDINCyINCc0L7RgdC60LLQtSAo0LfQsCDQuNC00LXRjiDRgdC/0LDRgdC40LHQvntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGVwcGVyLnJ1L3Byb2ZpbGUvUnVzdGlrX1VmYVwiPlJ1c3Rpa19VZmE8L2E+KSxcbiAgICAgICAgICDQv9C+0LrQsCDRh9GC0L4g0LIg0Y3RgtC+0Lkg0LrQvtC70L7QvdC60LUg0LLQvtC30LzQvtC20L3RiyDQvtGI0LjQsdC60Lgg0Lgg0L/RgNC+0L/Rg9GB0LrQuC4g0JLQvtC/0YDQvtGB0YssINGB0L7QstC10YLRiyDQuFxuICAgICAgICAgINC30LDQvNC10YfQsNC90LjRjyDQv9C+INGB0LDQudGC0YMsINC80L7QttC10YLQtSDQvdCw0L/QuNGB0LDRgtGMINC80L3QtSDQsntcIiBcIn1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnBlcHBlci5ydS9wcm9maWxlL3NldnNraWlcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDQu9C40YfQutGDINC90LAgUGVwcGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICDQuNC70Lgg0L3QsCDQv9C+0YfRgtGDe1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86c2V2c2tpaTExMUBnbWFpbC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAgc2V2c2tpaTExMUBnbWFpbC5jb21cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgICB7LyogPEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCa0LDRgNGC0LjQvdC60Lgg0L3QtdC60L7RgtC+0YDRi9GFINGC0L7QstCw0YDQvtCyINC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7RgiDRgtC+0LLQsNGA0L7QsiDRgSDQv9C+0YXQvtC20LjQvNC4XG4gICAgICAgICAg0L3QsNC30LLQsNC90LjRj9C80LguINCf0YDQvtCx0LvQtdC80LAg0LfQsNGC0YDQsNCz0LjQstCw0LXRgiDRgtC+0LvRjNC60L4g0YHQsNC80Lgg0LrQsNGA0YLQuNC90LrQuCDQuCDRjyDQv9C+0YHRgtCw0YDQsNGO0YHRjFxuICAgICAgICAgINC10ZEg0LrQsNC6INC80L7QttC90L4g0YHQutC+0YDQtdC1INC40YHQv9GA0LDQstC40YLRjC5cbiAgICAgICAgPC9BbGVydD4gKi99XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgINCh0L7Qt9C00LDRgtC10LvRjCDRgdCw0LnRgtCwINC90LUg0LjQvNC10LXRgiDQvtGC0L3QvtGI0LXQvdC40Y8g0Log0LrQvtC80L/QsNC90LjRj9C8INCv0L3QtNC10LrRgSDQuCDQr9C90LTQtdC60YEu0JzQsNGA0LXQutGCXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8WU1Jbml0aWFsaXplciBhY2NvdW50cz17WzcxMjU2NDg0XX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgbGV0IGNvZGVzID0gbmV3IFNldCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiLi9wcm9kdWN0cy5qc29uXCIpKTtcbiAgbGV0IHVuaXF1ZVByb2R1Y3RzID0gW107XG4gIGxldCBhZGRlZFByb2R1Y3RzID0gbmV3IFNldCgpO1xuICBsZXQgYmFkX3ByaWNlcyA9IFtdO1xuXG4gIGZvciAoY29uc3QgcHJvZHVjdCBvZiBwcm9kdWN0cykge1xuICAgIGlmICghYWRkZWRQcm9kdWN0cy5oYXMocHJvZHVjdC5pZCkpIHtcbiAgICAgIGlmICghcHJvZHVjdC5jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgICAgY29kZXMuYWRkKHByb2R1Y3QuY29kZSk7XG4gICAgICB1bmlxdWVQcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgcmVhbF9kaXNjb3VudDpcbiAgICAgICAgICBwcm9kdWN0Lm1pbl9wcmljZSA8IHByb2R1Y3Qub2xkX3ByaWNlXG4gICAgICAgICAgICA/IHByb2R1Y3QubWluX3ByaWNlIC0gcHJvZHVjdC5wcmljZVxuICAgICAgICAgICAgOiBcIj9cIixcbiAgICAgIH0pO1xuICAgICAgaWYgKHByb2R1Y3QubWluX3ByaWNlID4gcHJvZHVjdC5vbGRfcHJpY2UpIHtcbiAgICAgICAgYmFkX3ByaWNlcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgfVxuICAgICAgYWRkZWRQcm9kdWN0cy5hZGQocHJvZHVjdC5pZCk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGAke2JhZF9wcmljZXMubGVuZ3RofSBwcmljZXMgYXJlIGJhZGApO1xuICBjb25zb2xlLmxvZyhiYWRfcHJpY2VzKTtcbiAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHVuaXF1ZVByb2R1Y3RzKSB7XG4gICAgaWYgKCFwcm9kdWN0LnN1YmNhdGVnb3J5KSB7XG4gICAgICBwcm9kdWN0LnN1YmNhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcbiAgICAgIHByb2R1Y3QuY2F0ZWdvcnkgPSBjYXRlZ29yaWVzSGllcmFyaHlbcHJvZHVjdC5jYXRlZ29yeV07XG4gICAgICBwcm9kdWN0LmlzQWR1bHQgPSBwcm9kdWN0LmNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiO1xuICAgICAgaWYgKCFwcm9kdWN0LmNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZzLndyaXRlRmlsZVN5bmMoXCIuL3Byb2R1Y3RzX2pzb24uanNvblwiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cyksIFwidXRmOFwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb2RlczogWy4uLmNvZGVzXS5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAoYi5tYXRjaCgvXFxkKy8pID8gYi5tYXRjaCgvXFxkKy8pWzBdIDogMCkgLVxuICAgICAgICAgIChhLm1hdGNoKC9cXGQrLykgPyBhLm1hdGNoKC9cXGQrLylbMF0gOiAwKVxuICAgICAgKSxcbiAgICAgIHByb2R1Y3RzOiB1bmlxdWVQcm9kdWN0cy5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAocGFyc2VJbnQoYi5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpIC1cbiAgICAgICAgICAocGFyc2VJbnQoYS5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpXG4gICAgICApLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9