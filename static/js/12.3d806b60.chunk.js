(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [12], {
        694: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "default", (function() {
                return fn
            }));
            var r = t(8),
                c = t(13),
                i = t(20),
                o = t(50),
                a = t(0),
                s = t.n(a),
                u = t(28),
                l = t(54),
                b = t(5),
                j = t.n(b),
                d = t(64),
                x = t(667);
            x.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            new x.a(1);
            var p = new x.a(2372500),
                O = t(2);

            function f() {
                var e = Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);
                return f = function() {
                    return e
                }, e
            }
            var m = O.e.div(f()),
                h = t(177),
                v = t(109),
                k = t(131),
                g = t(130),
                y = t(27),
                w = t(172),
                S = t(37);

            function T() {
                var e = Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n  }\n"]);
                return T = function() {
                    return e
                }, e
            }
            var C = O.e.div(T(), (function(e) {
                    return e.theme.colors.primary
                })),
                z = function(e) {
                    var n = e.onClick,
                        t = e.expanded;
                    return Object(r.jsxs)(C, {
                        "aria-label": "Hide or show expandable content",
                        role: "button",
                        onClick: function() {
                            return n()
                        },
                        children: [Object(r.jsx)(S.z, {
                            color: "primary",
                            bold: !0,
                            children: t ? "Hide" : "Details"
                        }), t ? Object(r.jsx)(S.k, {}) : Object(r.jsx)(S.j, {})]
                    })
                };
            z.defaultProps = {
                expanded: !1
            };
            var A = z,
                P = function(e) {
                    var n = e.quoteTokenAdresses,
                        t = e.quoteTokenSymbol,
                        r = e.tokenAddresses,
                        c = "BNB" === t ? "ETH" : n[1],
                        i = r[1];
                    return "".concat(c, "/").concat(i)
                };

            function q() {
                var e = Object(o.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ", ";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ", ";\n  }\n"]);
                return q = function() {
                    return e
                }, e
            }

            function B() {
                var e = Object(o.a)(["\n  margin-top: 24px;\n"]);
                return B = function() {
                    return e
                }, e
            }
            var E = O.e.div(B()),
                I = Object(O.e)(S.q)(q(), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.primary
                })),
                D = function(e) {
                    var n = e.isTokenOnly,
                        t = e.bscScanAddress,
                        c = e.removed,
                        i = e.totalValueFormated,
                        o = e.lpLabel,
                        a = e.quoteTokenAdresses,
                        s = e.quoteTokenSymbol,
                        u = e.tokenAddresses,
                        l = Object(w.a)(),
                        b = P({
                            quoteTokenAdresses: a,
                            quoteTokenSymbol: s,
                            tokenAddresses: u
                        });
                    return Object(r.jsxs)(E, {
                        children: [Object(r.jsxs)(S.m, {
                            justifyContent: "space-between",
                            children: [Object(r.jsxs)(S.z, {
                                children: [l(316, "Stake"), ":"]
                            }), Object(r.jsx)(I, {
                                href: n ? "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=".concat(u[1], "&use=v2") : "https://app.uniswap.org/#/add/v2/".concat(b),
                                children: o
                            })]
                        }), !c && Object(r.jsxs)(S.m, {
                            justifyContent: "space-between",
                            children: [Object(r.jsxs)(S.z, {
                                children: [l(23, "Total Liquidity"), ":"]
                            }), Object(r.jsx)(S.z, {
                                children: i
                            })]
                        }), Object(r.jsx)(S.m, {
                            justifyContent: "flex-start",
                            children: Object(r.jsx)(S.p, {
                                external: !0,
                                href: t,
                                bold: !1,
                                children: l(356, "View on EtherScan")
                            })
                        })]
                    })
                },
                F = function() {
                    return Object(r.jsx)(S.y, {
                        variant: "success",
                        outline: !0,
                        startIcon: Object(r.jsx)(S.B, {}),
                        children: "No Fees"
                    })
                };

            function L() {
                var e = Object(o.a)(["\n  margin-left: 4px;\n"]);
                return L = function() {
                    return e
                }, e
            }

            function N() {
                var e = Object(o.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]);
                return N = function() {
                    return e
                }, e
            }
            var G = Object(O.e)(S.m)(N()),
                M = Object(O.e)(S.y)(L()),
                Q = function(e) {
                    var n = e.lpLabel,
                        t = e.multiplier,
                        c = (e.risk, e.farmImage),
                        i = (e.tokenSymbol, e.depositFee),
                        o = -1 === n.indexOf("-");
                    return Object(r.jsxs)(G, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "12px",
                        children: [Object(r.jsx)("img", {
                            src: "/images/egg/".concat(c, ".png"),
                            alt: "ORB",
                            style: {
                                width: "5.5rem",
                                height: o ? "5.5rem" : "3rem"
                            }
                        }), " ", Object(r.jsxs)(S.m, {
                            flexDirection: "column",
                            alignItems: "flex-end",
                            children: [Object(r.jsxs)(S.n, {
                                mb: "4px",
                                children: [n, " "]
                            }), Object(r.jsxs)(S.m, {
                                justifyContent: "center",
                                children: [Object(r.jsx)(M, {
                                    children: t
                                }), 0 === i ? Object(r.jsx)(F, {}) : null]
                            })]
                        })]
                    })
                },
                H = t(3),
                R = t.n(H),
                W = t(12),
                X = t(672),
                U = t(671),
                V = (t(666), t(664)),
                J = t(665),
                $ = function(e) {
                    var n = Object(l.b)(),
                        t = Object(d.m)().account,
                        r = Object(J.c)();
                    return {
                        onStake: Object(a.useCallback)(function() {
                            var c = Object(W.a)(R.a.mark((function c(i) {
                                var o;
                                return R.a.wrap((function(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            return c.next = 2, Object(V.i)(r, e, i, t);
                                        case 2:
                                            o = c.sent, n(Object(g.a)(t)), console.info(o);
                                        case 5:
                                        case "end":
                                            return c.stop()
                                    }
                                }), c)
                            })));
                            return function(e) {
                                return c.apply(this, arguments)
                            }
                        }(), [t, n, r, e])
                    }
                },
                _ = function(e) {
                    var n = Object(l.b)(),
                        t = Object(d.m)().account,
                        r = Object(J.c)();
                    return {
                        onUnstake: Object(a.useCallback)(function() {
                            var c = Object(W.a)(R.a.mark((function c(i) {
                                var o;
                                return R.a.wrap((function(c) {
                                    for (;;) switch (c.prev = c.next) {
                                        case 0:
                                            return c.next = 2, Object(V.j)(r, e, i, t);
                                        case 2:
                                            o = c.sent, n(Object(g.a)(t)), console.info(o);
                                        case 5:
                                        case "end":
                                            return c.stop()
                                    }
                                }), c)
                            })));
                            return function(e) {
                                return c.apply(this, arguments)
                            }
                        }(), [t, n, r, e])
                    }
                },
                K = t(660);

            function Y() {
                var e = Object(o.a)(["\n  height: ", "px;\n  width: ", "px;\n"]);
                return Y = function() {
                    return e
                }, e
            }
            var Z = O.e.div(Y(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                ee = function(e) {
                    var n, t = e.size,
                        c = void 0 === t ? "md" : t,
                        i = Object(a.useContext)(O.a).spacing;
                    switch (c) {
                        case "lg":
                            n = i[6];
                            break;
                        case "sm":
                            n = i[2];
                            break;
                        case "md":
                        default:
                            n = i[4]
                    }
                    return Object(r.jsx)(Z, {
                        size: n
                    })
                };

            function ne() {
                var e = Object(o.a)(["\n  flex: 1;\n  text-align: center;\n"]);
                return ne = function() {
                    return e
                }, e
            }

            function te() {
                var e = Object(o.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px;\n"]);
                return te = function() {
                    return e
                }, e
            }
            var re = O.e.div(te(), (function(e) {
                    return e.theme.colors.primaryDark
                }), (function(e) {
                    return e.theme.spacing[4]
                })),
                ce = O.e.div(ne()),
                ie = function(e) {
                    var n = e.children,
                        t = s.a.Children.toArray(n).length;
                    return Object(r.jsx)(re, {
                        children: s.a.Children.map(n, (function(e, n) {
                            return Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsx)(ce, {
                                    children: e
                                }), n < t - 1 && Object(r.jsx)(ee, {})]
                            })
                        }))
                    })
                };

            function oe() {
                var e = Object(o.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ", ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);
                return oe = function() {
                    return e
                }, e
            }

            function ae() {
                var e = Object(o.a)(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  height: 72px;\n  padding: 0 ", "px;\n"]);
                return ae = function() {
                    return e
                }, e
            }
            var se = O.e.div(ae(), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.radii.default
                }), (function(e) {
                    return e.theme.spacing[3]
                })),
                ue = O.e.input(oe(), (function(e) {
                    return e.theme.colors.primary
                })),
                le = function(e) {
                    var n = e.endAdornment,
                        t = e.onChange,
                        c = e.placeholder,
                        i = e.startAdornment,
                        o = e.value;
                    return Object(r.jsxs)(se, {
                        children: [!!i && i, Object(r.jsx)(ue, {
                            placeholder: c,
                            value: o,
                            onChange: t
                        }), !!n && n]
                    })
                };

            function be() {
                var e = Object(o.a)(["\n  color: ", ";\n  font-weight: 700;\n"]);
                return be = function() {
                    return e
                }, e
            }

            function je() {
                var e = Object(o.a)(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);
                return je = function() {
                    return e
                }, e
            }

            function de() {
                var e = Object(o.a)(["\n  align-items: center;\n  display: flex;\n"]);
                return de = function() {
                    return e
                }, e
            }

            function xe() {
                var e = Object(o.a)(["\n  width: ", "px;\n"]);
                return xe = function() {
                    return e
                }, e
            }

            function pe() {
                var e = Object(o.a)([""]);
                return pe = function() {
                    return e
                }, e
            }
            var Oe = O.e.div(pe()),
                fe = O.e.div(xe(), (function(e) {
                    return e.theme.spacing[3]
                })),
                me = O.e.div(de()),
                he = O.e.div(je(), (function(e) {
                    return e.theme.colors.primary
                })),
                ve = O.e.span(be(), (function(e) {
                    return e.theme.colors.primary
                })),
                ke = function(e) {
                    var n = e.max,
                        t = e.symbol,
                        c = e.onChange,
                        i = e.onSelectMax,
                        o = e.value,
                        a = e.depositFeeBP,
                        s = void 0 === a ? 0 : a,
                        u = Object(w.a)();
                    return Object(r.jsxs)(Oe, {
                        children: [Object(r.jsxs)(he, {
                            children: [n.toLocaleString(), " ", t, " ", u(526, "Available")]
                        }), Object(r.jsx)(le, {
                            endAdornment: Object(r.jsxs)(me, {
                                children: [Object(r.jsx)(ve, {
                                    children: t
                                }), Object(r.jsx)(fe, {}), Object(r.jsx)("div", {
                                    children: Object(r.jsx)(S.d, {
                                        size: "sm",
                                        onClick: i,
                                        children: u(452, "Max")
                                    })
                                })]
                            }),
                            onChange: c,
                            placeholder: "0",
                            value: o
                        }), s > 0 ? Object(r.jsxs)(he, {
                            children: [u(10001, "Deposit Fee"), ": ", new x.a(o || 0).times(s / 1e4).toString(), " ", t]
                        }) : null]
                    })
                },
                ge = function(e) {
                    var n = e.max,
                        t = e.onConfirm,
                        c = e.onDismiss,
                        o = e.tokenName,
                        s = void 0 === o ? "" : o,
                        u = e.depositFeeBP,
                        l = void 0 === u ? 0 : u,
                        b = Object(a.useState)(""),
                        j = Object(i.a)(b, 2),
                        d = j[0],
                        x = j[1],
                        p = Object(a.useState)(!1),
                        O = Object(i.a)(p, 2),
                        f = O[0],
                        m = O[1],
                        h = Object(w.a)(),
                        v = Object(a.useMemo)((function() {
                            return Object(K.b)(n)
                        }), [n]),
                        k = Object(a.useCallback)((function(e) {
                            x(e.currentTarget.value)
                        }), [x]),
                        g = Object(a.useCallback)((function() {
                            x(v)
                        }), [v, x]);
                    return Object(r.jsxs)(S.t, {
                        title: "".concat(h(316, "Deposit"), " ").concat(s, " Tokens"),
                        onDismiss: c,
                        children: [Object(r.jsx)(ke, {
                            value: d,
                            onSelectMax: g,
                            onChange: k,
                            max: v,
                            symbol: s,
                            depositFeeBP: l
                        }), Object(r.jsxs)(ie, {
                            children: [Object(r.jsx)(S.d, {
                                variant: "secondary",
                                onClick: c,
                                children: h(462, "Cancel")
                            }), Object(r.jsx)(S.d, {
                                disabled: f,
                                onClick: Object(W.a)(R.a.mark((function e() {
                                    return R.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return m(!0), e.next = 3, t(d);
                                            case 3:
                                                m(!1), c();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: f ? h(488, "Pending Confirmation") : h(464, "Confirm")
                            })]
                        })]
                    })
                },
                ye = function(e) {
                    var n = e.onConfirm,
                        t = e.onDismiss,
                        c = e.max,
                        o = e.tokenName,
                        s = void 0 === o ? "" : o,
                        u = Object(a.useState)(""),
                        l = Object(i.a)(u, 2),
                        b = l[0],
                        j = l[1],
                        d = Object(a.useState)(!1),
                        x = Object(i.a)(d, 2),
                        p = x[0],
                        O = x[1],
                        f = Object(w.a)(),
                        m = Object(a.useMemo)((function() {
                            return Object(K.b)(c)
                        }), [c]),
                        h = Object(a.useCallback)((function(e) {
                            j(e.currentTarget.value)
                        }), [j]),
                        v = Object(a.useCallback)((function() {
                            j(m)
                        }), [m, j]);
                    return Object(r.jsxs)(S.t, {
                        title: "Withdraw ".concat(s),
                        onDismiss: t,
                        children: [Object(r.jsx)(ke, {
                            onSelectMax: v,
                            onChange: h,
                            value: b,
                            max: m,
                            symbol: s
                        }), Object(r.jsxs)(ie, {
                            children: [Object(r.jsx)(S.d, {
                                variant: "secondary",
                                onClick: t,
                                children: f(462, "Cancel")
                            }), Object(r.jsx)(S.d, {
                                disabled: p,
                                onClick: Object(W.a)(R.a.mark((function e() {
                                    return R.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return O(!0), e.next = 3, n(b);
                                            case 3:
                                                O(!1), t();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: p ? f(488, "Pending Confirmation") : f(464, "Confirm")
                            })]
                        })]
                    })
                };

            function we() {
                var e = Object(o.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]);
                return we = function() {
                    return e
                }, e
            }
            var Se = O.e.div(we()),
                Te = function(e) {
                    var n = e.stakedBalance,
                        t = e.tokenBalance,
                        c = e.tokenName,
                        o = e.pid,
                        a = e.depositFeeBP,
                        s = Object(w.a)(),
                        u = $(o).onStake,
                        l = _(o).onUnstake,
                        b = Object(K.a)(n),
                        j = b.toLocaleString(),
                        d = Object(S.E)(Object(r.jsx)(ge, {
                            max: t,
                            onConfirm: u,
                            tokenName: c,
                            depositFeeBP: a
                        })),
                        x = Object(i.a)(d, 1)[0],
                        p = Object(S.E)(Object(r.jsx)(ye, {
                            max: n,
                            onConfirm: l,
                            tokenName: c
                        })),
                        O = Object(i.a)(p, 1)[0];
                    return Object(r.jsxs)(S.m, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [Object(r.jsx)(S.n, {
                            color: 0 === b ? "textDisabled" : "text",
                            children: j
                        }), 0 === b ? Object(r.jsx)(S.d, {
                            onClick: x,
                            children: s(999, "Stake")
                        }) : Object(r.jsxs)(Se, {
                            children: [Object(r.jsx)(S.o, {
                                variant: "tertiary",
                                onClick: O,
                                mr: "6px",
                                children: Object(r.jsx)(S.s, {
                                    color: "primary"
                                })
                            }), Object(r.jsx)(S.o, {
                                variant: "tertiary",
                                onClick: x,
                                children: Object(r.jsx)(S.a, {
                                    color: "primary"
                                })
                            })]
                        })]
                    })
                },
                Ce = t(670);

            function ze() {
                var e = Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]);
                return ze = function() {
                    return e
                }, e
            }
            var Ae = O.e.div(ze()),
                Pe = function(e) {
                    var n = e.earnings,
                        t = e.pid,
                        c = Object(w.a)(),
                        o = Object(a.useState)(!1),
                        s = Object(i.a)(o, 2),
                        u = s[0],
                        l = s[1],
                        b = Object(Ce.b)(t).onReward,
                        j = $(t).onStake,
                        d = Object(K.a)(n),
                        x = d.toLocaleString();
                    return Object(r.jsxs)(S.m, {
                        mb: "8px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [Object(r.jsx)(S.n, {
                            color: 0 === d ? "textDisabled" : "text",
                            children: x
                        }), Object(r.jsxs)(Ae, {
                            children: [12 === t ? Object(r.jsx)(S.d, {
                                disabled: 0 === d || u,
                                size: "sm",
                                variant: "secondary",
                                marginBottom: "15px",
                                onClick: Object(W.a)(R.a.mark((function e() {
                                    return R.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return l(!0), e.next = 3, j(d.toString());
                                            case 3:
                                                l(!1);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: c(999, "Compound")
                            }) : null, Object(r.jsx)(S.d, {
                                disabled: 0 === d || u,
                                onClick: Object(W.a)(R.a.mark((function e() {
                                    return R.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return l(!0), e.next = 3, b();
                                            case 3:
                                                l(!1);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))),
                                children: c(999, "Harvest")
                            })]
                        })]
                    })
                };

            function qe() {
                var e = Object(o.a)(["\n  padding-top: 16px;\n"]);
                return qe = function() {
                    return e
                }, e
            }
            var Be = O.e.div(qe()),
                Ee = function(e) {
                    var n = e.farm,
                        t = e.ethereum,
                        c = e.account,
                        o = Object(w.a)(),
                        s = Object(a.useState)(!1),
                        u = Object(i.a)(s, 2),
                        b = u[0],
                        j = u[1],
                        x = Object(v.b)(n.pid),
                        p = x.pid,
                        O = x.lpAddresses,
                        f = x.tokenAddresses,
                        m = x.isTokenOnly,
                        h = x.depositFeeBP,
                        k = Object(v.c)(p),
                        y = k.allowance,
                        T = k.tokenBalance,
                        C = k.stakedBalance,
                        z = k.earnings,
                        A = O[1],
                        P = f[1],
                        q = n.lpSymbol.toUpperCase(),
                        B = c && y && y.isGreaterThan(0),
                        E = function(e) {
                            var n = Object(l.b)(),
                                t = Object(d.m)().account,
                                r = Object(J.c)();
                            return {
                                onApprove: Object(a.useCallback)(Object(W.a)(R.a.mark((function c() {
                                    var i;
                                    return R.a.wrap((function(c) {
                                        for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                return c.prev = 0, c.next = 3, Object(V.a)(e, r, t);
                                            case 3:
                                                return i = c.sent, n(Object(g.a)(t)), c.abrupt("return", i);
                                            case 8:
                                                return c.prev = 8, c.t0 = c.catch(0), c.abrupt("return", !1);
                                            case 11:
                                            case "end":
                                                return c.stop()
                                        }
                                    }), c, null, [
                                        [0, 8]
                                    ])
                                }))), [t, n, e, r])
                            }
                        }(Object(a.useMemo)((function() {
                            return m ? Object(X.a)(t, P) : Object(X.a)(t, A)
                        }), [t, A, P, m])).onApprove,
                        I = Object(a.useCallback)(Object(W.a)(R.a.mark((function e() {
                            return R.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, j(!0), e.next = 4, E();
                                    case 4:
                                        j(!1), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error(e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))), [E]);
                    return Object(r.jsxs)(Be, {
                        children: [Object(r.jsxs)(S.m, {
                            children: [Object(r.jsx)(S.z, {
                                bold: !0,
                                color: "secondary",
                                fontSize: "12px",
                                pr: "3px",
                                children: "ORB "
                            }), Object(r.jsx)(S.z, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontSize: "12px",
                                children: o(999, "Earned")
                            })]
                        }), Object(r.jsx)(Pe, {
                            earnings: z,
                            pid: p
                        }), Object(r.jsxs)(S.m, {
                            children: [Object(r.jsx)(S.z, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "secondary",
                                fontSize: "12px",
                                pr: "3px",
                                children: q
                            }), Object(r.jsx)(S.z, {
                                bold: !0,
                                textTransform: "uppercase",
                                color: "textSubtle",
                                fontSize: "12px",
                                children: o(999, "Staked")
                            })]
                        }), c ? B ? Object(r.jsx)(Te, {
                            stakedBalance: C,
                            tokenBalance: T,
                            tokenName: q,
                            pid: p,
                            depositFeeBP: h
                        }) : Object(r.jsx)(S.d, {
                            mt: "8px",
                            fullWidth: !0,
                            disabled: b,
                            onClick: I,
                            children: o(999, "Approve Contract")
                        }) : Object(r.jsx)(U.a, {
                            mt: "8px",
                            fullWidth: !0
                        })]
                    })
                },
                Ie = function(e) {
                    var n, t = e.numberOfDays,
                        r = e.farmApy / 100,
                        c = t / 365,
                        i = 1e3 / e.cakePrice,
                        o = i * Math.pow(1 + r / 365, 365 * c);
                    return n = o - i, Math.round(100 * n) / 100
                },
                De = function(e) {
                    return (e.amountEarned / e.amountInvested * 100).toFixed(2)
                };

            function Fe() {
                var e = Object(o.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]);
                return Fe = function() {
                    return e
                }, e
            }

            function Le() {
                var e = Object(o.a)(["\n  margin-bottom: '10px';\n"]);
                return Le = function() {
                    return e
                }, e
            }

            function Ne() {
                var e = Object(o.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]);
                return Ne = function() {
                    return e
                }, e
            }
            var Ge = O.e.div(Ne()),
                Me = O.e.div(Le()),
                Qe = Object(O.e)(S.z)(Fe()),
                He = function(e) {
                    var n = e.onDismiss,
                        t = (e.lpLabel, e.quoteTokenAdresses),
                        c = e.quoteTokenSymbol,
                        i = e.tokenAddresses,
                        o = e.cakePrice,
                        a = e.apy,
                        s = Object(w.a)(),
                        u = (P({
                            quoteTokenAdresses: t,
                            quoteTokenSymbol: c,
                            tokenAddresses: i
                        }), a.times(new j.a(100)).toNumber()),
                        l = 1e3 / o.toNumber(),
                        b = Ie({
                            numberOfDays: 1,
                            farmApy: u,
                            cakePrice: o
                        }),
                        d = Ie({
                            numberOfDays: 7,
                            farmApy: u,
                            cakePrice: o
                        }),
                        x = Ie({
                            numberOfDays: 30,
                            farmApy: u,
                            cakePrice: o
                        }),
                        p = Ie({
                            numberOfDays: 365,
                            farmApy: u,
                            cakePrice: o
                        });
                    return Object(r.jsxs)(S.t, {
                        title: "ROI",
                        onDismiss: n,
                        children: [Object(r.jsxs)(Ge, {
                            children: [Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: s(999, "Timeframe")
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: s(999, "ROI")
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    fontSize: "12px",
                                    bold: !0,
                                    color: "textSubtle",
                                    textTransform: "uppercase",
                                    mb: "20px",
                                    children: "ORB per $1000 "
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    children: "1d"
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsxs)(S.z, {
                                    children: [De({
                                        amountEarned: b,
                                        amountInvested: l
                                    }), "%"]
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    children: b
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    children: "7d"
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsxs)(S.z, {
                                    children: [De({
                                        amountEarned: d,
                                        amountInvested: l
                                    }), "%"]
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    children: d
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    children: "30d"
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsxs)(S.z, {
                                    children: [De({
                                        amountEarned: x,
                                        amountInvested: l
                                    }), "%"]
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    children: x
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    children: "365d(APY)"
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsxs)(S.z, {
                                    children: [De({
                                        amountEarned: p,
                                        amountInvested: l
                                    }), "%"]
                                })
                            }), Object(r.jsx)(Me, {
                                children: Object(r.jsx)(S.z, {
                                    children: p
                                })
                            })]
                        }), Object(r.jsx)(Qe, {
                            fontSize: "12px",
                            color: "textSubtle",
                            children: s(999, "Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")
                        }), Object(r.jsx)(S.m, {
                            justifyContent: "center",
                            children: Object(r.jsxs)(S.q, {
                                href: "{``}",
                                children: [" ", s(999, "Get"), " ORB "]
                            })
                        })]
                    })
                },
                Re = function(e) {
                    var n = e.lpLabel,
                        t = e.quoteTokenAdresses,
                        c = e.quoteTokenSymbol,
                        o = e.tokenAddresses,
                        a = e.cakePrice,
                        s = e.apy,
                        u = Object(S.E)(Object(r.jsx)(He, {
                            lpLabel: n,
                            quoteTokenAdresses: t,
                            quoteTokenSymbol: c,
                            tokenAddresses: o,
                            cakePrice: a,
                            apy: s
                        })),
                        l = Object(i.a)(u, 1)[0];
                    return Object(r.jsx)(S.o, {
                        onClick: l,
                        variant: "text",
                        size: "sm",
                        ml: "4px",
                        children: Object(r.jsx)(S.g, {})
                    })
                };

            function We() {
                var e = Object(o.a)(["\n  height: ", ";\n  overflow: hidden;\n"]);
                return We = function() {
                    return e
                }, e
            }

            function Xe() {
                var e = Object(o.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"]);
                return Xe = function() {
                    return e
                }, e
            }

            function Ue() {
                var e = Object(o.a)(["\n  align-self: baseline;\n  background: ", ";\n  border-radius: 8px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"]);
                return Ue = function() {
                    return e
                }, e
            }

            function Ve() {
                var e = Object(o.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: ", " 2s linear infinite;\n  // border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);
                return Ve = function() {
                    return e
                }, e
            }

            function Je() {
                var e = Object(o.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);
                return Je = function() {
                    return e
                }, e
            }
            var $e = Object(O.f)(Je()),
                _e = O.e.div(Ve(), $e),
                Ke = O.e.div(Ue(), (function(e) {
                    return e.theme.card.background
                })),
                Ye = O.e.div(Xe(), (function(e) {
                    return e.theme.colors.borderColor
                })),
                Ze = O.e.div(We(), (function(e) {
                    return e.expanded ? "100%" : "0px"
                })),
                en = function(e) {
                    var n = e.farm,
                        t = e.removed,
                        c = e.cakePrice,
                        o = e.btcPrice,
                        s = e.bnbPrice,
                        u = e.ethereum,
                        l = e.account,
                        b = Object(w.a)(),
                        d = Object(a.useState)(!1),
                        x = Object(i.a)(d, 2),
                        p = x[0],
                        O = x[1],
                        f = n.isTokenOnly ? n.tokenSymbol.toLowerCase() : "".concat(n.lpSymbol.toLowerCase()),
                        m = Object(a.useMemo)((function() {
                            return n.lpTotalInQuoteToken ? n.quoteTokenSymbol === y.b.BNB ? s.times(n.lpTotalInQuoteToken) : n.quoteTokenSymbol === y.b.CAKE ? c.times(n.lpTotalInQuoteToken) : n.quoteTokenSymbol === y.b.BTC ? (console.log("btcPrice", o), o.times(n.lpTotalInQuoteToken)) : n.lpTotalInQuoteToken : null
                        }), [s, c, n.lpTotalInQuoteToken, n.quoteTokenSymbol, o]),
                        h = m ? "$".concat(Number(m).toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        })) : "-",
                        v = n.lpSymbol,
                        k = n.apy && n.apy.times(new j.a(100)).toNumber().toLocaleString(void 0, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }),
                        g = n.quoteTokenAdresses,
                        T = n.quoteTokenSymbol,
                        C = n.tokenAddresses,
                        z = n.risk;
                    return Object(r.jsxs)(Ke, {
                        children: ["ORB" === n.tokenSymbol && Object(r.jsx)(_e, {}), Object(r.jsx)(Q, {
                            lpLabel: v,
                            multiplier: n.multiplier,
                            risk: z,
                            depositFee: n.depositFeeBP,
                            farmImage: f,
                            tokenSymbol: n.tokenSymbol
                        }), !t && Object(r.jsxs)(S.m, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(r.jsxs)(S.z, {
                                children: [b(352, "APR"), ":"]
                            }), Object(r.jsx)(S.z, {
                                bold: !0,
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: n.apy ? Object(r.jsxs)(r.Fragment, {
                                    children: [Object(r.jsx)(Re, {
                                        lpLabel: v,
                                        quoteTokenAdresses: g,
                                        quoteTokenSymbol: T,
                                        tokenAddresses: C,
                                        cakePrice: c,
                                        apy: n.apy
                                    }), k, "%"]
                                }) : Object(r.jsx)(S.w, {
                                    height: 24,
                                    width: 80
                                })
                            })]
                        }), Object(r.jsxs)(S.m, {
                            justifyContent: "space-between",
                            children: [Object(r.jsxs)(S.z, {
                                children: [b(318, "Earn"), ":"]
                            }), Object(r.jsxs)(S.z, {
                                bold: !0,
                                children: ["ORB", " "]
                            })]
                        }), n.platfrom ? Object(r.jsxs)(S.m, {
                            justifyContent: "space-between",
                            children: [Object(r.jsx)(S.z, {
                                children: "DEX:"
                            }), Object(r.jsxs)(S.z, {
                                bold: !0,
                                children: [n.platfrom, " "]
                            })]
                        }) : "", Object(r.jsxs)(S.m, {
                            justifyContent: "space-between",
                            children: [Object(r.jsxs)(S.z, {
                                style: {
                                    fontSize: "24px"
                                },
                                children: [b(10001, "Deposit Fee"), ":"]
                            }), Object(r.jsxs)(S.z, {
                                bold: !0,
                                style: {
                                    fontSize: "24px"
                                },
                                children: [n.depositFeeBP / 100, "%"]
                            })]
                        }), Object(r.jsx)(Ee, {
                            farm: n,
                            ethereum: u,
                            account: l
                        }), Object(r.jsx)(Ye, {}), Object(r.jsx)(A, {
                            onClick: function() {
                                return O(!p)
                            },
                            expanded: p
                        }), Object(r.jsx)(Ze, {
                            expanded: p,
                            children: Object(r.jsx)(D, {
                                removed: t,
                                isTokenOnly: n.isTokenOnly,
                                bscScanAddress: n.isTokenOnly ? "https://etherscan.io/token/".concat(n.tokenAddresses[1]) : "https://etherscan.io/token/".concat(n.lpAddresses[1]),
                                totalValueFormated: h,
                                lpLabel: v,
                                quoteTokenAdresses: g,
                                quoteTokenSymbol: T,
                                tokenAddresses: C
                            })
                        })]
                    })
                },
                nn = t(73);

            function tn() {
                var e = Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  ", " {\n    margin-left: 8px;\n  }\n"]);
                return tn = function() {
                    return e
                }, e
            }

            function rn() {
                var e = Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n  flex-direction: column;\n  height: 6rem;\n"]);
                return rn = function() {
                    return e
                }, e
            }
            var cn = function(e) {
                    var n = e.stakedOnly,
                        t = e.setStakedOnly,
                        c = Object(u.g)(),
                        i = c.url,
                        o = c.isExact,
                        a = Object(w.a)();
                    return Object(r.jsxs)(on, {
                        children: [Object(r.jsxs)(an, {
                            style: {
                                width: "12rem",
                                display: "flex",
                                justifyContent: "space-between"
                            },
                            children: [Object(r.jsxs)(S.z, {
                                children: [" ", a(699, "Staked only")]
                            }), Object(r.jsx)(S.A, {
                                checked: n,
                                onChange: function() {
                                    return t(!n)
                                }
                            })]
                        }), Object(r.jsxs)(S.e, {
                            activeIndex: o ? 0 : 1,
                            size: "sm",
                            children: [Object(r.jsx)(S.f, {
                                as: nn.b,
                                to: "".concat(i),
                                children: a(698, "Active")
                            }), Object(r.jsx)(S.f, {
                                as: nn.b,
                                to: "".concat(i, "/history"),
                                children: a(700, "Inactive")
                            })]
                        })]
                    })
                },
                on = O.e.div(rn()),
                an = O.e.div(tn(), S.z);

            function sn() {
                var e = Object(o.a)(["\n   {\n    ", " {\n      display: block;\n    }\n    display: none;\n  }\n"]);
                return sn = function() {
                    return e
                }, e
            }

            function un() {
                var e = Object(o.a)(["\n  ", " {\n    display: block;\n  }\n  display: none;\n"]);
                return un = function() {
                    return e
                }, e
            }

            function ln() {
                var e = Object(o.a)(["\n  color: ", ";\n  text-align: center;\n"]);
                return ln = function() {
                    return e
                }, e
            }

            function bn() {
                var e = Object(o.a)(["\n  ", " {\n    color: ", ";\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-top: 0;\n  }\n  color: ", ";\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-top: 1.5rem;\n  text-align: center;\n"]);
                return bn = function() {
                    return e
                }, e
            }

            function jn() {
                var e = Object(o.a)(["\n  ", " {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    background: ", ";\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    border-radius: 8px;\n  }\n  background: ", ";\n  flex-direction: column;\n  border-radius: 8px;\n  height: 15rem;\n"]);
                return jn = function() {
                    return e
                }, e
            }
            var dn = O.e.div(jn(), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.colors.card
                })),
                xn = O.e.div(bn(), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.colors.textSubtle
                }), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                pn = O.e.div(ln(), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                On = O.e.div(un(), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                fn = (O.e.div(sn(), (function(e) {
                    return e.theme.mediaQueries.sm
                })), function(e) {
                    var n = Object(u.g)().path,
                        t = Object(w.a)(),
                        o = Object(v.d)(),
                        s = Object(v.g)(),
                        b = Object(v.a)(),
                        x = Object(v.f)(),
                        O = Object(d.m)(),
                        f = O.account,
                        S = O.ethereum,
                        T = e.tokenMode,
                        C = Object(l.b)(),
                        z = Object(k.a)().fastRefresh;
                    Object(a.useEffect)((function() {
                        f && C(Object(g.a)(f))
                    }), [f, C, z]);
                    var A = Object(a.useState)(!1),
                        P = Object(i.a)(A, 2),
                        q = P[0],
                        B = P[1],
                        E = o.filter((function(e) {
                            return !!e.isTokenOnly === !!T && "0X" !== e.multiplier
                        })),
                        I = o.filter((function(e) {
                            return !!e.isTokenOnly === !!T && "0X" === e.multiplier
                        })),
                        D = E.filter((function(e) {
                            return e.userData && new j.a(e.userData.stakedBalance).isGreaterThan(0)
                        })),
                        F = Object(a.useCallback)((function(e, n) {
                            return e.map((function(e) {
                                var n = new j.a(e.eggPerBlock || 1).times(new j.a(e.poolWeight)).div(new j.a(10).pow(18)).times(p),
                                    t = s.times(n),
                                    r = new j.a(e.lpTotalInQuoteToken || 0);
                                return e.quoteTokenSymbol === y.b.BNB && (r = r.times(x)), e.quoteTokenSymbol === y.b.BTC && (r = r.times(b)), r.comparedTo(0) > 0 && (t = t.div(r)), Object(c.a)(Object(c.a)({}, e), {}, {
                                    apy: t
                                })
                            })).map((function(e) {
                                return Object(r.jsx)(en, {
                                    farm: e,
                                    removed: n,
                                    bnbPrice: x,
                                    cakePrice: s,
                                    btcPrice: b,
                                    ethereum: S,
                                    account: f
                                }, e.pid)
                            }))
                        }), [x, f, s, b, S]);
                    return Object(r.jsxs)(h.a, {
                        children: [Object(r.jsxs)(dn, {
                            children: [Object(r.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [Object(r.jsx)(On, {
                                    children: Object(r.jsx)("img", {
                                        src: "/images/GETh.png",
                                        alt: "logo",
                                        style: {
                                            width: "5rem"
                                        }
                                    })
                                }), Object(r.jsxs)("div", {
                                    style: {
                                        paddingLeft: "1rem"
                                    },
                                    children: [Object(r.jsx)(xn, {
                                        children: T ? t(10002, "Stake VOLT AI to earn Passive Income") : t(320, "Stake LP tokens to earn ORB")
                                    }), Object(r.jsx)(pn, {})]
                                })]
                            }), Object(r.jsx)("div", {
                                style: {
                                    paddingTop: "2rem"
                                },
                                children: Object(r.jsx)(cn, {
                                    stakedOnly: q,
                                    setStakedOnly: B
                                })
                            })]
                        }), Object(r.jsx)("div", {
                            children: Object(r.jsxs)(m, {
                                style: {
                                    marginTop: "3rem"
                                },
                                children: [Object(r.jsx)(u.a, {
                                    exact: !0,
                                    path: "".concat(n),
                                    children: F(q ? D : E, !1)
                                }), Object(r.jsx)(u.a, {
                                    exact: !0,
                                    path: "".concat(n, "/history"),
                                    children: F(I, !0)
                                })]
                            })
                        })]
                    })
                })
        }
    }
]);
//# sourceMappingURL=12.3d806b60.chunk.js.map