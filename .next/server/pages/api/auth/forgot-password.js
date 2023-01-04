"use strict";
(() => {
var exports = {};
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 3941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nodemailer = __webpack_require__(5184);
const { APP_NAME , BASE_URL  } = __webpack_require__(6790);
async function sendEmail({ to , token  }) {
    /*let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });*/ let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user: "sergiomilla2019@gmail.com",
            pass: "Requiem2019"
        }
    });
    const fullLink = `${BASE_URL}/reset-password?token=${token}`;
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"sergiomilla2019@gmail.com" <sergiomilla2019@gmail.com>',
        to,
        subject: `Forgot Password | ${APP_NAME}`,
        html: `Here is your password reset link: <br/><a href="${fullLink}">${fullLink}</a><br/><p>The link is valid for 24h.</p>`
    });
    console.log("Message sent: %s", info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
const emailHelper = {
    sendEmail
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailHelper);


/***/ }),

/***/ 518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6340);
/* harmony import */ var _lib_email_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3941);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].connectDb */ .Z.connectDb();
    const { email  } = req.body;
    const [user] = await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getUserByQuery */ .Z.getUserByQuery({
        email
    });
    if (user) {
        const expires = new Date();
        const token = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();
        expires.setHours(expires.getHours() + 1);
        const update = {
            reset_token: token,
            reset_expires: expires.toISOString()
        };
        try {
            //await dynamoDb.updateUserByEmail({ email, update })
            await _lib_email_helper__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sendEmail */ .Z.sendEmail({
                to: email,
                token
            });
            res.status(200).json();
        } catch (err) {
            console.log("unexpected error", err);
            res.status(500).json();
        }
    } else {
        res.status(404).json();
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_NAME": () => (/* binding */ APP_NAME),
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL)
/* harmony export */ });
const APP_NAME = "Web App";
const BASE_URL = "http://localhost:3000";


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [340], () => (__webpack_exec__(518)));
module.exports = __webpack_exports__;

})();