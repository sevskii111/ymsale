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
  }, // {
  //   name: "Реальная выгода",
  //   selector: "real_discount",
  //   sortable: true,
  //   defaultSortAsc: false,
  //   cell: (row) => <span>{row.real_discount}₽</span>,
  //   grow: "0",
  //   compact: true,
  //   minWidth: "60px",
  // },
  {
    name: "Промокод",
    selector: "code",
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: row.code.toUpperCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
        lineNumber: 95,
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
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: "\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO29."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
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
            lineNumber: 150,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        color: "info",
        className: "mb-0",
        children: ["\u0423\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u043F\u043E\u0441\u043E\u0431 \u0432\u044B\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C. \u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 \u0437\u0430\u0439\u043C\u0451\u0442 \u043A\u0430\u043A\u043E\u0435-\u0442\u043E \u0432\u0440\u0435\u043C\u044F, \u043D\u043E \u043D\u0430\u0434\u0435\u044E\u0441\u044C \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C\u0441\u044F \u0440\u0430\u043D\u044C\u0448\u0435 \u0447\u0435\u043C \u0441\u0430\u043C\u0438 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B :).", " ", "\u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        color: "danger",
        className: "mb-0",
        children: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043E\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0441 \u043F\u043E\u0445\u043E\u0436\u0438\u043C\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C\u0438. \u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u0438 \u044F \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u044E\u0441\u044C \u0435\u0451 \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u0440\u0435\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
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
            lineNumber: 188,
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
                lineNumber: 192,
                columnNumber: 19
              }, _this)
            }, code, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
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
                lineNumber: 207,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
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
              lineNumber: 229,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
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
              lineNumber: 242,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
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
          lineNumber: 249,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
      className: "bg-secondary text-white py-3 w-100",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImNvZGVzIiwicHJvZHVjdHMiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVncnkiLCJzZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2V0U2VsZWN0ZWRTdWJDYXRlZ29yeSIsInNlbGVjdGVkQ29kZSIsInNldFNlbGVjdGVkQ29kZSIsImRpc3BsYXllZEl0ZW1zIiwic2V0RGlzcGxheWVkSXRlbXMiLCJzaG93U3ViY2F0ZWdvcmllc0ZvciIsInNldFNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiaXRlbSIsImNvZGUiLCJ0b1VwcGVyQ2FzZSIsImNhdGVnb3J5Iiwic3ViY2F0ZWdvcnkiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY29sdW1ucyIsInNlbGVjdG9yIiwiY2VsbCIsInJvdyIsImltZyIsImNlbnRlciIsImdyb3ciLCJjb21wYWN0Iiwic29ydGFibGUiLCJ3cmFwIiwib2xkX3ByaWNlIiwibWluV2lkdGgiLCJwcmljZSIsInNvcnRGdW5jdGlvbiIsInJvd0EiLCJyb3dCIiwicGFyc2VJbnQiLCJtYXRjaCIsImRlZmF1bHRTb3J0QXNjIiwiaWQiLCJjYXRlZ29yaWVzIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhZGQiLCJTZXQiLCJzdWJDYXRlZ29yaWVzIiwibWFwIiwic3ViIiwiZSIsInRhcmdldCIsInZhbHVlIiwicm93c1BlclBhZ2VUZXh0IiwicmFuZ2VTZXBhcmF0b3JUZXh0Iiwibm9Sb3dzUGVyUGFnZSIsInNlbGVjdEFsbFJvd3NJdGVtIiwic2VsZWN0QWxsUm93c0l0ZW1UZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHZSxTQUFTQSxJ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QTtBQUFBO0FBQUEsZ0JBdERGLGVBK0RFLHFFQUFDLGlFQUFEO0FBQ0Usa0JBQVEsRUFBRSxJQURaO0FBRUUsaUJBQU8sRUFBRS9CLE9BRlg7QUFHRSxjQUFJLEVBQUVoQixjQUhSO0FBSUUseUJBQWUsRUFBQyxvT0FKbEI7QUFLRSxvQkFBVSxFQUFFLElBTGQ7QUFNRSxzQ0FBNEIsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsSUFBbkIsQ0FOaEM7QUFPRSxvQ0FBMEIsRUFBRTtBQUMxQmdELDJCQUFlLEVBQUUsc0JBRFM7QUFFMUJDLDhCQUFrQixFQUFFLElBRk07QUFHMUJDLHlCQUFhLEVBQUUsS0FIVztBQUkxQkMsNkJBQWlCLEVBQUUsS0FKTztBQUsxQkMsaUNBQXFCLEVBQUU7QUFMRztBQVA5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0NGLGVBaUlFO0FBQVEsZUFBUyxFQUFDLG9DQUFsQjtBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpJRixlQXNJRSxxRUFBQyxrRUFBRDtBQUFlLGNBQVEsRUFBRSxDQUFDLFFBQUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBJRDs7R0ExUXVCOUQsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NDFlYThiMTU5MWVkODhkNjcxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQWxlcnQsIEJhZGdlLCBCdXR0b24sIENvbCwgQ29udGFpbmVyLCBJbnB1dCwgUm93IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XG5pbXBvcnQgY2F0ZWdvcmllc0hpZXJhcmh5IGZyb20gXCIuLi9jYXRlZ29yaWVzX2hpZXJhcmNoeS5qc29uXCI7XG5pbXBvcnQgeyBZTUluaXRpYWxpemVyIH0gZnJvbSBcInJlYWN0LXlhbmRleC1tZXRyaWthXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBjb2RlcywgcHJvZHVjdHMgfSkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ3J5XSA9IHVzZVN0YXRlKFwi0JLRgdC1XCIpO1xuICBjb25zdCBbc2VsZWN0ZWRTdWJDYXRlZ29yeSwgc2V0U2VsZWN0ZWRTdWJDYXRlZ29yeV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW3NlbGVjdGVkQ29kZSwgc2V0U2VsZWN0ZWRDb2RlXSA9IHVzZVN0YXRlKFwi0JLRgdC1XCIpO1xuICBjb25zdCBbZGlzcGxheWVkSXRlbXMsIHNldERpc3BsYXllZEl0ZW1zXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtzaG93U3ViY2F0ZWdvcmllc0Zvciwgc2V0U2hvd1N1YmNhdGVnb3JpZXNGb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERpc3BsYXllZEl0ZW1zKFxuICAgICAgcHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAoc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgICBpdGVtLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gc2VsZWN0ZWRDb2RlLnRvVXBwZXJDYXNlKCkpICYmXG4gICAgICAgICAgKHNlbGVjdGVkQ2F0ZWdvcnkgPT09IFwi0JLRgdC1XCIgfHwgaXRlbS5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSkgJiZcbiAgICAgICAgICAoc2VsZWN0ZWRTdWJDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgaXRlbS5zdWJjYXRlZ29yeSA9PT0gc2VsZWN0ZWRTdWJDYXRlZ29yeSkgJiZcbiAgICAgICAgICBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSAhPT0gLTFcbiAgICAgIClcbiAgICApO1xuICB9LCBbc2VsZWN0ZWRDb2RlLCBzZWxlY3RlZENhdGVnb3J5LCBzZWxlY3RlZFN1YkNhdGVnb3J5LCBzZWFyY2hdKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtVwiLFxuICAgICAgc2VsZWN0b3I6IFwiaW1hZ2VcIixcbiAgICAgIGNlbGw6IChyb3cpID0+IChcbiAgICAgICAgPGltZyBzcmM9e3Jvdy5pbWd9IHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGFsdD17cm93Lm5hbWV9IC8+XG4gICAgICApLFxuICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQndCw0LfQstCw0L3QuNC1XCIsXG4gICAgICBzZWxlY3RvcjogXCJuYW1lXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGdyb3c6IFwiMlwiLFxuICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCh0YLQsNGA0LDRjyDRhtC10L3QsFwiLFxuICAgICAgc2VsZWN0b3I6IFwib2xkX3ByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cub2xkX3ByaWNlfeKCvTwvc3Bhbj4sXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCm0LXQvdCwINGB0L4g0YHQutC40LTQutC+0LlcIixcbiAgICAgIHNlbGVjdG9yOiBcInByaWNlXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cucHJpY2V94oK9PC9zcGFuPixcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICAgIG1pbldpZHRoOiBcIjYwcHhcIixcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6IFwi0KDQtdCw0LvRjNC90LDRjyDQstGL0LPQvtC00LBcIixcbiAgICAvLyAgIHNlbGVjdG9yOiBcInJlYWxfZGlzY291bnRcIixcbiAgICAvLyAgIHNvcnRhYmxlOiB0cnVlLFxuICAgIC8vICAgZGVmYXVsdFNvcnRBc2M6IGZhbHNlLFxuICAgIC8vICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5yZWFsX2Rpc2NvdW50feKCvTwvc3Bhbj4sXG4gICAgLy8gICBncm93OiBcIjBcIixcbiAgICAvLyAgIGNvbXBhY3Q6IHRydWUsXG4gICAgLy8gICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCf0YDQvtC80L7QutC+0LRcIixcbiAgICAgIHNlbGVjdG9yOiBcImNvZGVcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5jb2RlLnRvVXBwZXJDYXNlKCl9PC9zcGFuPixcbiAgICAgIHNvcnRGdW5jdGlvbjogKHJvd0EsIHJvd0IpID0+XG4gICAgICAgIHBhcnNlSW50KChyb3dBLmNvZGUubWF0Y2goL1xcZCsvKSB8fCBbXCIwXCJdKVswXSkgLVxuICAgICAgICBwYXJzZUludCgocm93Qi5jb2RlLm1hdGNoKC9cXGQrLykgfHwgW1wiMFwiXSlbMF0pLFxuICAgICAgZGVmYXVsdFNvcnRBc2M6IGZhbHNlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNzBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQmtGD0L/QuNGC0YxcIixcbiAgICAgIHNlbGVjdG9yOiBcImJ1eVwiLFxuICAgICAgY2VsbDogKHJvdykgPT4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9wb2t1cGtpLm1hcmtldC55YW5kZXgucnUvcHJvZHVjdC8ke3Jvdy5pZH1gfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICA+XG4gICAgICAgICAg0JrRg9C/0LjRgtGMXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSxcbiAgICAgIG1pbldpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4ucHJvZHVjdHNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgIHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKVxuICAgICAgKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldi5hZGQoY3Vyci5jYXRlZ29yeSk7XG4gICAgICB9LCBuZXcgU2V0KCkpLFxuICBdO1xuXG4gIGNvbnN0IHN1YkNhdGVnb3JpZXMgPSBbXG4gICAgXCLQktGB0LVcIixcbiAgICAuLi5wcm9kdWN0c1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgKHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpKSAmJlxuICAgICAgICAgIHNob3dTdWJjYXRlZ29yaWVzRm9yID09PSBpdGVtLmNhdGVnb3J5XG4gICAgICApXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2LmFkZChjdXJyLnN1YmNhdGVnb3J5KTtcbiAgICAgIH0sIG5ldyBTZXQoKSksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi12aC0xMDBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwi0KHQv9C40YHQvtC6INCy0YHQtdGFINGC0L7QstCw0YDQvtCyINC00L7RgdGC0YPQv9C90YvRhSDQtNC70Y8g0L/QvtC60YPQv9C60Lgg0L3QsCDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LUg0YHQviDRgdC60LjQtNC60L7QuSDQv9C+INC/0YDQvtC80L7QutC+0LTQsNC8IENVVDQtQ1VUMjUg0LggR08zLUdPMjkuXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2FybmluZyBtYi0zXCI+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBweS0yXCI+XG4gICAgICAgICAgICA8aDE+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPEFsZXJ0IGNvbG9yPVwiaW5mb1wiIGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICDQo9C00LDQu9C+0YHRjCDQvdCw0LnRgtC4INGB0L/QvtGB0L7QsSDQstGL0LPRgNGD0LbQsNGC0Ywg0LfQvdCw0YfQuNGC0LXQu9GM0L3QviDQsdC+0LvRjNGI0LUg0YLQvtCy0LDRgNC+0LIg0L/QvlxuICAgICAgICAgINC/0YDQvtC80L7QutC+0LTQsNC8LiDQktGL0LPRgNGD0LfQutCwINC30LDQudC80ZHRgiDQutCw0LrQvtC1LdGC0L4g0LLRgNC10LzRjywg0L3QviDQvdCw0LTQtdGO0YHRjCDQt9Cw0LrQvtC90YfQuNGC0YzRgdGPXG4gICAgICAgICAg0YDQsNC90YzRiNC1INGH0LXQvCDRgdCw0LzQuCDQv9GA0L7QvNC+0LrQvtC00YsgOikuXG4gICAgICAgICAgey8qINCa0YDQvtC80LUg0Y3RgtC+0LPQviDQsiDRgtCw0LHQu9C40YbRgyDQtNC+0LHQsNCy0LvQtdC90LAg0LrQvtC70L7QvdC60LBcbiAgICAgICAgICBcItCg0LXQsNC70YzQvdCw0Y8g0LLRi9Cz0L7QtNCwXCIsINC+0L3QsCDQv9C+0LrQsNC30YvQstCw0LXRgiDRgNCw0LfQvdC40YbRgyDRgSDQvNC40L3QuNC80LDQu9GM0L3QvtC5INGG0LXQvdC+0Lkg0L3QsCDRgtC+0LLQsNGAXG4gICAgICAgICAg0L/QviDQvNCw0YDQtdC60YLRgyDQsiDQnNC+0YHQutCy0LUgKNC30LAg0LjQtNC10Y4g0YHQv9Cw0YHQuNCx0L57XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIlJ1c3Rpa19VZmFcIj5SdXN0aWtfVWZhPC9hPikuINCV0YHQu9C4INCyINGN0YLQvtC5INC60L7Qu9C+0L3QutC1IDAsINC30L3QsNGH0LjRglxuICAgICAgICAgINGG0LXQvdCwINCv0L3QtNC10LrRgdCwINC4INGC0LDQuiDQsdGL0LvQsCDRgdCw0LzQvtC5INC90LjQt9C60L7QuSDQuNC70Lgg0LTRgNGD0LPQuNGFINGG0LXQvSDQvdC1INCx0YvQu9C+INCy0L7QvtCx0YnQtSDQuFxuICAgICAgICAgINC/0L7RgdGH0LjRgtCw0YLRjCDQstGL0LPQvtC00YMg0L3QtSDQv9GA0LXQtNGB0YLQsNCy0LvRj9C10YLRgdGPINCy0L7Qt9C80L7QttC90YvQvCjQtNCw0L3QvdCw0Y8g0YTRg9C90LrRhtC40Y9cbiAgICAgICAgICDQtNC+0YDQsNCx0LDRgtGL0LLQsNC10YLRgdGPINC4INC90LAg0L3QtdC60L7RgtC+0YDRi9GFINGC0L7QstCw0YDQsNGFINC80L7QttC10YIg0L3QtSDQvtGC0L7QsdGA0LDQttCw0YLRjNGB0Y8g0L/RgNCw0LLQuNC70YzQvdC+LFxuICAgICAgICAgINC/0L7RgdGC0LDRgNCw0Y7RgdGMINC40YHQv9GA0LDQstC40YLRjCDRjdGC0L4g0LrQsNC6INC80L7QttC90L4g0YHQutC+0YDQtdC1KS4qL317XCIgXCJ9XG4gICAgICAgICAg0JLQvtC/0YDQvtGB0YssINGB0L7QstC10YLRiyDQuCDQt9Cw0LzQtdGH0LDQvdC40Y8g0L/QviDRgdCw0LnRgtGDLCDQvNC+0LbQtdGC0LUg0L3QsNC/0LjRgdCw0YLRjCDQvNC90LUg0LJ7XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5wZXBwZXIucnUvcHJvZmlsZS9zZXZza2lpXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAg0LvQuNGH0LrRgyDQvdCwIFBlcHBlclxuICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAg0LjQu9C4INC90LAg0L/QvtGH0YLRg3tcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnNldnNraWkxMTFAZ21haWwuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgIHNldnNraWkxMTFAZ21haWwuY29tXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCIgY2xhc3NOYW1lPVwibWItMFwiPlxuICAgICAgICAgINCa0LDRgNGC0LjQvdC60Lgg0L3QtdC60L7RgtC+0YDRi9GFINGC0L7QstCw0YDQvtCyINC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7RgiDRgtC+0LLQsNGA0L7QsiDRgSDQv9C+0YXQvtC20LjQvNC4XG4gICAgICAgICAg0L3QsNC30LLQsNC90LjRj9C80LguINCf0YDQvtCx0LvQtdC80LAg0LfQsNGC0YDQsNCz0LjQstCw0LXRgiDRgtC+0LvRjNC60L4g0YHQsNC80Lgg0LrQsNGA0YLQuNC90LrQuCDQuCDRjyDQv9C+0YHRgtCw0YDQsNGO0YHRjFxuICAgICAgICAgINC10ZEg0LrQsNC6INC80L7QttC90L4g0YHQutC+0YDQtdC1INC40YHQv9GA0LDQstC40YLRjC5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwib3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1yLTJcIj7Qn9GA0L7QvNC+0LrQvtC00Ys6PC9oMz5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIFtcItCS0YHQtVwiLCAuLi5jb2Rlc10ubWFwKChjb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtci0xXCIga2V5PXtjb2RlfT5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29kZSA9PT0gc2VsZWN0ZWRDb2RlID8gXCJ3YXJuaW5nXCIgOiBcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ29kZShjb2RlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvZGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtci0yXCI+0JrQsNGC0LXQs9C+0YDQuNC4OjwvaDU+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbXItMVwiIGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSA/IFwid2FybmluZ1wiIDogXCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcGlsbFxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZENhdGVncnkoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG93U3ViY2F0ZWdvcmllc0ZvcihcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gXCLQktGB0LVcIiA/IG51bGwgOiBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5KFwi0JLRgdC1XCIpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2hvd1N1YmNhdGVnb3JpZXNGb3IgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMiBtYi0wXCI+0J/QvtC00LrQsNGC0LXQs9C+0YDQuNC4OjwvcD5cbiAgICAgICAgICAgICAge3N1YkNhdGVnb3JpZXMubWFwKChzdWIpID0+IChcbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtzdWIgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkgPyBcIndhcm5pbmdcIiA6IFwic2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5KHN1Yil9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0xIG1yLTFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzdWJ9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LpcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPERhdGFUYWJsZVxuICAgICAgICAgICAgbm9IZWFkZXI9e3RydWV9XG4gICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgZGF0YT17ZGlzcGxheWVkSXRlbXN9XG4gICAgICAgICAgICBub0RhdGFDb21wb25lbnQ9XCLQndC1INC90LDQudC00LXQvdC+INGC0L7QstCw0YDQvtCyINGB0L7QvtGC0LLQtdGC0LLRg9GJ0LjQuSDQutGA0LjRgtC10YDQuNGP0LxcIlxuICAgICAgICAgICAgcGFnaW5hdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgIHBhZ2luYXRpb25Sb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgNTAsIDEwMCwgNTAwLCAxMDAwXX1cbiAgICAgICAgICAgIHBhZ2luYXRpb25Db21wb25lbnRPcHRpb25zPXt7XG4gICAgICAgICAgICAgIHJvd3NQZXJQYWdlVGV4dDogXCLQotC+0LLQsNGA0L7QsiDQvdCwINGB0YLRgNCw0L3QuNGG0LU6XCIsXG4gICAgICAgICAgICAgIHJhbmdlU2VwYXJhdG9yVGV4dDogXCLQuNC3XCIsXG4gICAgICAgICAgICAgIG5vUm93c1BlclBhZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICBzZWxlY3RBbGxSb3dzSXRlbTogZmFsc2UsXG4gICAgICAgICAgICAgIHNlbGVjdEFsbFJvd3NJdGVtVGV4dDogXCLQktGB0LVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMyB3LTEwMFwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgINCh0L7Qt9C00LDRgtC10LvRjCDRgdCw0LnRgtCwINC90LUg0LjQvNC10LXRgiDQvtGC0L3QvtGI0LXQvdC40Y8g0Log0LrQvtC80L/QsNC90LjRj9C8INCv0L3QtNC10LrRgSDQuCDQr9C90LTQtdC60YEu0JzQsNGA0LXQutGCXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8WU1Jbml0aWFsaXplciBhY2NvdW50cz17WzcxMjU2NDg0XX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgbGV0IGNvZGVzID0gbmV3IFNldCgpO1xuICBjb25zdCBwcm9kdWN0cyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKFwiLi9wcm9kdWN0cy5qc29uXCIpKTtcbiAgbGV0IHVuaXF1ZVByb2R1Y3RzID0gW107XG4gIGxldCBhZGRlZFByb2R1Y3RzID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgcHJvZHVjdHMpIHtcbiAgICBpZiAoIWFkZGVkUHJvZHVjdHMuaGFzKHByb2R1Y3QuaWQpKSB7XG4gICAgICBpZiAoIXByb2R1Y3QuY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcbiAgICAgIH1cbiAgICAgIGNvZGVzLmFkZChwcm9kdWN0LmNvZGUpO1xuICAgICAgdW5pcXVlUHJvZHVjdHMucHVzaCh7XG4gICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgIHJlYWxfZGlzY291bnQ6XG4gICAgICAgICAgcHJvZHVjdC5taW5fcHJpY2UgIT0gcHJvZHVjdC5vbGRfcHJpY2VcbiAgICAgICAgICAgID8gcHJvZHVjdC5taW5fcHJpY2UgLSBwcm9kdWN0LnByaWNlXG4gICAgICAgICAgICA6IDAsXG4gICAgICB9KTtcbiAgICAgIGFkZGVkUHJvZHVjdHMuYWRkKHByb2R1Y3QuaWQpO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdW5pcXVlUHJvZHVjdHMpIHtcbiAgICBpZiAoIXByb2R1Y3Quc3ViY2F0ZWdvcnkpIHtcbiAgICAgIHByb2R1Y3Quc3ViY2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5O1xuICAgICAgcHJvZHVjdC5jYXRlZ29yeSA9IGNhdGVnb3JpZXNIaWVyYXJoeVtwcm9kdWN0LmNhdGVnb3J5XTtcbiAgICAgIGlmICghcHJvZHVjdC5jYXRlZ29yeSkge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmcy53cml0ZUZpbGVTeW5jKFwiLi9wcm9kdWN0c19qc29uLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdHMpLCBcInV0ZjhcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29kZXM6IFsuLi5jb2Rlc10uc29ydChcbiAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgKGIubWF0Y2goL1xcZCsvKSA/IGIubWF0Y2goL1xcZCsvKVswXSA6IDApIC1cbiAgICAgICAgICAoYS5tYXRjaCgvXFxkKy8pID8gYS5tYXRjaCgvXFxkKy8pWzBdIDogMClcbiAgICAgICksXG4gICAgICBwcm9kdWN0czogdW5pcXVlUHJvZHVjdHMuc29ydChcbiAgICAgICAgKGEsIGIpID0+IGIucmVhbF9kaXNjb3VudCAtIGEucmVhbF9kaXNjb3VudFxuICAgICAgKSxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==