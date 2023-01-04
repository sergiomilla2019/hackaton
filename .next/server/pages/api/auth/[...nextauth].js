"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/mongo-helper.js":
/*!*****************************!*\
  !*** ./lib/mongo-helper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst saltRounds = parseInt(process.env.SALT_ROUNDS, 10);\nconst uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.0sfzgql.mongodb.net/?retryWrites=true&w=majority`;\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    serverApi: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1\n});\nconst connectDb = ()=>client.connect();\nconst disconnectDb = ()=>client.close();\nconst getUserByQuery = async (query)=>{\n    let result = [];\n    try {\n        const db = client.db(process.env.MONGODB_DATABASE);\n        const collection = db.collection(process.env.MONGODB_COLLECTION);\n        //console.log(query)\n        result = await collection.find(query).toArray();\n    //console.log(result, \"<---getUserByQuery---\")\n    } catch (e) {\n        console.log(\"error on getting user\", e);\n    }\n    return result;\n};\nconst createUser = async ({ email , password  })=>{\n    let result;\n    try {\n        //const hash = await bcrypt.hash(password, saltRounds)\n        const db = client.db(process.env.MONGODB_DATABASE);\n        const collection = db.collection(process.env.MONGODB_COLLECTION);\n        //const newUser = { email, password: hash }\n        const newUser = {\n            email,\n            password\n        };\n        result = await collection.insertOne(newUser);\n    } catch (e) {\n        console.log(\"error on creating user\", e);\n    }\n    return result;\n};\nconst updateUserByEmail = async ({ email , update  })=>{\n    let result;\n    try {\n        const db = client.db(process.env.MONGODB_DATABASE);\n        const collection = db.collection(process.env.MONGODB_COLLECTION);\n        result = await collection.findOneAndUpdate({\n            email\n        }, {\n            $set: update\n        });\n    } catch (e) {\n        console.log(\"error on updating user\", e);\n    }\n    return result;\n};\nconst mongoHelper = {\n    connectDb,\n    disconnectDb,\n    getUserByQuery,\n    createUser,\n    updateUserByEmail\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoHelper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ28taGVscGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVEO0FBQzVCO0FBRTNCLE1BQU1HLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFLEVBQUUsQ0FBQztBQUN4RCxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxjQUFjLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxZQUFZLENBQUMsQ0FBQyxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsMERBQTBELENBQUM7QUFHakosTUFBTUMsTUFBTSxHQUFHLElBQUlYLGdEQUFXLENBQUNRLEdBQUcsRUFBRTtJQUNsQ0ksZUFBZSxFQUFFLElBQUk7SUFDckJDLGtCQUFrQixFQUFFLElBQUk7SUFDeEJDLFNBQVMsRUFBRWIsd0RBQW1CO0NBQy9CLENBQUM7QUFFRixNQUFNZSxTQUFTLEdBQUcsSUFBTUwsTUFBTSxDQUFDTSxPQUFPLEVBQUU7QUFDeEMsTUFBTUMsWUFBWSxHQUFHLElBQU1QLE1BQU0sQ0FBQ1EsS0FBSyxFQUFFO0FBQ3pDLE1BQU1DLGNBQWMsR0FBRyxPQUFPQyxLQUFLLEdBQUs7SUFDdEMsSUFBSUMsTUFBTSxHQUFHLEVBQUU7SUFFZixJQUFJO1FBQ0YsTUFBTUMsRUFBRSxHQUFHWixNQUFNLENBQUNZLEVBQUUsQ0FBQ2xCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa0IsZ0JBQWdCLENBQUM7UUFDbEQsTUFBTUMsVUFBVSxHQUFHRixFQUFFLENBQUNFLFVBQVUsQ0FBQ3BCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0Isa0JBQWtCLENBQUM7UUFFaEUsb0JBQW9CO1FBQ3BCSixNQUFNLEdBQUcsTUFBTUcsVUFBVSxDQUFDRSxJQUFJLENBQUNOLEtBQUssQ0FBQyxDQUFDTyxPQUFPLEVBQUU7SUFHL0MsOENBQThDO0lBQ2hELEVBQUUsT0FBT0MsQ0FBQyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixFQUFFRixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE9BQU9QLE1BQU07QUFDZixDQUFDO0FBRUQsTUFBTVUsVUFBVSxHQUFHLE9BQU8sRUFBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNoRCxJQUFJWixNQUFNO0lBRVYsSUFBSTtRQUNGLHNEQUFzRDtRQUV0RCxNQUFNQyxFQUFFLEdBQUdaLE1BQU0sQ0FBQ1ksRUFBRSxDQUFDbEIsT0FBTyxDQUFDQyxHQUFHLENBQUNrQixnQkFBZ0IsQ0FBQztRQUNsRCxNQUFNQyxVQUFVLEdBQUdGLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDcEIsT0FBTyxDQUFDQyxHQUFHLENBQUNvQixrQkFBa0IsQ0FBQztRQUNoRSwyQ0FBMkM7UUFFM0MsTUFBTVMsT0FBTyxHQUFHO1lBQUVGLEtBQUs7WUFBRUMsUUFBUTtTQUFFO1FBRW5DWixNQUFNLEdBQUcsTUFBTUcsVUFBVSxDQUFDVyxTQUFTLENBQUNELE9BQU8sQ0FBQztJQUM5QyxFQUFFLE9BQU9OLENBQUMsRUFBRTtRQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRUYsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxPQUFPUCxNQUFNO0FBQ2YsQ0FBQztBQUVELE1BQU1lLGlCQUFpQixHQUFHLE9BQU8sRUFBRUosS0FBSyxHQUFFSyxNQUFNLEdBQUUsR0FBSztJQUNyRCxJQUFJaEIsTUFBTTtJQUVWLElBQUk7UUFDRixNQUFNQyxFQUFFLEdBQUdaLE1BQU0sQ0FBQ1ksRUFBRSxDQUFDbEIsT0FBTyxDQUFDQyxHQUFHLENBQUNrQixnQkFBZ0IsQ0FBQztRQUNsRCxNQUFNQyxVQUFVLEdBQUdGLEVBQUUsQ0FBQ0UsVUFBVSxDQUFDcEIsT0FBTyxDQUFDQyxHQUFHLENBQUNvQixrQkFBa0IsQ0FBQztRQUVoRUosTUFBTSxHQUFHLE1BQU1HLFVBQVUsQ0FBQ2MsZ0JBQWdCLENBQUM7WUFBRU4sS0FBSztTQUFFLEVBQUU7WUFBRU8sSUFBSSxFQUFFRixNQUFNO1NBQUUsQ0FBQztJQUN6RSxFQUFFLE9BQU9ULENBQUMsRUFBRTtRQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRUYsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxPQUFPUCxNQUFNO0FBQ2YsQ0FBQztBQUVELE1BQU1tQixXQUFXLEdBQUc7SUFDbEJ6QixTQUFTO0lBQ1RFLFlBQVk7SUFDWkUsY0FBYztJQUNkWSxVQUFVO0lBQ1ZLLGlCQUFpQjtDQUNsQjtBQUVELGlFQUFlSSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWFwcC10ZW1wbGF0ZS8uL2xpYi9tb25nby1oZWxwZXIuanM/NTU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgU2VydmVyQXBpVmVyc2lvbiB9IGZyb20gXCJtb25nb2RiXCJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiXG5cbmNvbnN0IHNhbHRSb3VuZHMgPSBwYXJzZUludChwcm9jZXNzLmVudi5TQUxUX1JPVU5EUywgMTApXG5jb25zdCB1cmkgPSBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lk1PTkdPREJfVVNFUn06JHtwcm9jZXNzLmVudi5NT05HT0RCX1BBU1NXT1JEfUBjbHVzdGVyMC4wc2Z6Z3FsLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgXG5cblxuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwge1xuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgc2VydmVyQXBpOiBTZXJ2ZXJBcGlWZXJzaW9uLnYxLFxufSlcblxuY29uc3QgY29ubmVjdERiID0gKCkgPT4gY2xpZW50LmNvbm5lY3QoKVxuY29uc3QgZGlzY29ubmVjdERiID0gKCkgPT4gY2xpZW50LmNsb3NlKClcbmNvbnN0IGdldFVzZXJCeVF1ZXJ5ID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XG4gIGxldCByZXN1bHQgPSBbXVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIocHJvY2Vzcy5lbnYuTU9OR09EQl9EQVRBQkFTRSlcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihwcm9jZXNzLmVudi5NT05HT0RCX0NPTExFQ1RJT04pXG5cbiAgICAvL2NvbnNvbGUubG9nKHF1ZXJ5KVxuICAgIHJlc3VsdCA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZChxdWVyeSkudG9BcnJheSgpXG4gICAgXG5cbiAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCwgXCI8LS0tZ2V0VXNlckJ5UXVlcnktLS1cIilcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igb24gZ2V0dGluZyB1c2VyXCIsIGUpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuICBsZXQgcmVzdWx0XG5cbiAgdHJ5IHtcbiAgICAvL2NvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdFJvdW5kcylcblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKHByb2Nlc3MuZW52Lk1PTkdPREJfREFUQUJBU0UpXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24ocHJvY2Vzcy5lbnYuTU9OR09EQl9DT0xMRUNUSU9OKVxuICAgIC8vY29uc3QgbmV3VXNlciA9IHsgZW1haWwsIHBhc3N3b3JkOiBoYXNoIH1cblxuICAgIGNvbnN0IG5ld1VzZXIgPSB7IGVtYWlsLCBwYXNzd29yZCB9XG5cbiAgICByZXN1bHQgPSBhd2FpdCBjb2xsZWN0aW9uLmluc2VydE9uZShuZXdVc2VyKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvciBvbiBjcmVhdGluZyB1c2VyXCIsIGUpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IHVwZGF0ZVVzZXJCeUVtYWlsID0gYXN5bmMgKHsgZW1haWwsIHVwZGF0ZSB9KSA9PiB7XG4gIGxldCByZXN1bHRcblxuICB0cnkge1xuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKHByb2Nlc3MuZW52Lk1PTkdPREJfREFUQUJBU0UpXG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24ocHJvY2Vzcy5lbnYuTU9OR09EQl9DT0xMRUNUSU9OKVxuXG4gICAgcmVzdWx0ID0gYXdhaXQgY29sbGVjdGlvbi5maW5kT25lQW5kVXBkYXRlKHsgZW1haWwgfSwgeyAkc2V0OiB1cGRhdGUgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igb24gdXBkYXRpbmcgdXNlclwiLCBlKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBtb25nb0hlbHBlciA9IHtcbiAgY29ubmVjdERiLFxuICBkaXNjb25uZWN0RGIsXG4gIGdldFVzZXJCeVF1ZXJ5LFxuICBjcmVhdGVVc2VyLFxuICB1cGRhdGVVc2VyQnlFbWFpbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29IZWxwZXJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIlNlcnZlckFwaVZlcnNpb24iLCJiY3J5cHQiLCJzYWx0Um91bmRzIiwicGFyc2VJbnQiLCJwcm9jZXNzIiwiZW52IiwiU0FMVF9ST1VORFMiLCJ1cmkiLCJNT05HT0RCX1VTRVIiLCJNT05HT0RCX1BBU1NXT1JEIiwiY2xpZW50IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Iiwic2VydmVyQXBpIiwidjEiLCJjb25uZWN0RGIiLCJjb25uZWN0IiwiZGlzY29ubmVjdERiIiwiY2xvc2UiLCJnZXRVc2VyQnlRdWVyeSIsInF1ZXJ5IiwicmVzdWx0IiwiZGIiLCJNT05HT0RCX0RBVEFCQVNFIiwiY29sbGVjdGlvbiIsIk1PTkdPREJfQ09MTEVDVElPTiIsImZpbmQiLCJ0b0FycmF5IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsIm5ld1VzZXIiLCJpbnNlcnRPbmUiLCJ1cGRhdGVVc2VyQnlFbWFpbCIsInVwZGF0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCIkc2V0IiwibW9uZ29IZWxwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongo-helper.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/mongo-helper */ \"(api)/./lib/mongo-helper.js\");\n\n\n\n\n// https://next-auth.js.org/providers/credentials\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"E-Mail\",\n                    type: \"text\",\n                    placeholder: \"jsmith@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connectDb();\n                const [user] = await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getUserByQuery({\n                    email: req.body.username,\n                    password: req.body.password\n                });\n                //const user = await dynamoDb.getUserByQuery({ email: req.body.username, password: req.body.password })\n                //const user = { user: 'sergiomilla2019@gmail.com' }\n                await _lib_mongo_helper__WEBPACK_IMPORTED_MODULE_3__[\"default\"].disconnectDb();\n                //console.log(user, \"<--user--\")\n                if (user) {\n                    //const isCorrectPass = bcrypt.compareSync(req.body.password, user.password)\n                    //const isCorrectPass = true;\n                    //console.log(isCorrectPass, \"<--isCorrectPass--\")\n                    //if (isCorrectPass) {\n                    return user;\n                //} else {\n                //return null\n                //}\n                } else {\n                    return null;\n                }\n            }\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNpQztBQUN0QztBQUNxQjtBQUNoRCxpREFBaUQ7QUFJMUMsTUFBTUksV0FBVyxHQUFHO0lBQ3pCLGlEQUFpRDtJQUNqREMsU0FBUyxFQUFFO1FBQ1RKLHNFQUFtQixDQUFDO1lBQ2xCSyxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsV0FBVyxFQUFFO2dCQUNYQyxRQUFRLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxRQUFRO29CQUFFQyxJQUFJLEVBQUUsTUFBTTtvQkFBRUMsV0FBVyxFQUFFLG9CQUFvQjtpQkFBRTtnQkFDOUVDLFFBQVEsRUFBRTtvQkFBR0gsS0FBSyxFQUFFLFVBQVU7b0JBQUVDLElBQUksRUFBRSxVQUFVO2lCQUFFO2FBQ25EO1lBQ0QsTUFBTUcsU0FBUyxFQUFDTixXQUFXLEVBQUVPLEdBQUcsRUFBRTtnQkFDaEMsTUFBTVgsbUVBQWtCLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDLEdBQUcsTUFBTWIsd0VBQXVCLENBQUM7b0JBQUVlLEtBQUssRUFBRUosR0FBRyxDQUFDSyxJQUFJLENBQUNYLFFBQVE7b0JBQUVJLFFBQVEsRUFBRUUsR0FBRyxDQUFDSyxJQUFJLENBQUNQLFFBQVE7aUJBQUUsQ0FBQztnQkFFdkcsdUdBQXVHO2dCQUN2RyxvREFBb0Q7Z0JBQ3BELE1BQU1ULHNFQUFxQixFQUFFO2dCQUU3QixnQ0FBZ0M7Z0JBRWhDLElBQUlhLElBQUksRUFBRTtvQkFDUiw0RUFBNEU7b0JBQzVFLDZCQUE2QjtvQkFDN0Isa0RBQWtEO29CQUVsRCxzQkFBc0I7b0JBQ3BCLE9BQU9BLElBQUk7Z0JBQ2IsVUFBVTtnQkFDUixhQUFhO2dCQUNmLEdBQUc7Z0JBQ0wsT0FBTztvQkFDTCxPQUFPLElBQUk7Z0JBQ2IsQ0FBQztZQUNILENBQUM7U0FDRixDQUFDO0tBQ0g7Q0FDRjtBQUVELGlFQUFlaEIsZ0RBQVEsQ0FBQ0ksV0FBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWFwcC10ZW1wbGF0ZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0IGR5bmFtb0RiIGZyb20gJy4uLy4uLy4uL2xpYi9tb25nby1oZWxwZXInXG4vLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXG5cblxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJFLU1haWxcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImpzbWl0aEBleGFtcGxlLmNvbVwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7ICBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XG4gICAgICAgIGF3YWl0IGR5bmFtb0RiLmNvbm5lY3REYigpXG4gICAgICAgIGNvbnN0IFt1c2VyXSA9IGF3YWl0IGR5bmFtb0RiLmdldFVzZXJCeVF1ZXJ5KHsgZW1haWw6IHJlcS5ib2R5LnVzZXJuYW1lLCBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmQgfSlcblxuICAgICAgICAvL2NvbnN0IHVzZXIgPSBhd2FpdCBkeW5hbW9EYi5nZXRVc2VyQnlRdWVyeSh7IGVtYWlsOiByZXEuYm9keS51c2VybmFtZSwgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkIH0pXG4gICAgICAgIC8vY29uc3QgdXNlciA9IHsgdXNlcjogJ3Nlcmdpb21pbGxhMjAxOUBnbWFpbC5jb20nIH1cbiAgICAgICAgYXdhaXQgZHluYW1vRGIuZGlzY29ubmVjdERiKClcblxuICAgICAgICAvL2NvbnNvbGUubG9nKHVzZXIsIFwiPC0tdXNlci0tXCIpXG5cbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAvL2NvbnN0IGlzQ29ycmVjdFBhc3MgPSBiY3J5cHQuY29tcGFyZVN5bmMocmVxLmJvZHkucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgICAgLy9jb25zdCBpc0NvcnJlY3RQYXNzID0gdHJ1ZTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGlzQ29ycmVjdFBhc3MsIFwiPC0taXNDb3JyZWN0UGFzcy0tXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAvL2lmIChpc0NvcnJlY3RQYXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICAgIC8vfSBlbHNlIHtcbiAgICAgICAgICAgIC8vcmV0dXJuIG51bGxcbiAgICAgICAgICAvL31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImR5bmFtb0RiIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJjb25uZWN0RGIiLCJ1c2VyIiwiZ2V0VXNlckJ5UXVlcnkiLCJlbWFpbCIsImJvZHkiLCJkaXNjb25uZWN0RGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();