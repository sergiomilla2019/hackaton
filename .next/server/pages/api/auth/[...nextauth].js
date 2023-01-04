"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 9754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
// EXTERNAL MODULE: ./lib/mongo-helper.js
var mongo_helper = __webpack_require__(6340);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




// https://next-auth.js.org/providers/credentials
const authOptions = {
    // Configure one or more authentication providers
    providers: [
        credentials_default()({
            name: "Credentials",
            credentials: {
                username: {
                    label: "E-Mail",
                    type: "text",
                    placeholder: "jsmith@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                await mongo_helper/* default.connectDb */.Z.connectDb();
                const [user] = await mongo_helper/* default.getUserByQuery */.Z.getUserByQuery({
                    email: req.body.username,
                    password: req.body.password
                });
                //const user = await dynamoDb.getUserByQuery({ email: req.body.username, password: req.body.password })
                //const user = { user: 'sergiomilla2019@gmail.com' }
                await mongo_helper/* default.disconnectDb */.Z.disconnectDb();
                //console.log(user, "<--user--")
                if (user) {
                    //const isCorrectPass = bcrypt.compareSync(req.body.password, user.password)
                    //const isCorrectPass = true;
                    //console.log(isCorrectPass, "<--isCorrectPass--")
                    //if (isCorrectPass) {
                    return user;
                //} else {
                //return null
                //}
                } else {
                    return null;
                }
            }
        })
    ]
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [340], () => (__webpack_exec__(9754)));
module.exports = __webpack_exports__;

})();