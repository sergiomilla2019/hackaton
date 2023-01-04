"use strict";
exports.id = 724;
exports.ids = [724];
exports.modules = {

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PrivateLayout_PrivateLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/CssBaseline"
var CssBaseline_ = __webpack_require__(4960);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/icons-material/MoveToInbox"
var MoveToInbox_ = __webpack_require__(8307);
var MoveToInbox_default = /*#__PURE__*/__webpack_require__.n(MoveToInbox_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/icons-material/Mail"
var Mail_ = __webpack_require__(9026);
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/icons-material/LineStyle"
var LineStyle_ = __webpack_require__(8204);
var LineStyle_default = /*#__PURE__*/__webpack_require__.n(LineStyle_);
// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(6076);
// EXTERNAL MODULE: external "@mui/icons-material/CalendarViewDay"
var CalendarViewDay_ = __webpack_require__(3120);
var CalendarViewDay_default = /*#__PURE__*/__webpack_require__.n(CalendarViewDay_);
;// CONCATENATED MODULE: ./components/PrivateLayout/Navigation.js























const MENU_ITEMS = [
    {
        title: "Notificaciones",
        Icon: (CalendarViewDay_default()),
        link: "/app/dashboard"
    },
    {
        title: "Settings",
        Icon: (CalendarViewDay_default()),
        link: "/app/settings"
    }
];
function Navigation(props) {
    const { window , drawerWidth , title  } = props;
    const [mobileOpen, setMobileOpen] = external_react_.useState(false);
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };
    const drawer = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                sx: {
                    display: "flex",
                    justifyContent: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((LineStyle_default()), {
                        sx: {
                            display: "flex",
                            mr: 1
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        noWrap: true,
                        sx: {
                            mr: 2,
                            display: "flex",
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: constants/* APP_NAME */.i
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                children: MENU_ITEMS.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                        disablePadding: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: item.link,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(item.Icon, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: item.title
                                    })
                                ]
                            })
                        })
                    }, item.title))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                children: [
                    "Logout"
                ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                        disablePadding: true,
                        onClick: react_.signOut,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                    children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    primary: text
                                })
                            ]
                        })
                    }, text))
            })
        ]
    });
    const container = window !== undefined ? ()=>window().document.body : undefined;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "fixed",
                sx: {
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`
                    },
                    ml: {
                        sm: `${drawerWidth}px`
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            "aria-label": "open drawer",
                            edge: "start",
                            onClick: handleDrawerToggle,
                            sx: {
                                mr: 2,
                                display: {
                                    sm: "none"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            noWrap: true,
                            component: "div",
                            children: title
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                component: "nav",
                sx: {
                    width: {
                        sm: drawerWidth
                    },
                    flexShrink: {
                        sm: 0
                    }
                },
                "aria-label": "mailbox folders",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                        container: container,
                        variant: "temporary",
                        open: mobileOpen,
                        onClose: handleDrawerToggle,
                        ModalProps: {
                            keepMounted: true
                        },
                        sx: {
                            display: {
                                xs: "block",
                                sm: "none"
                            },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth
                            }
                        },
                        children: drawer
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                        variant: "permanent",
                        sx: {
                            display: {
                                xs: "none",
                                sm: "block"
                            },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth
                            }
                        },
                        open: true,
                        children: drawer
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const PrivateLayout_Navigation = (Navigation);

;// CONCATENATED MODULE: ./components/PrivateLayout/PrivateLayout.js







const drawerWidth = 240;
const PrivateLayout = ({ children , title  })=>{
    const router = (0,router_.useRouter)();
    const { data: session , loading  } = (0,react_.useSession)();
    (0,external_react_.useEffect)(()=>{
        if (!session) {
            router.push("/login");
        }
    }, [
        session,
        router
    ]);
    if (!session || loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PrivateLayout_Navigation, {
                drawerWidth: drawerWidth,
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                component: "main",
                sx: {
                    flexGrow: 1,
                    p: 3,
                    width: {
                        sm: `calc(100% - ${drawerWidth}px)`
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {}),
                    children
                ]
            })
        ]
    });
};
/* harmony default export */ const PrivateLayout_PrivateLayout = (PrivateLayout);


/***/ })

};
;