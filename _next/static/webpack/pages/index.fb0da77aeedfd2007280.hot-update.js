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

    setMaxProductPrice(_maxProductPrice);
    var _priceFilter = {
      min: Math.max(priceFilter.min, _minProductPrice),
      max: Math.min(priceFilter.max, _maxProductPrice)
    };
    setPriceFilter(_priceFilter);
    setDisplayedItems(filtredProducts.filter(function (p) {
      return p.price >= _priceFilter.min && p.price <= _priceFilter.max;
    }));
    console.log(_maxProductPrice, _maxProductPrice, _priceFilter);
  }, [selectedCode, selectedCategory, selectedSubCategory, search]);
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
        lineNumber: 56,
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
        lineNumber: 74,
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
        lineNumber: 83,
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
        lineNumber: 93,
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
        lineNumber: 105,
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
        lineNumber: 118,
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
        lineNumber: 173,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO29."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
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
            lineNumber: 183,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
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
            lineNumber: 190,
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
                lineNumber: 194,
                columnNumber: 19
              }, _this)
            }, code, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
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
                lineNumber: 209,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
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
              lineNumber: 246,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 243,
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
              lineNumber: 259,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_input_range__WEBPACK_IMPORTED_MODULE_7___default.a, {
              maxValue: maxProductPrice,
              minValue: minProductPrice,
              value: priceFilter,
              onChange: function onChange(value) {
                return setPriceFilter({
                  value: value
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
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
          lineNumber: 274,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
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
          lineNumber: 296,
          columnNumber: 11
        }, this), "), \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "py-2",
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 171,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvZGVzIiwicHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVncnkiLCJzZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2V0U2VsZWN0ZWRTdWJDYXRlZ29yeSIsInNlbGVjdGVkQ29kZSIsInNldFNlbGVjdGVkQ29kZSIsImRpc3BsYXllZEl0ZW1zIiwic2V0RGlzcGxheWVkSXRlbXMiLCJzaG93U3ViY2F0ZWdvcmllc0ZvciIsInNldFNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2VhcmNoIiwic2V0U2VhcmNoIiwibWluUHJvZHVjdFByaWNlIiwic2V0TWluUHJvZHVjdFByaWNlIiwibWF4UHJvZHVjdFByaWNlIiwic2V0TWF4UHJvZHVjdFByaWNlIiwibWluIiwibWF4IiwicHJpY2VGaWx0ZXIiLCJzZXRQcmljZUZpbHRlciIsInVzZUVmZmVjdCIsImZpbHRyZWRQcm9kdWN0cyIsImZpbHRlciIsIml0ZW0iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjYXRlZ29yeSIsInN1YmNhdGVnb3J5IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImlzQWR1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX21pblByb2R1Y3RQcmljZSIsIk1hdGgiLCJtYXAiLCJwIiwicHJpY2UiLCJfbWF4UHJvZHVjdFByaWNlIiwiX3ByaWNlRmlsdGVyIiwiY29uc29sZSIsImxvZyIsImNvbHVtbnMiLCJzZWxlY3RvciIsImNlbGwiLCJyb3ciLCJpbWciLCJjZW50ZXIiLCJncm93IiwiY29tcGFjdCIsInNvcnRhYmxlIiwid3JhcCIsIm9sZF9wcmljZSIsIm1pbldpZHRoIiwiZGVmYXVsdFNvcnRBc2MiLCJyZWFsX2Rpc2NvdW50Iiwic29ydEZ1bmN0aW9uIiwicm93QSIsInJvd0IiLCJwYXJzZUludCIsIm1hdGNoIiwiaWQiLCJjYXRlZ29yaWVzIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhZGQiLCJTZXQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic3ViQ2F0ZWdvcmllcyIsImNvbmZpcm0iLCJzZXRJdGVtIiwic3ViIiwiZSIsInRhcmdldCIsInZhbHVlIiwicm93c1BlclBhZ2VUZXh0IiwicmFuZ2VTZXBhcmF0b3JUZXh0Iiwibm9Sb3dzUGVyUGFnZSIsInNlbGVjdEFsbFJvd3NJdGVtIiwic2VsZWN0QWxsUm93c0l0ZW1UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRWUsU0FBU0EsSUFBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDekNDLGdCQUR5QztBQUFBLE1BQ3ZCQyxrQkFEdUI7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsS0FBRCxDQUZkO0FBQUEsTUFFekNHLG1CQUZ5QztBQUFBLE1BRXBCQyxzQkFGb0I7O0FBQUEsbUJBR1JKLHNEQUFRLENBQUMsS0FBRCxDQUhBO0FBQUEsTUFHekNLLFlBSHlDO0FBQUEsTUFHM0JDLGVBSDJCOztBQUFBLG1CQUlKTixzREFBUSxFQUpKO0FBQUEsTUFJekNPLGNBSnlDO0FBQUEsTUFJekJDLGlCQUp5Qjs7QUFBQSxtQkFLUVIsc0RBQVEsQ0FBQyxJQUFELENBTGhCO0FBQUEsTUFLekNTLG9CQUx5QztBQUFBLE1BS25CQyx1QkFMbUI7O0FBQUEsbUJBTXBCVixzREFBUSxDQUFDLEVBQUQsQ0FOWTtBQUFBLE1BTXpDVyxNQU55QztBQUFBLE1BTWpDQyxTQU5pQzs7QUFBQSxtQkFPRlosc0RBQVEsQ0FBQyxDQUFELENBUE47QUFBQSxNQU96Q2EsZUFQeUM7QUFBQSxNQU94QkMsa0JBUHdCOztB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O0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQXdIRTtBQUFRLGVBQVMsRUFBQyxvQ0FBbEI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFPLGFBQUssRUFBQyxNQUFiO0FBQW9CLGlCQUFTLEVBQUMsTUFBOUI7QUFBQSx1NUJBR3VDLEdBSHZDLGVBSUU7QUFBRyxjQUFJLEVBQUMsMENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsMGpCQU00QyxHQU41QyxlQU9FO0FBQ0UsY0FBSSxFQUFDLHVDQURQO0FBRUUsZ0JBQU0sRUFBQyxRQUZUO0FBR0UsYUFBRyxFQUFDLFVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsRUFhTyxHQWJQLG9FQWNlLEdBZGYsZUFlRTtBQUFHLGNBQUksRUFBQyw2QkFBUjtBQUFzQyxnQkFBTSxFQUFDLFFBQTdDO0FBQXNELGFBQUcsRUFBQyxVQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQTBCRSxxRUFBQyxvREFBRDtBQUFXLGlCQUFTLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEhGLGVBc0pFLHFFQUFDLGtFQUFEO0FBQWUsY0FBUSxFQUFFLENBQUMsUUFBRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEpEOztHQTFUdUJ4RixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZiMGRhNzdhZWVkZmQyMDA3MjgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBBbGVydCwgQmFkZ2UsIEJ1dHRvbiwgQ29sLCBDb250YWluZXIsIElucHV0LCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcbmltcG9ydCBjYXRlZ29yaWVzSGllcmFyaHkgZnJvbSBcIi4uL2NhdGVnb3JpZXNfaGllcmFyY2h5Lmpzb25cIjtcbmltcG9ydCB7IFlNSW5pdGlhbGl6ZXIgfSBmcm9tIFwicmVhY3QteWFuZGV4LW1ldHJpa2FcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gXCJyZWFjdC1pbnB1dC1yYW5nZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY29kZXMsIHByb2R1Y3RzIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdyeV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW3NlbGVjdGVkU3ViQ2F0ZWdvcnksIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtzZWxlY3RlZENvZGUsIHNldFNlbGVjdGVkQ29kZV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW2Rpc3BsYXllZEl0ZW1zLCBzZXREaXNwbGF5ZWRJdGVtc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2hvd1N1YmNhdGVnb3JpZXNGb3IsIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttaW5Qcm9kdWN0UHJpY2UsIHNldE1pblByb2R1Y3RQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21heFByb2R1Y3RQcmljZSwgc2V0TWF4UHJvZHVjdFByaWNlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbcHJpY2VGaWx0ZXIsIHNldFByaWNlRmlsdGVyXSA9IHVzZVN0YXRlKHsgbWluOiAwLCBtYXg6IDEgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmaWx0cmVkUHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgKHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKSkgJiZcbiAgICAgICAgKHNlbGVjdGVkQ2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSkgJiZcbiAgICAgICAgKHNlbGVjdGVkU3ViQ2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICBpdGVtLnN1YmNhdGVnb3J5ID09PSBzZWxlY3RlZFN1YkNhdGVnb3J5KSAmJlxuICAgICAgICBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT0gLTEgJiZcbiAgICAgICAgKCFpdGVtLmlzQWR1bHQgfHxcbiAgICAgICAgICAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIiAmJlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkdWx0XCIpID09PSBcInRydWVcIikpXG4gICAgKTtcbiAgICBjb25zdCBfbWluUHJvZHVjdFByaWNlID0gTWF0aC5taW4oLi4uZmlsdHJlZFByb2R1Y3RzLm1hcCgocCkgPT4gcC5wcmljZSkpO1xuICAgIHNldE1pblByb2R1Y3RQcmljZShfbWluUHJvZHVjdFByaWNlKTtcbiAgICBjb25zdCBfbWF4UHJvZHVjdFByaWNlID0gTWF0aC5tYXgoLi4uZmlsdHJlZFByb2R1Y3RzLm1hcCgocCkgPT4gcC5wcmljZSkpO1xuICAgIHNldE1heFByb2R1Y3RQcmljZShfbWF4UHJvZHVjdFByaWNlKTtcbiAgICBsZXQgX3ByaWNlRmlsdGVyID0ge1xuICAgICAgbWluOiBNYXRoLm1heChwcmljZUZpbHRlci5taW4sIF9taW5Qcm9kdWN0UHJpY2UpLFxuICAgICAgbWF4OiBNYXRoLm1pbihwcmljZUZpbHRlci5tYXgsIF9tYXhQcm9kdWN0UHJpY2UpLFxuICAgIH07XG4gICAgc2V0UHJpY2VGaWx0ZXIoX3ByaWNlRmlsdGVyKTtcbiAgICBzZXREaXNwbGF5ZWRJdGVtcyhcbiAgICAgIGZpbHRyZWRQcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgIChwKSA9PiBwLnByaWNlID49IF9wcmljZUZpbHRlci5taW4gJiYgcC5wcmljZSA8PSBfcHJpY2VGaWx0ZXIubWF4XG4gICAgICApXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhfbWF4UHJvZHVjdFByaWNlLCBfbWF4UHJvZHVjdFByaWNlLCBfcHJpY2VGaWx0ZXIpO1xuICB9LCBbc2VsZWN0ZWRDb2RlLCBzZWxlY3RlZENhdGVnb3J5LCBzZWxlY3RlZFN1YkNhdGVnb3J5LCBzZWFyY2hdKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtVwiLFxuICAgICAgc2VsZWN0b3I6IFwiaW1hZ2VcIixcbiAgICAgIGNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPGltZyBzcmM9e3Jvdy5pbWd9IHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD17cm93Lm5hbWV9IC8+XG4gICAgICApLFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQndCw0LfQstCw0L3QuNC1XCIsXG4gICAgICBzZWxlY3RvcjogXCJuYW1lXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGdyb3c6IFwiMlwiLFxuICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCh0YLQsNGA0LDRjyDRhtC10L3QsFwiLFxuICAgICAgc2VsZWN0b3I6IFwib2xkX3ByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cub2xkX3ByaWNlfeKCvTwvc3Bhbj4sXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCm0LXQvdCwINGB0L4g0YHQutC40LTQutC+0LlcIixcbiAgICAgIHNlbGVjdG9yOiBcInByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cucHJpY2V94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KDQtdCw0LvRjNC90LDRjyDQstGL0LPQvtC00LBcIixcbiAgICAgIHNlbGVjdG9yOiBcInJlYWxfZGlzY291bnRcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZGVmYXVsdFNvcnRBc2M6IGZhbHNlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5yZWFsX2Rpc2NvdW50feKCvTwvc3Bhbj4sXG4gICAgICBzb3J0RnVuY3Rpb246IChyb3dBLCByb3dCKSA9PlxuICAgICAgICAocGFyc2VJbnQocm93QS5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpIC1cbiAgICAgICAgKHBhcnNlSW50KHJvd0IucmVhbF9kaXNjb3VudCkgKyAwLjEgfHwgMC41KSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0J/RgNC+0LzQvtC60L7QtFwiLFxuICAgICAgc2VsZWN0b3I6IFwiY29kZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LmNvZGUudG9VcHBlckNhc2UoKX08L3NwYW4+LFxuICAgICAgc29ydEZ1bmN0aW9uOiAocm93QSwgcm93QikgPT5cbiAgICAgICAgcGFyc2VJbnQoKHJvd0EuY29kZS5tYXRjaCgvXFxkKy8pIHx8IFtcIjBcIl0pWzBdKSAtXG4gICAgICAgIHBhcnNlSW50KChyb3dCLmNvZGUubWF0Y2goL1xcZCsvKSB8fCBbXCIwXCJdKVswXSksXG4gICAgICBkZWZhdWx0U29ydEFzYzogZmFsc2UsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI3MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCa0YPQv9C40YLRjFwiLFxuICAgICAgc2VsZWN0b3I6IFwiYnV5XCIsXG4gICAgICBjZWxsOiAocm93KSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxuICAgICAgICAgIGhyZWY9e2BodHRwczovL3Bva3Vwa2kubWFya2V0LnlhbmRleC5ydS9wcm9kdWN0LyR7cm93LmlkfWB9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICDQmtGD0L/QuNGC0YxcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApLFxuICAgICAgbWluV2lkdGg6IFwiMTAwcHhcIixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAgXCLQktGB0LVcIixcbiAgICAuLi5bXG4gICAgICAuLi5wcm9kdWN0c1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgICAgc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgICBpdGVtLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gc2VsZWN0ZWRDb2RlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuYWRkKGN1cnIuY2F0ZWdvcnkpO1xuICAgICAgICB9LCBuZXcgU2V0KCkpLFxuICAgIF0uc29ydCgoYSwgYikgPT5cbiAgICAgIGEgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCJcbiAgICAgICAgPyAxXG4gICAgICAgIDogYiA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICA/IC0xXG4gICAgICAgIDogYS5sb2NhbGVDb21wYXJlKGIpXG4gICAgKSxcbiAgXTtcblxuICBjb25zdCBzdWJDYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4uW1xuICAgICAgLi4ucHJvZHVjdHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgIChzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAgICAgc2hvd1N1YmNhdGVnb3JpZXNGb3IgPT09IGl0ZW0uY2F0ZWdvcnlcbiAgICAgICAgKVxuICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuYWRkKGN1cnIuc3ViY2F0ZWdvcnkpO1xuICAgICAgICB9LCBuZXcgU2V0KCkpLFxuICAgIF0uc29ydCgpLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdmgtMTAwIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7Qn9GA0L7QvNC+0LrQvtC00Ysg0LTQu9GPINCv0L3QtNC10LrRgS7QnNCw0YDQutC10YLQsDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCLQmtCw0YLQsNC70L7QsyDQstGB0LXRhSDRgtC+0LLQsNGA0L7QsiDQtNC+0YHRgtGD0L/QvdGL0YUg0LTQu9GPINC/0L7QutGD0L/QutC4INC90LAg0K/QvdC00LXQutGBLtCc0LDRgNC60LXRgtC1INGB0L4g0YHQutC40LTQutC+0Lkg0L/QviDQv9GA0L7QvNC+0LrQvtC00LDQvCBDVVQ0LUNVVDI1INC4IEdPMy1HTzI5LlwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdhcm5pbmcgbWItM1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcHktMlwiPlxuICAgICAgICAgICAgPGgxPtCf0YDQvtC80L7QutC+0LTRiyDQtNC70Y8g0K/QvdC00LXQutGBLtCc0LDRgNC60LXRgtCwPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm92ZXJmbG93LWF1dG8gbWItM1wiPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwibWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtci0yXCI+0J/RgNC+0LzQvtC60L7QtNGLOjwvaDM+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICBbXCLQktGB0LVcIiwgLi4uY29kZXNdLm1hcCgoY29kZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDMgbXItMVwiIGtleT17Y29kZX0+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvZGUgPT09IHNlbGVjdGVkQ29kZSA/IFwid2FybmluZ1wiIDogXCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENvZGUoY29kZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjb2RlLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXItMlwiPtCa0LDRgtC10LPQvtGA0LjQuDo8L2g1PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IG1yLTFcIiBrZXk9e2NhdGVnb3J5fT5cbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICA/IFwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBjYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNBZHVsdFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkdWx0XCIpICE9PSBcInRydWVcIilcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBZHVsdCA9IGNvbmZpcm0oXCLQktCw0Lwg0LXRgdGC0YwgMTgg0LvQtdGCP1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlzQWR1bHRcIiwgaXNBZHVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0FkdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQ2F0ZWdyeShjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yKFxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBcItCS0YHQtVwiID8gbnVsbCA6IGNhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnkoXCLQktGB0LVcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtzaG93U3ViY2F0ZWdvcmllc0ZvciAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0yIG1iLTBcIj7Qn9C+0LTQutCw0YLQtdCz0L7RgNC40Lg6PC9wPlxuICAgICAgICAgICAgICB7c3ViQ2F0ZWdvcmllcy5tYXAoKHN1YikgPT4gKFxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e3N1YiA9PT0gc2VsZWN0ZWRTdWJDYXRlZ29yeSA/IFwid2FybmluZ1wiIDogXCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICAgIHBpbGxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnkoc3ViKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTEgbXItMVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3N1Yn1cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAgPENvbCBtZD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQulwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRSYW5nZVxuICAgICAgICAgICAgICAgIG1heFZhbHVlPXttYXhQcm9kdWN0UHJpY2V9XG4gICAgICAgICAgICAgICAgbWluVmFsdWU9e21pblByb2R1Y3RQcmljZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2VGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0UHJpY2VGaWx0ZXIoeyB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxEYXRhVGFibGVcbiAgICAgICAgICAgIG5vSGVhZGVyPXt0cnVlfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGRhdGE9e2Rpc3BsYXllZEl0ZW1zfVxuICAgICAgICAgICAgbm9EYXRhQ29tcG9uZW50PVwi0J3QtSDQvdCw0LnQtNC10L3QviDRgtC+0LLQsNGA0L7QsiDRgdC+0L7RgtCy0LXRgtCy0YPRidC40Lkg0LrRgNC40YLQtdGA0LjRj9C8XCJcbiAgICAgICAgICAgIHBhZ2luYXRpb249e3RydWV9XG4gICAgICAgICAgICBwYWdpbmF0aW9uUm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDUwLCAxMDAsIDUwMCwgMTAwMF19XG4gICAgICAgICAgICBwYWdpbmF0aW9uQ29tcG9uZW50T3B0aW9ucz17e1xuICAgICAgICAgICAgICByb3dzUGVyUGFnZVRleHQ6IFwi0KLQvtCy0LDRgNC+0LIg0L3QsCDRgdGC0YDQsNC90LjRhtC1OlwiLFxuICAgICAgICAgICAgICByYW5nZVNlcGFyYXRvclRleHQ6IFwi0LjQt1wiLFxuICAgICAgICAgICAgICBub1Jvd3NQZXJQYWdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0QWxsUm93c0l0ZW06IGZhbHNlLFxuICAgICAgICAgICAgICBzZWxlY3RBbGxSb3dzSXRlbVRleHQ6IFwi0JLRgdC1XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSBweS0wIHctMTAwXCI+XG4gICAgICAgIDxBbGVydCBjb2xvcj1cImluZm9cIiBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAg0JLRi9Cz0YDRg9C30LrQsCDRgtC+0LLQsNGA0L7QsiDQvdCw0LvQsNC20LXQvdCwLiDQmtGA0L7QvNC1INGN0YLQvtCz0L4g0LIg0YLQsNCx0LvQuNGG0YMg0LTQvtCx0LDQstC70LXQvdCwINC60L7Qu9C+0L3QutCwXG4gICAgICAgICAgXCLQoNC10LDQu9GM0L3QsNGPINCy0YvQs9C+0LTQsFwiLCDQvtC90LAg0L/QvtC60LDQt9GL0LLQsNC10YIg0YDQsNC30L3QuNGG0YMg0YEg0LzQuNC90LjQvNCw0LvRjNC90L7QuSDRhtC10L3QvtC5INC90LAg0YLQvtCy0LDRgFxuICAgICAgICAgINC/0L4g0LzQsNGA0LXQutGC0YMg0LIg0JzQvtGB0LrQstC1ICjQt9CwINC40LTQtdGOINGB0L/QsNGB0LjQsdC+e1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wZXBwZXIucnUvcHJvZmlsZS9SdXN0aWtfVWZhXCI+UnVzdGlrX1VmYTwvYT4pLFxuICAgICAgICAgINC/0L7QutCwINGH0YLQviDQsiDRjdGC0L7QuSDQutC+0LvQvtC90LrQtSDQstC+0LfQvNC+0LbQvdGLINC+0YjQuNCx0LrQuCDQuCDQv9GA0L7Qv9GD0YHQutC4LiDQktC+0L/RgNC+0YHRiywg0YHQvtCy0LXRgtGLINC4XG4gICAgICAgICAg0LfQsNC80LXRh9Cw0L3QuNGPINC/0L4g0YHQsNC50YLRgywg0LzQvtC20LXRgtC1INC90LDQv9C40YHQsNGC0Ywg0LzQvdC1INCye1wiIFwifVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucGVwcGVyLnJ1L3Byb2ZpbGUvc2V2c2tpaVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgINC70LjRh9C60YMg0L3QsCBQZXBwZXJcbiAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgINC40LvQuCDQvdCwINC/0L7Rh9GC0YN7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpzZXZza2lpMTExQGdtYWlsLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICBzZXZza2lpMTExQGdtYWlsLmNvbVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIHsvKiA8QWxlcnQgY29sb3I9XCJkYW5nZXJcIiBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAg0JrQsNGA0YLQuNC90LrQuCDQvdC10LrQvtGC0L7RgNGL0YUg0YLQvtCy0LDRgNC+0LIg0LzQvtCz0YPRgiDQsdGL0YLRjCDQvtGCINGC0L7QstCw0YDQvtCyINGBINC/0L7RhdC+0LbQuNC80LhcbiAgICAgICAgICDQvdCw0LfQstCw0L3QuNGP0LzQuC4g0J/RgNC+0LHQu9C10LzQsCDQt9Cw0YLRgNCw0LPQuNCy0LDQtdGCINGC0L7Qu9GM0LrQviDRgdCw0LzQuCDQutCw0YDRgtC40L3QutC4INC4INGPINC/0L7RgdGC0LDRgNCw0Y7RgdGMXG4gICAgICAgICAg0LXRkSDQutCw0Log0LzQvtC20L3QviDRgdC60L7RgNC10LUg0LjRgdC/0YDQsNCy0LjRgtGMLlxuICAgICAgICA8L0FsZXJ0PiAqL31cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJweS0yXCI+XG4gICAgICAgICAg0KHQvtC30LTQsNGC0LXQu9GMINGB0LDQudGC0LAg0L3QtSDQuNC80LXQtdGCINC+0YLQvdC+0YjQtdC90LjRjyDQuiDQutC+0LzQv9Cw0L3QuNGP0Lwg0K/QvdC00LXQutGBINC4INCv0L3QtNC10LrRgS7QnNCw0YDQtdC60YJcbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxZTUluaXRpYWxpemVyIGFjY291bnRzPXtbNzEyNTY0ODRdfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBsZXQgY29kZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHByb2R1Y3RzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCIuL3Byb2R1Y3RzLmpzb25cIikpO1xuICBsZXQgdW5pcXVlUHJvZHVjdHMgPSBbXTtcbiAgbGV0IGFkZGVkUHJvZHVjdHMgPSBuZXcgU2V0KCk7XG4gIGxldCBiYWRfcHJpY2VzID0gW107XG5cbiAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHByb2R1Y3RzKSB7XG4gICAgaWYgKCFhZGRlZFByb2R1Y3RzLmhhcyhwcm9kdWN0LmlkKSkge1xuICAgICAgaWYgKCFwcm9kdWN0LmNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICB9XG4gICAgICBjb2Rlcy5hZGQocHJvZHVjdC5jb2RlKTtcbiAgICAgIHVuaXF1ZVByb2R1Y3RzLnB1c2goe1xuICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICByZWFsX2Rpc2NvdW50OlxuICAgICAgICAgIHByb2R1Y3QubWluX3ByaWNlIDwgcHJvZHVjdC5vbGRfcHJpY2VcbiAgICAgICAgICAgID8gcHJvZHVjdC5taW5fcHJpY2UgLSBwcm9kdWN0LnByaWNlXG4gICAgICAgICAgICA6IFwiP1wiLFxuICAgICAgfSk7XG4gICAgICBpZiAocHJvZHVjdC5taW5fcHJpY2UgPiBwcm9kdWN0Lm9sZF9wcmljZSkge1xuICAgICAgICBiYWRfcHJpY2VzLnB1c2gocHJvZHVjdCk7XG4gICAgICB9XG4gICAgICBhZGRlZFByb2R1Y3RzLmFkZChwcm9kdWN0LmlkKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coYCR7YmFkX3ByaWNlcy5sZW5ndGh9IHByaWNlcyBhcmUgYmFkYCk7XG4gIGNvbnNvbGUubG9nKGJhZF9wcmljZXMpO1xuICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdW5pcXVlUHJvZHVjdHMpIHtcbiAgICBpZiAoIXByb2R1Y3Quc3ViY2F0ZWdvcnkpIHtcbiAgICAgIHByb2R1Y3Quc3ViY2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5O1xuICAgICAgcHJvZHVjdC5jYXRlZ29yeSA9IGNhdGVnb3JpZXNIaWVyYXJoeVtwcm9kdWN0LmNhdGVnb3J5XTtcbiAgICAgIHByb2R1Y3QuaXNBZHVsdCA9IHByb2R1Y3QuY2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCI7XG4gICAgICBpZiAoIXByb2R1Y3QuY2F0ZWdvcnkpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnMud3JpdGVGaWxlU3luYyhcIi4vcHJvZHVjdHNfanNvbi5qc29uXCIsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzKSwgXCJ1dGY4XCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvZGVzOiBbLi4uY29kZXNdLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgIChiLm1hdGNoKC9cXGQrLykgPyBiLm1hdGNoKC9cXGQrLylbMF0gOiAwKSAtXG4gICAgICAgICAgKGEubWF0Y2goL1xcZCsvKSA/IGEubWF0Y2goL1xcZCsvKVswXSA6IDApXG4gICAgICApLFxuICAgICAgcHJvZHVjdHM6IHVuaXF1ZVByb2R1Y3RzLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgIChwYXJzZUludChiLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSkgLVxuICAgICAgICAgIChwYXJzZUludChhLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSlcbiAgICAgICksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=