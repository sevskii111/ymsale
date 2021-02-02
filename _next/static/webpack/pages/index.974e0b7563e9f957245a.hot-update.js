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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
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
    setMinProductPrice(Math.min(filtredProducts.map(function (p) {
      return p.price;
    })));
    setMaxProductPrice(Math.max(filtredProducts.map(function (p) {
      return p.price;
    })));
  }, [selectedCode, selectedCategory, selectedSubCategory, search]);
  var columns = [{
    name: "Изображение",
    selector: "image",
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
  var categories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(products.filter(function (item) {
    return selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase();
  }).reduce(function (prev, curr) {
    return prev.add(curr.category);
  }, new Set())).sort(function (a, b) {
    return a === "Товары для взрослых" ? 1 : b === "Товары для взрослых" ? -1 : a.localeCompare(b);
  })));
  var subCategories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(products.filter(function (item) {
    return (selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase()) && showSubcategoriesFor === item.category;
  }).reduce(function (prev, curr) {
    return prev.add(curr.subcategory);
  }, new Set())).sort()));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "min-vh-100 d-flex flex-column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
      className: "bg-warning mb-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-100 py-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      className: "overflow-auto mb-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        fluid: "md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            className: "mr-2",
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), [["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(codes)).map(function (code) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "h3 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), categories.map(function (category) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "h5 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
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
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 15
          }, this), subCategories.map(function (sub) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
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
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          className: "mt-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_input_range__WEBPACK_IMPORTED_MODULE_7___default.a, {
              maxValue: 20,
              minValue: 0,
              value: 10 // onChange={(value) => this.setState({ value })}

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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
      className: "bg-secondary text-white py-0 w-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        color: "info",
        className: "mb-0",
        children: ["\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430\u043B\u0430\u0436\u0435\u043D\u0430. \u041A\u0440\u043E\u043C\u0435 \u044D\u0442\u043E\u0433\u043E \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \"\u0420\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u044B\u0433\u043E\u0434\u0430\", \u043E\u043D\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0446\u0435\u043D\u043E\u0439 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440 \u043F\u043E \u043C\u0430\u0440\u0435\u043A\u0442\u0443 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 (\u0437\u0430 \u0438\u0434\u0435\u044E \u0441\u043F\u0430\u0441\u0438\u0431\u043E", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/Rustik_Ufa",
          children: "Rustik_Ufa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, this), "), \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvZGVzIiwicHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVncnkiLCJzZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2V0U2VsZWN0ZWRTdWJDYXRlZ29yeSIsInNlbGVjdGVkQ29kZSIsInNldFNlbGVjdGVkQ29kZSIsImRpc3BsYXllZEl0ZW1zIiwic2V0RGlzcGxheWVkSXRlbXMiLCJzaG93U3ViY2F0ZWdvcmllc0ZvciIsInNldFNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2VhcmNoIiwic2V0U2VhcmNoIiwibWluUHJvZHVjdFByaWNlIiwic2V0TWluUHJvZHVjdFByaWNlIiwibWF4UHJvZHVjdFByaWNlIiwic2V0TWF4UHJvZHVjdFByaWNlIiwibWluIiwibWF4IiwicHJpY2VGaWx0ZXIiLCJzZXRQcmljZUZpbHRlciIsInVzZUVmZmVjdCIsImZpbHRyZWRQcm9kdWN0cyIsImZpbHRlciIsIml0ZW0iLCJjb2RlIiwidG9VcHBlckNhc2UiLCJjYXRlZ29yeSIsInN1YmNhdGVnb3J5IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImlzQWR1bHQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTWF0aCIsIm1hcCIsInAiLCJwcmljZSIsImNvbHVtbnMiLCJzZWxlY3RvciIsImNlbGwiLCJyb3ciLCJpbWciLCJjZW50ZXIiLCJncm93IiwiY29tcGFjdCIsInNvcnRhYmxlIiwid3JhcCIsIm9sZF9wcmljZSIsIm1pbldpZHRoIiwiZGVmYXVsdFNvcnRBc2MiLCJyZWFsX2Rpc2NvdW50Iiwic29ydEZ1bmN0aW9uIiwicm93QSIsInJvd0IiLCJwYXJzZUludCIsIm1hdGNoIiwiaWQiLCJjYXRlZ29yaWVzIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhZGQiLCJTZXQiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic3ViQ2F0ZWdvcmllcyIsImNvbmZpcm0iLCJzZXRJdGVtIiwic3ViIiwiZSIsInRhcmdldCIsInZhbHVlIiwicm93c1BlclBhZ2VUZXh0IiwicmFuZ2VTZXBhcmF0b3JUZXh0Iiwibm9Sb3dzUGVyUGFnZSIsInNlbGVjdEFsbFJvd3NJdGVtIiwic2VsZWN0QWxsUm93c0l0ZW1UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRWUsU0FBU0EsSUFBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsS0FBRCxDQURQO0FBQUEsTUFDekNDLGdCQUR5QztBQUFBLE1BQ3ZCQyxrQkFEdUI7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsS0FBRCxDQUZkO0FBQUEsTUFFekNHLG1CQUZ5QztBQUFBLE1BRXBCQyxzQkFGb0I7O0FBQUEsbUJBR1JKLHNEQUFRLENBQUMsS0FBRCxDQUhBO0FBQUEsTUFHekNLLFlBSHlDO0FBQUEsTUFHM0JDLGVBSDJCOztBQUFBLG1CQUlKTixzREFBUSxFQUpKO0FBQUEsTUFJekNPLGNBSnlDO0FBQUEsTUFJekJDLGlCQUp5Qjs7QUFBQSxtQkFLUVIsc0RBQVEsQ0FBQyxJQUFELENBTGhCO0FBQUEsTUFLekNTLG9CQUx5QztBQUFBLE1BS25CQyx1QkFMbUI7O0FBQUEsbUJBTXBCVixzREFBUSxDQUFDLEVBQUQsQ0FOWTtBQUFBLE1BTXpDVyxNQU55QztBQUFBLE1BTWpDQyxTQU5pQzs7QUFBQSxtQkFPRlosc0RBQVEsQ0FBQyxDQUFELENBUE47QUFBQSxNQU96Q2EsZUFQeUM7QUFBQSxNQU94QkMsa0JBUHdCOztBQUFBLG1CQVFGZCxzREFBUSxDQUFDLENBQUQsQ0FSTjtBQUFBLE1BUXpDZSxlQVJ5QztBQUFBLE1BUXhCQyxrQkFSd0I7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O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBKRDs7R0E5U3VCbkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NzRlMGI3NTYzZTlmOTU3MjQ1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQWxlcnQsIEJhZGdlLCBCdXR0b24sIENvbCwgQ29udGFpbmVyLCBJbnB1dCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY2F0ZWdvcmllc0hpZXJhcmh5IGZyb20gXCIuLi9jYXRlZ29yaWVzX2hpZXJhcmNoeS5qc29uXCI7XG5pbXBvcnQgeyBZTUluaXRpYWxpemVyIH0gZnJvbSBcInJlYWN0LXlhbmRleC1tZXRyaWthXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgSW5wdXRSYW5nZSBmcm9tIFwicmVhY3QtaW5wdXQtcmFuZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGNvZGVzLCBwcm9kdWN0cyB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVncnldID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtzZWxlY3RlZFN1YkNhdGVnb3J5LCBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5XSA9IHVzZVN0YXRlKFwi0JLRgdC1XCIpO1xuICBjb25zdCBbc2VsZWN0ZWRDb2RlLCBzZXRTZWxlY3RlZENvZGVdID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtkaXNwbGF5ZWRJdGVtcywgc2V0RGlzcGxheWVkSXRlbXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Nob3dTdWJjYXRlZ29yaWVzRm9yLCBzZXRTaG93U3ViY2F0ZWdvcmllc0Zvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWluUHJvZHVjdFByaWNlLCBzZXRNaW5Qcm9kdWN0UHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttYXhQcm9kdWN0UHJpY2UsIHNldE1heFByb2R1Y3RQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3ByaWNlRmlsdGVyLCBzZXRQcmljZUZpbHRlcl0gPSB1c2VTdGF0ZSh7IG1pbjogMiwgbWF4OiAxMCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRyZWRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PlxuICAgICAgICAoc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5KSAmJlxuICAgICAgICAoc2VsZWN0ZWRTdWJDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgIGl0ZW0uc3ViY2F0ZWdvcnkgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkpICYmXG4gICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMSAmJlxuICAgICAgICAoIWl0ZW0uaXNBZHVsdCB8fFxuICAgICAgICAgIChzZWxlY3RlZENhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiICYmXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgPT09IFwidHJ1ZVwiKSlcbiAgICApO1xuICAgIHNldERpc3BsYXllZEl0ZW1zKGZpbHRyZWRQcm9kdWN0cyk7XG4gICAgc2V0TWluUHJvZHVjdFByaWNlKE1hdGgubWluKGZpbHRyZWRQcm9kdWN0cy5tYXAoKHApID0+IHAucHJpY2UpKSk7XG4gICAgc2V0TWF4UHJvZHVjdFByaWNlKE1hdGgubWF4KGZpbHRyZWRQcm9kdWN0cy5tYXAoKHApID0+IHAucHJpY2UpKSk7XG4gIH0sIFtzZWxlY3RlZENvZGUsIHNlbGVjdGVkQ2F0ZWdvcnksIHNlbGVjdGVkU3ViQ2F0ZWdvcnksIHNlYXJjaF0pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCLQmNC30L7QsdGA0LDQttC10L3QuNC1XCIsXG4gICAgICBzZWxlY3RvcjogXCJpbWFnZVwiLFxuICAgICAgY2VsbDogKHJvdykgPT4gKFxuICAgICAgICA8aW1nIHNyYz17cm93LmltZ30gd2lkdGg9XCI1MFwiIGhlaWdodD1cIjUwXCIgYWx0PXtyb3cubmFtZX0gLz5cbiAgICAgICksXG4gICAgICBjZW50ZXI6IHRydWUsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCd0LDQt9Cy0LDQvdC40LVcIixcbiAgICAgIHNlbGVjdG9yOiBcIm5hbWVcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZ3JvdzogXCIyXCIsXG4gICAgICB3cmFwOiB0cnVlLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KHRgtCw0YDQsNGPINGG0LXQvdCwXCIsXG4gICAgICBzZWxlY3RvcjogXCJvbGRfcHJpY2VcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5vbGRfcHJpY2V94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0KbQtdC90LAg0YHQviDRgdC60LjQtNC60L7QuVwiLFxuICAgICAgc2VsZWN0b3I6IFwicHJpY2VcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5wcmljZX3igr08L3NwYW4+LFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQoNC10LDQu9GM0L3QsNGPINCy0YvQs9C+0LTQsFwiLFxuICAgICAgc2VsZWN0b3I6IFwicmVhbF9kaXNjb3VudFwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBkZWZhdWx0U29ydEFzYzogZmFsc2UsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LnJlYWxfZGlzY291bnR94oK9PC9zcGFuPixcbiAgICAgIHNvcnRGdW5jdGlvbjogKHJvd0EsIHJvd0IpID0+XG4gICAgICAgIChwYXJzZUludChyb3dBLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSkgLVxuICAgICAgICAocGFyc2VJbnQocm93Qi5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQn9GA0L7QvNC+0LrQvtC0XCIsXG4gICAgICBzZWxlY3RvcjogXCJjb2RlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cuY29kZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj4sXG4gICAgICBzb3J0RnVuY3Rpb246IChyb3dBLCByb3dCKSA9PlxuICAgICAgICBwYXJzZUludCgocm93QS5jb2RlLm1hdGNoKC9cXGQrLykgfHwgW1wiMFwiXSlbMF0pIC1cbiAgICAgICAgcGFyc2VJbnQoKHJvd0IuY29kZS5tYXRjaCgvXFxkKy8pIHx8IFtcIjBcIl0pWzBdKSxcbiAgICAgIGRlZmF1bHRTb3J0QXNjOiBmYWxzZSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjcwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0JrRg9C/0LjRgtGMXCIsXG4gICAgICBzZWxlY3RvcjogXCJidXlcIixcbiAgICAgIGNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vcG9rdXBraS5tYXJrZXQueWFuZGV4LnJ1L3Byb2R1Y3QvJHtyb3cuaWR9YH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgINCa0YPQv9C40YLRjFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICksXG4gICAgICBtaW5XaWR0aDogXCIxMDBweFwiLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgICBcItCS0YHQtVwiLFxuICAgIC4uLltcbiAgICAgIC4uLnByb2R1Y3RzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICBzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJldi5hZGQoY3Vyci5jYXRlZ29yeSk7XG4gICAgICAgIH0sIG5ldyBTZXQoKSksXG4gICAgXS5zb3J0KChhLCBiKSA9PlxuICAgICAgYSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIlxuICAgICAgICA/IDFcbiAgICAgICAgOiBiID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiXG4gICAgICAgID8gLTFcbiAgICAgICAgOiBhLmxvY2FsZUNvbXBhcmUoYilcbiAgICApLFxuICBdO1xuXG4gIGNvbnN0IHN1YkNhdGVnb3JpZXMgPSBbXG4gICAgXCLQktGB0LVcIixcbiAgICAuLi5bXG4gICAgICAuLi5wcm9kdWN0c1xuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgICAgKHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgICBpdGVtLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gc2VsZWN0ZWRDb2RlLnRvVXBwZXJDYXNlKCkpICYmXG4gICAgICAgICAgICBzaG93U3ViY2F0ZWdvcmllc0ZvciA9PT0gaXRlbS5jYXRlZ29yeVxuICAgICAgICApXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJldi5hZGQoY3Vyci5zdWJjYXRlZ29yeSk7XG4gICAgICAgIH0sIG5ldyBTZXQoKSksXG4gICAgXS5zb3J0KCksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi12aC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCf0YDQvtC80L7QutC+0LTRiyDQtNC70Y8g0K/QvdC00LXQutGBLtCc0LDRgNC60LXRgtCwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cItCa0LDRgtCw0LvQvtCzINCy0YHQtdGFINGC0L7QstCw0YDQvtCyINC00L7RgdGC0YPQv9C90YvRhSDQtNC70Y8g0L/QvtC60YPQv9C60Lgg0L3QsCDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LUg0YHQviDRgdC60LjQtNC60L7QuSDQv9C+INC/0YDQvtC80L7QutC+0LTQsNC8IENVVDQtQ1VUMjUg0LggR08zLUdPMjkuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2FybmluZyBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBweS0yXCI+XG4gICAgICAgICAgICA8aDE+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0byBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ9XCJtZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1yLTJcIj7Qn9GA0L7QvNC+0LrQvtC00Ys6PC9oMz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFtcItCS0YHQtVwiLCAuLi5jb2Rlc10ubWFwKChjb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtci0xXCIga2V5PXtjb2RlfT5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29kZSA9PT0gc2VsZWN0ZWRDb2RlID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29kZShjb2RlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvZGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtci0yXCI+0JrQsNGC0LXQs9C+0YDQuNC4OjwvaDU+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbXItMVwiIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IGNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0FkdWx0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgIT09IFwidHJ1ZVwiKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FkdWx0ID0gY29uZmlybShcItCS0LDQvCDQtdGB0YLRjCAxOCDQu9C10YI/XCIpO1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNBZHVsdFwiLCBpc0FkdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQWR1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDYXRlZ3J5KGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1N1YmNhdGVnb3JpZXNGb3IoXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgPyBudWxsIDogY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeShcItCS0YHQtVwiKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Nob3dTdWJjYXRlZ29yaWVzRm9yICE9PSBudWxsID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTIgbWItMFwiPtCf0L7QtNC60LDRgtC10LPQvtGA0LjQuDo8L3A+XG4gICAgICAgICAgICAgIHtzdWJDYXRlZ29yaWVzLm1hcCgoc3ViKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICBjb2xvcj17c3ViID09PSBzZWxlY3RlZFN1YkNhdGVnb3J5ID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeShzdWIpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMSBtci0xXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c3VifVxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICA8Q29sIG1kPXs0fT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBtZD17NH0+XG4gICAgICAgICAgICAgIDxJbnB1dFJhbmdlXG4gICAgICAgICAgICAgICAgbWF4VmFsdWU9ezIwfVxuICAgICAgICAgICAgICAgIG1pblZhbHVlPXswfVxuICAgICAgICAgICAgICAgIHZhbHVlPXsxMH1cbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8RGF0YVRhYmxlXG4gICAgICAgICAgICBub0hlYWRlcj17dHJ1ZX1cbiAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICBkYXRhPXtkaXNwbGF5ZWRJdGVtc31cbiAgICAgICAgICAgIG5vRGF0YUNvbXBvbmVudD1cItCd0LUg0L3QsNC50LTQtdC90L4g0YLQvtCy0LDRgNC+0LIg0YHQvtC+0YLQstC10YLQstGD0YnQuNC5INC60YDQuNGC0LXRgNC40Y/QvFwiXG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt0cnVlfVxuICAgICAgICAgICAgcGFnaW5hdGlvblJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCA1MCwgMTAwLCA1MDAsIDEwMDBdfVxuICAgICAgICAgICAgcGFnaW5hdGlvbkNvbXBvbmVudE9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgcm93c1BlclBhZ2VUZXh0OiBcItCi0L7QstCw0YDQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtTpcIixcbiAgICAgICAgICAgICAgcmFuZ2VTZXBhcmF0b3JUZXh0OiBcItC40LdcIixcbiAgICAgICAgICAgICAgbm9Sb3dzUGVyUGFnZTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdEFsbFJvd3NJdGVtOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0QWxsUm93c0l0ZW1UZXh0OiBcItCS0YHQtVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMCB3LTEwMFwiPlxuICAgICAgICA8QWxlcnQgY29sb3I9XCJpbmZvXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCS0YvQs9GA0YPQt9C60LAg0YLQvtCy0LDRgNC+0LIg0L3QsNC70LDQttC10L3QsC4g0JrRgNC+0LzQtSDRjdGC0L7Qs9C+INCyINGC0LDQsdC70LjRhtGDINC00L7QsdCw0LLQu9C10L3QsCDQutC+0LvQvtC90LrQsFxuICAgICAgICAgIFwi0KDQtdCw0LvRjNC90LDRjyDQstGL0LPQvtC00LBcIiwg0L7QvdCwINC/0L7QutCw0LfRi9Cy0LDQtdGCINGA0LDQt9C90LjRhtGDINGBINC80LjQvdC40LzQsNC70YzQvdC+0Lkg0YbQtdC90L7QuSDQvdCwINGC0L7QstCw0YBcbiAgICAgICAgICDQv9C+INC80LDRgNC10LrRgtGDINCyINCc0L7RgdC60LLQtSAo0LfQsCDQuNC00LXRjiDRgdC/0LDRgdC40LHQvntcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGVwcGVyLnJ1L3Byb2ZpbGUvUnVzdGlrX1VmYVwiPlJ1c3Rpa19VZmE8L2E+KSxcbiAgICAgICAgICDQv9C+0LrQsCDRh9GC0L4g0LIg0Y3RgtC+0Lkg0LrQvtC70L7QvdC60LUg0LLQvtC30LzQvtC20L3RiyDQvtGI0LjQsdC60Lgg0Lgg0L/RgNC+0L/Rg9GB0LrQuC4g0JLQvtC/0YDQvtGB0YssINGB0L7QstC10YLRiyDQuFxuICAgICAgICAgINC30LDQvNC10YfQsNC90LjRjyDQv9C+INGB0LDQudGC0YMsINC80L7QttC10YLQtSDQvdCw0L/QuNGB0LDRgtGMINC80L3QtSDQsntcIiBcIn1cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnBlcHBlci5ydS9wcm9maWxlL3NldnNraWlcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICDQu9C40YfQutGDINC90LAgUGVwcGVyXG4gICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICDQuNC70Lgg0L3QsCDQv9C+0YfRgtGDe1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86c2V2c2tpaTExMUBnbWFpbC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAgc2V2c2tpaTExMUBnbWFpbC5jb21cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgICB7LyogPEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCa0LDRgNGC0LjQvdC60Lgg0L3QtdC60L7RgtC+0YDRi9GFINGC0L7QstCw0YDQvtCyINC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7RgiDRgtC+0LLQsNGA0L7QsiDRgSDQv9C+0YXQvtC20LjQvNC4XG4gICAgICAgICAg0L3QsNC30LLQsNC90LjRj9C80LguINCf0YDQvtCx0LvQtdC80LAg0LfQsNGC0YDQsNCz0LjQstCw0LXRgiDRgtC+0LvRjNC60L4g0YHQsNC80Lgg0LrQsNGA0YLQuNC90LrQuCDQuCDRjyDQv9C+0YHRgtCw0YDQsNGO0YHRjFxuICAgICAgICAgINC10ZEg0LrQsNC6INC80L7QttC90L4g0YHQutC+0YDQtdC1INC40YHQv9GA0LDQstC40YLRjC5cbiAgICAgICAgPC9BbGVydD4gKi99XG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgINCh0L7Qt9C00LDRgtC10LvRjCDRgdCw0LnRgtCwINC90LUg0LjQvNC10LXRgiDQvtGC0L3QvtGI0LXQvdC40Y8g0Log0LrQvtC80L/QsNC90LjRj9C8INCv0L3QtNC10LrRgSDQuCDQr9C90LTQtdC60YEu0JzQsNGA0LXQutGCXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8WU1Jbml0aWFsaXplciBhY2NvdW50cz17WzcxMjU2NDg0XX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgbGV0IGNvZGVzID0gbmV3IFNldCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiLi9wcm9kdWN0cy5qc29uXCIpKTtcbiAgbGV0IHVuaXF1ZVByb2R1Y3RzID0gW107XG4gIGxldCBhZGRlZFByb2R1Y3RzID0gbmV3IFNldCgpO1xuICBsZXQgYmFkX3ByaWNlcyA9IFtdO1xuXG4gIGZvciAoY29uc3QgcHJvZHVjdCBvZiBwcm9kdWN0cykge1xuICAgIGlmICghYWRkZWRQcm9kdWN0cy5oYXMocHJvZHVjdC5pZCkpIHtcbiAgICAgIGlmICghcHJvZHVjdC5jb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgICAgY29kZXMuYWRkKHByb2R1Y3QuY29kZSk7XG4gICAgICB1bmlxdWVQcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgcmVhbF9kaXNjb3VudDpcbiAgICAgICAgICBwcm9kdWN0Lm1pbl9wcmljZSA8IHByb2R1Y3Qub2xkX3ByaWNlXG4gICAgICAgICAgICA/IHByb2R1Y3QubWluX3ByaWNlIC0gcHJvZHVjdC5wcmljZVxuICAgICAgICAgICAgOiBcIj9cIixcbiAgICAgIH0pO1xuICAgICAgaWYgKHByb2R1Y3QubWluX3ByaWNlID4gcHJvZHVjdC5vbGRfcHJpY2UpIHtcbiAgICAgICAgYmFkX3ByaWNlcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgfVxuICAgICAgYWRkZWRQcm9kdWN0cy5hZGQocHJvZHVjdC5pZCk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGAke2JhZF9wcmljZXMubGVuZ3RofSBwcmljZXMgYXJlIGJhZGApO1xuICBjb25zb2xlLmxvZyhiYWRfcHJpY2VzKTtcbiAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHVuaXF1ZVByb2R1Y3RzKSB7XG4gICAgaWYgKCFwcm9kdWN0LnN1YmNhdGVnb3J5KSB7XG4gICAgICBwcm9kdWN0LnN1YmNhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeTtcbiAgICAgIHByb2R1Y3QuY2F0ZWdvcnkgPSBjYXRlZ29yaWVzSGllcmFyaHlbcHJvZHVjdC5jYXRlZ29yeV07XG4gICAgICBwcm9kdWN0LmlzQWR1bHQgPSBwcm9kdWN0LmNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiO1xuICAgICAgaWYgKCFwcm9kdWN0LmNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZzLndyaXRlRmlsZVN5bmMoXCIuL3Byb2R1Y3RzX2pzb24uanNvblwiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cyksIFwidXRmOFwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb2RlczogWy4uLmNvZGVzXS5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAoYi5tYXRjaCgvXFxkKy8pID8gYi5tYXRjaCgvXFxkKy8pWzBdIDogMCkgLVxuICAgICAgICAgIChhLm1hdGNoKC9cXGQrLykgPyBhLm1hdGNoKC9cXGQrLylbMF0gOiAwKVxuICAgICAgKSxcbiAgICAgIHByb2R1Y3RzOiB1bmlxdWVQcm9kdWN0cy5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAocGFyc2VJbnQoYi5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpIC1cbiAgICAgICAgICAocGFyc2VJbnQoYS5yZWFsX2Rpc2NvdW50KSArIDAuMSB8fCAwLjUpXG4gICAgICApLFxuICAgIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9