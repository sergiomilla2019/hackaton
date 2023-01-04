"use strict";
exports.id = 238;
exports.ids = [238];
exports.modules = {

/***/ 8238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListNotifications)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1163);
/* harmony import */ var _mui_material_TableFooter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableFooter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7308);
/* harmony import */ var _mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3276);
/* harmony import */ var _mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7834);
/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(547);
/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7967);
/* harmony import */ var _mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_17__);


















function TablePaginationActions(props) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const { count , page , rowsPerPage , onPageChange  } = props;
    const handleFirstPageButtonClick = (event)=>{
        onPageChange(event, 0);
    };
    const handleBackButtonClick = (event)=>{
        onPageChange(event, page - 1);
    };
    const handleNextButtonClick = (event)=>{
        onPageChange(event, page + 1);
    };
    const handleLastPageButtonClick = (event)=>{
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
        sx: {
            flexShrink: 0,
            ml: 2.5
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                onClick: handleFirstPageButtonClick,
                disabled: page === 0,
                "aria-label": "first page",
                children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_17___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_14___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                onClick: handleBackButtonClick,
                disabled: page === 0,
                "aria-label": "previous page",
                children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_15___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                onClick: handleNextButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                "aria-label": "next page",
                children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_15___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_16___default()), {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
                onClick: handleLastPageButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                "aria-label": "last page",
                children: theme.direction === "rtl" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FirstPage__WEBPACK_IMPORTED_MODULE_14___default()), {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LastPage__WEBPACK_IMPORTED_MODULE_17___default()), {})
            })
        ]
    });
}
TablePaginationActions.propTypes = {
    count: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
    onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
    page: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),
    rowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired)
};
function createData(name, calories, fat) {
    return {
        name,
        calories,
        fat
    };
}
const rows = [
    createData("Notificacion 1", "Mail", "Pending"),
    createData("Notificacion 2", "Push", "Pending"),
    createData("Notificacion 3", "Web Push", "Delivered"),
    createData("Notificacion 4", "Mail", "Pending"),
    createData("Notificacion 5", "Mail", "Delivered"),
    createData("Notificacion 6", "Mail", "Error"),
    createData("Notificacion 7", "Mail", "Pending"),
    createData("Notificacion 8", "Mail", "Delivered"),
    createData("Notificacion 9", "Mail", "Pending"),
    createData("Notificacion 10", "Mail", "Pending"),
    createData("Notificacion 11", "Mail", "Delivered"),
    createData("Notificacion 12", "Mail", "Pending"),
    createData("Notificacion 13", "Mail", "Pending"), 
].sort((a, b)=>a.calories < b.calories ? -1 : 1);
function ListNotifications() {
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(5);
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default()), {
        component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_12___default()),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default()), {
            sx: {
                minWidth: 500
            },
            "aria-label": "custom pagination table",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default()), {
                    children: [
                        (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        component: "th",
                                        scope: "row",
                                        children: row.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        style: {
                                            width: 160
                                        },
                                        align: "right",
                                        children: row.calories
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        style: {
                                            width: 160
                                        },
                                        align: "right",
                                        children: row.fat
                                    })
                                ]
                            }, row.name)),
                        emptyRows > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                            style: {
                                height: 53 * emptyRows
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                colSpan: 6
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableFooter__WEBPACK_IMPORTED_MODULE_9___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_11___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TablePagination__WEBPACK_IMPORTED_MODULE_10___default()), {
                            rowsPerPageOptions: [
                                5,
                                10,
                                25,
                                {
                                    label: "All",
                                    value: -1
                                }
                            ],
                            colSpan: 3,
                            count: rows.length,
                            rowsPerPage: rowsPerPage,
                            page: page,
                            SelectProps: {
                                inputProps: {
                                    "aria-label": "rows per page"
                                },
                                native: true
                            },
                            onPageChange: handleChangePage,
                            onRowsPerPageChange: handleChangeRowsPerPage,
                            ActionsComponent: TablePaginationActions
                        })
                    })
                })
            ]
        })
    });
}


/***/ })

};
;