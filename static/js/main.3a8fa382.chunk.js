(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [4], {
        104: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return A
            })), n.d(t, "b", (function() {
                return B
            }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                u = n(13),
                s = n(51),
                o = n(90),
                p = n(57),
                c = n(20),
                d = n(5),
                l = n.n(d),
                y = n(60),
                f = n(71),
                b = n(31),
                m = n(38),
                T = n(27),
                v = function() {
                    var e = Object(r.a)(i.a.mark((function e() {
                        var t;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(p.a.map(function() {
                                        var e = Object(r.a)(i.a.mark((function e(t) {
                                            var n, a, r, s, o, p, d, v, w, O, x, j, h, g, k, C, D, A, B, S, M, I, _, F;
                                            return i.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return n = t.lpAddresses[1], a = [{
                                                            address: t.tokenAddresses[1],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.quoteTokenAdresses[1],
                                                            name: "balanceOf",
                                                            params: [n]
                                                        }, {
                                                            address: t.isTokenOnly ? t.tokenAddresses[1] : n,
                                                            name: "balanceOf",
                                                            params: [Object(m.d)()]
                                                        }, {
                                                            address: n,
                                                            name: "totalSupply"
                                                        }, {
                                                            address: t.tokenAddresses[1],
                                                            name: "decimals"
                                                        }, {
                                                            address: t.quoteTokenAdresses[1],
                                                            name: "decimals"
                                                        }], e.next = 4, Object(b.a)(y, a);
                                                    case 4:
                                                        return r = e.sent, s = Object(c.a)(r, 6), o = s[0], p = s[1], d = s[2], v = s[3], w = s[4], O = s[5], t.isTokenOnly ? (x = new l.a(d).div(new l.a(10).pow(w)), h = t.tokenSymbol === T.b.BUSD && t.quoteTokenSymbol === T.b.BUSD ? new l.a(1) : new l.a(p).div(new l.a(o)), j = x.times(h), g = h.times(new l.a(10).pow(w)).div(new l.a(10).pow(O))) : (k = new l.a(d).div(new l.a(v)), j = new l.a(p).div(new l.a(10).pow(18)).times(new l.a(2)).times(k), x = new l.a(o).div(new l.a(10).pow(w)).times(k), C = new l.a(p).div(new l.a(10).pow(O)).times(k), h = x.comparedTo(0) > 0 ? C.div(x) : new l.a(p).div(new l.a(o)).times(new l.a(10).pow(w - O)), D = new l.a(w).plus(new l.a(O)), g = O > 6 ? j.times(new l.a(10).pow(w - O)).div(new l.a(d)).times(new l.a(10).pow(new l.a(D).div(new l.a(2)))) : j.times(new l.a(10).pow(18)).div(new l.a(d)).times(new l.a(10).pow(new l.a(D).div(new l.a(2))))), e.next = 15, Object(b.a)(f, [{
                                                            address: Object(m.d)(),
                                                            name: "poolInfo",
                                                            params: [t.pid]
                                                        }, {
                                                            address: Object(m.d)(),
                                                            name: "totalAllocPoint"
                                                        }, {
                                                            address: Object(m.d)(),
                                                            name: "GETHPerBlock"
                                                        }]);
                                                    case 15:
                                                        return A = e.sent, B = Object(c.a)(A, 3), S = B[0], M = B[1], I = B[2], _ = new l.a(S.allocPoint._hex), F = _.div(new l.a(M)), e.abrupt("return", Object(u.a)(Object(u.a)({}, t), {}, {
                                                            tokenAmount: x.toJSON(),
                                                            lpTotalInQuoteToken: j.times(new l.a(10).pow(w - O)).toJSON(),
                                                            lpTokenPrice: Number(g),
                                                            tokenPriceVsQuote: h.toJSON(),
                                                            poolWeight: F.toNumber(),
                                                            multiplier: "".concat(_.div(100).toString(), "X"),
                                                            depositFeeBP: S.depositFeeBP,
                                                            eggPerBlock: new l.a(I).toNumber()
                                                        }));
                                                    case 23:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = p.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[1] : e.lpAddresses[1],
                                            name: "allowance",
                                            params: [t, n]
                                        }
                                    })), e.next = 4, Object(b.a)(y, a);
                                case 4:
                                    return r = e.sent, u = r.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", u);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = p.a.map((function(e) {
                                        return {
                                            address: e.isTokenOnly ? e.tokenAddresses[1] : e.lpAddresses[1],
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(b.a)(y, n);
                                case 3:
                                    return a = e.sent, r = a.map((function(e) {
                                        return new l.a(e).toJSON()
                                    })), e.abrupt("return", r);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = p.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "userInfo",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(b.a)(f, a);
                                case 4:
                                    return r = e.sent, u = r.map((function(e) {
                                        return new l.a(e[0]._hex).toJSON()
                                    })), e.abrupt("return", u);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, u;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = Object(m.d)(), a = p.a.map((function(e) {
                                        return {
                                            address: n,
                                            name: "pendingGETH",
                                            params: [e.pid, t]
                                        }
                                    })), e.next = 4, Object(b.a)(f, a);
                                case 4:
                                    return r = e.sent, u = r.map((function(e) {
                                        return console.log("parsedEarnings", e), new l.a(e).toJSON()
                                    })), e.abrupt("return", u);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = {
                    data: Object(s.a)(p.a)
                },
                g = Object(o.b)({
                    name: "Farms",
                    initialState: h,
                    reducers: {
                        setFarmsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.pid === e.pid
                                }));
                                return Object(u.a)(Object(u.a)({}, e), t)
                            }))
                        },
                        setFarmUserData: function(e, t) {
                            t.payload.arrayOfUserDataObjects.forEach((function(t) {
                                var n = t.index;
                                e.data[n] = Object(u.a)(Object(u.a)({}, e.data[n]), {}, {
                                    userData: t
                                })
                            }))
                        }
                    }
                }),
                k = g.actions,
                C = k.setFarmsPublicData,
                D = k.setFarmUserData,
                A = function() {
                    return function() {
                        var e = Object(r.a)(i.a.mark((function e(t) {
                            var n;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, v();
                                    case 2:
                                        n = e.sent, t(C(n));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                B = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a, r, u, s, o;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, w(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, O(e);
                                    case 5:
                                        return r = t.sent, t.next = 8, x(e);
                                    case 8:
                                        return u = t.sent, t.next = 11, j(e);
                                    case 11:
                                        s = t.sent, o = a.map((function(e, t) {
                                            return {
                                                index: t,
                                                allowance: a[t],
                                                tokenBalance: r[t],
                                                stakedBalance: u[t],
                                                earnings: s[t]
                                            }
                                        })), n(D({
                                            arrayOfUserDataObjects: o
                                        }));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            t.a = g.reducer
        },
        109: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return d
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "b", (function() {
                return y
            })), n.d(t, "c", (function() {
                return f
            })), n.d(t, "f", (function() {
                return b
            })), n.d(t, "a", (function() {
                return m
            })), n.d(t, "g", (function() {
                return T
            })), n.d(t, "h", (function() {
                return v
            }));
            var a = n(5),
                i = n.n(a),
                r = n(0),
                u = n(54),
                s = n(131),
                o = n(130),
                p = n(27),
                c = new i.a(0),
                d = function() {
                    var e = Object(u.b)(),
                        t = Object(s.a)().slowRefresh;
                    Object(r.useEffect)((function() {
                        e(Object(o.b)())
                    }), [e, t])
                },
                l = function() {
                    return Object(u.c)((function(e) {
                        return e.farms.data
                    }))
                },
                y = function(e) {
                    return Object(u.c)((function(t) {
                        return t.farms.data.find((function(t) {
                            return t.pid === e
                        }))
                    }))
                },
                f = function(e) {
                    var t = y(e);
                    return {
                        allowance: t.userData ? new i.a(t.userData.allowance) : new i.a(0),
                        tokenBalance: t.userData ? new i.a(t.userData.tokenBalance) : new i.a(0),
                        stakedBalance: t.userData ? new i.a(t.userData.stakedBalance) : new i.a(0),
                        earnings: t.userData ? new i.a(t.userData.earnings) : new i.a(0)
                    }
                },
                b = function() {
                    var e = y(9);
                    return e.tokenPriceVsQuote ? new i.a(e.tokenPriceVsQuote) : c
                },
                m = function() {
                    var e = b(),
                        t = y(10);
                    return console.log("useBTCBusdPrice", e.div(t.tokenPriceVsQuote).toNumber()), t.tokenPriceVsQuote ? e.div(t.tokenPriceVsQuote) : c
                },
                T = function() {
                    var e = b(),
                        t = y(1);
                    return console.log("bnbPriceUSD", e.toNumber()), t.tokenPriceVsQuote ? e.times(t.tokenPriceVsQuote) : c
                },
                v = function() {
                    for (var e = l(), t = b(), n = T(), a = m(), r = new i.a(0), u = 0; u < e.length; u++) {
                        var s = e[u];
                        if (s.lpTotalInQuoteToken) {
                            var o = void 0;
                            o = s.quoteTokenSymbol === p.b.BNB ? t.times(s.lpTotalInQuoteToken) : s.quoteTokenSymbol === p.b.CAKE ? n.times(s.lpTotalInQuoteToken) : s.quoteTokenSymbol === p.b.BTC ? a.times(s.lpTotalInQuoteToken) : s.lpTotalInQuoteToken, r = r.plus(o)
                        }
                    }
                    return r
                }
        },
        125: function(e, t, n) {
            "use strict";
            var a = n(309),
                i = n.n(a),
                r = ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"];
            t.a = function() {
                var e = i()(0, r.length - 1);
                return r[e]
            }
        },
        127: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return c
            }));
            var a = n(8),
                i = n(3),
                r = n.n(i),
                u = n(12),
                s = n(20),
                o = n(0),
                p = n.n(o).a.createContext({
                    slow: 0,
                    fast: 0
                }),
                c = function(e) {
                    var t = e.children,
                        n = Object(o.useState)(0),
                        i = Object(s.a)(n, 2),
                        c = i[0],
                        d = i[1],
                        l = Object(o.useState)(0),
                        y = Object(s.a)(l, 2),
                        f = y[0],
                        b = y[1];
                    return Object(o.useEffect)((function() {
                        var e = setInterval(Object(u.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        b((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 1e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(o.useEffect)((function() {
                        var e = setInterval(Object(u.a)(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        d((function(e) {
                                            return e + 1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 6e4);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(a.jsx)(p.Provider, {
                        value: {
                            slow: c,
                            fast: f
                        },
                        children: t
                    })
                }
        },
        130: function(e, t, n) {
            "use strict";
            var a = n(104);
            n.d(t, "b", (function() {
                return a.c
            })), n.d(t, "a", (function() {
                return a.b
            }));
            var i = n(56);
            n.d(t, "c", (function() {
                return i.b
            })), n.d(t, "d", (function() {
                return i.c
            })), n.d(t, "e", (function() {
                return i.d
            })), n.d(t, "f", (function() {
                return i.e
            })), n.d(t, "g", (function() {
                return i.f
            }))
        },
        131: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(127);
            t.a = function() {
                var e = Object(a.useContext)(i.a);
                return {
                    fastRefresh: e.fast,
                    slowRefresh: e.slow
                }
            }
        },
        172: function(e, t, n) {
            "use strict";
            var a = n(0),
                i = n(89),
                r = /%(.*?)%/,
                u = function(e, t, n) {
                    var a = e.find((function(e) {
                        return e.data.stringId === t
                    }));
                    if (a) {
                        var i = a.data.text;
                        return i.includes("%") ? function(e, t) {
                            var n = r.exec(e)[0],
                                a = t.split(" ")[0];
                            return e.replace(n, a)
                        }(i, n) : i
                    }
                    return n
                };
            t.a = function() {
                var e = Object(a.useContext)(i.a).translations;
                return function(t, n) {
                    return "error" === e[0] ? n : e.length > 0 ? u(e, t, n) : n
                }
            }
        },
        177: function(e, t, n) {
            "use strict";
            var a = n(50),
                i = n(2);

            function r() {
                var e = Object(a.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 992px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"]);
                return r = function() {
                    return e
                }, e
            }
            var u = i.e.div(r(), (function(e) {
                return e.theme.mediaQueries.sm
            }));

            function s() {
                var e = Object(a.a)(["\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n"]);
                return s = function() {
                    return e
                }, e
            }
            var o = Object(i.e)(u)(s(), (function(e) {
                return e.theme.mediaQueries.sm
            }), (function(e) {
                return e.theme.mediaQueries.lg
            }));
            t.a = o
        },
        268: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        27: function(e, t, n) {
            "use strict";
            var a, i;
            n.d(t, "b", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return i
                })),
                function(e) {
                    e.BNB = "BNB", e.CAKE = "CAKE", e.SYRUP = "SYRUP", e.BUSD = "BUSD", e.TWT = "TWT", e.UST = "UST", e.WETH = "WETH", e.BTC = "BTC"
                }(a || (a = {})),
                function(e) {
                    e.COMMUNITY = "Community", e.CORE = "Core", e.BINANCE = "Binance"
                }(i || (i = {}))
        },
        301: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_totalSupplyDistributed","type":"uint256"},{"internalType":"uint256","name":"_cakePerBurn","type":"uint256"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_endBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"BunnyBurn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burnNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakePerBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwnershipNFTContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"countBunniesBurnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentDistributedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeBunnies","outputs":[{"internalType":"contract PancakeBunnies","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupplyDistributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawCake","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        31: function(e, t, n) {
            "use strict";
            var a = n(3),
                i = n.n(a),
                r = n(12),
                u = n(126),
                s = n(84),
                o = n(310),
                p = n(38),
                c = function() {
                    var e = Object(r.a)(i.a.mark((function e(t, n) {
                        var a, r, c, d, l, y, f;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Object(s.b)(), r = new a.eth.Contract(o, Object(p.e)()), c = new u.Interface(t), d = n.map((function(e) {
                                        return [e.address.toLowerCase(), c.encodeFunctionData(e.name, e.params)]
                                    })), e.next = 6, r.methods.aggregate(d).call();
                                case 6:
                                    return l = e.sent, y = l.returnData, f = y.map((function(e, t) {
                                        return c.decodeFunctionResult(n[t].name, e)
                                    })), e.abrupt("return", f);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            t.a = c
        },
        310: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct Multicall.Call[]","name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes[]","name":"returnData","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"internalType":"address","name":"coinbase","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"internalType":"uint256","name":"difficulty","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"internalType":"uint256","name":"gaslimit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastBlockHash","outputs":[{"internalType":"bytes32","name":"blockHash","type":"bytes32"}],"stateMutability":"view","type":"function"}]')
        },
        311: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        36: function(e, t, n) {
            "use strict";
            t.a = {
                cake: {
                    1: "0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13",
                    56: "0x5c46c55a699a6359e451b2c99344138420c87261",
                    97: "",
                    3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                },
                wbtc: {
                    1: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                    56: "0x5c46c55a699a6359e451b2c99344138420c87261",
                    97: "",
                    3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                },
                masterChef: {
                    1: "0xF20374Ea8AA631b398b729575CEB084DeA328219",
                    56: "0x77E81CBDC4dCc545189183FcbC73232468C60bfe",
                    97: "",
                    3: "0x654565b5370AE2f0b69067D511831108cA4cAB3C"
                },
                wbnb: {
                    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    97: "",
                    3: "0xcafb64fe957e76adc498452abacc921329682cb0"
                },
                lottery: {
                    56: "",
                    97: ""
                },
                weth: {
                    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    97: "",
                    3: "0xcafb64fe957e76adc498452abacc921329682cb0"
                },
                usdt: {
                    56: "0x55d398326f99059ff775485246999027b3197955",
                    1: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                    97: "",
                    3: "0xaa0dce5ec02e54f9fa368fc50f3bea9aef8f52c4"
                },
                lotteryNFT: {
                    56: "",
                    97: ""
                },
                mulltiCall: {
                    56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
                    1: "0x5e227AD1969Ea493B43F840cfF78d08a6fc17796",
                    97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412",
                    3: "0x19CF79cC08682cb1Da923825557537C22e03889D"
                },
                busd: {
                    56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    1: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                    97: "",
                    3: "0xfbe447f9413d690447d94220cdcd2f40a6b880cf"
                }
            }
        },
        372: function(e, t) {},
        38: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "d", (function() {
                return r
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return p
            }));
            var a = n(36),
                i = function() {
                    return a.a.cake[1]
                },
                r = function() {
                    return a.a.masterChef[1]
                },
                u = function() {
                    return console.log("getMulticallAddress", a.a.mulltiCall[1]), a.a.mulltiCall[1]
                },
                s = function() {
                    return a.a.wbnb[1]
                },
                o = function() {
                    return a.a.lottery[1]
                },
                p = function() {
                    return a.a.lotteryNFT[1]
                }
        },
        405: function(e, t) {},
        407: function(e, t) {},
        48: function(e, t, n) {
            "use strict";
            t.a = []
        },
        482: function(e, t) {},
        484: function(e, t) {},
        516: function(e, t) {},
        521: function(e, t) {},
        523: function(e, t) {},
        530: function(e, t) {},
        543: function(e, t) {},
        56: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return F
            })), n.d(t, "c", (function() {
                return E
            })), n.d(t, "d", (function() {
                return P
            })), n.d(t, "f", (function() {
                return N
            })), n.d(t, "e", (function() {
                return R
            }));
            var a = n(3),
                i = n.n(a),
                r = n(12),
                u = n(41),
                s = n(13),
                o = n(51),
                p = n(90),
                c = n(48),
                d = n(88),
                l = (n(268), n(311), n(27)),
                y = n(31),
                f = n(38),
                b = n(5),
                m = n.n(b),
                T = n(71),
                v = n(60),
                w = n(84),
                O = c.a.filter((function(e) {
                    return e.stakingTokenName !== l.b.BNB
                })),
                x = c.a.filter((function(e) {
                    return e.stakingTokenName === l.b.BNB
                })),
                j = c.a.filter((function(e) {
                    return 0 !== e.sousId
                })),
                h = Object(w.b)(),
                g = new h.eth.Contract(T, Object(f.d)()),
                k = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = O.map((function(e) {
                                        return {
                                            address: e.stakingTokenAddress,
                                            name: "allowance",
                                            params: [t, e.contractAddress[1]]
                                        }
                                    })), e.next = 3, Object(y.a)(v, n);
                                case 3:
                                    return a = e.sent, e.abrupt("return", O.reduce((function(e, t, n) {
                                        return Object(s.a)(Object(s.a)({}, e), {}, Object(u.a)({}, t.sousId, new m.a(a[n]).toJSON()))
                                    }), {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, o, p;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = O.map((function(e) {
                                        return {
                                            address: e.stakingTokenAddress,
                                            name: "balanceOf",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(v, n);
                                case 3:
                                    return a = e.sent, r = O.reduce((function(e, t, n) {
                                        return Object(s.a)(Object(s.a)({}, e), {}, Object(u.a)({}, t.sousId, new m.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, h.eth.getBalance(t);
                                case 7:
                                    return o = e.sent, p = x.reduce((function(e, t) {
                                        return Object(s.a)(Object(s.a)({}, e), {}, Object(u.a)({}, t.sousId, new m.a(o).toJSON()))
                                    }), {}), e.abrupt("return", Object(s.a)(Object(s.a)({}, r), p));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, o, p;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = j.map((function(e) {
                                        return {
                                            address: e.contractAddress[1],
                                            name: "userInfo",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(d, n);
                                case 3:
                                    return a = e.sent, r = j.reduce((function(e, t, n) {
                                        return Object(s.a)(Object(s.a)({}, e), {}, Object(u.a)({}, t.sousId, new m.a(a[n].amount._hex).toJSON()))
                                    }), {}), e.next = 7, g.methods.userInfo("0", t).call();
                                case 7:
                                    return o = e.sent, p = o.amount, e.abrupt("return", Object(s.a)(Object(s.a)({}, r), {}, {
                                        0: new m.a(p).toJSON()
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var e = Object(r.a)(i.a.mark((function e(t) {
                        var n, a, r, o;
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = j.map((function(e) {
                                        return {
                                            address: e.contractAddress[1],
                                            name: "pendingReward",
                                            params: [t]
                                        }
                                    })), e.next = 3, Object(y.a)(d, n);
                                case 3:
                                    return a = e.sent, r = j.reduce((function(e, t, n) {
                                        return Object(s.a)(Object(s.a)({}, e), {}, Object(u.a)({}, t.sousId, new m.a(a[n]).toJSON()))
                                    }), {}), e.next = 7, g.methods.pendingGETH("0", t).call();
                                case 7:
                                    return o = e.sent, e.abrupt("return", Object(s.a)(Object(s.a)({}, r), {}, {
                                        0: new m.a(o).toJSON()
                                    }));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                B = {
                    data: Object(o.a)(c.a)
                },
                S = Object(p.b)({
                    name: "Pools",
                    initialState: B,
                    reducers: {
                        setPoolsPublicData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(s.a)(Object(s.a)({}, e), t)
                            }))
                        },
                        setPoolsUserData: function(e, t) {
                            var n = t.payload;
                            e.data = e.data.map((function(e) {
                                var t = n.find((function(t) {
                                    return t.sousId === e.sousId
                                }));
                                return Object(s.a)(Object(s.a)({}, e), {}, {
                                    userData: t
                                })
                            }))
                        },
                        updatePoolsUserData: function(e, t) {
                            var n = t.payload,
                                a = n.field,
                                i = n.value,
                                r = n.sousId,
                                o = e.data.findIndex((function(e) {
                                    return e.sousId === r
                                }));
                            e.data[o] = Object(s.a)(Object(s.a)({}, e.data[o]), {}, {
                                userData: Object(s.a)(Object(s.a)({}, e.data[o].userData), {}, Object(u.a)({}, a, i))
                            })
                        }
                    }
                }),
                M = S.actions,
                I = (M.setPoolsPublicData, M.setPoolsUserData),
                _ = M.updatePoolsUserData,
                F = function(e) {
                    return function() {
                        var t = Object(r.a)(i.a.mark((function t(n) {
                            var a, r, u, s, o;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, k(e);
                                    case 2:
                                        return a = t.sent, t.next = 5, C(e);
                                    case 5:
                                        return r = t.sent, t.next = 8, D(e);
                                    case 8:
                                        return u = t.sent, t.next = 11, A(e);
                                    case 11:
                                        s = t.sent, o = c.a.map((function(e) {
                                            return {
                                                sousId: e.sousId,
                                                allowance: a[e.sousId],
                                                stakingTokenBalance: r[e.sousId],
                                                stakedBalance: u[e.sousId],
                                                pendingReward: s[e.sousId]
                                            }
                                        })), n(I(o));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                E = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, k(t);
                                    case 2:
                                        r = n.sent, a(_({
                                            sousId: e,
                                            field: "allowance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                P = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, C(t);
                                    case 2:
                                        r = n.sent, a(_({
                                            sousId: e,
                                            field: "stakingTokenBalance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                N = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, D(t);
                                    case 2:
                                        r = n.sent, a(_({
                                            sousId: e,
                                            field: "stakedBalance",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                R = function(e, t) {
                    return function() {
                        var n = Object(r.a)(i.a.mark((function n(a) {
                            var r;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, A(t);
                                    case 2:
                                        r = n.sent, a(_({
                                            sousId: e,
                                            field: "pendingReward",
                                            value: r[e]
                                        }));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()
                };
            t.a = S.reducer
        },
        57: function(e, t, n) {
            "use strict";
            var a = n(36),
                i = n(27),
                r = [{
                    pid: 0,
                    risk: 5,
                    isTokenOnly: !0,
                    lpSymbol: "ORB",
                    lpAddresses: {
                        97: "",
                        1: "0x6bf0AD49176b0E55FE2c3C7BB1A218B18524c421",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    tokenSymbol: "ORB",
                    tokenAddresses: {
                        97: "",
                        1: "0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    quoteTokenSymbol: i.b.BNB,
                    quoteTokenAdresses: a.a.wbnb
                }, {
                    pid: 1,
                    risk: 5,
                    lpSymbol: "ORB-ETH",
                    platfrom: "Uniswap",
                    lpAddresses: {
                        97: "",
                        1: "0x6bf0AD49176b0E55FE2c3C7BB1A218B18524c421",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    tokenSymbol: "ORB",
                    tokenAddresses: {
                        97: "",
                        1: "0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    quoteTokenSymbol: i.b.BNB,
                    quoteTokenAdresses: a.a.wbnb
                }, {
                    pid: 2,
                    risk: 5,
                    platfrom: "Uniswap",
                    lpSymbol: "ORB-USDT",
                    lpAddresses: {
                        97: "",
                        1: "0x81a10a45143d7a6b7e1a0e63761b4fba311bb661",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    tokenSymbol: "ORB",
                    tokenAddresses: {
                        97: "",
                        1: "0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    quoteTokenSymbol: i.b.BUSD,
                    quoteTokenAdresses: a.a.busd
                }, {
                    pid: 9,
                    risk: 5,
                    lpSymbol: "ETH-USDT",
                    platfrom: "Uniswap",
                    lpAddresses: {
                        97: "",
                        1: "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    tokenSymbol: "ETH",
                    tokenAddresses: {
                        97: "",
                        1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    quoteTokenSymbol: i.b.BUSD,
                    quoteTokenAdresses: a.a.busd
                }, {
                    pid: 10,
                    risk: 5,
                    lpSymbol: "WBTC-ETH",
                    platfrom: "Uniswap",
                    lpAddresses: {
                        97: "",
                        1: "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    tokenSymbol: "ETH",
                    tokenAddresses: {
                        97: "",
                        1: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    quoteTokenSymbol: i.b.BTC,
                    quoteTokenAdresses: a.a.wbtc
                }, {
                    pid: 11,
                    risk: 5,
                    platfrom: "Uniswap",
                    lpSymbol: "SUSHI-ETH",
                    lpAddresses: {
                        97: "",
                        1: "0xce84867c3c02b05dc570d0135103d3fb9cc19433",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    tokenSymbol: "SUSHI",
                    tokenAddresses: {
                        97: "",
                        1: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
                        56: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
                        3: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
                    },
                    quoteTokenSymbol: i.b.BNB,
                    quoteTokenAdresses: a.a.wbnb
                }, {
                    pid: 7,
                    risk: 5,
                    lpSymbol: "SUSHI",
                    isTokenOnly: !0,
                    lpAddresses: {
                        97: "",
                        1: "0x795065dcc9f64b5614c407a6efdc400da6221fb0",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    tokenSymbol: "SUSHI",
                    tokenAddresses: {
                        97: "",
                        1: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    quoteTokenSymbol: i.b.BNB,
                    quoteTokenAdresses: a.a.wbnb
                }, {
                    pid: 8,
                    risk: 5,
                    isTokenOnly: !0,
                    lpSymbol: "UNI",
                    lpAddresses: {
                        97: "",
                        1: "0xa57f771c71cc6be8bd7b26012fa022113dc949f1",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    tokenSymbol: "UNI",
                    tokenAddresses: {
                        97: "",
                        1: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                        56: "0xe1F93A26D599aBd6eD93F69f4B2a8567FC9a0aba",
                        3: "0x72A24b4CD7Dae850250dFDdcdCC2359E26C9A031"
                    },
                    quoteTokenSymbol: i.b.BNB,
                    quoteTokenAdresses: a.a.wbnb
                }];
            t.a = r
        },
        60: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        646: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(8),
                i = n(0),
                r = n.n(i),
                u = n(61),
                s = n.n(u),
                o = n(73),
                p = n(28),
                c = n(64),
                d = n(37),
                l = n(5),
                y = n.n(l),
                f = n(109),
                b = n(50),
                m = n(2);

            function T() {
                var e = Object(b.a)(["\n  * {\n   // font-family: 'Kanit', sans-serif;\n    font-family: 'Lato', sans-serif;\n  }\n  body {\n    /* eslint-disable @typescript-eslint/no-empty-interface */\n    background-image: url('", "') ;\n    background-size: auto 100%;\n    background-repeat : no-repeat;\n    background-position: center center;\n\n    ", "{\n      background-size: 100% 100%;\n    }\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"]);
                return T = function() {
                    return e
                }, e
            }
            var v = Object(m.c)(T(), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.mediaQueries.nav
                })),
                w = n(13),
                O = {
                    code: "en",
                    language: "English"
                },
                x = [O, {
                    code: "zh-CN",
                    language: "\u7b80\u4f53\u4e2d\u6587"
                }, {
                    code: "zh-TW",
                    language: "\u7e41\u9ad4\u4e2d\u6587"
                }],
                j = n(20),
                h = n(312),
                g = n(89),
                k = "pancakeSwapLanguage",
                C = r.a.createContext({
                    selectedLanguage: O,
                    setSelectedLanguage: function() {},
                    translatedLanguage: O,
                    setTranslatedLanguage: function() {}
                }),
                D = (parseInt(Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_CHAIN_ID: "1",
                    REACT_APP_NODE_1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                    REACT_APP_NODE_2: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                    REACT_APP_NODE_3: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
                }).REACT_APP_CROWDIN_PROJECTID), new h.StringTranslations({
                    token: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_CHAIN_ID: "1",
                        REACT_APP_NODE_1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                        REACT_APP_NODE_2: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
                        REACT_APP_NODE_3: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
                    }).REACT_APP_CROWDIN_APIKEY
                }), function(e) {
                    var t = e.children,
                        n = Object(i.useState)(O),
                        r = Object(j.a)(n, 2),
                        u = r[0],
                        s = r[1],
                        o = Object(i.useState)(O),
                        p = Object(j.a)(o, 2),
                        c = p[0],
                        d = p[1],
                        l = Object(i.useState)([]),
                        y = Object(j.a)(l, 2),
                        f = y[0],
                        b = y[1];
                    Object(i.useEffect)((function() {
                        var e = localStorage.getItem(k);
                        if (e) {
                            var t = function(e) {
                                return x.filter((function(t) {
                                    return t.code === e
                                }))[0]
                            }(e);
                            s(t)
                        } else s(O)
                    }), []), Object(i.useEffect)((function() {
                        u && (console.log("import(`../../../public/i18n/".concat(u.code, ".json`)")), fetch("./i18n/".concat(u.code, ".json")).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            e.data.length < 1 ? b(["error"]) : b(e.data)
                        })).then((function() {
                            return d(u)
                        })).catch((function(e) {
                            console.error("ERROR"), console.error(e), b(["error"])
                        })))
                    }), [u, b]);
                    return Object(a.jsx)(C.Provider, {
                        value: {
                            selectedLanguage: u,
                            setSelectedLanguage: function(e) {
                                s(e), localStorage.setItem(k, e.code)
                            },
                            translatedLanguage: c,
                            setTranslatedLanguage: d
                        },
                        children: Object(a.jsx)(g.a.Provider, {
                            value: {
                                translations: f,
                                setTranslations: b
                            },
                            children: t
                        })
                    })
                }),
                A = "IS_DARK",
                B = r.a.createContext({
                    isDark: null,
                    toggleTheme: function() {
                        return null
                    }
                }),
                S = function(e) {
                    var t = e.children,
                        n = Object(i.useState)((function() {
                            var e = localStorage.getItem(A);
                            return !!e && JSON.parse(e)
                        })),
                        r = Object(j.a)(n, 2),
                        u = r[0],
                        s = r[1];
                    return Object(a.jsx)(B.Provider, {
                        value: {
                            isDark: u,
                            toggleTheme: function() {
                                s((function(e) {
                                    return localStorage.setItem(A, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(a.jsx)(m.b, {
                            theme: u ? d.C : d.D,
                            children: t
                        })
                    })
                },
                M = function() {
                    var e = Object(i.useContext)(B);
                    return {
                        isDark: e.isDark,
                        toggleTheme: e.toggleTheme,
                        theme: Object(i.useContext)(m.a)
                    }
                },
                I = [{
                    label: "Home",
                    icon: "HomeIcon",
                    href: ""
                }, {
                    label: "Trade",
                    icon: "TradeIcon",
                    items: [{
                        label: "Exchange",
                        href: ""
                    }, {
                        label: "Liquidity",
                        href: ""
                    }]
                }, {
                    label: "Farming",
                    icon: "FarmIcon",
                    href: "/farms"
                }, {
                    label: "Staking",
                    icon: "PoolIcon",
                    href: "/pools"
                }, {
                    label: "Price Charts",
                    icon: "InfoIcon",
                    initialOpenState: !1,
                    items: [{
                        label: "Dex Guru",
                        href: "https://dex.guru/token/0x1fbc5b43ba36adc9d2a28b460779ab03c276cd13-eth"
                    }, {
                        label: "Dex Tools",
                        href: "https://www.dextools.io/app/uniswap/pair-explorer/0x6bf0AD49176b0E55FE2c3C7BB1A218B18524c421"
                    }]
                }, {
                    label: "Pools",
                    icon: "PoolIcon",
                    href: "/pools"
                }, {
                    label: "Lottery",
                    icon: "TicketIcon",
                    href: "/lottery"
                }, {
                    label: "NFT",
                    icon: "NftIcon",
                    href: "/nft"
                }, {
                    label: "Info",
                    icon: "InfoIcon",
                    items: [{
                        label: "Swap",
                        href: "https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6"
                    }, {
                        label: "AstroTools",
                        href: "https:app.astrotools.io/pancake-pair-explorer/"
                    }]
                }, {
                    label: "More",
                    icon: "MoreIcon",
                    items: [{
                        label: "Github",
                        href: "https://github.com/Voltinuai/"
                    }, {
                        label: "Docs",
                        href: "https://.gitbook.io/Voltinuai/"
                    }, {
                        label: "Blog",
                        href: "https://ORB.medium.com/"
                    }]
                }, {
                    label: "Partnerships/IFO",
                    icon: "InfoIcon",
                    href: "https://docs.google.com/forms/d/e//viewform?usp=sf_link"
                }, {
                    label: "Audit by Hacken",
                    icon: "AuditIcon",
                    href: "/"
                }, {
                    label: "Audit by CertiK",
                    icon: "AuditIcon",
                    href: "/"
                }, {
                    label: "Audits",
                    icon: "AuditIcon",
                    href: "https:github.com/GETh-Finance-Defi/GETh-Farms-build/blob/main/audits/eth.pdf"
                }],
                _ = function(e) {
                    var t = Object(c.m)(),
                        n = t.account,
                        r = t.connect,
                        u = t.reset,
                        s = Object(i.useContext)(C),
                        o = s.selectedLanguage,
                        p = s.setSelectedLanguage,
                        l = M(),
                        y = l.isDark,
                        b = l.toggleTheme,
                        m = Object(f.g)();
                    return Object(a.jsx)(d.r, Object(w.a)({
                        isBinance: !1,
                        account: n,
                        login: r,
                        logout: u,
                        isDark: y,
                        toggleTheme: b,
                        currentLang: o && o.code,
                        langs: x,
                        setLang: p,
                        cakePriceUsd: m.toNumber(),
                        links: I,
                        priceLink: ""
                    }, e))
                },
                F = n(177);

            function E() {
                var e = Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);
                return E = function() {
                    return e
                }, e
            }
            var P = Object(m.e)(F.a)(E()),
                N = function() {
                    return Object(a.jsx)(P, {
                        children: Object(a.jsx)(d.x, {})
                    })
                },
                R = n(3),
                U = n.n(R),
                H = n(12),
                L = n(172);
            n(301), n(31);

            function J() {
                var e = Object(b.a)(["\n  text-align: center;\n"]);
                return J = function() {
                    return e
                }, e
            }

            function q() {
                var e = Object(b.a)(["\n  padding: 24px;\n  text-align: center;\n"]);
                return q = function() {
                    return e
                }, e
            }
            var W = m.e.div(q()),
                G = m.e.div(J()),
                Q = function(e) {
                    var t = e.onDismiss,
                        n = Object(L.a)();
                    return Object(a.jsxs)(d.t, {
                        title: n(999, "Congratulations!"),
                        onDismiss: t,
                        children: [Object(a.jsxs)(W, {
                            children: [Object(a.jsx)("img", {
                                src: "/images/present.svg",
                                alt: "You won present",
                                style: {
                                    height: "64px",
                                    marginBottom: "24px"
                                }
                            }), Object(a.jsx)(d.n, {
                                size: "lg",
                                color: "secondary",
                                children: n(999, "You won an NFT!")
                            })]
                        }), Object(a.jsx)(G, {
                            children: Object(a.jsx)(d.d, {
                                as: "a",
                                href: "/nft",
                                children: n(999, "Go to claim NFT")
                            })
                        })]
                    })
                },
                V = function() {
                    var e = Object(c.m)().account,
                        t = Object(d.E)(Object(a.jsx)(Q, {})),
                        n = Object(j.a)(t, 1)[0],
                        r = Object(i.useRef)((function() {
                            return n()
                        }));
                    return Object(i.useEffect)((function() {
                        e && document.location.href.includes("/nft")
                    }), [e, r]), Object(a.jsx)("div", {})
                },
                K = Object(i.lazy)((function() {
                    return Promise.all([n.e(1), n.e(3), n.e(7), n.e(2), n.e(13)]).then(n.bind(null, 695))
                })),
                Y = Object(i.lazy)((function() {
                    return Promise.all([n.e(1), n.e(3), n.e(2), n.e(12)]).then(n.bind(null, 694))
                })),
                z = Object(i.lazy)((function() {
                    return n.e(14).then(n.bind(null, 692))
                }));
            y.a.config({
                EXPONENTIAL_AT: 1e3,
                DECIMAL_PLACES: 80
            });
            var X = function() {
                    var e = Object(c.m)(),
                        t = e.account,
                        n = e.connect;
                    return Object(i.useEffect)((function() {
                        !t && window.localStorage.getItem("accountStatus") && n("injected")
                    }), [t, n]), Object(f.e)(), Object(a.jsxs)(o.a, {
                        children: [Object(a.jsx)(d.v, {}), Object(a.jsx)(v, {}), Object(a.jsx)(_, {
                            children: Object(a.jsx)(i.Suspense, {
                                fallback: Object(a.jsx)(N, {}),
                                children: Object(a.jsxs)(p.c, {
                                    children: [Object(a.jsx)(p.a, {
                                        path: "/",
                                        exact: !0,
                                        children: Object(a.jsx)(K, {})
                                    }), Object(a.jsx)(p.a, {
                                        path: "/farms",
                                        children: Object(a.jsx)(Y, {})
                                    }), Object(a.jsx)(p.a, {
                                        path: "/pools",
                                        children: Object(a.jsx)(Y, {
                                            tokenMode: !0
                                        })
                                    }), Object(a.jsx)(p.a, {
                                        component: z
                                    })]
                                })
                            })
                        }), Object(a.jsx)(V, {})]
                    })
                },
                Z = r.a.memo(X),
                $ = n(92),
                ee = n(54),
                te = n(125),
                ne = n(84),
                ae = r.a.createContext(0),
                ie = function(e) {
                    var t = e.children,
                        n = Object(i.useRef)(0),
                        r = Object(i.useState)(0),
                        u = Object(j.a)(r, 2),
                        s = u[0],
                        o = u[1];
                    return Object(i.useEffect)((function() {
                        var e = Object(ne.b)(),
                            t = setInterval(Object(H.a)(U.a.mark((function t() {
                                var a;
                                return U.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.eth.getBlockNumber();
                                        case 2:
                                            (a = t.sent) !== n.current && (n.current = a, o(a));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), 6e3);
                        return function() {
                            return clearInterval(t)
                        }
                    }), []), Object(a.jsx)(ae.Provider, {
                        value: s,
                        children: t
                    })
                },
                re = n(127),
                ue = n(90),
                se = n(104),
                oe = n(56),
                pe = Object(ue.a)({
                    devTools: !1,
                    reducer: {
                        farms: se.a,
                        pools: oe.a
                    }
                }),
                ce = function(e) {
                    var t = e.children,
                        n = Object(te.a)(),
                        i = parseInt("1");
                    return Object(a.jsx)(ee.a, {
                        store: pe,
                        children: Object(a.jsx)(S, {
                            children: Object(a.jsx)(D, {
                                children: Object(a.jsx)(c.b, {
                                    chainId: i,
                                    connectors: {
                                        walletconnect: {
                                            rpcUrl: n
                                        },
                                        bsc: $
                                    },
                                    children: Object(a.jsx)(ie, {
                                        children: Object(a.jsx)(re.b, {
                                            children: Object(a.jsx)(d.u, {
                                                children: t
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                };
            s.a.render(Object(a.jsx)(r.a.StrictMode, {
                children: Object(a.jsx)(ce, {
                    children: Object(a.jsx)(Z, {})
                })
            }), document.getElementById("root"))
        },
        71: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_GETH","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_GETHPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"contract GETHStakingReserve","name":"_GETHStakingReserve","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"GETHStakingReserve","outputs":[{"internalType":"contract GETHStakingReserve","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ORB","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GETHPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingGETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accGETHPerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"productwallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewardPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_GETHPerBlock","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        84: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return p
            }));
            var a = n(137),
                i = n.n(a),
                r = n(125),
                u = Object(r.a)(),
                s = new i.a.providers.HttpProvider(u, {
                    timeout: 1e4
                }),
                o = function() {
                    return new i.a(s)
                },
                p = function(e, t, n) {
                    return new(o().eth.Contract)(e, t, n)
                }
        },
        88: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        89: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(0),
                i = {
                    translations: [],
                    setTranslations: function() {}
                },
                r = Object(a.createContext)(i)
        }
    },
    [
        [646, 5, 6]
    ]
]);
//# sourceMappingURL=main.3a8fa382.chunk.js.map