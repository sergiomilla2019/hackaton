"use strict";
(() => {
var exports = {};
exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6340);


const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
async function handler(req, res) {
    await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_1__/* ["default"].connectDb */ .Z.connectDb();
    const { password , token  } = req.body;
    if (password && token) {
        try {
            const [user] = await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getUserByQuery */ .Z.getUserByQuery({
                reset_token: token
            });
            const now = new Date();
            if (!!user && new Date(user.reset_expires) > now) {
                const hash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, saltRounds);
                const update = {
                    password: hash,
                    reset_token: null,
                    reset_expires: null
                };
                await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_1__/* ["default"].updateUserByEmail */ .Z.updateUserByEmail({
                    email: user.email,
                    update
                });
                res.status(200).json();
            } else {
                res.status(404).json();
            }
        } catch (err) {
            console.error("Unexpected error on password reset", err);
            res.status(500).json();
        }
    } else {
        res.status(404).json();
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [340], () => (__webpack_exec__(5241)));
module.exports = __webpack_exports__;

})();