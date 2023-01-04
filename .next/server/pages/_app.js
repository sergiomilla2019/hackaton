"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./styles/theme.js

// https://colorhunt.co/palette/1c67583d8361d6cda4eef2e6
const theme = (0,styles_.createTheme)({
    palette: {
        primary: {
            main: "#1C6758",
            light: "#3D8361"
        },
        secondary: {
            main: "#D6CDA4",
            light: "#EEF2E6"
        }
    }
});
/* harmony default export */ const styles_theme = (theme);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/_app.js









function App({ Component , pageProps: { session , ...pageProps } ,  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
            theme: styles_theme,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8813));
module.exports = __webpack_exports__;

})();