"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/app/settings",{

/***/ "./pages/app/settings.js":
/*!*******************************!*\
  !*** ./pages/app/settings.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/esm/Card/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/esm/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/esm/TextField/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/esm/Typography/index.js\");\n/* harmony import */ var _components_PrivateLayout_PrivateLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PrivateLayout/PrivateLayout */ \"./components/PrivateLayout/PrivateLayout.js\");\n/* harmony import */ var _components_Link_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Link/Link */ \"./components/Link/Link.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/esm/MenuItem/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Settings = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data, loading = ref.loading;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isError = ref2[0], setError = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref3[0], setName = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), message = ref4[0], setMessage = ref4[1];\n    var notify = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function(e) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                e.preventDefault();\n                setIsLoading(true);\n                console.log({\n                    name: name,\n                    message: message\n                });\n                //const response = await signIn('credentials', { redirect: false, username, password })\n                //console.log(response, \"<-----\")\n                setIsLoading(false);\n                return [\n                    2\n                ];\n            });\n        //if (!response ||  response.status !== 200) {\n        //setError(true)\n        //}\n        });\n        return function notify(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var tipos = [\n        {\n            value: \"Mail\",\n            label: \"Mail\"\n        },\n        {\n            value: \"Notificacion\",\n            label: \"Notificacion\"\n        },\n        {\n            value: \"Push\",\n            label: \"Push\"\n        },\n        {\n            value: \"SMS\",\n            label: \"SMS\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PrivateLayout_PrivateLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        title: \"Settings\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            sx: {\n                width: 300,\n                margin: \"0 auto\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        gutterBottom: true,\n                        variant: \"h5\",\n                        component: \"h1\",\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"Notificaciones\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        component: \"form\",\n                        sx: {\n                            \"& .MuiTextField-root\": {\n                                m: \"10px 0\",\n                                width: \"100%\"\n                            }\n                        },\n                        onSubmit: notify,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                required: true,\n                                error: isError,\n                                label: \"Nombre notificacion\",\n                                variant: \"outlined\",\n                                value: name,\n                                onChange: function(e) {\n                                    setError(false);\n                                    setName(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                id: \"outlined-select-type\",\n                                select: true,\n                                label: \"Tipo Notificacion\",\n                                defaultValue: \"Mail\",\n                                helperText: \"Seleccione un tipo de notificacion\",\n                                children: tipos.map(function(option) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                        value: option.value,\n                                        children: option.label\n                                    }, option.value, false, {\n                                        fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                required: true,\n                                error: isError,\n                                label: \"Mensaje\",\n                                variant: \"outlined\",\n                                multiline: true,\n                                maxRows: 4,\n                                value: message,\n                                onChange: function(e) {\n                                    setError(false);\n                                    setMessage(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, _this),\n                            isError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                gutterBottom: true,\n                                color: \"error.main\",\n                                style: {\n                                    fontSize: \"0.8em\"\n                                },\n                                children: \"Save failed: wrong data.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                                lineNumber: 113,\n                                columnNumber: 23\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                variant: \"contained\",\n                                type: \"submit\",\n                                style: {\n                                    margin: \"10px 0 20px\",\n                                    width: \"100%\"\n                                },\n                                disabled: isLoading,\n                                children: \"Guardar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sergi\\\\OneDrive\\\\Escritorio\\\\sm\\\\work\\\\ceibo\\\\Hackaton_2023\\\\hackaton2023\\\\hackaton2023\\\\pages\\\\app\\\\settings.js\",\n        lineNumber: 60,\n        columnNumber: 12\n    }, _this);\n};\n_s(Settings, \"jWZ/TPjbTCMCzm8Wi6lFRXNcXIU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBQyxZQUFZO2dDQUFDaEIsS0FBSyxFQUFFO29DQUFFaUIsUUFBUSxFQUFFLE9BQU87aUNBQUU7MENBQUUsMEJBRXRGOzs7OztxQ0FBYTswQ0FFYiw4REFBQ25ELDZEQUFNO2dDQUNMZ0MsT0FBTyxFQUFDLFdBQVc7Z0NBQ25Cb0IsSUFBSSxFQUFDLFFBQVE7Z0NBQ2JsQixLQUFLLEVBQUU7b0NBQUVKLE1BQU0sRUFBRSxhQUFhO29DQUFFRCxLQUFLLEVBQUUsTUFBTTtpQ0FBRTtnQ0FDL0N3QixRQUFRLEVBQUUxQyxTQUFTOzBDQUNwQixTQUVEOzs7OztxQ0FBUzs7Ozs7OzZCQUdMOzs7Ozs7cUJBQ007Ozs7O2lCQUNUOzs7OzthQUNTO0FBQ3BCLENBQUM7R0FySEtMLFFBQVE7O1FBRUdaLGtEQUFTO1FBQ1dFLHVEQUFVOzs7QUFIekNVLEtBQUFBLFFBQVE7QUF1SGQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwL3NldHRpbmdzLmpzP2IzOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgc2lnbkluLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJ1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCdcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknXG5pbXBvcnQgUHJpdmF0ZUxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ByaXZhdGVMYXlvdXQvUHJpdmF0ZUxheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGluay9MaW5rJ1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xuXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIGxvYWRpbmcgfSA9IHVzZVNlc3Npb24oKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IG5vdGlmeSA9IGFzeW5jIGUgPT4ge1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICBjb25zb2xlLmxvZyh7IG5hbWUsIG1lc3NhZ2V9KVxuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywgeyByZWRpcmVjdDogZmFsc2UsIHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSwgXCI8LS0tLS1cIilcblxuICAgIHNldElzTG9hZGluZyhmYWxzZSlcblxuICAgIC8vaWYgKCFyZXNwb25zZSB8fCAgcmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIC8vc2V0RXJyb3IodHJ1ZSlcbiAgICAvL31cbiAgfVxuXG4gIGNvbnN0IHRpcG9zID0gW1xuICAgIHtcbiAgICAgIHZhbHVlOiAnTWFpbCcsXG4gICAgICBsYWJlbDogJ01haWwnLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdOb3RpZmljYWNpb24nLFxuICAgICAgbGFiZWw6ICdOb3RpZmljYWNpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsdWU6ICdQdXNoJyxcbiAgICAgIGxhYmVsOiAnUHVzaCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ1NNUycsXG4gICAgICBsYWJlbDogJ1NNUycsXG4gICAgfSxcbiAgXTtcblxuICBcbiAgICByZXR1cm4gPFByaXZhdGVMYXlvdXQgdGl0bGU9XCJTZXR0aW5nc1wiPlxuICAgICAgPENhcmQgc3g9e3sgd2lkdGg6IDMwMCwgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgxXCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgIE5vdGlmaWNhY2lvbmVzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICA8Qm94XG4gICAgICAgICAgY29tcG9uZW50PVwiZm9ybVwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICcmIC5NdWlUZXh0RmllbGQtcm9vdCc6IHsgbTogJzEwcHggMCcsIHdpZHRoOiAnMTAwJScgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uU3VibWl0PXtub3RpZnl9XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZXJyb3I9e2lzRXJyb3J9XG4gICAgICAgICAgICBsYWJlbD1cIk5vbWJyZSBub3RpZmljYWNpb25cIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICBzZXRFcnJvcihmYWxzZSlcbiAgICAgICAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXNlbGVjdC10eXBlXCJcbiAgICAgICAgICAgIHNlbGVjdFxuICAgICAgICAgICAgbGFiZWw9XCJUaXBvIE5vdGlmaWNhY2lvblwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJNYWlsXCJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9XCJTZWxlY2Npb25lIHVuIHRpcG8gZGUgbm90aWZpY2FjaW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAge3RpcG9zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtvcHRpb24udmFsdWV9IHZhbHVlPXtvcHRpb24udmFsdWV9PlxuICAgICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RleHRGaWVsZD5cblxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBlcnJvcj17aXNFcnJvcn1cbiAgICAgICAgICAgIGxhYmVsPVwiTWVuc2FqZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICBtYXhSb3dzPXs0fVxuICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHNldEVycm9yKGZhbHNlKVxuICAgICAgICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAge2lzRXJyb3IgJiYgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIGNvbG9yPVwiZXJyb3IubWFpblwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMC44ZW0nIH19PlxuICAgICAgICAgICAgU2F2ZSBmYWlsZWQ6IHdyb25nIGRhdGEuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5Pn1cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAgMjBweCcsIHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR3VhcmRhclxuICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICAgPC9Qcml2YXRlTGF5b3V0PlxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiQ2FyZCIsIkJveCIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsIlByaXZhdGVMYXlvdXQiLCJMaW5rIiwiTWVudUl0ZW0iLCJTZXR0aW5ncyIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwibG9hZGluZyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzRXJyb3IiLCJzZXRFcnJvciIsIm5hbWUiLCJzZXROYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJub3RpZnkiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGlwb3MiLCJ2YWx1ZSIsImxhYmVsIiwidGl0bGUiLCJzeCIsIndpZHRoIiwibWFyZ2luIiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsImNvbXBvbmVudCIsInN0eWxlIiwidGV4dEFsaWduIiwibSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJlcnJvciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaWQiLCJzZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJoZWxwZXJUZXh0IiwibWFwIiwib3B0aW9uIiwibXVsdGlsaW5lIiwibWF4Um93cyIsImNvbG9yIiwiZm9udFNpemUiLCJ0eXBlIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/app/settings.js\n"));

/***/ })

});