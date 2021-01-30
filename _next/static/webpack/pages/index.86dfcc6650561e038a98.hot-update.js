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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setDisplayedItems(products.filter(function (item) {
      return (selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase()) && (selectedCategory === "Все" || item.category === selectedCategory) && (selectedSubCategory === "Все" || item.subcategory === selectedSubCategory) && item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    }));
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
        lineNumber: 36,
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
        lineNumber: 54,
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
        lineNumber: 63,
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
    sortFunction: function sortFunction(rowA, rowB) {
      return rowA.real_discount === "?" ? -1 : rowA.real_discount - rowB.real_discount;
    },
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: [row.real_discount, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 22
      }, _this);
    },
    grow: "0",
    compact: true,
    minWidth: "60px"
  }, {
    name: "Промокод",
    selector: "code",
    sortable: true,
    sortFunction: function sortFunction(rowA, rowB) {
      return parseInt(rowA.code.match(/\d+/)[0]) - parseInt(rowB.code.match(/\d+/)[0]);
    },
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: row.code.toUpperCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 22
      }, _this);
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
        lineNumber: 98,
        columnNumber: 9
      }, _this);
    },
    minWidth: "100px",
    grow: "0",
    compact: true
  }];
  var categories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(products.filter(function (item) {
    return selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase();
  }).reduce(function (prev, curr) {
    return prev.add(curr.category);
  }, new Set())));
  var subCategories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(products.filter(function (item) {
    return (selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase()) && showSubcategoriesFor === item.category;
  }).reduce(function (prev, curr) {
    return prev.add(curr.subcategory);
  }, new Set())));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "min-vh-100",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: "\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO29."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
      className: "bg-warning mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-100 py-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        color: "info",
        className: "mb-0",
        children: ["\u041A\u043E\u0434\u044B GIFT \u0432\u043D\u0435\u0437\u0430\u043F\u043D\u043E \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u0438\u043B\u0438 \u0441\u0432\u043E\u044E \u0440\u0430\u0431\u043E\u0442\u0443. \u0421\u043F\u043E\u0441\u043E\u0431 \u0432\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u0441\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u043F\u043E \u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO34 \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D, \u043E\u0434\u043D\u0430\u043A\u043E \u044F \u0441\u043C\u043E\u0433\u0443 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0438\u0445 \"\u043F\u0430\u0447\u043A\u0430\u043C\u0438\". \u041E\u0434\u0438\u043D \u0446\u0438\u043A\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0446\u0435\u043D \u0438 \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 ~24 \u0447\u0430\u0441\u0430. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      className: "overflow-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            className: "mr-2",
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
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
                lineNumber: 183,
                columnNumber: 19
              }, _this)
            }, code, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this), categories.map(function (category) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "h5 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
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
                lineNumber: 198,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
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
              lineNumber: 220,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
              placeholder: "\u041F\u043E\u0438\u0441\u043A",
              value: search,
              onChange: function onChange(e) {
                return setSearch(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
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
          lineNumber: 240,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
      className: "bg-secondary text-white py-3 w-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 5
  }, this);
}

