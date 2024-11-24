!(function () {
  "use strict";
  var e = {
      d: function (t, n) {
        for (var o in n)
          e.o(n, o) &&
            !e.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: n[o] });
      },
      o: function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      },
      r: function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    t = {};
  e.r(t),
    e.d(t, {
      angry: function () {
        return L;
      },
      eyeroll: function () {
        return g;
      },
      facepalm: function () {
        return k;
      },
      grumpy: function () {
        return T;
      },
      idle: function () {
        return f;
      },
      idle2: function () {
        return M;
      },
      laughing: function () {
        return b;
      },
      nauseated: function () {
        return y;
      },
      pondering: function () {
        return E;
      },
      sleep: function () {
        return I;
      },
      surprised: function () {
        return _;
      },
      thumbsup: function () {
        return p;
      },
      waving: function () {
        return h;
      },
      zipin: function () {
        return D;
      },
      zipout: function () {
        return B;
      },
    });
  const n = () => !window.matchMedia("(hover: none)").matches;
  var o = window.EM_REDBOT_CONFIG;
  const i = async (e) => {
      const t = await (async function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return window
          .fetch(`${o.admin_ajax_url}?action=${o.action}&${e}`)
          .then((e) => e.json());
      })(`ids=${Array.isArray(e) ? e.join(",") : e}`);
      return !(!t || !1 === t.success) && t;
    },
    r = () =>
      new Promise((e, t) => {
        if (window.lottie) return e(window.lottie);
        const n = document.createElement("script");
        (n.onload = () => e(window.lottie)),
          (n.onerror = () => t("Redbot: Failed to load the Lottie library.")),
          (n.src = null == o ? void 0 : o.lottie_script_src),
          document.head.appendChild(n);
      }),
    s = () => (null == o ? void 0 : o.lottie_json_url),
    d = function (e) {
      let { start: t, middle: n, end: o } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      const r = [];
      r.push(t);
      for (let e = 0; e < i; e++) r.push(n);
      return r.push(o), r;
    },
    l = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e,
    a = (e) => e[Math.floor(Math.random() * e.length)],
    c = (e, t, n) => n.indexOf(e) === t;
  let u = 0;
  const v = (e) => e % 2,
    m = (e) => {
      e.classList.add("is-exiting"),
        setTimeout(() => {
          e.remove();
        }, 500);
    };
  var w = (e) => {
    const t = document.createElement("div");
    t.classList.add("redbot__message"),
      v(u) && t.classList.add("has-offset"),
      (t.innerHTML = e);
    const n = (e.split(" ").length / 120) * 1e3 * 60;
    return (
      setTimeout(() => {
        m(t);
      }, Math.max(n, 5e3)),
      u++,
      t
    );
  };
  const f = [0, 150],
    h = [150, 200],
    p = [200, 250],
    g = [250, 285],
    b = { start: [300, 309], middle: [309, 314], end: [334, 350] },
    y = { start: [350, 370], middle: [370, 410], end: [410, 443] },
    L = { start: [450, 465], middle: [465, 475], end: [475, 487] },
    E = { start: [490, 510], middle: [510, 550], end: [550, 565] },
    _ = [570, 636],
    I = { start: [650, 780], middle: [780, 850], end: [850, 886] },
    T = [890, 963],
    k = [963, 1010],
    M = [1020, 1170],
    B = [1175, 1215],
    D = [1220, 1241];
  var O = async function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
      n = null;
    const o = [],
      i = {};
    let c = !1,
      u = !0,
      v = !1,
      m = null,
      h = null,
      p = null,
      g = null;
    const b = await r();
    if (!b) return null;
    const y = () => {
        E(),
          (n = _()),
          n.addEventListener("DOMLoaded", I),
          n.addEventListener("complete", T),
          g.addEventListener("click", k),
          g.addEventListener("mouseenter", O),
          g.addEventListener("mouseleave", S),
          G("ready");
      },
      L = () => {
        n.removeEventListener("DOMLoaded", I),
          n.removeEventListener("complete", T),
          g.removeEventListener("click", k),
          g.removeEventListener("mouseenter", O),
          g.removeEventListener("mouseleave", S),
          n.destroy(),
          (n = null),
          W(),
          G("destroy");
      },
      E = () => {
        (m = document.getElementById("redbot-container")),
          (h = document.getElementById("redbot-character")),
          (p = document.getElementById("redbot-messages")),
          (g = document.getElementById("redbot-hitbox"));
      },
      _ = () =>
        b.loadAnimation({
          container: h,
          path: s(),
          renderer: "svg",
          loop: !1,
          autoplay: !1,
        }),
      I = () => {
        (c = !0), (u = !0), z(), G("load"), e ? N(e) : A();
      },
      T = () => {
        c ? ((u = !1), (v = !1), A()) : L();
      },
      k = () => {
        m.classList.remove("is-clicked"),
          m.offsetWidth,
          m.classList.add("is-clicked"),
          G("click");
      },
      O = () => {
        !c || u || v || G("mouseenter");
      },
      S = () => {
        !c || u || v || G("mouseleave");
      },
      A = function () {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!c || v) return;
        if (!o.length) return e ? j() : null;
        const n = o[0],
          i = t[n.animation];
        if (!i) return j();
        if ((N(i, n.repeat), n.message)) {
          const e = w(n.message);
          p.appendChild(e);
        }
        o.shift();
      },
      N = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        if (void 0 === e) return;
        const o = !Array.isArray(e);
        n.playSegments(o ? d(e, t) : e, !0);
      },
      j = () => {
        const e = [f, f, f, f, f, f, M, M, M, M, M, M];
        N(e[l(0, e.length)]), G("idle");
      },
      P = (e) => e.actions || e.animation,
      $ = (e, t) => {
        if (e.actions && e.actions.length)
          if ("random" !== e.playback)
            if (
              "sequential_single" !== e.playback &&
              "sequential_single_loop" !== e.playback
            )
              e.actions.forEach((e) => o.push(e));
            else {
              let n = H(e.id);
              "sequential_single_loop" === e.playback &&
                n >= e.actions.length &&
                (n = R(e.id));
              const o = e.actions[n];
              o && C(o, t);
            }
          else C(a(e.actions), t);
      },
      C = (e, t) => {
        t ? o.unshift(e) : o.push(e);
      },
      q = (e) => i[e],
      x = (e, t) => ((i[e] = t), q(e)),
      H = (e) => {
        let t = q(e);
        return void 0 === t && (t = -1), x(e, t + 1), q(e);
      },
      R = (e) => x(e, 0),
      F = () => o.splice(0, o.length),
      z = () => {
        null !== m && m.classList.add("is-active");
      },
      W = () => {
        null !== m && m.classList.remove("is-active");
      },
      G = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!e) return;
        const n = new CustomEvent(`redbot-${e}`, { detail: t });
        document.dispatchEvent(n);
      },
      J = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!c && !u) return !1;
        const n = { skipProcess: !1, toBeginning: !1 },
          { skipProcess: i, toBeginning: r } = { ...n, ...t };
        return e && P(e)
          ? (e.actions ? $(e, r) : C(e, r),
            !c || i || u || A(!1),
            G("push", e.id),
            [...o])
          : void 0;
      },
      K = () => {
        c && ((v = !0), F(), N(B), (c = !1), G("hide"));
      },
      Q = () => {
        c || (y(), G("show"));
      };
    return {
      push: J,
      hide: K,
      show: Q,
      on: function (e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : { passive: !0 };
        document.addEventListener(`redbot-${e}`, t, n);
      },
    };
  };
  var S = () => ({
    get: (e) => {
      return "true" === (t = sessionStorage.getItem(`redbot-v1-${e}`)) ||
        "false" === t
        ? "true" === t
        : isNaN(Number(t))
        ? t
        : Number(t);
      var t;
    },
    set: (e, t) => {
      sessionStorage.setItem(`redbot-v1-${e}`, t.toString());
    },
  });
  const A = "redbot-action";
  !(function () {
    const e = S(),
      t = () => {
        const { showNode: t } = s();
        null !== t &&
          (e.get("is-hidden") && t.classList.add("is-active"),
          t.addEventListener("click", async () => {
            e.set("is-hidden", !1),
              window.redbot ? window.redbot.show() : r(),
              t.classList.remove("is-active");
          }));
      },
      r = async () => {
        const e = d();
        if (!e.length) return void l();
        const t = await a(e);
        t &&
          ((window.redbot = window.redbot || (await O())),
          u(t),
          v(),
          window.redbot.show(),
          m());
      },
      s = () => ({
        showNode: document.getElementById("redbot-show"),
        hideNode: document.getElementById("redbot-hide"),
      }),
      d = () => document.querySelectorAll('[class*="redbot-action"]'),
      l = async () => {
        document.querySelector(".redbot-idle") &&
          ((window.redbot = window.redbot || (await O())),
          v(),
          window.redbot.show());
      },
      a = async (e) => {
        const t = Array.from(e).map(w).flat(),
          n = t.map((e) => e.actionId).filter(c),
          o = await i(n);
        return !!o && { events: t, actions: o };
      },
      u = (e) => {
        const { events: t, actions: n } = e;
        b(t.filter(f), n),
          t.filter(h).forEach((e) => y(e, n[e.actionId])),
          t.filter(p).forEach((e) => L(e, n[e.actionId])),
          E(t.filter(g), n);
      },
      v = async () => {
        if (!window.redbot) return;
        const {
          ids: e,
          redbotClick: t,
          redbotHover: r,
          inactivity: s,
        } = (() => {
          var e, t;
          const { special_event_triggers: n } = o;
          if (!n) return !1;
          const {
            redbot_click_action: i,
            redbot_hover_action: r,
            scrolling_too_fast_action: s,
            inactivity_action: d,
            menu_hover_action: l,
          } = n;
          return {
            ids: [
              null == i ? void 0 : i.ID,
              null == r ? void 0 : r.ID,
              null == s ? void 0 : s.ID,
              null == d || null === (e = d.action) || void 0 === e
                ? void 0
                : e.ID,
            ].filter((e) => !!e),
            redbotClick: null == i ? void 0 : i.ID,
            redbotHover: null == r ? void 0 : r.ID,
            scrollingTooFast: null == s ? void 0 : s.ID,
            inactivity: {
              action:
                null == d || null === (t = d.action) || void 0 === t
                  ? void 0
                  : t.ID,
              waitTime: parseInt(null == d ? void 0 : d.wait_time),
            },
            menuHover: null == l ? void 0 : l.ID,
          };
        })();
        if (null == e || !e.length) return !1;
        const d = await i(e);
        if (!d) return !1;
        k(d[t]), n() && M(d[r]), B(s, d[null == s ? void 0 : s.action]);
      },
      m = () => {
        const { showNode: t, hideNode: o } = s();
        if (null === o) return;
        if (
          (o.addEventListener("click", () => {
            e.set("is-hidden", !0),
              window.redbot && window.redbot.hide(),
              o.classList.remove("is-active"),
              null !== t && t.classList.add("is-active");
          }),
          !window.redbot)
        )
          return;
        if (!n())
          return void window.redbot.on("click", () => {
            o.classList.toggle("is-active");
          });
        let i = null;
        const r = () => {
            i && clearTimeout(i), o.classList.add("is-active");
          },
          d = () => {
            i && clearTimeout(i),
              (i = setTimeout(() => o.classList.remove("is-active"), 500));
          };
        window.redbot.on("mouseenter", r),
          window.redbot.on("mouseleave", d),
          o.addEventListener("mouseenter", r),
          o.addEventListener("mouseleave", d);
      },
      w = (e) => {
        const t = Array.from(e.classList).filter((e) => e.startsWith(A));
        return (
          !(!t && !t.length) &&
          t.map((t) => {
            const [n, o, i] = t.split("--");
            return { node: e, eventType: o, actionId: i };
          })
        );
      },
      f = (e) => {
        let { eventType: t } = e;
        return "load" === t;
      },
      h = (e) => {
        let { eventType: t } = e;
        return "click" === t;
      },
      p = (e) => {
        let { eventType: t } = e;
        return "hover" === t || "hover-repeat" === t;
      },
      g = (e) => {
        let { eventType: t } = e;
        return "scroll" === t || "scroll-repeat" === t;
      },
      b = (e, t) => {
        e.forEach((e, n) => {
          let { actionId: o } = e;
          window.redbot.push(t[o], { skipProcess: 0 !== n });
        });
      },
      y = (e, t) => {
        let { node: n } = e;
        if (!t) return;
        n.addEventListener("click", (e) => {
          e.preventDefault(), window.redbot.push(t, { toBeginning: !0 });
        });
      },
      L = (e, t) => {
        let { node: o, eventType: i } = e;
        if (!t || !n()) return;
        const r = () => {
          window.redbot.push(t, { toBeginning: !0 }),
            "hover-repeat" !== i && o.removeEventListener("mouseenter", r);
        };
        o.addEventListener("mouseenter", r);
      },
      E = (e, t) => {
        if (!e && !e.length) return;
        const n = _(I);
        e.forEach((e) => {
          T(e, t[e.actionId], n);
        });
      },
      _ = (e) => new IntersectionObserver(e, { rootMargin: "-50% 0% -50% 0%" }),
      I = (e, t) => {
        e.filter((e) => e.isIntersecting).forEach((e) => {
          let { target: n } = e;
          window.redbot.push(n.redbotAction), n.redbotRepeat || t.unobserve(n);
        });
      },
      T = (e, t, n) => {
        let { node: o, eventType: i } = e;
        t &&
          n &&
          ((o.redbotAction = t),
          (o.redbotRepeat = "scroll-repeat" === i),
          n.observe(o));
      },
      k = (e) => {
        if (!e) return;
        let t = !1;
        window.redbot.on("click", () => {
          t ||
            ((t = !0),
            window.redbot.push(e, { toBeginning: !0 }),
            setTimeout(() => (t = !1), 2e3));
        });
      },
      M = (e) => {
        if (!e) return;
        let t = !1;
        window.redbot.on("mouseenter", () => {
          t ||
            ((t = !0),
            setTimeout(() => window.redbot.push(e, { toBeginning: !0 }), 150),
            setTimeout(() => (t = !1), 5e3));
        });
      },
      B = (e, t) => {
        if (!e || !t) return;
        let n = 0;
        window.redbot.on("idle", () => {
          n++, n > e.waitTime && window.redbot.push(t);
        }),
          window.redbot.on("push", () => (n = 0));
      };
    window.addEventListener("load", async () => {
      (() => {
        const e =
          window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        return e && e.matches;
      })() || (t(), e.get("is-hidden") || r());
    });
  })();
})();
