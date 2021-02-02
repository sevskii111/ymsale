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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      maxProductPrice = _useState8[0],
      setMaxProductPrice = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    min: 2,
    max: 10
  }),
      priceFilter = _useState9[0],
      setPriceFilter = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var filtredProducts = products.filter(function (item) {
      return (selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase()) && (selectedCategory === "Все" || item.category === selectedCategory) && (selectedSubCategory === "Все" || item.subcategory === selectedSubCategory) && item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 && (!item.isAdult || selectedCategory === "Товары для взрослых" && localStorage.getItem("isAdult") === "true");
    });
    setDisplayedItems(filtredProducts);
    setMinProductPrice(Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(filtredProducts.map(function (p) {
      return p.price;
    }))));
    setMaxProductPrice(Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(filtredProducts.map(function (p) {
      return p.price;
    }))));
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
        lineNumber: 44,
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
        lineNumber: 62,
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
        lineNumber: 71,
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
        lineNumber: 81,
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
        lineNumber: 93,
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
        lineNumber: 106,
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
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO29."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
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
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
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
            lineNumber: 178,
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
                lineNumber: 182,
                columnNumber: 19
              }, _this)
            }, code, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
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
                lineNumber: 197,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
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
              lineNumber: 234,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
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
              lineNumber: 247,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
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
              lineNumber: 254,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
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
          lineNumber: 262,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
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
          lineNumber: 284,
          columnNumber: 11
        }, this), "), \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "py-2",
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 5
  }, this);
}