_s(Home, "XNEWkbhLdELOliy6ZK6crqPJkOY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvZGVzIiwicHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVncnkiLCJzZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2V0U2VsZWN0ZWRTdWJDYXRlZ29yeSIsInNlbGVjdGVkQ29kZSIsInNldFNlbGVjdGVkQ29kZSIsImRpc3BsYXllZEl0ZW1zIiwic2V0RGlzcGxheWVkSXRlbXMiLCJzaG93U3ViY2F0ZWdvcmllc0ZvciIsInNldFNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiaXRlbSIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY29sdW1ucyIsInNlbGVjdG9yIiwiY2VsbCIsInJvdyIsImltZyIsImNlbnRlciIsImdyb3ciLCJjb21wYWN0Iiwic29ydGFibGUiLCJ3cmFwIiwib2xkX3ByaWNlIiwibWluV2lkdGgiLCJwcmljZSIsInNvcnRGdW5jdGlvbiIsInJvd0EiLCJyb3dCIiwicmVhbF9kaXNjb3VudCIsInBhcnNlSW50IiwibWF0Y2giLCJkZWZhdWx0U29ydEFzYyIsImlkIiwiY2F0ZWdvcmllcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYWRkIiwiU2V0Iiwic3ViQ2F0ZWdvcmllcyIsIm1hcCIsInN1YiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvd3NQZXJQYWdlVGV4dCIsInJhbmdlU2VwYXJhdG9yVGV4dCIsIm5vUm93c1BlclBhZ2UiLCJzZWxlY3RBbGxSb3dzSXRlbSIsInNlbGVjdEFsbFJvd3NJdGVtVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FB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L3dlYnBhY2svcGFnZXMvaW5kZXguODZkZmNjNjY1MDU2MWUwMzhhOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEFsZXJ0LCBCYWRnZSwgQnV0dG9uLCBDb2wsIENvbnRhaW5lciwgSW5wdXQsIFJvdyB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xuaW1wb3J0IGNhdGVnb3JpZXNIaWVyYXJoeSBmcm9tIFwiLi4vY2F0ZWdvcmllc19oaWVyYXJjaHkuanNvblwiO1xuaW1wb3J0IHsgWU1Jbml0aWFsaXplciB9IGZyb20gXCJyZWFjdC15YW5kZXgtbWV0cmlrYVwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY29kZXMsIHByb2R1Y3RzIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdyeV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW3NlbGVjdGVkU3ViQ2F0ZWdvcnksIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtzZWxlY3RlZENvZGUsIHNldFNlbGVjdGVkQ29kZV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW2Rpc3BsYXllZEl0ZW1zLCBzZXREaXNwbGF5ZWRJdGVtc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2hvd1N1YmNhdGVnb3JpZXNGb3IsIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREaXNwbGF5ZWRJdGVtcyhcbiAgICAgIHByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgKHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAgIChzZWxlY3RlZENhdGVnb3J5ID09PSBcItCS0YHQtVwiIHx8IGl0ZW0uY2F0ZWdvcnkgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpICYmXG4gICAgICAgICAgKHNlbGVjdGVkU3ViQ2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgIGl0ZW0uc3ViY2F0ZWdvcnkgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkpICYmXG4gICAgICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgIT09IC0xXG4gICAgICApXG4gICAgKTtcbiAgfSwgW3NlbGVjdGVkQ29kZSwgc2VsZWN0ZWRDYXRlZ29yeSwgc2VsZWN0ZWRTdWJDYXRlZ29yeSwgc2VhcmNoXSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcItCY0LfQvtCx0YDQsNC20LXQvdC40LVcIixcbiAgICAgIHNlbGVjdG9yOiBcImltYWdlXCIsXG4gICAgICBjZWxsOiAocm93KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXtyb3cuaW1nfSB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBhbHQ9e3Jvdy5uYW1lfSAvPlxuICAgICAgKSxcbiAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0J3QsNC30LLQsNC90LjQtVwiLFxuICAgICAgc2VsZWN0b3I6IFwibmFtZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBncm93OiBcIjJcIixcbiAgICAgIHdyYXA6IHRydWUsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQodGC0LDRgNCw0Y8g0YbQtdC90LBcIixcbiAgICAgIHNlbGVjdG9yOiBcIm9sZF9wcmljZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93Lm9sZF9wcmljZX3igr08L3NwYW4+LFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQptC10L3QsCDRgdC+INGB0LrQuNC00LrQvtC5XCIsXG4gICAgICBzZWxlY3RvcjogXCJwcmljZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LnByaWNlfeKCvTwvc3Bhbj4sXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCg0LXQsNC70YzQvdCw0Y8g0LLRi9Cz0L7QtNCwXCIsXG4gICAgICBzZWxlY3RvcjogXCJyZWFsX2Rpc2NvdW50XCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHNvcnRGdW5jdGlvbjogKHJvd0EsIHJvd0IpID0+XG4gICAgICAgIHJvd0EucmVhbF9kaXNjb3VudCA9PT0gXCI/XCJcbiAgICAgICAgICA/IC0xXG4gICAgICAgICAgOiByb3dBLnJlYWxfZGlzY291bnQgLSByb3dCLnJlYWxfZGlzY291bnQsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LnJlYWxfZGlzY291bnR94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0J/RgNC+0LzQvtC60L7QtFwiLFxuICAgICAgc2VsZWN0b3I6IFwiY29kZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBzb3J0RnVuY3Rpb246IChyb3dBLCByb3dCKSA9PlxuICAgICAgICBwYXJzZUludChyb3dBLmNvZGUubWF0Y2goL1xcZCsvKVswXSkgLVxuICAgICAgICBwYXJzZUludChyb3dCLmNvZGUubWF0Y2goL1xcZCsvKVswXSksXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LmNvZGUudG9VcHBlckNhc2UoKX08L3NwYW4+LFxuICAgICAgZGVmYXVsdFNvcnRBc2M6IGZhbHNlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNzBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQmtGD0L/QuNGC0YxcIixcbiAgICAgIHNlbGVjdG9yOiBcImJ1eVwiLFxuICAgICAgY2VsbDogKHJvdykgPT4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9wb2t1cGtpLm1hcmtldC55YW5kZXgucnUvcHJvZHVjdC8ke3Jvdy5pZH1gfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICA+XG4gICAgICAgICAg0JrRg9C/0LjRgtGMXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSxcbiAgICAgIG1pbldpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4ucHJvZHVjdHNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgIHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKVxuICAgICAgKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldi5hZGQoY3Vyci5jYXRlZ29yeSk7XG4gICAgICB9LCBuZXcgU2V0KCkpLFxuICBdO1xuXG4gIGNvbnN0IHN1YkNhdGVnb3JpZXMgPSBbXG4gICAgXCLQktGB0LVcIixcbiAgICAuLi5wcm9kdWN0c1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgKHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAgIHNob3dTdWJjYXRlZ29yaWVzRm9yID09PSBpdGVtLmNhdGVnb3J5XG4gICAgICApXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2LmFkZChjdXJyLnN1YmNhdGVnb3J5KTtcbiAgICAgIH0sIG5ldyBTZXQoKSksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi12aC0xMDBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwi0KHQv9C40YHQvtC6INCy0YHQtdGFINGC0L7QstCw0YDQvtCyINC00L7RgdGC0YPQv9C90YvRhSDQtNC70Y8g0L/QvtC60YPQv9C60Lgg0L3QsCDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LUg0YHQviDRgdC60LjQtNC60L7QuSDQv9C+INC/0YDQvtC80L7QutC+0LTQsNC8IENVVDQtQ1VUMjUg0LggR08zLUdPMjkuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2FybmluZyBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBweS0yXCI+XG4gICAgICAgICAgICA8aDE+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPEFsZXJ0IGNvbG9yPVwiaW5mb1wiIGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICDQmtC+0LTRiyBHSUZUINCy0L3QtdC30LDQv9C90L4g0L/RgNC10LrRgNCw0YLQuNC70Lgg0YHQstC+0Y4g0YDQsNCx0L7RgtGDLiDQodC/0L7RgdC+0LEg0LLRi9Cz0YDRg9C30LjRgtGMINCy0YHQtSDRgtC+0LLQsNGA0YtcbiAgICAgICAgICDQv9C+INC60L7QtNCw0LwgQ1VUNC1DVVQyNSDQuCBHTzMtR08zNCDQv9C+0LrQsCDRh9GC0L4g0L3QtSDQvdCw0LnQtNC10L0sINC+0LTQvdCw0LrQviDRjyDRgdC80L7Qs9GDXG4gICAgICAgICAg0LTQvtCx0LDQstC70Y/RgtGMINC40YUgXCLQv9Cw0YfQutCw0LzQuFwiLiDQntC00LjQvSDRhtC40LrQuyDQvtCx0L3QvtCy0LvQtdC90LjRjyDRhtC10L0g0Lgg0L3QsNC70LjRh9C40Y8g0LLRgdC10YVcbiAgICAgICAgICDRgtC+0LLQsNGA0L7QsiB+MjQg0YfQsNGB0LAuINCS0L7Qv9GA0L7RgdGLLCDRgdC+0LLQtdGC0Ysg0Lgg0LfQsNC80LXRh9Cw0L3QuNGPINC/0L4g0YHQsNC50YLRgywg0LzQvtC20LXRgtC1XG4gICAgICAgICAg0L3QsNC/0LjRgdCw0YLRjCDQvNC90LUg0LJ7XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5wZXBwZXIucnUvcHJvZmlsZS9zZXZza2lpXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg0LvQuNGH0LrRgyDQvdCwIFBlcHBlclxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAg0LjQu9C4INC90LAg0L/QvtGH0YLRg3tcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnNldnNraWkxMTFAZ21haWwuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgIHNldnNraWkxMTFAZ21haWwuY29tXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1yLTJcIj7Qn9GA0L7QvNC+0LrQvtC00Ys6PC9oMz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFtcItCS0YHQtVwiLCAuLi5jb2Rlc10ubWFwKChjb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtci0xXCIga2V5PXtjb2RlfT5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29kZSA9PT0gc2VsZWN0ZWRDb2RlID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29kZShjb2RlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvZGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtci0yXCI+0JrQsNGC0LXQs9C+0YDQuNC4OjwvaDU+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbXItMVwiIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSA/IFwid2FybmluZ1wiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZENhdGVncnkoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG93U3ViY2F0ZWdvcmllc0ZvcihcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gXCLQktGB0LVcIiA/IG51bGwgOiBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5KFwi0JLRgdC1XCIpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2hvd1N1YmNhdGVnb3JpZXNGb3IgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMiBtYi0wXCI+0J/QvtC00LrQsNGC0LXQs9C+0YDQuNC4OjwvcD5cbiAgICAgICAgICAgICAge3N1YkNhdGVnb3JpZXMubWFwKChzdWIpID0+IChcbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtzdWIgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkgPyBcIndhcm5pbmdcIiA6IFwic2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5KHN1Yil9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0xIG1yLTFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzdWJ9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LpcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPERhdGFUYWJsZVxuICAgICAgICAgICAgbm9IZWFkZXI9e3RydWV9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgZGF0YT17ZGlzcGxheWVkSXRlbXN9XG4gICAgICAgICAgICBub0RhdGFDb21wb25lbnQ9XCLQndC1INC90LDQudC00LXQvdC+INGC0L7QstCw0YDQvtCyINGB0L7QvtGC0LLQtdGC0LLRg9GJ0LjQuSDQutGA0LjRgtC10YDQuNGP0LxcIlxuICAgICAgICAgICAgcGFnaW5hdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgIHBhZ2luYXRpb25Sb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgNTAsIDEwMCwgNTAwLCAxMDAwXX1cbiAgICAgICAgICAgIHBhZ2luYXRpb25Db21wb25lbnRPcHRpb25zPXt7XG4gICAgICAgICAgICAgIHJvd3NQZXJQYWdlVGV4dDogXCLQotC+0LLQsNGA0L7QsiDQvdCwINGB0YLRgNCw0L3QuNGG0LU6XCIsXG4gICAgICAgICAgICAgIHJhbmdlU2VwYXJhdG9yVGV4dDogXCLQuNC3XCIsXG4gICAgICAgICAgICAgIG5vUm93c1BlclBhZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWxlY3RBbGxSb3dzSXRlbTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdEFsbFJvd3NJdGVtVGV4dDogXCLQktGB0LVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMyB3LTEwMFwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgINCh0L7Qt9C00LDRgtC10LvRjCDRgdCw0LnRgtCwINC90LUg0LjQvNC10LXRgiDQvtGC0L3QvtGI0LXQvdC40Y8g0Log0LrQvtC80L/QsNC90LjRj9C8INCv0L3QtNC10LrRgSDQuCDQr9C90LTQtdC60YEu0JzQsNGA0LXQutGCXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8WU1Jbml0aWFsaXplciBhY2NvdW50cz17WzcxMjU2NDg0XX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgbGV0IGNvZGVzID0gbmV3IFNldCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiLi9wcm9kdWN0cy5qc29uXCIpKTtcbiAgbGV0IHVuaXF1ZVByb2R1Y3RzID0gW107XG4gIGxldCBhZGRlZFByb2R1Y3RzID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgcHJvZHVjdHMpIHtcbiAgICBpZiAoIWFkZGVkUHJvZHVjdHMuaGFzKHByb2R1Y3QuaWQpKSB7XG4gICAgICBjb2Rlcy5hZGQocHJvZHVjdC5jb2RlKTtcbiAgICAgIHVuaXF1ZVByb2R1Y3RzLnB1c2goe1xuICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICByZWFsX2Rpc2NvdW50OlxuICAgICAgICAgIHByb2R1Y3QubWluX3ByaWNlICE9IHByb2R1Y3Qub2xkX3ByaWNlXG4gICAgICAgICAgICA/IHByb2R1Y3QubWluX3ByaWNlIC0gcHJvZHVjdC5wcmljZVxuICAgICAgICAgICAgOiBcIj9cIixcbiAgICAgIH0pO1xuICAgICAgYWRkZWRQcm9kdWN0cy5hZGQocHJvZHVjdC5pZCk7XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgcHJvZHVjdCBvZiB1bmlxdWVQcm9kdWN0cykge1xuICAgIGlmICghcHJvZHVjdC5zdWJjYXRlZ29yeSkge1xuICAgICAgcHJvZHVjdC5zdWJjYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcnk7XG4gICAgICBwcm9kdWN0LmNhdGVnb3J5ID0gY2F0ZWdvcmllc0hpZXJhcmh5W3Byb2R1Y3QuY2F0ZWdvcnldO1xuICAgICAgaWYgKCFwcm9kdWN0LmNhdGVnb3J5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZzLndyaXRlRmlsZVN5bmMoXCIuL3Byb2R1Y3RzX2pzb24uanNvblwiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0cyksIFwidXRmOFwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb2RlczogWy4uLmNvZGVzXSxcbiAgICAgIHByb2R1Y3RzOiB1bmlxdWVQcm9kdWN0cyxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==