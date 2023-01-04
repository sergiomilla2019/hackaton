exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 28:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "PublicLayout_container__QXvFV",
	"footer": "PublicLayout_footer__zj3I5",
	"footerInner": "PublicLayout_footerInner__EGjI8"
};


/***/ }),

/***/ 3399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5246);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_3__);




const Link = ({ children , href  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 5886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PublicLayout_PublicLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var icons_material_Menu_ = __webpack_require__(3365);
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/material/Tooltip"
var Tooltip_ = __webpack_require__(7229);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/icons-material/LineStyle"
var LineStyle_ = __webpack_require__(8204);
var LineStyle_default = /*#__PURE__*/__webpack_require__.n(LineStyle_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(6076);
;// CONCATENATED MODULE: ./components/PublicLayout/Navigation.jsx
// https://mui.com/material-ui/react-app-bar/



















const pages = [
    {
        title: "Home",
        link: "/"
    }, 
];
const settings = [
    {
        title: "Dashboard",
        link: "/app/dashboard"
    },
    {
        title: "Settings",
        link: "/app/settings"
    }, 
];
const signIn = [
    {
        title: "Sign-up",
        link: "/sign-up"
    },
    {
        title: "Login",
        link: "/login"
    }, 
];
const ResponsiveAppBar = ({ transparentNav  })=>{
    const router = (0,router_.useRouter)();
    const { data: session  } = (0,react_.useSession)();
    const [anchorElNav, setAnchorElNav] = external_react_.useState(null);
    const [anchorElUser, setAnchorElUser] = external_react_.useState(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "static",
        color: transparentNav ? "transparent" : "primary",
        style: transparentNav ? {
            boxShadow: "none"
        } : {},
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "lg",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((LineStyle_default()), {
                        sx: {
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        noWrap: true,
                        sx: {
                            mr: 2,
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: constants/* APP_NAME */.i
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleOpenNavMenu,
                                color: "inherit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                id: "menu-appbar",
                                anchorEl: anchorElNav,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                open: Boolean(anchorElNav),
                                onClose: handleCloseNavMenu,
                                sx: {
                                    display: {
                                        xs: "block",
                                        md: "none"
                                    }
                                },
                                children: [
                                    pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: page.link,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                selected: page.link === router.asPath,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    textAlign: "center",
                                                    children: page.title
                                                })
                                            })
                                        }, page.title)),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                                    signIn.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: item.link,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                selected: item.link === router.asPath,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    textAlign: "center",
                                                    children: item.title
                                                })
                                            })
                                        }, item.title))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((LineStyle_default()), {
                        sx: {
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h5",
                        noWrap: true,
                        sx: {
                            mr: 2,
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: constants/* APP_NAME */.i
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: page.link,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    selected: page.link === router.asPath,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        textAlign: "center",
                                        children: page.title
                                    })
                                })
                            }, page.title))
                    }),
                    !!session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            flexGrow: 0
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                                title: "Open settings",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    onClick: handleOpenUserMenu,
                                    sx: {
                                        p: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                        alt: "Remy Sharp",
                                        src: "/static/images/avatar/2.jpg"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                sx: {
                                    mt: "45px"
                                },
                                id: "menu-appbar",
                                anchorEl: anchorElUser,
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                open: Boolean(anchorElUser),
                                onClose: handleCloseUserMenu,
                                children: [
                                    settings.map((setting)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: setting.link,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                                selected: setting.link === router.asPath,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    textAlign: "center",
                                                    children: setting.title
                                                })
                                            })
                                        }, setting.title)),
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: react_.signOut,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            textAlign: "center",
                                            children: "Logout"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !session && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            flexGrow: 0,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: signIn.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: item.link,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        textAlign: "center",
                                        children: item.title
                                    })
                                })
                            }, item.title))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Navigation = (ResponsiveAppBar);

// EXTERNAL MODULE: ./components/PublicLayout/PublicLayout.module.css
var PublicLayout_module = __webpack_require__(28);
var PublicLayout_module_default = /*#__PURE__*/__webpack_require__.n(PublicLayout_module);
// EXTERNAL MODULE: ./components/Link/Link.js
var Link = __webpack_require__(3399);
;// CONCATENATED MODULE: ./components/PublicLayout/PublicLayout.jsx









const PublicLayout = ({ children , title , description , noAppNameInTitle , transparentNav  })=>{
    const pageTitle = `${title}${noAppNameInTitle ? "" : ` | ${constants/* APP_NAME */.i}`}`;
    const now = new Date();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: pageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                transparentNav: transparentNav
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                maxWidth: "lg",
                component: "main",
                className: (PublicLayout_module_default()).container,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
                component: "footer",
                sx: {
                    backgroundColor: "primary.main"
                },
                className: (PublicLayout_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                    maxWidth: "lg",
                    className: (PublicLayout_module_default()).footerInner,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                "\xa9 ",
                                now.getFullYear(),
                                " ",
                                constants/* APP_NAME */.i
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: "/privacy",
                            children: "Privacy"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const PublicLayout_PublicLayout = (PublicLayout);


/***/ })

};
;