_s(Home, "5lMA/Wp/VqYjRM0BD8+1o2TYA4U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvZGVzIiwicHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVncnkiLCJzZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2V0U2VsZWN0ZWRTdWJDYXRlZ29yeSIsInNlbGVjdGVkQ29kZSIsInNldFNlbGVjdGVkQ29kZSIsImRpc3BsYXllZEl0ZW1zIiwic2V0RGlzcGxheWVkSXRlbXMiLCJzaG93U3ViY2F0ZWdvcmllc0ZvciIsInNldFNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2VhcmNoIiwic2V0U2VhcmNoIiwibWluUHJvZHVjdFByaWNlIiwic2V0TWluUHJvZHVjdFByaWNlIiwibWF4UHJvZHVjdFByaWNlIiwic2V0TWF4UHJvZHVjdFByaWNlIiwibWluIiwibWF4IiwicHJpY2VGaWx0ZXIiLCJzZXRQcmljZUZpbHRlciIsInVzZUVmZmVjdCIsImZpbHRyZWRQcm9kdWN0cyIsImZpbHRlciIsIml0ZW0iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjYXRlZ29yeSIsInN1YmNhdGVnb3J5IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImlzQWR1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTWF0aCIsIm1hcCIsInAiLCJwcmljZSIsImNvbHVtbnMiLCJzZWxlY3RvciIsImNlbGwiLCJyb3ciLCJpbWciLCJjZW50ZXIiLCJncm93IiwiY29tcGFjdCIsInNvcnRhYmxlIiwid3JhcCIsIm9sZF9wcmljZSIsIm1pbldpZHRoIiwiZGVmYXVsdFNvcnRBc2MiLCJyZWFsX2Rpc2NvdW50Iiwic29ydEZ1bmN0aW9uIiwicm93QSIsInJvd0IiLCJwYXJzZUludCIsIm1hdGNoIiwiaWQiLCJjYXRlZ29yaWVzIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhZGQiLCJTZXQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic3ViQ2F0ZWdvcmllcyIsImNvbmZpcm0iLCJzZXRJdGVtIiwic3ViIiwiZSIsInRhcmdldCIsInZhbHVlIiwicm93c1BlclBhZ2VUZXh0IiwicmFuZ2VTZXBhcmF0b3JUZXh0Iiwibm9Sb3dzUGVyUGFnZSIsInNlbGVjdEFsbFJvd3NJdGVtIiwic2VsZWN0QWxsUm93c0l0ZW1UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRWUsU0FBU0EsSUFBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDekNDLGdCQUR5QztBQUFBLE1BQ3ZCQyxrQkFEdUI7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsS0FBRCxDQUZkO0FBQUEsTUFFekNHLG1CQUZ5QztBQUFBLE1BRXBCQyxzQkFGb0I7O0FBQUEsbUJBR1JKLHNEQUFRLENBQUMsS0FBRCxDQUhBO0FBQUEsTUFHekNLLFlBSHlDO0FBQUEsTUFHM0JDLGVBSDJCOztBQUFBLG1CQUlKTixzREFBUSxFQUpKO0FBQUEsTUFJekNPLGNBSnlDO0FBQUEsTUFJekJDLGlCQUp5Qjs7QUFBQSxtQkFLUVIsc0RBQVEsQ0FBQyxJQUFELENBTGhCO0FBQUEsTUFLekNTLG9CQUx5QztBQUFBLE1BS25CQyx1QkFMbUI7O0FBQUEsbUJBTXBCVixzREFBUSxDQUFDLEVBQUQsQ0FOWTtBQUFBLE1BTXpDVyxNQU55QztBQUFBLE1BTWpDQyxTQU5pQzs7QUFBQSxtQkFPRlosc0RBQVEsQ0FBQyxDQUFELENBUE47QUFBQSxNQU96Q2EsZUFQeUM7QUFBQSxNQU94QkMsa0JBUHdCOztBQUFBLG1CQVFGZCxzREFBUSxDQUFDLENBQUQsQ0FSTjtBQUFBLE1BUXpDZSxlQVJ5QztBQUFBLE1BUXhCQyxrQkFSd0I7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LGNBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhIRixlQXNKRSxxRUFBQyxrRUFBRDtBQUFlLGNBQVEsRUFBRSxDQUFDLFFBQUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBKRDs7R0E5U3VCbkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzRjMjY2ZjQ5NGU1MzI0Zjg5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQWxlcnQsIEJhZGdlLCBCdXR0b24sIENvbCwgQ29udGFpbmVyLCBJbnB1dCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY2F0ZWdvcmllc0hpZXJhcmh5IGZyb20gXCIuLi9jYXRlZ29yaWVzX2hpZXJhcmNoeS5qc29uXCI7XG5pbXBvcnQgeyBZTUluaXRpYWxpemVyIH0gZnJvbSBcInJlYWN0LXlhbmRleC1tZXRyaWthXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgSW5wdXRSYW5nZSBmcm9tIFwicmVhY3QtaW5wdXQtcmFuZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGNvZGVzLCBwcm9kdWN0cyB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVncnldID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFN1YkNhdGVnb3J5LCBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5XSA9IHVzZVN0YXRlKFwi0JLRgdC1XCIpO1xuICBjb25zdCBbc2VsZWN0ZWRDb2RlLCBzZXRTZWxlY3RlZENvZGVdID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtkaXNwbGF5ZWRJdGVtcywgc2V0RGlzcGxheWVkSXRlbXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Nob3dTdWJjYXRlZ29yaWVzRm9yLCBzZXRTaG93U3ViY2F0ZWdvcmllc0Zvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWluUHJvZHVjdFByaWNlLCBzZXRNaW5Qcm9kdWN0UHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttYXhQcm9kdWN0UHJpY2UsIHNldE1heFByb2R1Y3RQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ByaWNlRmlsdGVyLCBzZXRQcmljZUZpbHRlcl0gPSB1c2VTdGF0ZSh7IG1pbjogMiwgbWF4OiAxMCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICAoc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5KSAmJlxuICAgICAgICAoc2VsZWN0ZWRTdWJDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgIGl0ZW0uc3ViY2F0ZWdvcnkgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkpICYmXG4gICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMSAmJlxuICAgICAgICAoIWl0ZW0uaXNBZHVsdCB8fFxuICAgICAgICAgIChzZWxlY3RlZENhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiICYmXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgPT09IFwidHJ1ZVwiKSlcbiAgICApO1xuICAgIHNldERpc3BsYXllZEl0ZW1zKGZpbHRyZWRQcm9kdWN0cyk7XG4gICAgc2V0TWluUHJvZHVjdFByaWNlKE1hdGgubWluKC4uLmZpbHRyZWRQcm9kdWN0cy5tYXAoKHApID0+IHAucHJpY2UpKSk7XG4gICAgc2V0TWF4UHJvZHVjdFByaWNlKE1hdGgubWF4KC4uLmZpbHRyZWRQcm9kdWN0cy5tYXAoKHApID0+IHAucHJpY2UpKSk7XG4gIH0sIFtzZWxlY3RlZENvZGUsIHNlbGVjdGVkQ2F0ZWdvcnksIHNlbGVjdGVkU3ViQ2F0ZWdvcnksIHNlYXJjaF0pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCLQmNC30L7QsdGA0LDQttC10L3QuNC1XCIsXG4gICAgICBzZWxlY3RvcjogXCJpbWFnZVwiLFxuICAgICAgY2VsbDogKHJvdykgPT4gKFxuICAgICAgICA8aW1nIHNyYz17cm93LmltZ30gd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgYWx0PXtyb3cubmFtZX0gLz5cbiAgICAgICksXG4gICAgICBjZW50ZXI6IHRydWUsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCd0LDQt9Cy0LDQvdC40LVcIixcbiAgICAgIHNlbGVjdG9yOiBcIm5hbWVcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZ3JvdzogXCIyXCIsXG4gICAgICB3cmFwOiB0cnVlLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KHRgtCw0YDQsNGPINGG0LXQvdCwXCIsXG4gICAgICBzZWxlY3RvcjogXCJvbGRfcHJpY2VcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5vbGRfcHJpY2V94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KbQtdC90LAg0YHQviDRgdC60LjQtNC60L7QuVwiLFxuICAgICAgc2VsZWN0b3I6IFwicHJpY2VcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5wcmljZX3igr08L3NwYW4+LFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQoNC10LDQu9GM0L3QsNGPINCy0YvQs9C+0LTQsFwiLFxuICAgICAgc2VsZWN0b3I6IFwicmVhbF9kaXNjb3VudFwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBkZWZhdWx0U29ydEFzYzogZmFsc2UsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LnJlYWxfZGlzY291bnR94oK9PC9zcGFuPixcbiAgICAgIHNvcnRGdW5jdGlvbjogKHJvd0EsIHJvd0IpID0+XG4gICAgICAgIChwYXJzZUludChyb3dBLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSkgLVxuICAgICAgICAocGFyc2VJbnQocm93Qi5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQn9GA0L7QvNC+0LrQvtC0XCIsXG4gICAgICBzZWxlY3RvcjogXCJjb2RlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cuY29kZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj4sXG4gICAgICBzb3J0RnVuY3Rpb246IChyb3dBLCByb3dCKSA9PlxuICAgICAgICBwYXJzZUludCgocm93QS5jb2RlLm1hdGNoKC9cXGQrLykgfHwgW1wiMFwiXSlbMF0pIC1cbiAgICAgICAgcGFyc2VJbnQoKHJvd0IuY29kZS5tYXRjaCgvXFxkKy8pIHx8IFtcIjBcIl0pWzBdKSxcbiAgICAgIGRlZmF1bHRTb3J0QXNjOiBmYWxzZSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjcwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0JrRg9C/0LjRgtGMXCIsXG4gICAgICBzZWxlY3RvcjogXCJidXlcIixcbiAgICAgIGNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vcG9rdXBraS5tYXJrZXQueWFuZGV4LnJ1L3Byb2R1Y3QvJHtyb3cuaWR9YH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgINCa0YPQv9C40YLRjFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICksXG4gICAgICBtaW5XaWR0aDogXCIxMDBweFwiLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgICBcItCS0YHQtVwiLFxuICAgIC4uLltcbiAgICAgIC4uLnByb2R1Y3RzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICBzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJldi5hZGQoY3Vyci5jYXRlZ29yeSk7XG4gICAgICAgIH0sIG5ldyBTZXQoKSksXG4gICAgXS5zb3J0KChhLCBiKSA9PlxuICAgICAgYSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICA/IDFcbiAgICAgICAgOiBiID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiXG4gICAgICAgID8gLTFcbiAgICAgICAgOiBhLmxvY2FsZUNvbXBhcmUoYilcbiAgICApLFxuICBdO1xuXG4gIGNvbnN0IHN1YkNhdGVnb3JpZXMgPSBbXG4gICAgXCLQktGB0LVcIixcbiAgICAuLi5bXG4gICAgICAuLi5wcm9kdWN0c1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgICAgKHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgICBpdGVtLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gc2VsZWN0ZWRDb2RlLnRvVXBwZXJDYXNlKCkpICYmXG4gICAgICAgICAgICBzaG93U3ViY2F0ZWdvcmllc0ZvciA9PT0gaXRlbS5jYXRlZ29yeVxuICAgICAgICApXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJldi5hZGQoY3Vyci5zdWJjYXRlZ29yeSk7XG4gICAgICAgIH0sIG5ldyBTZXQoKSksXG4gICAgXS5zb3J0KCksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi12aC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCf0YDQvtC80L7QutC+0LTRiyDQtNC70Y8g0K/QvdC00LXQutGBLtCc0LDRgNC60LXRgtCwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cItCa0LDRgtCw0LvQvtCzINCy0YHQtdGFINGC0L7QstCw0YDQvtCyINC00L7RgdGC0YPQv9C90YvRhSDQtNC70Y8g0L/QvtC60YPQv9C60Lgg0L3QsCDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LUg0YHQviDRgdC60LjQtNC60L7QuSDQv9C+INC/0YDQvtC80L7QutC+0LTQsNC8IENVVDQtQ1VUMjUg0LggR08zLUdPMjkuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2FybmluZyBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBweS0yXCI+XG4gICAgICAgICAgICA8aDE+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ9XCJtZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1yLTJcIj7Qn9GA0L7QvNC+0LrQvtC00Ys6PC9oMz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFtcItCS0YHQtVwiLCAuLi5jb2Rlc10ubWFwKChjb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtci0xXCIga2V5PXtjb2RlfT5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29kZSA9PT0gc2VsZWN0ZWRDb2RlID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29kZShjb2RlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvZGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtci0yXCI+0JrQsNGC0LXQs9C+0YDQuNC4OjwvaDU+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbXItMVwiIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkdWx0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgIT09IFwidHJ1ZVwiKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FkdWx0ID0gY29uZmlybShcItCS0LDQvCDQtdGB0YLRjCAxOCDQu9C10YI/XCIpO1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNBZHVsdFwiLCBpc0FkdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQWR1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDYXRlZ3J5KGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1N1YmNhdGVnb3JpZXNGb3IoXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgPyBudWxsIDogY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeShcItCS0YHQtVwiKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Nob3dTdWJjYXRlZ29yaWVzRm9yICE9PSBudWxsID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTIgbWItMFwiPtCf0L7QtNC60LDRgtC10LPQvtGA0LjQuDo8L3A+XG4gICAgICAgICAgICAgIHtzdWJDYXRlZ29yaWVzLm1hcCgoc3ViKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICBjb2xvcj17c3ViID09PSBzZWxlY3RlZFN1YkNhdGVnb3J5ID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeShzdWIpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMSBtci0xXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c3VifVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICA8Q29sIG1kPXs0fT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBtZD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dFJhbmdlXG4gICAgICAgICAgICAgICAgbWF4VmFsdWU9e21heFByb2R1Y3RQcmljZX1cbiAgICAgICAgICAgICAgICBtaW5WYWx1ZT17bWluUHJvZHVjdFByaWNlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZUZpbHRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRQcmljZUZpbHRlcih7IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPERhdGFUYWJsZVxuICAgICAgICAgICAgbm9IZWFkZXI9e3RydWV9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgZGF0YT17ZGlzcGxheWVkSXRlbXN9XG4gICAgICAgICAgICBub0RhdGFDb21wb25lbnQ9XCLQndC1INC90LDQudC00LXQvdC+INGC0L7QstCw0YDQvtCyINGB0L7QvtGC0LLQtdGC0LLRg9GJ0LjQuSDQutGA0LjRgtC10YDQuNGP0LxcIlxuICAgICAgICAgICAgcGFnaW5hdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgIHBhZ2luYXRpb25Sb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgNTAsIDEwMCwgNTAwLCAxMDAwXX1cbiAgICAgICAgICAgIHBhZ2luYXRpb25Db21wb25lbnRPcHRpb25zPXt7XG4gICAgICAgICAgICAgIHJvd3NQZXJQYWdlVGV4dDogXCLQotC+0LLQsNGA0L7QsiDQvdCwINGB0YLRgNCw0L3QuNGG0LU6XCIsXG4gICAgICAgICAgICAgIHJhbmdlU2VwYXJhdG9yVGV4dDogXCLQuNC3XCIsXG4gICAgICAgICAgICAgIG5vUm93c1BlclBhZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWxlY3RBbGxSb3dzSXRlbTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdEFsbFJvd3NJdGVtVGV4dDogXCLQktGB0LVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSB0ZXh0LXdoaXRlIHB5LTAgdy0xMDBcIj5cbiAgICAgICAgPEFsZXJ0IGNvbG9yPVwiaW5mb1wiIGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICDQktGL0LPRgNGD0LfQutCwINGC0L7QstCw0YDQvtCyINC90LDQu9Cw0LbQtdC90LAuINCa0YDQvtC80LUg0Y3RgtC+0LPQviDQsiDRgtCw0LHQu9C40YbRgyDQtNC+0LHQsNCy0LvQtdC90LAg0LrQvtC70L7QvdC60LBcbiAgICAgICAgICBcItCg0LXQsNC70YzQvdCw0Y8g0LLRi9Cz0L7QtNCwXCIsINC+0L3QsCDQv9C+0LrQsNC30YvQstCw0LXRgiDRgNCw0LfQvdC40YbRgyDRgSDQvNC40L3QuNC80LDQu9GM0L3QvtC5INGG0LXQvdC+0Lkg0L3QsCDRgtC+0LLQsNGAXG4gICAgICAgICAg0L/QviDQvNCw0YDQtdC60YLRgyDQsiDQnNC+0YHQutCy0LUgKNC30LAg0LjQtNC10Y4g0YHQv9Cw0YHQuNCx0L57XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBlcHBlci5ydS9wcm9maWxlL1J1c3Rpa19VZmFcIj5SdXN0aWtfVWZhPC9hPiksXG4gICAgICAgICAg0L/QvtC60LAg0YfRgtC+INCyINGN0YLQvtC5INC60L7Qu9C+0L3QutC1INCy0L7Qt9C80L7QttC90Ysg0L7RiNC40LHQutC4INC4INC/0YDQvtC/0YPRgdC60LguINCS0L7Qv9GA0L7RgdGLLCDRgdC+0LLQtdGC0Ysg0LhcbiAgICAgICAgICDQt9Cw0LzQtdGH0LDQvdC40Y8g0L/QviDRgdCw0LnRgtGDLCDQvNC+0LbQtdGC0LUg0L3QsNC/0LjRgdCw0YLRjCDQvNC90LUg0LJ7XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5wZXBwZXIucnUvcHJvZmlsZS9zZXZza2lpXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg0LvQuNGH0LrRgyDQvdCwIFBlcHBlclxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAg0LjQu9C4INC90LAg0L/QvtGH0YLRg3tcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnNldnNraWkxMTFAZ21haWwuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgIHNldnNraWkxMTFAZ21haWwuY29tXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICAgey8qIDxBbGVydCBjb2xvcj1cImRhbmdlclwiIGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICDQmtCw0YDRgtC40L3QutC4INC90LXQutC+0YLQvtGA0YvRhSDRgtC+0LLQsNGA0L7QsiDQvNC+0LPRg9GCINCx0YvRgtGMINC+0YIg0YLQvtCy0LDRgNC+0LIg0YEg0L/QvtGF0L7QttC40LzQuFxuICAgICAgICAgINC90LDQt9Cy0LDQvdC40Y/QvNC4LiDQn9GA0L7QsdC70LXQvNCwINC30LDRgtGA0LDQs9C40LLQsNC10YIg0YLQvtC70YzQutC+INGB0LDQvNC4INC60LDRgNGC0LjQvdC60Lgg0Lgg0Y8g0L/QvtGB0YLQsNGA0LDRjtGB0YxcbiAgICAgICAgICDQtdGRINC60LDQuiDQvNC+0LbQvdC+INGB0LrQvtGA0LXQtSDQuNGB0L/RgNCw0LLQuNGC0YwuXG4gICAgICAgIDwvQWxlcnQ+ICovfVxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInB5LTJcIj5cbiAgICAgICAgICDQodC+0LfQtNCw0YLQtdC70Ywg0YHQsNC50YLQsCDQvdC1INC40LzQtdC10YIg0L7RgtC90L7RiNC10L3QuNGPINC6INC60L7QvNC/0LDQvdC40Y/QvCDQr9C90LTQtdC60YEg0Lgg0K/QvdC00LXQutGBLtCc0LDRgNC10LrRglxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPFlNSW5pdGlhbGl6ZXIgYWNjb3VudHM9e1s3MTI1NjQ4NF19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGxldCBjb2RlcyA9IG5ldyBTZXQoKTtcbiAgY29uc3QgcHJvZHVjdHMgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcIi4vcHJvZHVjdHMuanNvblwiKSk7XG4gIGxldCB1bmlxdWVQcm9kdWN0cyA9IFtdO1xuICBsZXQgYWRkZWRQcm9kdWN0cyA9IG5ldyBTZXQoKTtcbiAgbGV0IGJhZF9wcmljZXMgPSBbXTtcblxuICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgcHJvZHVjdHMpIHtcbiAgICBpZiAoIWFkZGVkUHJvZHVjdHMuaGFzKHByb2R1Y3QuaWQpKSB7XG4gICAgICBpZiAoIXByb2R1Y3QuY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcbiAgICAgIH1cbiAgICAgIGNvZGVzLmFkZChwcm9kdWN0LmNvZGUpO1xuICAgICAgdW5pcXVlUHJvZHVjdHMucHVzaCh7XG4gICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgIHJlYWxfZGlzY291bnQ6XG4gICAgICAgICAgcHJvZHVjdC5taW5fcHJpY2UgPCBwcm9kdWN0Lm9sZF9wcmljZVxuICAgICAgICAgICAgPyBwcm9kdWN0Lm1pbl9wcmljZSAtIHByb2R1Y3QucHJpY2VcbiAgICAgICAgICAgIDogXCI/XCIsXG4gICAgICB9KTtcbiAgICAgIGlmIChwcm9kdWN0Lm1pbl9wcmljZSA+IHByb2R1Y3Qub2xkX3ByaWNlKSB7XG4gICAgICAgIGJhZF9wcmljZXMucHVzaChwcm9kdWN0KTtcbiAgICAgIH1cbiAgICAgIGFkZGVkUHJvZHVjdHMuYWRkKHByb2R1Y3QuaWQpO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgJHtiYWRfcHJpY2VzLmxlbmd0aH0gcHJpY2VzIGFyZSBiYWRgKTtcbiAgY29uc29sZS5sb2coYmFkX3ByaWNlcyk7XG4gIGZvciAoY29uc3QgcHJvZHVjdCBvZiB1bmlxdWVQcm9kdWN0cykge1xuICAgIGlmICghcHJvZHVjdC5zdWJjYXRlZ29yeSkge1xuICAgICAgcHJvZHVjdC5zdWJjYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcnk7XG4gICAgICBwcm9kdWN0LmNhdGVnb3J5ID0gY2F0ZWdvcmllc0hpZXJhcmh5W3Byb2R1Y3QuY2F0ZWdvcnldO1xuICAgICAgcHJvZHVjdC5pc0FkdWx0ID0gcHJvZHVjdC5jYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIjtcbiAgICAgIGlmICghcHJvZHVjdC5jYXRlZ29yeSkge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmcy53cml0ZUZpbGVTeW5jKFwiLi9wcm9kdWN0c19qc29uLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpLCBcInV0ZjhcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29kZXM6IFsuLi5jb2Rlc10uc29ydChcbiAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgKGIubWF0Y2goL1xcZCsvKSA/IGIubWF0Y2goL1xcZCsvKVswXSA6IDApIC1cbiAgICAgICAgICAoYS5tYXRjaCgvXFxkKy8pID8gYS5tYXRjaCgvXFxkKy8pWzBdIDogMClcbiAgICAgICksXG4gICAgICBwcm9kdWN0czogdW5pcXVlUHJvZHVjdHMuc29ydChcbiAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgKHBhcnNlSW50KGIucmVhbF9kaXNjb3VudCkgKyAwLjEgfHwgMC41KSAtXG4gICAgICAgICAgKHBhcnNlSW50KGEucmVhbF9kaXNjb3VudCkgKyAwLjEgfHwgMC41KVxuICAgICAgKSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==