"use strict";
(() => {
var exports = {};
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6340);

async function handler(req, res) {
    await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].connectDb */ .Z.connectDb();
    //const [user] = await dynamoDb.getUserByQuery({ email: req.body.email })
    //console.log(user, "<--handler--")
    try {
        await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].createNotify */ .Z.createNotify(req.body);
        await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].disconnectDb */ .Z.disconnectDb();
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({
        name: req.body.name
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [340], () => (__webpack_exec__(6110)));
module.exports = __webpack_exports__;

})();