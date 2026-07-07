import { jsxs as r, jsx as e, Fragment as D } from "react/jsx-runtime";
import G, { useState as L, useEffect as j, useRef as M, useLayoutEffect as ye } from "react";
import { Magnifier as he, Checkmark as te, Plus as ue, ChevronRight as A, Circle as z, ChevronDown as ae, Cross as J, ArrowLeft as Q, Watch as xe, Bell as ie, Gift as we, Gear as re, ArrowRightOutgoingRectangleVertical as ke, Broom as pe, MinusCircle as Ce } from "./icons/24/Stroked.es.js";
import { Minus as se } from "./icons/16/Stroked.es.js";
import { ChevronDown as ve } from "./icons/12/Filled.es.js";
import le from "react-dom";
import { QuestionCircle as K, LinesThreeHorizontalWide as Be } from "./icons/20/Stroked.es.js";
const $e = 300, ka = ({
  isOpen: a,
  onClose: t,
  header: s,
  footer: n,
  children: i,
  className: l = "",
  isOverlayCloseEnabled: o = !0
}) => {
  const [c, d] = L(a ? "in" : "hidden");
  if (j(() => {
    if (a)
      d("in");
    else if (c === "in") {
      d("out");
      const u = setTimeout(() => d("hidden"), $e);
      return () => clearTimeout(u);
    }
  }, [a]), j(() => {
    if (c !== "in") return;
    const u = (p) => {
      p.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [c, t]), c === "hidden") return null;
  const m = ["action-sheet", l].filter(Boolean).join(" "), _ = [
    "action-sheet__panel",
    c === "in" ? "animate-popup-in" : "animate-popup-out"
  ].join(" "), h = [
    "action-sheet__overlay",
    c === "in" ? "animate-overlay-in" : "animate-overlay-out"
  ].join(" ");
  return /* @__PURE__ */ r("div", { className: m, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: h,
        "aria-label": "Закрыть action sheet",
        onClick: () => {
          o && (t == null || t());
        }
      }
    ),
    /* @__PURE__ */ r("aside", { className: _, role: "dialog", "aria-modal": "true", children: [
      s && /* @__PURE__ */ e("div", { className: "action-sheet__header", children: s }),
      /* @__PURE__ */ e("div", { className: "action-sheet__content ds-scroll-area", children: /* @__PURE__ */ e("div", { className: "action-sheet__content-inner", children: i }) }),
      n && /* @__PURE__ */ e("div", { className: "action-sheet__footer", children: n })
    ] })
  ] });
}, V = ({ className: a = "", style: t }) => /* @__PURE__ */ e("span", { className: `ds-spinner ${a}`, style: t, "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: "ds-spinner__ring" }) }), Ca = ({
  title: a,
  description: t,
  hasDescription: s = !1,
  icon: n,
  hasIcon: i = !0,
  variant: l = "default",
  isDisabled: o = !1,
  isLoading: c = !1,
  onClick: d,
  className: m = ""
}) => {
  const _ = s && typeof t < "u", h = i && typeof n < "u", u = [
    "action-sheet-button",
    "hoverOpacity",
    `action-sheet-button--${l}`,
    _ ? "" : "action-sheet-button--single-line",
    o ? "is-disabled" : "",
    c ? "is-loading" : "",
    m
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      className: u,
      disabled: o || c,
      onClick: d,
      children: [
        /* @__PURE__ */ r("div", { className: "action-sheet-button__main", children: [
          h && /* @__PURE__ */ e("span", { className: "action-sheet-button__icon ds-icon ds-icon--30", "aria-hidden": "true", children: n }),
          /* @__PURE__ */ r("span", { className: "action-sheet-button__text", children: [
            /* @__PURE__ */ e("span", { className: "action-sheet-button__title ts-500-l", children: a }),
            _ && /* @__PURE__ */ e("span", { className: "action-sheet-button__description ts-400-s", children: t })
          ] })
        ] }),
        c && /* @__PURE__ */ e(V, { className: "action-sheet-button__spinner" })
      ]
    }
  );
}, Ba = ({
  onClick: a,
  isDisabled: t = !1,
  isLoading: s = !1,
  className: n = ""
}) => {
  const i = [
    "action-sheet-footer",
    "hoverOpacity",
    t ? "is-disabled" : "",
    s ? "is-loading" : "",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      className: i,
      disabled: t || s,
      onClick: a,
      children: [
        s && /* @__PURE__ */ e(V, { className: "action-sheet-footer__spinner" }),
        /* @__PURE__ */ e("span", { className: "action-sheet-footer__label ts-500-l", children: "Отмена" })
      ]
    }
  );
}, $a = ({
  title: a,
  description: t,
  hasContent: s = !0,
  className: n = ""
}) => {
  const i = [
    "action-sheet-header",
    s ? "" : "action-sheet-header--empty",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: i, children: s && /* @__PURE__ */ e("div", { className: "action-sheet-header__content", children: typeof a < "u" ? /* @__PURE__ */ e("div", { className: "action-sheet-header__title ts-400-m", children: a }) : null }) });
}, Le = 400, je = 80, Ne = ({
  isOpen: a,
  onClose: t,
  header: s,
  footer: n,
  children: i,
  className: l = "",
  isOverlayCloseEnabled: o = !0
}) => {
  const c = M(null), d = M(null), m = M(0), [_, h] = L(a ? "in" : "hidden");
  j(() => {
    if (a)
      h("in");
    else if (_ === "in") {
      h("out");
      const f = setTimeout(() => h("hidden"), Le);
      return () => clearTimeout(f);
    }
  }, [a]), j(() => {
    if (_ !== "in") return;
    const f = (N) => {
      N.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [_, t]);
  const u = (f) => {
    d.current = f.touches[0].clientY, m.current = 0;
  }, p = (f) => {
    if (d.current === null) return;
    const N = f.touches[0].clientY - d.current;
    N <= 0 || (m.current = N, c.current && (c.current.style.transform = `translateY(${N}px)`));
  }, v = () => {
    m.current > je ? t == null || t() : c.current && (c.current.style.transition = "transform 0.2s ease", c.current.style.transform = "", setTimeout(() => {
      c.current && (c.current.style.transition = "");
    }, 200)), d.current = null, m.current = 0;
  };
  if (_ === "hidden") return null;
  const b = ["bottom-sheet", l].filter(Boolean).join(" "), y = [
    "bottom-sheet__panel",
    _ === "in" ? "animate-slide-up-in" : "animate-slide-up-out"
  ].join(" "), x = [
    "bottom-sheet__overlay",
    _ === "in" ? "animate-overlay-in" : "animate-overlay-out"
  ].join(" ");
  return /* @__PURE__ */ r("div", { className: b, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: x,
        "aria-label": "Закрыть",
        onClick: () => {
          o && (t == null || t());
        }
      }
    ),
    /* @__PURE__ */ r(
      "aside",
      {
        ref: c,
        className: y,
        role: "dialog",
        "aria-modal": "true",
        onTouchStart: u,
        onTouchMove: p,
        onTouchEnd: v,
        children: [
          /* @__PURE__ */ e("div", { className: "bottom-sheet__handle", "aria-hidden": "true" }),
          s && /* @__PURE__ */ e("div", { className: "bottom-sheet__header", children: s }),
          /* @__PURE__ */ e("div", { className: "bottom-sheet__content", children: /* @__PURE__ */ e("div", { className: "bottom-sheet__content-inner", children: i }) }),
          n && /* @__PURE__ */ e("div", { className: "bottom-sheet__footer", children: n })
        ]
      }
    )
  ] });
}, be = ({
  title: a,
  rightAccessory: t,
  className: s = ""
}) => a ? /* @__PURE__ */ r("div", { className: ["bottom-sheet-header", s].filter(Boolean).join(" "), children: [
  /* @__PURE__ */ e("div", { className: "bottom-sheet-header__title ts-600-xl", children: a }),
  t && /* @__PURE__ */ e("div", { className: "bottom-sheet-header__right-accessory", children: t })
] }) : null, Te = (a) => /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", focusable: "false", ...a, children: /* @__PURE__ */ e("path", { d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM13.707 6.29297C13.3165 5.90244 12.6835 5.90244 12.293 6.29297L10 8.58594L7.70703 6.29297C7.31651 5.90244 6.68349 5.90244 6.29297 6.29297C5.90244 6.68349 5.90244 7.31651 6.29297 7.70703L8.58594 10L6.29297 12.293C5.90244 12.6835 5.90244 13.3165 6.29297 13.707C6.68349 14.0976 7.31651 14.0976 7.70703 13.707L10 11.4141L12.293 13.707C12.6835 14.0976 13.3165 14.0976 13.707 13.707C14.0976 13.3165 14.0976 12.6835 13.707 12.293L11.4141 10L13.707 7.70703C14.0976 7.31651 14.0976 6.68349 13.707 6.29297Z" }) }), Me = (a) => /* @__PURE__ */ e("svg", { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", focusable: "false", ...a, children: /* @__PURE__ */ e("path", { d: "M10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1ZM10 8.5C9.44771 8.5 9 8.94772 9 9.5V13.5C9 14.0523 9.44771 14.5 10 14.5C10.5523 14.5 11 14.0523 11 13.5V9.5C11 8.94772 10.5523 8.5 10 8.5ZM10 5.5C9.44771 5.5 9 5.94772 9 6.5C9 7.05228 9.44771 7.5 10 7.5C10.5523 7.5 11 7.05228 11 6.5C11 5.94772 10.5523 5.5 10 5.5Z" }) }), Ie = ({
  value: a,
  onChange: t,
  placeholder: s = "Поиск",
  className: n = ""
}) => /* @__PURE__ */ r("div", { className: ["ds-search", n].filter(Boolean).join(" "), children: [
  /* @__PURE__ */ e("span", { className: "ds-search__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ e(he, {}) }),
  /* @__PURE__ */ e(
    "input",
    {
      className: "ds-search__input ts-400-m",
      type: "search",
      placeholder: s,
      value: a,
      onChange: (i) => t == null ? void 0 : t(i.target.value)
    }
  ),
  a && /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: "ds-search__clear",
      "aria-label": "Очистить",
      onClick: () => t == null ? void 0 : t(""),
      children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--20", "aria-hidden": "true", children: /* @__PURE__ */ e(Te, {}) })
    }
  )
] }), Re = ({
  value: a,
  onChange: t,
  placeholder: s,
  className: n = ""
}) => /* @__PURE__ */ e("div", { className: ["bottom-sheet-search", n].filter(Boolean).join(" "), children: /* @__PURE__ */ e(Ie, { value: a, onChange: t, placeholder: s }) }), He = 5e3;
function ce(a, t, s, n, i, l) {
  let o = a, c = 0, d, m = null, _ = !0;
  function h(u) {
    if (!_) return;
    const p = m === null ? 0 : Math.min((u - m) / 1e3, 0.064);
    m = u;
    const v = -s * (o - t) - n * c;
    if (c += v * p, o += c * p, Math.abs(o - t) < 0.5 && Math.abs(c) < 0.5) {
      i(t), l();
      return;
    }
    i(o), d = requestAnimationFrame(h);
  }
  return d = requestAnimationFrame(h), () => {
    _ = !1, cancelAnimationFrame(d);
  };
}
const La = ({
  type: a = "success",
  textAlign: t = "left",
  children: s,
  className: n = "",
  onHide: i
}) => {
  const l = M(null), o = M(null), c = M(() => {
  }), d = M(i);
  d.current = i, ye(() => {
    const _ = l.current, h = o.current.offsetHeight;
    _.style.height = "0px", c.current = ce(0, h, 200, 16, (p) => {
      _.style.height = `${p}px`;
    }, () => {
      _.style.height = `${h}px`;
    });
    const u = setTimeout(() => {
      c.current();
      const p = parseFloat(l.current.style.height) || h;
      c.current = ce(p, 0, 100, 16, (v) => {
        l.current.style.height = `${v}px`;
      }, () => {
        var v;
        (v = d.current) == null || v.call(d);
      });
    }, He);
    return () => {
      clearTimeout(u), c.current();
    };
  }, []);
  const m = [
    "alert",
    `alert--${a}`,
    t === "center" ? "alert--center" : "",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { ref: l, className: "alert__wrapper", children: /* @__PURE__ */ e("div", { ref: o, className: m, children: /* @__PURE__ */ e("p", { className: "alert__text ts-500-s", children: s }) }) });
}, ja = ({
  title: a,
  description: t,
  left: s,
  right: n,
  variant: i = "single",
  onClick: l,
  isDisabled: o = !1
}) => {
  const c = [
    "action-form-cell",
    `action-form-cell--${i}`,
    t ? "" : "action-form-cell--single-line",
    n ? "" : "action-form-cell--no-spinner",
    o ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { className: c, type: "button", onClick: l, disabled: o, children: /* @__PURE__ */ r("div", { className: "action-form-cell__content", children: [
    /* @__PURE__ */ r("div", { className: "action-form-cell__main", children: [
      s && /* @__PURE__ */ e("div", { className: "action-form-cell__left", children: s }),
      /* @__PURE__ */ r("div", { className: `action-form-cell__text ${t ? "action-form-cell__text--dual" : ""}`, children: [
        /* @__PURE__ */ e("p", { className: "action-form-cell__title ts-500-m", children: a }),
        t && /* @__PURE__ */ e("p", { className: "action-form-cell__description ts-400-s", children: t })
      ] })
    ] }),
    n && /* @__PURE__ */ e("div", { className: "action-form-cell__right", children: n })
  ] }) });
}, P = ({
  label: a,
  imageUrl: t,
  icon: s,
  size: n = "m",
  shape: i = "superellipse",
  className: l = "",
  style: o
}) => {
  const d = [
    "avatar",
    `avatar--${n}`,
    `avatar--${i}`,
    t && "avatar--image",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: d, style: o, children: t ? /* @__PURE__ */ e("img", { src: t, alt: a || "Avatar", className: "avatar__image" }) : s ? /* @__PURE__ */ e("span", { className: "ds-icon avatar__icon", children: s }) : /* @__PURE__ */ e("span", { className: "avatar__label", children: a }) });
}, Ee = ({
  isChecked: a = !1,
  isIndeterminate: t = !1,
  isDisabled: s = !1,
  onChange: n,
  label: i,
  style: l
}) => {
  const o = (d) => {
    d.preventDefault(), !s && n && n(!a);
  }, c = [
    "checkbox",
    a ? "is-checked" : "",
    t ? "is-indeterminate" : "",
    s ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "button",
    {
      className: c,
      type: "button",
      role: "checkbox",
      "aria-checked": t ? "mixed" : a,
      "aria-label": i,
      disabled: s,
      onClick: o,
      style: l,
      children: [
        /* @__PURE__ */ e("span", { className: "checkbox__icon checkbox__icon--check", "aria-hidden": "true", children: /* @__PURE__ */ e(te, {}) }),
        /* @__PURE__ */ e("span", { className: "checkbox__icon checkbox__icon--minus", "aria-hidden": "true", children: /* @__PURE__ */ e(se, {}) })
      ]
    }
  );
}, De = ({
  isSelected: a = !1,
  isDisabled: t = !1,
  onChange: s,
  label: n
}) => {
  const i = [
    "radio",
    a ? "is-selected" : "",
    t ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "button",
    {
      className: i,
      type: "button",
      role: "radio",
      "aria-checked": a,
      "aria-label": n,
      disabled: t,
      onClick: t ? void 0 : s
    }
  );
}, Ve = ({
  isSelected: a = !1,
  isDisabled: t = !1,
  onChange: s,
  label: n,
  style: i
}) => {
  const l = () => {
    !t && s && s(!a);
  }, o = [
    "switch",
    a ? "is-selected" : "",
    t ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "button",
    {
      className: o,
      type: "button",
      role: "switch",
      "aria-checked": a,
      "aria-label": n,
      disabled: t,
      onClick: l,
      style: i
    }
  );
}, Z = ({
  value: a,
  color: t = "var(--primitive-neutral-4)",
  textColor: s = "var(--primitive-default)",
  size: n = "m",
  className: i = ""
}) => {
  const l = a > 99 ? "99+" : a.toString();
  return /* @__PURE__ */ e(
    "div",
    {
      className: `ds-badge ds-badge--${n} ${i}`,
      style: {
        backgroundColor: t,
        color: s
      },
      children: l
    }
  );
}, Y = (a) => a ?? /* @__PURE__ */ e(z, {}), Se = ({
  variant: a = "disclosure",
  className: t = "",
  content: s,
  icon: n,
  secondaryIcon: i,
  text: l = "Text",
  secondaryText: o = "Text XS",
  value: c = 0,
  isChecked: d = !1,
  isDisabled: m = !1,
  avatarLabel: _ = "AA",
  onCheckedChange: h,
  onStep: u
}) => {
  const p = ["ds-cell-right-accessory", t].filter(Boolean).join(" ");
  if (s)
    return /* @__PURE__ */ e("div", { className: p, children: s });
  switch (a) {
    case "disclosure":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e("span", { className: "ds-cell-right-accessory__disclosure", "aria-hidden": "true", children: /* @__PURE__ */ e(A, {}) }) });
    case "checkbox":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(
        Ee,
        {
          isChecked: d,
          isDisabled: m,
          onChange: h,
          label: "Checkbox"
        }
      ) });
    case "radio":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(
        De,
        {
          isSelected: d,
          isDisabled: m,
          onChange: m ? void 0 : () => h == null ? void 0 : h(!d),
          label: "Radio"
        }
      ) });
    case "switch":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(
        Ve,
        {
          isSelected: d,
          isDisabled: m,
          onChange: h,
          label: "Switch"
        }
      ) });
    case "icon-30":
    case "icon-24":
    case "icon-18": {
      const v = `ds-cell-right-accessory__icon--${a.split("-")[1]}`;
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e("span", { className: `ds-cell-right-accessory__icon ${v}`, "aria-hidden": "true", children: Y(n) }) });
    }
    case "spinner-24":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(V, {}) });
    case "spinner-34-avatar-s":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ r("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ e("span", { className: "ds-cell-right-accessory__spinner-large", children: /* @__PURE__ */ e(V, { className: "ds-cell-right-accessory__spinner-large-inner" }) }),
        /* @__PURE__ */ e(P, { size: "s", shape: "circle", label: _ })
      ] }) });
    case "avatar-m":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(P, { size: "m", shape: "circle", label: _ }) });
    case "avatar-s":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(P, { size: "s", shape: "circle", label: _ }) });
    case "text-l":
    case "text-m":
    case "text-s": {
      const v = `ds-cell-right-accessory__${a}`;
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e("span", { className: `${v} ${a === "text-l" ? "ts-500-l" : a === "text-m" ? "ts-500-m" : "ts-500-s"}`, children: l }) });
    }
    case "text-m-text-xs":
    case "table-text-m-text-m":
    case "table-text-s-text-s":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ r("div", { className: "ds-cell-right-accessory__stack", children: [
        /* @__PURE__ */ e(
          "span",
          {
            className: a === "table-text-s-text-s" ? "ds-cell-right-accessory__text-s-muted ts-500-s" : "ds-cell-right-accessory__text-m-primary ts-500-m",
            children: l
          }
        ),
        /* @__PURE__ */ e(
          "span",
          {
            className: a === "text-m-text-xs" ? "ds-cell-right-accessory__text-xs-secondary ts-400-xs" : a === "table-text-m-text-m" ? "ds-cell-right-accessory__text-m-strong ts-500-m" : "ds-cell-right-accessory__text-s ts-500-s",
            children: o
          }
        )
      ] }) });
    case "text-l-disclosure":
    case "text-s-disclosure":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ r("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ e(
          "span",
          {
            className: a === "text-l-disclosure" ? "ds-cell-right-accessory__text-l ts-500-l" : "ds-cell-right-accessory__text-s ts-500-s",
            children: l
          }
        ),
        /* @__PURE__ */ e("span", { className: "ds-cell-right-accessory__disclosure", "aria-hidden": "true", children: /* @__PURE__ */ e(A, {}) })
      ] }) });
    case "badge":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e(Z, { value: c }) });
    case "badge-disclosure":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ r("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ e(Z, { value: c }),
        /* @__PURE__ */ e("span", { className: "ds-cell-right-accessory__disclosure", "aria-hidden": "true", children: /* @__PURE__ */ e(A, {}) })
      ] }) });
    case "notification-indicator":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ e("span", { className: "ds-cell-right-accessory__notification-indicator", "aria-hidden": "true" }) });
    case "icon-24-icon-24":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ r("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ e("span", { className: "ds-cell-right-accessory__icon ds-cell-right-accessory__icon--24", "aria-hidden": "true", children: Y(n) }),
        /* @__PURE__ */ e("span", { className: "ds-cell-right-accessory__icon ds-cell-right-accessory__icon--24", "aria-hidden": "true", children: Y(i) })
      ] }) });
    case "text-m-icon-30":
    case "text-m-icon-24":
    case "text-m-icon-18": {
      const v = `ds-cell-right-accessory__icon--${a.split("-").pop()}`;
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ r("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ e("span", { className: "ds-cell-right-accessory__text-m ts-500-m", children: l }),
        /* @__PURE__ */ e("span", { className: `ds-cell-right-accessory__icon ${v}`, "aria-hidden": "true", children: Y(n) })
      ] }) });
    }
    case "stepper":
      return /* @__PURE__ */ e("div", { className: p, children: /* @__PURE__ */ r("div", { className: "ds-cell-right-accessory__stepper", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "ds-cell-right-accessory__stepper-button",
            onClick: () => u == null ? void 0 : u(-1),
            disabled: m,
            "aria-label": "Decrease",
            children: /* @__PURE__ */ e(se, {})
          }
        ),
        /* @__PURE__ */ e(Z, { value: c }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: "ds-cell-right-accessory__stepper-button",
            onClick: () => u == null ? void 0 : u(1),
            disabled: m,
            "aria-label": "Increase",
            children: /* @__PURE__ */ e(ue, {})
          }
        )
      ] }) });
    case "custom":
    default:
      return /* @__PURE__ */ e("div", { className: p });
  }
}, ze = {
  xl: "ts-500-xl",
  "2xl": "ts-500-2xl"
}, Oe = {
  0: "accordeon-cell--content-spacing-0",
  "0-5x": "accordeon-cell--content-spacing-0-5x",
  "1x": "accordeon-cell--content-spacing-1x",
  "2x": "accordeon-cell--content-spacing-2x",
  "4x": "accordeon-cell--content-spacing-4x",
  "6x": "accordeon-cell--content-spacing-6x"
}, Pe = {
  0: "accordeon-cell--list-spacing-0",
  "0-5x": "accordeon-cell--list-spacing-0-5x",
  "1x": "accordeon-cell--list-spacing-1x",
  "2x": "accordeon-cell--list-spacing-2x",
  "4x": "accordeon-cell--list-spacing-4x",
  "6x": "accordeon-cell--list-spacing-6x"
}, Ta = ({
  title: a,
  description: t,
  children: s,
  size: n = "xl",
  chevronPosition: i = "title",
  hasDescription: l = !0,
  hasRightAccessory: o = !0,
  rightAccessory: c,
  rightAccessoryVariant: d = "text-m",
  rightAccessoryText: m = "Text M",
  defaultOpen: _ = !1,
  isOpen: h,
  onOpenChange: u,
  contentSpacing: p = "4x",
  listSpacing: v = "2x",
  className: b = ""
}) => {
  const [y, x] = L(_), f = h ?? y, N = l && !!t, w = !!s, B = () => {
    const T = !f;
    h === void 0 && x(T), u == null || u(T);
  }, C = [
    "accordeon-cell",
    `accordeon-cell--${n}`,
    `accordeon-cell--chevron-${i}`,
    Oe[p],
    Pe[v],
    f ? "is-open" : "",
    N ? "accordeon-cell--with-description" : "",
    b
  ].filter(Boolean).join(" "), $ = /* @__PURE__ */ e(Se, { variant: d, text: m });
  return /* @__PURE__ */ r("div", { className: C, children: [
    /* @__PURE__ */ r(
      "button",
      {
        className: "accordeon-cell__header",
        type: "button",
        "aria-expanded": f,
        onClick: B,
        children: [
          /* @__PURE__ */ r("span", { className: "accordeon-cell__center", children: [
            /* @__PURE__ */ r("span", { className: "accordeon-cell__content-row", children: [
              /* @__PURE__ */ e("span", { className: `accordeon-cell__title ${ze[n]}`, children: a }),
              /* @__PURE__ */ e("span", { className: "accordeon-cell__chevron", "aria-hidden": "true", children: /* @__PURE__ */ e(ae, {}) })
            ] }),
            N && /* @__PURE__ */ e("span", { className: "accordeon-cell__description ts-400-s", children: t })
          ] }),
          o && i === "title" && /* @__PURE__ */ e("span", { className: "accordeon-cell__right-accessory", children: c ?? $ })
        ]
      }
    ),
    w && f && /* @__PURE__ */ e("div", { className: "accordeon-cell__body", children: /* @__PURE__ */ e("div", { className: "accordeon-cell__list", children: s }) })
  ] });
}, Ze = {
  xl: "ts-500-xl",
  l: "ts-500-l",
  m: "ts-500-m",
  s: "ts-500-s",
  xs: "ts-500-s"
}, F = ({
  children: a,
  variant: t = "primary",
  size: s = "m",
  isHugWidth: n = !1,
  leftAccessory: i,
  rightAccessory: l,
  isLoading: o = !1,
  isDisabled: c = !1,
  onClick: d,
  type: m = "button",
  className: _ = ""
}) => {
  const h = [
    "button",
    `button--${t}`,
    `button--${s}`,
    n ? "button--hug" : "",
    o ? "is-loading" : "",
    _
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "button",
    {
      className: h,
      type: m,
      disabled: c,
      onClick: d,
      "aria-busy": o || void 0,
      children: [
        /* @__PURE__ */ r("div", { className: "button__content", children: [
          i && /* @__PURE__ */ e("span", { className: "button__accessory", children: i }),
          /* @__PURE__ */ e("span", { className: `button__label ${Ze[s]}`, children: a }),
          l && /* @__PURE__ */ e("span", { className: "button__accessory", children: l })
        ] }),
        o && /* @__PURE__ */ e(V, {})
      ]
    }
  );
}, Ma = ({
  title: a,
  subtitle: t,
  description: s,
  leftAccessory: n,
  rightAccessory: i,
  hasLeftAccessory: l = !0,
  hasRightAccessory: o = !0,
  verticalPadding: c = "none",
  titleClassName: d = "ts-500-m",
  subtitleClassName: m = "ts-400-s",
  descriptionClassName: _ = "ts-400-s",
  titleColor: h = "var(--primitive-primary)",
  subtitleColor: u = "var(--primitive-secondary)",
  descriptionColor: p = "var(--primitive-secondary)",
  className: v = "",
  onClick: b
}) => {
  const y = /* @__PURE__ */ e(
    P,
    {
      size: "m",
      shape: "circle",
      label: "AA",
      style: {
        "--avatar-surface": "var(--bg-neutral-2)",
        "--avatar-color": "var(--primitive-secondary)"
      }
    }
  ), x = /* @__PURE__ */ e("span", { className: "ds-cell__default-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(A, {}) });
  return /* @__PURE__ */ r(
    "div",
    {
      className: ["ds-cell", c !== "none" ? `ds-cell--padding-${c}` : "", v].filter(Boolean).join(" "),
      onClick: b,
      role: b ? "button" : void 0,
      tabIndex: b ? 0 : void 0,
      children: [
        l && /* @__PURE__ */ e("div", { className: "ds-cell__left-accessory", children: n || y }),
        /* @__PURE__ */ r("div", { className: "ds-cell__content", children: [
          t && /* @__PURE__ */ e("div", { className: `ds-cell__subtitle ${m}`, style: { color: u }, children: t }),
          /* @__PURE__ */ e("div", { className: `ds-cell__title ${d}`, style: { color: h }, children: a }),
          s && /* @__PURE__ */ e("div", { className: `ds-cell__description ${_}`, style: { color: p }, children: s })
        ] }),
        o && /* @__PURE__ */ e("div", { className: "ds-cell__right-accessory", children: i || x })
      ]
    }
  );
}, Ia = ({
  variant: a = "avatar",
  className: t = "",
  content: s,
  icon: n,
  avatarLabel: i = "AA",
  isChecked: l = !1,
  onClick: o
}) => {
  const c = ["ds-cell-left-accessory", t].filter(Boolean).join(" ");
  if (s)
    return /* @__PURE__ */ e("div", { className: c, children: s });
  switch (a) {
    case "avatar":
      return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(P, { size: "m", shape: "circle", label: i }) });
    case "icon-30":
    case "icon-24":
    case "icon-18": {
      const d = `ds-cell-left-accessory__icon--${a.split("-")[1]}`;
      return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("span", { className: `ds-cell-left-accessory__icon ${d}`, "aria-hidden": "true", children: n ?? /* @__PURE__ */ e(z, {}) }) });
    }
    case "card-preview":
      return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("span", { className: "ds-cell-left-accessory__card-preview", "aria-hidden": "true" }) });
    case "avatar-checkbox":
      return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e("span", { className: "ds-cell-left-accessory__avatar-checkbox", "aria-hidden": "true", children: /* @__PURE__ */ e(
        "span",
        {
          className: `ds-cell-left-accessory__avatar-checkbox-indicator${l ? " is-checked" : ""}`
        }
      ) }) });
    case "add-button":
      return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "ds-cell-left-accessory__add-button",
          onClick: o,
          "aria-label": "Add",
          children: /* @__PURE__ */ e("span", { className: "ds-cell-left-accessory__add-icon", "aria-hidden": "true", children: n ?? /* @__PURE__ */ e(z, {}) })
        }
      ) });
    case "custom":
    default:
      return /* @__PURE__ */ e("div", { className: c });
  }
}, fe = 600, oe = fe, Fe = 280, de = 320, ge = ({
  isOpen: a,
  onClose: t,
  triggerRef: s,
  label: n,
  value: i,
  hasSearch: l = !1,
  searchPlaceholder: o = "Поиск",
  onSearchChange: c,
  isLoading: d = !1,
  isEmpty: m = !1,
  emptyText: _ = "Ничего не найдено",
  children: h
}) => {
  const [u, p] = L(!1), [v, b] = L(!1), [y, x] = L(() => window.innerWidth < oe), [f, N] = L({ left: 0, width: de }), [w, B] = L("");
  j(() => {
    const g = () => x(window.innerWidth < oe);
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, []);
  const C = () => {
    if (!s.current) return;
    const g = s.current.getBoundingClientRect(), I = Math.max(g.width, de);
    window.innerHeight - g.bottom >= Fe ? N({ top: g.bottom + 4, left: g.left, width: I }) : N({ bottom: window.innerHeight - g.top + 4, left: g.left, width: I });
  };
  j(() => {
    if (!y) {
      if (a)
        b(!1), p(!0);
      else if (u) {
        b(!0);
        const g = setTimeout(() => {
          p(!1), b(!1);
        }, 300);
        return () => clearTimeout(g);
      }
    }
  }, [a, y]), j(() => {
    if (!(!a || y))
      return C(), window.addEventListener("scroll", C, { capture: !0 }), window.addEventListener("resize", C), () => {
        window.removeEventListener("scroll", C, { capture: !0 }), window.removeEventListener("resize", C);
      };
  }, [a, y]), j(() => {
    if (!a || y) return;
    const g = (I) => {
      I.key === "Escape" && t();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [a, y, t]), j(() => {
    a || B("");
  }, [a]);
  const $ = /* @__PURE__ */ e("span", { className: "dropdown-popup__checkmark", "aria-hidden": "true", children: /* @__PURE__ */ e(te, {}) }), T = /* @__PURE__ */ e("span", { className: "dropdown-popup__checkmark", "aria-hidden": "true" }), k = G.Children.map(h, (g) => {
    if (!G.isValidElement(g))
      return g;
    const I = i !== void 0 && typeof g.props.title == "string" && g.props.title === i, E = g.props.onClick;
    return G.cloneElement(g, {
      verticalPadding: "none",
      titleClassName: "ts-400-m",
      hasRightAccessory: !0,
      rightAccessory: I ? $ : T,
      onClick: E ? () => {
        E(), t();
      } : t
    });
  }), R = /* @__PURE__ */ r(D, { children: [
    d && /* @__PURE__ */ e("div", { className: "dropdown-popup__state", children: /* @__PURE__ */ e(V, {}) }),
    !d && m && /* @__PURE__ */ e("div", { className: "dropdown-popup__state", children: /* @__PURE__ */ e("p", { className: "dropdown-popup__empty-text ts-400-m", children: _ }) }),
    !d && !m && k
  ] });
  if (y) {
    const g = n || l ? /* @__PURE__ */ r(D, { children: [
      n && /* @__PURE__ */ e(be, { title: n }),
      l && /* @__PURE__ */ e(
        Re,
        {
          value: w,
          onChange: (I) => {
            B(I), c == null || c(I);
          },
          placeholder: o
        }
      )
    ] }) : void 0;
    return le.createPortal(
      /* @__PURE__ */ e(Ne, { isOpen: a, onClose: t, header: g, children: R }),
      document.body
    );
  }
  if (!u) return null;
  const H = [
    "dropdown-popup",
    v ? "dropdown-popup--exiting" : ""
  ].filter(Boolean).join(" "), S = l && /* @__PURE__ */ e("div", { className: "dropdown-popup__search-wrap", children: /* @__PURE__ */ r("div", { className: "dropdown-popup__search", children: [
    /* @__PURE__ */ e("span", { className: "dropdown-popup__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(he, {}) }),
    /* @__PURE__ */ e(
      "input",
      {
        className: "dropdown-popup__search-input ts-400-m",
        type: "text",
        placeholder: o,
        onChange: (g) => c == null ? void 0 : c(g.target.value)
      }
    )
  ] }) });
  return le.createPortal(
    /* @__PURE__ */ r("div", { className: H, children: [
      /* @__PURE__ */ e("div", { className: "dropdown-popup__overlay", onClick: t }),
      /* @__PURE__ */ r(
        "div",
        {
          className: "dropdown-popup__panel",
          style: {
            position: "fixed",
            width: f.width,
            top: f.top,
            bottom: f.bottom,
            left: f.left
          },
          children: [
            S,
            /* @__PURE__ */ e("div", { className: "dropdown-popup__content ds-scroll-area", children: R })
          ]
        }
      )
    ] }),
    document.body
  );
}, Ra = ({
  children: a,
  variant: t = "chip",
  isSelected: s = !1,
  isDisabled: n = !1,
  onClick: i,
  onClose: l,
  leftAccessory: o,
  leftIcon: c,
  badge: d,
  isOpen: m = !1,
  className: _ = "",
  popupContent: h,
  value: u,
  hasSearch: p = !1,
  searchPlaceholder: v = "Поиск",
  onSearchChange: b,
  isLoading: y = !1,
  isEmpty: x = !1,
  emptyText: f = "Ничего не найдено"
}) => {
  const [N, w] = L(!1), B = M(null), C = t === "dropdown" && h !== void 0, $ = C ? N : m, T = [
    "chip",
    `chip--${t}`,
    s ? "is-selected" : "",
    n ? "is-disabled" : "",
    $ ? "is-pressed" : "",
    _
  ].filter(Boolean).join(" "), k = () => o ? o === "icon" ? /* @__PURE__ */ e("span", { className: "chip__accessory chip__accessory--left ds-icon ds-icon--xs", "aria-hidden": "true", children: c ?? /* @__PURE__ */ e(z, {}) }) : o === "logo" ? /* @__PURE__ */ e("span", { className: "chip__accessory chip__accessory--left", "aria-hidden": "true", children: /* @__PURE__ */ e("span", { className: "chip__logo" }) }) : o === "logo-stack" ? /* @__PURE__ */ r("span", { className: "chip__accessory chip__accessory--left chip__logo-stack", "aria-hidden": "true", children: [
    /* @__PURE__ */ e("span", { className: "chip__logo" }),
    /* @__PURE__ */ e("span", { className: "chip__logo" })
  ] }) : null : null, R = () => {
    C ? w((g) => !g) : i == null || i();
  }, H = (g) => {
    g.stopPropagation(), l && l(g);
  }, S = /* @__PURE__ */ r(D, { children: [
    k(),
    /* @__PURE__ */ e("span", { className: "chip__label ts-500-s", children: a }),
    t === "tab" && d !== void 0 && /* @__PURE__ */ e("span", { className: "chip__accessory chip__accessory--right chip__badge", "aria-hidden": "true", children: /* @__PURE__ */ e(Z, { value: Number(d), size: "s" }) }),
    t === "dropdown" && /* @__PURE__ */ e("span", { className: `chip__accessory chip__caret ${$ ? "is-open" : ""}`, "aria-hidden": "true", children: /* @__PURE__ */ e(ve, {}) }),
    t === "action" && s && /* @__PURE__ */ e("span", { className: "chip__accessory chip__cross", "aria-hidden": "true", onClick: H })
  ] });
  return t === "dropdown" ? /* @__PURE__ */ r(D, { children: [
    /* @__PURE__ */ e(
      "button",
      {
        ref: B,
        className: T,
        type: "button",
        disabled: n,
        onClick: R,
        children: /* @__PURE__ */ e("span", { className: "chip__dropdown", children: S })
      }
    ),
    C && /* @__PURE__ */ e(
      ge,
      {
        isOpen: N,
        onClose: () => w(!1),
        triggerRef: B,
        value: u,
        hasSearch: p,
        searchPlaceholder: v,
        onSearchChange: b,
        isLoading: y,
        isEmpty: x,
        emptyText: f,
        children: h
      }
    )
  ] }) : /* @__PURE__ */ e(
    "button",
    {
      className: T,
      type: "button",
      disabled: n,
      onClick: i,
      children: S
    }
  );
}, Ha = ({
  trigger: a,
  isOpen: t,
  onClose: s,
  placement: n = "right",
  items: i,
  className: l = ""
}) => {
  const o = M(null);
  j(() => {
    if (!t)
      return;
    const m = (_) => {
      var u;
      const h = _.target;
      h instanceof Node && ((u = o.current) != null && u.contains(h) || s == null || s());
    };
    return document.addEventListener("mousedown", m), () => {
      document.removeEventListener("mousedown", m);
    };
  }, [t, s]);
  const c = ["context-menu-anchor", l].filter(Boolean).join(" "), d = ["context-menu", `context-menu--${n}`].join(" ");
  return /* @__PURE__ */ r("div", { ref: o, className: c, children: [
    a,
    t && /* @__PURE__ */ e("div", { className: d, children: /* @__PURE__ */ e("div", { className: "context-menu__list", children: i.map((m) => {
      const _ = [
        "context-menu__item",
        "hoverOpacity",
        `context-menu__item--${m.variant ?? "default"}`,
        m.isDisabled ? "is-disabled" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: _,
          disabled: m.isDisabled,
          onClick: () => {
            var h;
            m.isDisabled || ((h = m.onClick) == null || h.call(m), s == null || s());
          },
          children: [
            m.icon && /* @__PURE__ */ e("span", { className: "context-menu__icon ds-icon ds-icon--m", "aria-hidden": "true", children: m.icon }),
            /* @__PURE__ */ e("span", { className: "context-menu__label ts-500-m", children: m.label })
          ]
        },
        m.key
      );
    }) }) })
  ] });
}, Ea = ({
  text: a,
  title: t,
  hasTitle: s = !0,
  hasCloseIcon: n = !0,
  onClose: i,
  hasAction: l = !1,
  actionLabel: o,
  hasSpinner: c = !1,
  onActionClick: d,
  accessory: m = "icon",
  icon: _,
  avatar: h,
  size: u = "s",
  className: p = ""
}) => {
  const v = s && !!t || l, b = [
    "contextual-notification",
    `contextual-notification--${u}`,
    v ? "contextual-notification--extended" : "",
    p
  ].filter(Boolean).join(" "), y = u === "m" ? "ts-500-m" : "ts-500-s", x = u === "m" ? "ts-400-m" : "ts-400-s", f = u === "m" ? "ts-500-m" : "ts-500-s", N = u === "m" ? 20 : 16;
  return /* @__PURE__ */ r("div", { className: b, children: [
    /* @__PURE__ */ e("div", { className: "contextual-notification__accessory", children: m === "avatar" ? h : /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--18", "aria-hidden": "true", children: _ }) }),
    /* @__PURE__ */ r("div", { className: "contextual-notification__body", children: [
      /* @__PURE__ */ r("div", { className: "contextual-notification__header", children: [
        /* @__PURE__ */ r("div", { className: "contextual-notification__texts", children: [
          s && t && /* @__PURE__ */ e("p", { className: `contextual-notification__title ${y}`, children: t }),
          /* @__PURE__ */ e("p", { className: `contextual-notification__text ${x}`, children: a })
        ] }),
        n && /* @__PURE__ */ e(
          "button",
          {
            className: "contextual-notification__close hoverOpacity",
            type: "button",
            "aria-label": "Закрыть",
            onClick: i,
            children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--18", "aria-hidden": "true", children: /* @__PURE__ */ e(J, {}) })
          }
        )
      ] }),
      l && /* @__PURE__ */ r("div", { className: "contextual-notification__action", children: [
        /* @__PURE__ */ e(
          "button",
          {
            className: `contextual-notification__action-label ${f} hoverOpacity`,
            type: "button",
            onClick: d,
            children: o
          }
        ),
        c && /* @__PURE__ */ e(
          V,
          {
            className: "contextual-notification__spinner",
            style: { width: `${N}px`, height: `${N}px` }
          }
        )
      ] })
    ] })
  ] });
}, Ae = 400, Da = ({
  isOpen: a,
  onClose: t,
  header: s,
  footer: n,
  children: i,
  className: l = ""
}) => {
  const [o, c] = L(a ? "in" : "hidden");
  if (j(() => {
    if (a)
      c("in");
    else if (o === "in") {
      c("out");
      const _ = setTimeout(() => c("hidden"), Ae);
      return () => clearTimeout(_);
    }
  }, [a]), j(() => {
    if (o !== "in") return;
    const _ = (h) => {
      h.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [o, t]), o === "hidden") return null;
  const d = ["drawer", l].filter(Boolean).join(" "), m = [
    "drawer__panel",
    o === "in" ? "animate-slide-right-in" : "animate-slide-right-out"
  ].join(" ");
  return /* @__PURE__ */ r("div", { className: d, children: [
    /* @__PURE__ */ e("div", { className: "drawer__overlay", "aria-hidden": "true" }),
    /* @__PURE__ */ r("aside", { className: m, role: "dialog", "aria-modal": "true", children: [
      s && /* @__PURE__ */ e("div", { className: "drawer__header", children: s }),
      /* @__PURE__ */ e("div", { className: "drawer__content ds-scroll-area", children: i }),
      n && /* @__PURE__ */ e("div", { className: "drawer__footer", children: n })
    ] })
  ] });
}, Va = ({
  layout: a = "1-button",
  description: t,
  primaryAction: s,
  secondaryAction: n,
  className: i = ""
}) => {
  if (a === "empty")
    return /* @__PURE__ */ e("div", { className: ["drawer-footer", "drawer-footer--empty", i].filter(Boolean).join(" ") });
  const l = [
    "drawer-footer",
    a === "2-horizontal-buttons" ? "drawer-footer--row" : "drawer-footer--column",
    i
  ].filter(Boolean).join(" "), o = [
    "drawer-footer__buttons",
    a === "2-horizontal-buttons" ? "drawer-footer__buttons--row" : "drawer-footer__buttons--column"
  ].join(" ");
  return /* @__PURE__ */ r("div", { className: l, children: [
    t && /* @__PURE__ */ e("div", { className: "drawer-footer__description ts-400-s", children: t }),
    /* @__PURE__ */ r("div", { className: o, children: [
      n && a !== "1-button" && /* @__PURE__ */ e(
        F,
        {
          variant: n.isSelected ? "primary" : "secondary",
          isDisabled: n.isDisabled,
          isLoading: n.isLoading,
          onClick: n.onClick,
          className: "drawer-footer__button",
          children: n.label
        }
      ),
      s && /* @__PURE__ */ e(
        F,
        {
          variant: s.isSelected ? "primary" : "secondary",
          isDisabled: s.isDisabled,
          isLoading: s.isLoading,
          onClick: s.onClick,
          className: "drawer-footer__button",
          children: s.label
        }
      )
    ] })
  ] });
}, Ke = {
  "text-m": "ts-500-m",
  "text-l": "ts-500-l"
}, We = ({
  children: a,
  variant: t = "text-m",
  className: s = ""
}) => {
  const n = [
    "drawer-header-title",
    `drawer-header-title--${t}`,
    Ke[t],
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: n, children: a });
}, Sa = ({
  title: a,
  titleVariant: t = "text-m",
  leftAccessory: s,
  hasDefaultBackArrow: n = !1,
  onLeftAccessoryClick: i,
  onClose: l,
  className: o = ""
}) => {
  const c = ["drawer-header", o].filter(Boolean).join(" "), d = s ?? (n ? /* @__PURE__ */ e("span", { className: "drawer-header__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ e(Q, {}) }) : null), m = (_, h, u) => _ ? h ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: "drawer-header__side drawer-header__control hoverOpacity",
      onClick: h,
      "aria-label": u,
      children: _
    }
  ) : /* @__PURE__ */ e("div", { className: "drawer-header__side", children: _ }) : /* @__PURE__ */ e("div", { className: "drawer-header__side drawer-header__side--empty" });
  return /* @__PURE__ */ r("div", { className: c, children: [
    m(d, i, "Открыть предыдущее действие"),
    /* @__PURE__ */ e("div", { className: "drawer-header__center", children: typeof a > "u" ? null : /* @__PURE__ */ e(We, { variant: t, children: a }) }),
    m(
      l ? /* @__PURE__ */ e("span", { className: "drawer-header__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ e(J, {}) }) : null,
      l,
      "Закрыть панель"
    )
  ] });
}, ne = ({
  trigger: a,
  children: t,
  placement: s = "right",
  isOpen: n,
  defaultOpen: i = !1,
  onOpenChange: l,
  className: o = ""
}) => {
  const [c, d] = L(i), m = n !== void 0, _ = m ? n : c;
  j(() => {
    m || d(i);
  }, [i, m]);
  const h = (v) => {
    m || d(v), l == null || l(v);
  }, u = ["tooltip-anchor", o].filter(Boolean).join(" "), p = ["tooltip", `tooltip--${s}`].join(" ");
  return /* @__PURE__ */ r(
    "div",
    {
      className: u,
      onMouseEnter: () => h(!0),
      onMouseLeave: () => h(!1),
      onFocus: () => h(!0),
      onBlur: (v) => {
        v.currentTarget.contains(v.relatedTarget) || h(!1);
      },
      children: [
        /* @__PURE__ */ e("div", { className: "tooltip-anchor__trigger hoverOpacity", children: a }),
        _ && /* @__PURE__ */ r("div", { className: p, role: "tooltip", children: [
          /* @__PURE__ */ e("div", { className: "tooltip__arrow", "aria-hidden": "true" }),
          /* @__PURE__ */ e("div", { className: "tooltip__content", children: typeof t == "string" ? /* @__PURE__ */ e("p", { className: "tooltip__paragraph ts-400-s", children: t }) : t })
        ] })
      ]
    }
  );
}, za = ({
  label: a,
  description: t,
  errorMessage: s,
  value: n,
  onChange: i,
  isDisabled: l = !1,
  isError: o = !1,
  placeholder: c = "Выберите вариант",
  right: d,
  hasChevron: m = !0,
  hasHelpIcon: _ = !1,
  helpText: h,
  children: u,
  hasSearch: p = !1,
  searchPlaceholder: v = "Поиск",
  onSearchChange: b,
  isLoading: y = !1,
  isEmpty: x = !1,
  emptyText: f = "Ничего не найдено"
}) => {
  const [N, w] = L(!1), B = M(null), C = o ? s ?? t : t, $ = [
    "dropdown",
    l ? "dropdown--disabled" : "",
    o ? "dropdown--error" : "",
    N ? "dropdown--open" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(D, { children: [
    /* @__PURE__ */ r(
      "div",
      {
        ref: B,
        className: $,
        onClick: () => {
          l || w((R) => !R);
        },
        onKeyDown: (R) => {
          (R.key === "Enter" || R.key === " ") && (R.preventDefault(), l || w((H) => !H));
        },
        role: "combobox",
        "aria-expanded": N,
        "aria-haspopup": "listbox",
        tabIndex: l ? -1 : 0,
        children: [
          /* @__PURE__ */ r("div", { className: "dropdown__content", children: [
            /* @__PURE__ */ r("div", { className: "dropdown__main", children: [
              /* @__PURE__ */ r("div", { className: "dropdown__header", children: [
                a && /* @__PURE__ */ e("p", { className: "dropdown__title ts-500-s", children: a }),
                a && _ && (h ? /* @__PURE__ */ e(ne, { trigger: /* @__PURE__ */ e("span", { className: "dropdown__help ds-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(K, {}) }), children: h }) : /* @__PURE__ */ e("span", { className: "dropdown__help ds-icon hoverOpacity", "aria-hidden": "true", children: /* @__PURE__ */ e(K, {}) }))
              ] }),
              /* @__PURE__ */ e("p", { className: `dropdown__value ts-400-m${n ? "" : " is-placeholder"}`, children: n || c })
            ] }),
            /* @__PURE__ */ e("div", { className: "dropdown__accessory", children: /* @__PURE__ */ r("span", { className: "dropdown__accessory-stack", children: [
              d,
              m && /* @__PURE__ */ e("span", { className: "dropdown__chevron", "aria-hidden": "true", children: /* @__PURE__ */ e(ve, {}) })
            ] }) })
          ] }),
          C && /* @__PURE__ */ r("div", { className: "dropdown__meta", children: [
            /* @__PURE__ */ e("div", { className: "dropdown__divider" }),
            /* @__PURE__ */ e("p", { className: "dropdown__description ts-400-s", children: C })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        isOpen: N,
        onClose: () => w(!1),
        triggerRef: B,
        label: a,
        value: n,
        hasSearch: p,
        searchPlaceholder: v,
        onSearchChange: b,
        isLoading: y,
        isEmpty: x,
        emptyText: f,
        children: u
      }
    )
  ] });
}, me = (a, t) => /* @__PURE__ */ e(
  "button",
  {
    className: "feedback-banner__action",
    type: "button",
    onClick: a.onClick,
    disabled: a.isDisabled,
    children: /* @__PURE__ */ e("span", { className: "feedback-banner__action-label ts-500-m", children: a.label })
  },
  t
), Oa = ({
  children: a,
  primaryAction: t,
  secondaryAction: s,
  className: n = ""
}) => {
  const i = [t, s].filter(Boolean);
  return /* @__PURE__ */ r("section", { className: ["feedback-banner", n].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e("p", { className: "feedback-banner__content ts-500-m", children: a }),
    i.length > 0 && /* @__PURE__ */ r("div", { className: "feedback-banner__actions", "aria-label": "Действия баннера", children: [
      t && me(t, "primary"),
      s && me(s, "secondary")
    ] })
  ] });
}, Xe = ({
  icon: a,
  ariaLabel: t,
  variant: s = "primary",
  size: n = "m",
  isLoading: i = !1,
  isDisabled: l = !1,
  onClick: o,
  type: c = "button",
  className: d = ""
}) => {
  const m = [
    "icon-button",
    `icon-button--${s}`,
    `icon-button--${n}`,
    i ? "is-loading" : "",
    d
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "button",
    {
      className: m,
      type: c,
      disabled: l,
      onClick: o,
      "aria-label": t,
      "aria-busy": i || void 0,
      children: [
        /* @__PURE__ */ e("span", { className: "icon-button__icon", children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: a }) }),
        i && /* @__PURE__ */ e(V, {})
      ]
    }
  );
}, Ge = { label: "Действие" }, Ye = { label: "Действие" }, O = (a, t, s = "") => /* @__PURE__ */ e(
  F,
  {
    variant: t,
    isDisabled: a.isDisabled,
    isLoading: a.isLoading,
    onClick: a.onClick,
    className: ["footer__button", s].filter(Boolean).join(" "),
    children: a.label
  }
), qe = ({
  icon: a = /* @__PURE__ */ e(z, {}),
  ariaLabel: t,
  onClick: s,
  isDisabled: n = !1,
  className: i = ""
}) => /* @__PURE__ */ e(
  Xe,
  {
    variant: "secondary",
    size: "m",
    icon: a,
    ariaLabel: t,
    isDisabled: n,
    onClick: s,
    className: ["footer-icon-button", i].filter(Boolean).join(" ")
  }
), Pa = ({
  layout: a = "1-button",
  description: t,
  primaryAction: s = Ge,
  secondaryAction: n = Ye,
  iconAction: i,
  stepperValue: l = "00",
  onStepperDecrease: o,
  onStepperIncrease: c,
  isStepperDecreaseDisabled: d = !1,
  isStepperIncreaseDisabled: m = !1,
  pageControlCount: _ = 3,
  pageControlValue: h = 0,
  onPageControlChange: u,
  className: p = ""
}) => {
  const v = [
    "footer",
    `footer--${a}`,
    t ? "footer--with-description-slot" : "",
    p
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("footer", { className: v, children: [
    !!t && /* @__PURE__ */ e("div", { className: "footer__description ts-400-s", children: t }),
    a === "1-button" && /* @__PURE__ */ e("div", { className: "footer__buttons footer__buttons--single", children: O(s, "primary") }),
    a === "2-buttons-in-line" && /* @__PURE__ */ r("div", { className: "footer__buttons footer__buttons--inline", children: [
      O(n, "secondary"),
      O(s, "primary")
    ] }),
    a === "3-buttons" && /* @__PURE__ */ r("div", { className: "footer__buttons footer__buttons--triple", children: [
      /* @__PURE__ */ e(
        qe,
        {
          ariaLabel: (i == null ? void 0 : i.ariaLabel) ?? "Действие",
          icon: i == null ? void 0 : i.icon,
          isDisabled: i == null ? void 0 : i.isDisabled,
          onClick: i == null ? void 0 : i.onClick
        }
      ),
      O(n, "secondary"),
      O(s, "primary")
    ] }),
    a === "page-control-button" && /* @__PURE__ */ r(D, { children: [
      /* @__PURE__ */ e("div", { className: "footer__page-control", role: "tablist", "aria-label": "Страницы", children: Array.from({ length: _ }, (y, x) => {
        const f = x === h;
        return /* @__PURE__ */ e(
          "button",
          {
            className: [
              "footer__page-dot",
              f ? "footer__page-dot--selected" : ""
            ].filter(Boolean).join(" "),
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-label": `Страница ${x + 1}`,
            onClick: () => u == null ? void 0 : u(x)
          },
          x
        );
      }) }),
      /* @__PURE__ */ e("div", { className: "footer__buttons footer__buttons--single", children: O(s, "primary") })
    ] }),
    a === "stepper-button" && /* @__PURE__ */ r("div", { className: "footer__buttons footer__buttons--stepper", children: [
      /* @__PURE__ */ r("div", { className: "footer__stepper", role: "group", "aria-label": "Количество", children: [
        /* @__PURE__ */ e(
          "button",
          {
            className: "footer__stepper-button",
            type: "button",
            "aria-label": "Уменьшить",
            disabled: d,
            onClick: o,
            children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ e(se, {}) })
          }
        ),
        /* @__PURE__ */ e("div", { className: "footer__stepper-value ts-500-m", children: l }),
        /* @__PURE__ */ e(
          "button",
          {
            className: "footer__stepper-button",
            type: "button",
            "aria-label": "Увеличить",
            disabled: m,
            onClick: c,
            children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ e(ue, {}) })
          }
        )
      ] }),
      O(s, "primary")
    ] })
  ] });
};
function Qe(a = fe) {
  const [t, s] = L(
    () => typeof window < "u" && window.matchMedia(`(max-width: ${a}px)`).matches
  );
  return j(() => {
    const n = window.matchMedia(`(max-width: ${a}px)`), i = (l) => s(l.matches);
    return n.addEventListener("change", i), () => n.removeEventListener("change", i);
  }, [a]), t;
}
const Je = 300, Ue = 400, ea = ({
  isOpen: a,
  onClose: t,
  header: s,
  footer: n,
  children: i,
  className: l = "",
  isOverlayCloseEnabled: o = !0,
  isSheet: c = !1
}) => {
  const d = Qe(), m = M(null), [_, h] = L(!1), [u, p] = L(a ? "in" : "hidden");
  if (j(() => {
    if (a)
      p("in");
    else if (u === "in") {
      p("out");
      const w = setTimeout(() => p("hidden"), d ? Ue : Je);
      return () => clearTimeout(w);
    }
  }, [a]), j(() => {
    if (u !== "in") return;
    const N = (w) => {
      w.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [u, t]), j(() => {
    if (u !== "in") {
      h(!1);
      return;
    }
    const N = m.current;
    if (!N) return;
    const w = () => h(N.scrollTop >= 24);
    return w(), N.addEventListener("scroll", w), () => N.removeEventListener("scroll", w);
  }, [u, i]), c && d) {
    const N = G.isValidElement(s) ? s.props.title : void 0, w = N != null ? /* @__PURE__ */ e(be, { title: N }) : void 0;
    return /* @__PURE__ */ e(
      Ne,
      {
        isOpen: a,
        onClose: t,
        header: w,
        footer: n,
        isOverlayCloseEnabled: o,
        className: l,
        children: i
      }
    );
  }
  if (u === "hidden") return null;
  const v = G.isValidElement(s) ? s.props.title : void 0, b = ["modal", l].filter(Boolean).join(" "), y = [
    "modal__header",
    _ ? "modal__header--compact" : ""
  ].filter(Boolean).join(" "), x = [
    "modal__panel",
    d ? u === "in" ? "animate-slide-right-in" : "animate-slide-right-out" : u === "in" ? "animate-popup-in" : "animate-popup-out"
  ].join(" "), f = [
    "modal__overlay",
    u === "in" ? "animate-overlay-in" : "animate-overlay-out"
  ].join(" ");
  return /* @__PURE__ */ r("div", { className: b, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: f,
        "aria-label": "Закрыть модальное окно",
        onClick: () => {
          o && (t == null || t());
        }
      }
    ),
    /* @__PURE__ */ r("aside", { className: x, role: "dialog", "aria-modal": "true", children: [
      s && /* @__PURE__ */ e("div", { className: y, children: s }),
      /* @__PURE__ */ e("div", { ref: m, className: "modal__content ds-scroll-area", children: /* @__PURE__ */ r("div", { className: "modal__content-inner", children: [
        v && /* @__PURE__ */ e("div", { className: "modal__content-title ts-600-2xl", children: v }),
        i
      ] }) }),
      n && /* @__PURE__ */ e("div", { className: "modal__footer", children: n })
    ] })
  ] });
}, aa = ({
  title: a,
  leftAccessory: t,
  hasDefaultBackArrow: s = !1,
  onLeftAccessoryClick: n,
  onClose: i,
  variant: l = "default",
  className: o = ""
}) => {
  if (l === "empty")
    return /* @__PURE__ */ e("div", { className: ["modal-header", "modal-header--empty", o].filter(Boolean).join(" ") });
  const c = ["modal-header", o].filter(Boolean).join(" "), d = t ?? (s ? /* @__PURE__ */ e("span", { className: "modal-header__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ e(Q, {}) }) : null), m = (_, h, u) => _ ? h ? /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: "modal-header__side modal-header__control hoverOpacity",
      onClick: h,
      "aria-label": u,
      children: _
    }
  ) : /* @__PURE__ */ e("div", { className: "modal-header__side", children: _ }) : /* @__PURE__ */ e("div", { className: "modal-header__side modal-header__side--empty" });
  return /* @__PURE__ */ e("div", { className: c, children: /* @__PURE__ */ r("div", { className: "modal-header__navigation", children: [
    m(d, n, "Открыть предыдущее действие"),
    /* @__PURE__ */ e("div", { className: "modal-header__center", children: typeof a > "u" ? null : /* @__PURE__ */ e("div", { className: "modal-header__title modal-header__title--compact ts-500-m", children: a }) }),
    m(
      /* @__PURE__ */ e("span", { className: "modal-header__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ e(J, {}) }),
      i,
      "Закрыть модальное окно"
    )
  ] }) });
}, ta = ({
  layout: a = "1-button",
  description: t,
  primaryAction: s,
  secondaryAction: n,
  className: i = ""
}) => {
  if (a === "empty")
    return /* @__PURE__ */ e("div", { className: ["modal-footer", "modal-footer--empty", i].filter(Boolean).join(" ") });
  const l = [
    "modal-footer",
    a === "2-horizontal-buttons" ? "modal-footer--row" : "modal-footer--column",
    i
  ].filter(Boolean).join(" "), o = [
    "modal-footer__buttons",
    a === "2-horizontal-buttons" ? "modal-footer__buttons--row" : "modal-footer__buttons--column"
  ].join(" ");
  return /* @__PURE__ */ r("div", { className: l, children: [
    t && /* @__PURE__ */ e("div", { className: "modal-footer__description ts-400-s", children: t }),
    /* @__PURE__ */ r("div", { className: o, children: [
      n && a !== "1-button" && /* @__PURE__ */ e(
        F,
        {
          variant: n.isSelected ? "primary" : "secondary",
          isDisabled: n.isDisabled,
          isLoading: n.isLoading,
          onClick: n.onClick,
          className: "modal-footer__button",
          children: n.label
        }
      ),
      s && /* @__PURE__ */ e(
        F,
        {
          variant: s.isSelected ? "primary" : "secondary",
          isDisabled: s.isDisabled,
          isLoading: s.isLoading,
          onClick: s.onClick,
          className: "modal-footer__button",
          children: s.label
        }
      )
    ] })
  ] });
}, sa = ({
  title: a,
  description: t,
  icon: s,
  size: n = "l",
  isLoading: i = !1,
  onClick: l,
  className: o = ""
}) => {
  const c = [
    "link-cell",
    `link-cell--${n}`,
    t ? "link-cell--has-description" : "",
    l ? "link-cell--interactive" : "",
    o
  ].filter(Boolean).join(" "), d = n === "l" ? "ds-icon--30" : "ds-icon--24", m = n === "l" ? "ts-500-l" : "ts-500-m";
  return /* @__PURE__ */ r(
    "div",
    {
      className: c,
      onClick: l,
      role: l ? "button" : void 0,
      tabIndex: l ? 0 : void 0,
      children: [
        /* @__PURE__ */ e("span", { className: `link-cell__icon ds-icon ${d}`, "aria-hidden": "true", children: s ?? /* @__PURE__ */ e(z, {}) }),
        /* @__PURE__ */ r("div", { className: "link-cell__text", children: [
          /* @__PURE__ */ e("span", { className: `link-cell__title ${m}`, children: a }),
          t && /* @__PURE__ */ e("span", { className: "link-cell__description ts-400-s", children: t })
        ] }),
        i && /* @__PURE__ */ e(V, { className: "link-cell__spinner" })
      ]
    }
  );
}, na = {
  neutral: {
    avatarSurface: "var(--bg-brand-1)",
    avatarColor: "var(--primitive-brand)",
    icon: /* @__PURE__ */ e(xe, {})
  },
  error: {
    avatarSurface: "var(--bg-error-1)",
    avatarColor: "var(--primitive-error)",
    icon: /* @__PURE__ */ e(J, {})
  },
  success: {
    avatarSurface: "var(--bg-success-1)",
    avatarColor: "var(--primitive-success)",
    icon: /* @__PURE__ */ e(te, {})
  }
}, Za = ({
  isOpen: a,
  onDone: t,
  state: s = "neutral",
  title: n,
  text: i,
  items: l = [],
  className: o = ""
}) => {
  const c = na[s], d = l.slice(0, 5);
  return /* @__PURE__ */ e(
    ea,
    {
      isOpen: a,
      isOverlayCloseEnabled: !1,
      className: ["flow-result-view__modal", o].filter(Boolean).join(" "),
      header: /* @__PURE__ */ e(aa, { variant: "empty" }),
      footer: /* @__PURE__ */ e(
        ta,
        {
          layout: "1-button",
          primaryAction: {
            label: "Готово",
            isSelected: !0,
            onClick: t
          }
        }
      ),
      children: /* @__PURE__ */ r("div", { className: "flow-result-view", children: [
        /* @__PURE__ */ e(
          P,
          {
            size: "l",
            shape: "superellipse",
            icon: c.icon,
            style: {
              "--avatar-surface": c.avatarSurface,
              "--avatar-color": c.avatarColor
            }
          }
        ),
        /* @__PURE__ */ r("div", { className: "flow-result-view__content", children: [
          /* @__PURE__ */ e("h2", { className: "flow-result-view__title ts-600-4xl", children: n }),
          /* @__PURE__ */ e("div", { className: "flow-result-view__text ts-400-m", children: i }),
          d.length > 0 && /* @__PURE__ */ e("div", { className: "flow-result-view__items", children: d.map((m, _) => /* @__PURE__ */ e(
            sa,
            {
              title: m.title,
              description: m.description,
              icon: m.icon,
              isLoading: m.isLoading,
              onClick: m.onClick
            },
            _
          )) })
        ] })
      ] })
    }
  );
}, Fa = ({
  children: a,
  title: t,
  subtitle: s,
  description: n,
  left: i,
  right: l,
  variant: o = "single",
  className: c = ""
}) => {
  const d = [
    "form-cell",
    `form-cell--${o}`,
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("div", { className: d, children: [
    /* @__PURE__ */ r("div", { className: "form-cell__content", children: [
      /* @__PURE__ */ r("div", { className: "form-cell__main", children: [
        i && /* @__PURE__ */ e("div", { className: "form-cell__left", children: i }),
        /* @__PURE__ */ r("div", { className: `form-cell__text ${s || n ? "form-cell__text--dual" : ""}`, children: [
          s && /* @__PURE__ */ e("p", { className: "form-cell__subtitle ts-400-s", children: s }),
          /* @__PURE__ */ e("p", { className: "form-cell__title ts-400-m", children: t }),
          n && /* @__PURE__ */ e("p", { className: "form-cell__description ts-400-s", children: n })
        ] })
      ] }),
      l && /* @__PURE__ */ e("div", { className: "form-cell__right", children: /* @__PURE__ */ e("div", { className: "form-cell__control", children: l }) })
    ] }),
    a
  ] });
}, Aa = ({
  children: a,
  icon: t,
  variant: s = "primary",
  isDisabled: n = !1,
  isLoading: i = !1,
  onClick: l
}) => {
  const o = [
    "header-button",
    `header-button--${s}`,
    n ? "is-disabled" : "",
    i ? "is-loading" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "button",
    {
      className: o,
      type: "button",
      disabled: n || i,
      onClick: l,
      children: [
        i && /* @__PURE__ */ e(V, { className: "header-button__spinner" }),
        t && /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m header-button__icon", children: t }),
        /* @__PURE__ */ e("span", { className: "header-button__label ts-500-s", children: a })
      ]
    }
  );
}, Ka = ({
  label: a,
  description: t,
  errorMessage: s,
  placeholder: n,
  value: i,
  onChange: l,
  isDisabled: o = !1,
  isError: c = !1,
  left: d,
  right: m,
  hasHelpIcon: _ = !1,
  helpText: h
}) => {
  const u = c ? s ?? t : t, p = [
    "input",
    o ? "input--disabled" : "",
    c ? "input--error" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("label", { className: p, children: [
    /* @__PURE__ */ r("div", { className: "input__content", children: [
      d && /* @__PURE__ */ e("div", { className: "input__accessory", children: d }),
      /* @__PURE__ */ r("div", { className: "input__main", children: [
        a && /* @__PURE__ */ r("div", { className: "input__header", children: [
          /* @__PURE__ */ e("p", { className: "input__title ts-500-s", children: a }),
          _ && (h ? /* @__PURE__ */ e(ne, { trigger: /* @__PURE__ */ e("span", { className: "input__help ds-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(K, {}) }), children: h }) : /* @__PURE__ */ e("span", { className: "input__help ds-icon hoverOpacity", "aria-hidden": "true", children: /* @__PURE__ */ e(K, {}) }))
        ] }),
        /* @__PURE__ */ e(
          "input",
          {
            className: "input__field ts-400-m",
            type: "text",
            placeholder: n,
            value: i,
            onChange: (v) => l == null ? void 0 : l(v.target.value),
            disabled: o
          }
        )
      ] }),
      m && /* @__PURE__ */ e("div", { className: "input__accessory", children: m })
    ] }),
    u && /* @__PURE__ */ r("div", { className: "input__meta", children: [
      /* @__PURE__ */ e("div", { className: "input__divider" }),
      /* @__PURE__ */ e("p", { className: "input__description ts-400-s", children: u })
    ] })
  ] });
}, ia = ({
  variant: a = "percent",
  value: t,
  maxSteps: s = 5,
  progressColor: n = "var(--bg-brand)",
  trackColor: i = "var(--container-transparent-2)",
  className: l = "",
  ariaLabel: o
}) => {
  const c = a === "steps", d = Math.max(1, Math.floor(s)), m = Math.max(0, Math.min(Math.floor(t), d));
  let _ = 0;
  return c ? _ = Math.max(0, Math.min(m / d * 100, 100)) : _ = Math.max(0, Math.min(t, 100)), /* @__PURE__ */ e(
    "div",
    {
      className: `ds-linear-progress ${l}`,
      role: "progressbar",
      "aria-valuenow": c ? m : Math.round(_),
      "aria-valuemin": 0,
      "aria-valuemax": c ? d : 100,
      "aria-label": o || (c ? `Progress: ${m} of ${d} steps` : `Progress: ${Math.round(_)}%`),
      children: c ? /* @__PURE__ */ e("div", { className: "ds-linear-progress__steps", "aria-hidden": "true", children: Array.from({ length: d }, (h, u) => /* @__PURE__ */ e(
        "div",
        {
          className: "ds-linear-progress__step",
          style: {
            backgroundColor: u < m ? n : i
          }
        },
        u
      )) }) : /* @__PURE__ */ r(D, { children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "ds-linear-progress__track",
            style: { backgroundColor: i }
          }
        ),
        /* @__PURE__ */ e(
          "div",
          {
            className: "ds-linear-progress__fill",
            style: {
              width: `${_}%`,
              backgroundColor: n
            }
          }
        )
      ] })
    }
  );
}, ra = (a) => /* @__PURE__ */ r("svg", { width: "73", height: "35", viewBox: "0 0 73 35", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a, children: [
  /* @__PURE__ */ e("path", { d: "M52.2086 33.8315H48.4481V20.9498H52.2086V25.6194H53.1487C55.002 25.6194 55.6467 25.2973 56.8017 22.5868L57.5001 20.9498H61.1799V21.245L60.1592 23.7676C59.5414 25.2973 58.7088 26.505 57.8224 27.2296L61.5828 33.5363V33.8315H57.6344L54.4917 28.5715H52.2086V33.8315Z", fill: "currentColor" }),
  /* @__PURE__ */ e("path", { d: "M32.9981 20.9498H36.7586V25.351H41.4591V20.9498H45.2196V33.8315H41.4591V28.6251H36.7586V33.8315H32.9981V20.9498Z", fill: "currentColor" }),
  /* @__PURE__ */ e("path", { d: "M17.7848 21.1376C19.3696 20.7619 21.223 20.6545 22.4048 20.6545C28.0455 20.6545 29.5497 23.1504 29.496 25.8878V31.0673L30.839 31.0941V33.7778C30.2481 33.9388 29.6034 34.073 28.9588 34.073C27.374 34.073 26.5682 33.2411 26.3802 32.2213H26.1384C25.1715 33.5631 23.4524 34.1535 21.7871 34.1535C19.2085 34.1535 16.8179 32.758 16.8179 29.8059C16.8179 26.4782 19.88 25.6194 22.9152 25.6194H26.0041C25.9504 24.036 24.097 23.4724 22.0288 23.4724C20.7932 23.4724 19.2622 23.6871 18.1609 24.1165L17.7848 21.1376ZM20.5783 29.8059C20.5783 30.9599 21.3573 31.4162 22.6197 31.4162C24.6611 31.4162 26.0041 30.2622 26.0041 28.0615L23.6136 28.0347C21.3841 28.0347 20.5783 28.6251 20.5783 29.8059Z", fill: "currentColor" }),
  /* @__PURE__ */ e("path", { d: "M9.41993 19.4737C5.90122 19.7689 3.99413 20.9766 3.67181 24.1434H3.96727C4.98797 22.3721 6.78761 21.3791 9.12447 21.3791C12.294 21.3791 15.3292 23.3114 15.3292 27.7932C15.3292 32.0603 12.3209 34.2341 8.10377 34.2341C3.24204 34.2341 0.63658 31.0673 0.63658 25.512C0.63658 21.4865 1.92588 16.8169 9.41993 16.1996L13.9325 15.8239L13.9862 19.098L9.41993 19.4737ZM8.18435 31.0673C10.5212 31.0673 11.4613 29.6986 11.4613 27.7932C11.4613 25.7267 10.4138 24.5191 8.26494 24.5191C6.22354 24.5191 5.09541 25.5926 4.53134 26.6929C4.53134 29.2692 5.47145 31.0673 8.18435 31.0673Z", fill: "currentColor" }),
  /* @__PURE__ */ e("path", { d: "M59.9379 1.02741C61.5226 0.651691 63.376 0.544343 64.5578 0.544343C70.1985 0.544343 71.7027 3.04018 71.649 5.77755V10.9571L72.992 10.9839V13.6676C72.4011 13.8286 71.7564 13.9628 71.1118 13.9628C69.527 13.9628 68.7212 13.1309 68.5332 12.1111H68.2914C67.3245 13.4529 65.6054 14.0433 63.9401 14.0433C61.3615 14.0433 58.9709 12.6478 58.9709 9.69574C58.9709 6.36796 62.033 5.50918 65.0682 5.50918H68.1571C68.1034 3.9258 66.2501 3.36222 64.1818 3.36222C62.9462 3.36222 61.4152 3.57692 60.3139 4.00631L59.9379 1.02741ZM62.7313 9.69574C62.7313 10.8497 63.5103 11.306 64.7727 11.306C66.8141 11.306 68.1571 10.152 68.1571 7.95134L65.7666 7.92451C63.5371 7.92451 62.7313 8.51492 62.7313 9.69574Z", fill: "currentColor" }),
  /* @__PURE__ */ e("path", { d: "M48.6412 13.7213H44.8807V0.839555H48.6412V5.50919H49.5813C51.4347 5.50919 52.0793 5.18714 53.2343 2.47661L53.9327 0.839555H57.6125V1.13476L56.5919 3.65744C55.9741 5.18714 55.1414 6.39481 54.255 7.1194L58.0154 13.4261V13.7213H54.067L50.9243 8.46125H48.6412V13.7213Z", fill: "currentColor" }),
  /* @__PURE__ */ e("path", { d: "M37.901 0.839555H41.6614V13.7213H37.901V9.10534C36.8803 9.53473 35.6984 9.8031 34.4897 9.8031C31.6425 9.8031 29.3594 8.32707 29.3594 4.67724V0.839555H33.1198V4.70408C33.1198 5.8849 33.8719 6.87787 35.5104 6.87787C36.2625 6.87787 37.1489 6.66318 37.901 6.34113V0.839555Z", fill: "currentColor" }),
  /* @__PURE__ */ e("path", { d: "M20.5322 14.1507C16.5837 14.1507 13.2798 11.5743 13.2798 7.28042C13.2798 2.98651 16.5837 0.410156 20.5322 0.410156C24.4538 0.410156 27.7576 2.98651 27.7576 7.28042C27.7576 11.5743 24.4538 14.1507 20.5322 14.1507ZM20.5322 10.9839C22.6541 10.9839 23.8897 9.40054 23.8897 7.28042C23.8897 5.1603 22.6541 3.57692 20.5322 3.57692C18.3833 3.57692 17.1477 5.1603 17.1477 7.28042C17.1477 9.40054 18.3833 10.9839 20.5322 10.9839Z", fill: "currentColor" }),
  /* @__PURE__ */ e("path", { d: "M12.3477 0.839555V4.16734H8.10377V13.7213H4.34331V4.16734H0.0993652V0.839555H12.3477Z", fill: "currentColor" })
] }), U = ({
  isActive: a = !1,
  label: t,
  onClick: s
}) => {
  const n = [
    "sci-navigation-button",
    a ? "sci-navigation-button--selected" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "button",
    {
      className: n,
      type: "button",
      "aria-current": a ? "page" : void 0,
      onClick: s,
      children: /* @__PURE__ */ e("span", { className: "sci-navigation-button__label ts-500-m", children: t })
    }
  );
}, ee = ({ className: a = "" }) => /* @__PURE__ */ e("div", { className: `main-page-navigation-bar__notification-indicator ${a}`, "aria-hidden": "true", children: /* @__PURE__ */ e("div", { className: "main-page-navigation-bar__notification-dot" }) }), Wa = ({
  activeNavItem: a,
  className: t = "",
  customer: s = "ООО Ромашка",
  hasLive: n = !1,
  hasNewPush: i = !0,
  hasSelect: l = !0,
  hasSubscription: o = !0,
  hasTin: c = !0,
  isSecondLine: d = !1,
  tin: m = "ИНН 4827 1359 64",
  logoUrl: _,
  tochkaPlusUrl: h,
  avatarUrl: u,
  avatarInitials: p = "НО",
  onCustomerClick: v,
  onNotificationsClick: b,
  onGiftClick: y,
  onSettingsClick: x,
  onLogoutClick: f,
  onNavMainClick: N,
  onNavPaymentsClick: w,
  onNavServicesClick: B
}) => {
  const [C, $] = L(!1), T = [
    "main-page-navigation-bar",
    t
  ].filter(Boolean).join(" "), k = () => {
    $(!C), v == null || v();
  };
  return /* @__PURE__ */ r("header", { className: T, children: [
    /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__desktop", children: [
      /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__content", children: [
        /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__logo-section", children: [
          _ ? /* @__PURE__ */ e(
            "img",
            {
              src: _,
              alt: "Tochka Bank",
              className: "main-page-navigation-bar__logo",
              "aria-hidden": "true"
            }
          ) : /* @__PURE__ */ e(
            ra,
            {
              className: "main-page-navigation-bar__logo",
              "aria-hidden": "true"
            }
          ),
          n && /* @__PURE__ */ r(
            "button",
            {
              className: "main-page-navigation-bar__live-indicator ts-600-s",
              type: "button",
              "aria-label": "Live indicator",
              children: [
                /* @__PURE__ */ e(ee, { className: "main-page-navigation-bar__live-dot" }),
                /* @__PURE__ */ e("span", { className: "main-page-navigation-bar__live-text", children: "В ЭФИРЕ" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r("nav", { className: "main-page-navigation-bar__nav", children: [
          /* @__PURE__ */ e(
            U,
            {
              isActive: a === "main",
              label: "Главная",
              onClick: N
            }
          ),
          /* @__PURE__ */ e(
            U,
            {
              isActive: a === "payments",
              label: "Платежи",
              onClick: w
            }
          ),
          /* @__PURE__ */ e(
            U,
            {
              isActive: a === "services",
              label: "Сервисы",
              onClick: B
            }
          )
        ] }),
        /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-section", children: [
          /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-info", children: [
            /* @__PURE__ */ e("div", { className: "main-page-navigation-bar__avatar", children: u ? /* @__PURE__ */ e(
              "img",
              {
                src: u,
                alt: s,
                className: "main-page-navigation-bar__avatar-image"
              }
            ) : /* @__PURE__ */ e("div", { className: "main-page-navigation-bar__avatar-initials ts-600-xs", children: p }) }),
            /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-details", children: [
              /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-name-wrapper", children: [
                /* @__PURE__ */ e("span", { className: "main-page-navigation-bar__customer-name ts-500-m", children: s }),
                l && /* @__PURE__ */ e(
                  "button",
                  {
                    className: `main-page-navigation-bar__customer-select hoverOpacity ${C ? "main-page-navigation-bar__customer-select--open" : ""}`,
                    type: "button",
                    onClick: k,
                    "aria-label": "Customer menu",
                    "aria-expanded": C,
                    children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--18", "aria-hidden": "true", children: /* @__PURE__ */ e(ae, {}) })
                  }
                )
              ] }),
              d && /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-extra", children: [
                o && h && /* @__PURE__ */ e(
                  "img",
                  {
                    src: h,
                    alt: "Tochka Plus",
                    className: "main-page-navigation-bar__tochka-plus"
                  }
                ),
                c && /* @__PURE__ */ e("span", { className: "main-page-navigation-bar__tin ts-500-xs", children: m })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__actions", children: [
            /* @__PURE__ */ r(
              "button",
              {
                className: "main-page-navigation-bar__action-button hoverOpacity",
                type: "button",
                "aria-label": "Notifications",
                onClick: b,
                children: [
                  /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ e(ie, {}) }),
                  i && /* @__PURE__ */ e(ee, { className: "main-page-navigation-bar__notification-badge" })
                ]
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                className: "main-page-navigation-bar__action-button hoverOpacity",
                type: "button",
                "aria-label": "Offers",
                onClick: y,
                children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ e(we, {}) })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                className: "main-page-navigation-bar__action-button hoverOpacity",
                type: "button",
                "aria-label": "Settings",
                onClick: x,
                children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ e(re, {}) })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                className: "main-page-navigation-bar__action-button hoverOpacity",
                type: "button",
                "aria-label": "Logout",
                onClick: f,
                children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ e(ke, {}) })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "main-page-navigation-bar__separator" })
    ] }),
    /* @__PURE__ */ e("div", { className: "main-page-navigation-bar__adaptive", children: /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__content main-page-navigation-bar__content--adaptive", children: [
      /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-info", children: [
        /* @__PURE__ */ e("div", { className: "main-page-navigation-bar__avatar", children: u ? /* @__PURE__ */ e(
          "img",
          {
            src: u,
            alt: s,
            className: "main-page-navigation-bar__avatar-image"
          }
        ) : /* @__PURE__ */ e("div", { className: "main-page-navigation-bar__avatar-initials ts-600-xs", children: p }) }),
        /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-details", children: [
          /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-name-wrapper", children: [
            /* @__PURE__ */ e("span", { className: "main-page-navigation-bar__customer-name ts-500-m", children: s }),
            l && /* @__PURE__ */ e(
              "button",
              {
                className: `main-page-navigation-bar__customer-select hoverOpacity ${C ? "main-page-navigation-bar__customer-select--open" : ""}`,
                type: "button",
                onClick: k,
                "aria-label": "Customer menu",
                "aria-expanded": C,
                children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--18", "aria-hidden": "true", children: /* @__PURE__ */ e(ae, {}) })
              }
            )
          ] }),
          d && /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__customer-extra", children: [
            o && h && /* @__PURE__ */ e(
              "img",
              {
                src: h,
                alt: "Tochka Plus",
                className: "main-page-navigation-bar__tochka-plus"
              }
            ),
            c && /* @__PURE__ */ e("span", { className: "main-page-navigation-bar__tin ts-500-xs", children: m })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r("div", { className: "main-page-navigation-bar__actions main-page-navigation-bar__actions--adaptive", children: [
        /* @__PURE__ */ e(
          "button",
          {
            className: "main-page-navigation-bar__action-button hoverOpacity",
            type: "button",
            "aria-label": "Settings",
            onClick: x,
            children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ e(re, {}) })
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            className: "main-page-navigation-bar__action-button hoverOpacity",
            type: "button",
            "aria-label": "Notifications",
            onClick: b,
            children: [
              /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ e(ie, {}) }),
              i && /* @__PURE__ */ e(ee, { className: "main-page-navigation-bar__notification-badge" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}, Xa = 74, _e = (a, t, s) => /* @__PURE__ */ e(
  "button",
  {
    className: "navigation-bar__button hoverOpacity",
    type: "button",
    "aria-label": t,
    onClick: s,
    children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: a })
  }
), la = (a) => a.kind === "step", X = (a, t, s, n = "") => /* @__PURE__ */ e(
  "button",
  {
    className: `navigation-bar-adaptive__icon-button hoverOpacity ${n}`,
    type: "button",
    "aria-label": t,
    onClick: s,
    children: /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: a })
  }
), ca = (a) => {
  const { titleVariant: t = "title", title: s, description: n, logo: i, progress: l } = a;
  if (t === "none")
    return /* @__PURE__ */ e("div", { className: "navigation-bar-adaptive__title navigation-bar-adaptive__title--empty", "aria-hidden": "true" });
  if (t === "image")
    return /* @__PURE__ */ e("div", { className: "navigation-bar-adaptive__title navigation-bar-adaptive__title--image", children: i });
  if (t === "step-progress" || t === "percent-progress") {
    const o = (l == null ? void 0 : l.value) ?? 0;
    return /* @__PURE__ */ e("div", { className: "navigation-bar-adaptive__title navigation-bar-adaptive__title--progress", children: /* @__PURE__ */ e(
      ia,
      {
        variant: t === "step-progress" ? "steps" : "percent",
        value: o,
        maxSteps: l == null ? void 0 : l.maxSteps,
        ariaLabel: l == null ? void 0 : l.ariaLabel
      }
    ) });
  }
  return /* @__PURE__ */ r("div", { className: `navigation-bar-adaptive__title ${t === "title-description" ? "navigation-bar-adaptive__title--description" : ""}`, children: [
    s && /* @__PURE__ */ e("div", { className: "navigation-bar-adaptive__title-text ts-500-m", children: s }),
    t === "title-description" && n && /* @__PURE__ */ e("div", { className: "navigation-bar-adaptive__description ts-500-xs", children: n })
  ] });
}, oa = (a) => {
  const {
    rightAccessoryVariant: t = "icon",
    rightIcon: s = /* @__PURE__ */ e(pe, {}),
    secondaryRightIcon: n,
    rightAriaLabel: i = "Action",
    secondaryRightAriaLabel: l = "Secondary action",
    onRightClick: o,
    onSecondaryRightClick: c,
    actionLabel: d = "Text M",
    badgeValue: m = 0
  } = a;
  return t === "none" ? /* @__PURE__ */ e("div", { className: "navigation-bar-adaptive__right navigation-bar-adaptive__right--empty", "aria-hidden": "true" }) : t === "action" ? /* @__PURE__ */ e(
    "button",
    {
      className: "navigation-bar-adaptive__action ts-500-m hoverOpacity",
      type: "button",
      onClick: o,
      children: d
    }
  ) : t === "icon-icon" ? /* @__PURE__ */ r("div", { className: "navigation-bar-adaptive__right", children: [
    X(s, i, o),
    X(n ?? s, l, c)
  ] }) : t === "icon-badge" ? /* @__PURE__ */ r("div", { className: "navigation-bar-adaptive__right navigation-bar-adaptive__right--badge", children: [
    /* @__PURE__ */ e(Z, { value: m, size: "s" }),
    X(s, i, o)
  ] }) : /* @__PURE__ */ e("div", { className: "navigation-bar-adaptive__right", children: X(s, i, o) });
}, da = (a) => {
  const {
    title: t,
    description: s,
    rootLinkLabel: n,
    items: i = [],
    className: l = "",
    hasBackButton: o = !0,
    hasActionButton: c = !0,
    hasRootLink: d = !0,
    hasDescription: m = !0,
    backButtonLabel: _ = "Go back",
    actionButtonLabel: h = "Clear",
    backButtonIcon: u = /* @__PURE__ */ e(Q, {}),
    actionButtonIcon: p = /* @__PURE__ */ e(pe, {}),
    onBackClick: v,
    onActionClick: b,
    onRootLinkClick: y,
    isInverted: x,
    isSticky: f
  } = a, N = i.length > 0, w = !!s && m, B = !!n && d, C = N && i.every(la), $ = [
    "navigation-bar",
    f ? "navigation-bar--sticky" : "",
    l
  ].filter(Boolean).join(" "), T = [
    "navigation-bar-adaptive",
    x ? "navigation-bar-adaptive--inverted" : "",
    f ? "navigation-bar-adaptive--sticky" : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(D, { children: [
    /* @__PURE__ */ r("section", { className: $, children: [
      (o || c) && /* @__PURE__ */ r("div", { className: "navigation-bar__buttons", children: [
        o && _e(u, _, v),
        c && _e(p, h, b)
      ] }),
      /* @__PURE__ */ r("div", { className: "navigation-bar__header", children: [
        B && /* @__PURE__ */ r(
          "button",
          {
            className: "navigation-bar__root-link hoverOpacity",
            type: "button",
            onClick: y,
            children: [
              /* @__PURE__ */ e("span", { className: "navigation-bar__root-link-label ts-500-s", children: n }),
              /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--xs navigation-bar__root-link-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(A, {}) })
            ]
          }
        ),
        /* @__PURE__ */ r("div", { className: "navigation-bar__title-block", children: [
          /* @__PURE__ */ e("h2", { className: "navigation-bar__title ts-600-2xl", children: t }),
          w && /* @__PURE__ */ e("p", { className: "navigation-bar__description ts-500-xs", children: s })
        ] })
      ] }),
      N && /* @__PURE__ */ e("div", { className: "navigation-bar__items", role: C ? "list" : void 0, children: i.map((k, R) => {
        const H = k.key ?? R;
        if (k.kind === "step") {
          const S = k.state === "current", g = k.state === "completed", I = g && !!k.onClick, E = [
            "navigation-bar__step",
            S ? "navigation-bar__step--current" : "",
            g ? "navigation-bar__step--completed" : "",
            I ? "hoverOpacity" : ""
          ].filter(Boolean).join(" "), W = /* @__PURE__ */ r(D, { children: [
            /* @__PURE__ */ e("span", { className: "navigation-bar__step-indicator", "aria-hidden": "true" }),
            /* @__PURE__ */ e("span", { className: "navigation-bar__step-label ts-500-m", children: k.label })
          ] });
          return I ? /* @__PURE__ */ e(
            "button",
            {
              className: E,
              type: "button",
              role: "listitem",
              onClick: k.onClick,
              children: W
            },
            H
          ) : /* @__PURE__ */ e(
            "div",
            {
              className: E,
              role: "listitem",
              children: W
            },
            H
          );
        }
        return k.href ? /* @__PURE__ */ e(
          "a",
          {
            className: "navigation-bar__link hoverOpacity",
            href: k.isDisabled ? void 0 : k.href,
            onClick: k.onClick,
            "aria-disabled": k.isDisabled || void 0,
            children: /* @__PURE__ */ e("span", { className: "navigation-bar__link-label ts-500-s", children: k.label })
          },
          H
        ) : /* @__PURE__ */ e(
          "button",
          {
            className: "navigation-bar__link hoverOpacity",
            type: "button",
            onClick: k.onClick,
            disabled: k.isDisabled,
            children: /* @__PURE__ */ e("span", { className: "navigation-bar__link-label ts-500-s", children: k.label })
          },
          H
        );
      }) })
    ] }),
    /* @__PURE__ */ r("section", { className: T, children: [
      /* @__PURE__ */ e("div", { className: "navigation-bar-adaptive__left", children: X(
        a.leftIcon ?? /* @__PURE__ */ e(Q, {}),
        a.leftAriaLabel ?? "Go back",
        a.onLeftClick ?? a.onBackClick
      ) }),
      ca(a),
      oa(a)
    ] })
  ] });
}, Ga = ({
  title: a,
  description: t,
  leftAccessory: s,
  variant: n = "default",
  hasDescription: i = !0,
  className: l = "",
  onClick: o,
  isDisabled: c = !1
}) => {
  const d = [
    "page-action",
    `page-action--${n}`,
    !t || !i ? "page-action--single-line" : "",
    c ? "is-disabled" : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "button",
    {
      className: d,
      type: "button",
      onClick: o,
      disabled: c,
      children: [
        s && /* @__PURE__ */ e("div", { className: "page-action__left", "aria-hidden": "true", children: s }),
        /* @__PURE__ */ r("div", { className: "page-action__text", children: [
          /* @__PURE__ */ e("p", { className: "page-action__title ts-500-l", children: a }),
          t && i && /* @__PURE__ */ e("p", { className: "page-action__description ts-400-s", children: t })
        ] })
      ]
    }
  );
}, Ya = ({
  size: a,
  navigationBar: t,
  rightPanel: s,
  children: n,
  topOffset: i = 0,
  className: l = ""
}) => {
  const o = a === "s" && !!s, c = [
    "page-layout",
    `page-layout--${a}`,
    o ? "page-layout--has-right-panel" : "",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    "div",
    {
      className: c,
      style: i ? { "--page-layout-top-offset": `${i}px` } : void 0,
      children: [
        /* @__PURE__ */ e("div", { className: "page-layout__nav", children: t }),
        /* @__PURE__ */ e("div", { className: "page-layout__content-wrapper", children: /* @__PURE__ */ e("div", { className: "page-layout__content", children: n }) }),
        o && /* @__PURE__ */ e("div", { className: "page-layout__right-panel", children: s })
      ]
    }
  );
}, ma = () => /* @__PURE__ */ e("span", { className: "promo-page-banner__default-image", "aria-hidden": "true" }), qa = ({
  title: a = "Text 5XL",
  adaptiveTitle: t = "Text 3XL",
  description: s = "Text XL",
  adaptiveDescription: n = "Text M",
  buttonLabel: i = "Text M",
  image: l,
  imageSrc: o,
  imageAlt: c = "",
  hasImage: d = !0,
  hasDescription: m = !0,
  hasButton: _ = !0,
  onButtonClick: h,
  className: u = ""
}) => {
  const p = [
    "promo-page-banner",
    !d && "promo-page-banner--without-image",
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("section", { className: p, children: [
    /* @__PURE__ */ e(
      da,
      {
        isInverted: !0,
        className: "promo-page-banner__navigation",
        titleVariant: "none",
        rightAccessoryVariant: "none"
      }
    ),
    /* @__PURE__ */ r("div", { className: "promo-page-banner__content", children: [
      d && /* @__PURE__ */ e("div", { className: "promo-page-banner__image", children: o ? /* @__PURE__ */ e("img", { className: "promo-page-banner__image-img", src: o, alt: c }) : l || /* @__PURE__ */ e(ma, {}) }),
      /* @__PURE__ */ r("div", { className: "promo-page-banner__info", children: [
        /* @__PURE__ */ r("div", { className: "promo-page-banner__text", children: [
          /* @__PURE__ */ e("h2", { className: "promo-page-banner__title promo-page-banner__title--desktop ts-600-5xl", children: a }),
          /* @__PURE__ */ e("h2", { className: "promo-page-banner__title promo-page-banner__title--adaptive ts-600-3xl", children: t }),
          m && s && /* @__PURE__ */ e("p", { className: "promo-page-banner__description promo-page-banner__description--desktop ts-500-xl", children: s }),
          m && n && /* @__PURE__ */ e("p", { className: "promo-page-banner__description promo-page-banner__description--adaptive ts-500-m", children: n })
        ] }),
        _ && /* @__PURE__ */ e("div", { className: "promo-page-banner__button-block", children: /* @__PURE__ */ e(
          F,
          {
            className: "promo-page-banner__button",
            variant: "white",
            onClick: h,
            children: i
          }
        ) })
      ] })
    ] })
  ] });
}, _a = () => /* @__PURE__ */ e(
  P,
  {
    size: "m",
    shape: "circle",
    icon: /* @__PURE__ */ e(z, {}),
    style: {
      "--avatar-size": "44px",
      "--avatar-content-size": "20px",
      "--avatar-surface": "var(--bg-brand)",
      "--avatar-color": "var(--primitive-default)"
    }
  }
), ha = () => /* @__PURE__ */ e("span", { className: "promo-page-card__default-image", "aria-hidden": "true" }), Qa = ({
  title: a = "Text XL",
  description: t = "Text M",
  avatar: s,
  image: n,
  imageSrc: i,
  imageAlt: l = "",
  hasAvatar: o = !0,
  hasImage: c = !0,
  hasDescription: d = !0,
  isHorizontal: m = !1,
  className: _ = ""
}) => {
  const h = [
    "promo-page-card",
    m && "promo-page-card--horizontal",
    !c && "promo-page-card--without-image",
    _
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("article", { className: h, children: [
    /* @__PURE__ */ r("div", { className: "promo-page-card__content", children: [
      o && /* @__PURE__ */ e("div", { className: "promo-page-card__avatar", children: s || /* @__PURE__ */ e(_a, {}) }),
      /* @__PURE__ */ r("div", { className: "promo-page-card__text", children: [
        /* @__PURE__ */ e("h3", { className: "promo-page-card__title ts-600-xl", children: a }),
        d && t && /* @__PURE__ */ e("p", { className: "promo-page-card__description ts-500-m", children: t })
      ] })
    ] }),
    c && !m && /* @__PURE__ */ e("div", { className: "promo-page-card__image", children: i ? /* @__PURE__ */ e("img", { className: "promo-page-card__image-img", src: i, alt: l }) : n || /* @__PURE__ */ e(ha, {}) })
  ] });
}, ua = () => /* @__PURE__ */ e("span", { className: "promo-page-horizontal-card__default-image", "aria-hidden": "true" }), Ja = ({
  title: a = "Text 2XL",
  description: t = "Text L",
  buttonLabel: s = "Text M",
  image: n,
  imageSrc: i,
  imageAlt: l = "",
  variant: o = "default",
  hasDescription: c = !0,
  hasButton: d = !0,
  onButtonClick: m,
  className: _ = ""
}) => {
  const h = o === "accent", u = [
    "promo-page-horizontal-card",
    h && "promo-page-horizontal-card--accent",
    _
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("article", { className: u, children: [
    /* @__PURE__ */ r("div", { className: "promo-page-horizontal-card__content", children: [
      /* @__PURE__ */ r("div", { className: "promo-page-horizontal-card__text", children: [
        /* @__PURE__ */ e("h3", { className: "promo-page-horizontal-card__title ts-600-2xl", children: a }),
        c && t && /* @__PURE__ */ e("p", { className: "promo-page-horizontal-card__description ts-500-l", children: t })
      ] }),
      h && d && /* @__PURE__ */ e(
        F,
        {
          className: "promo-page-horizontal-card__button",
          variant: "primary",
          onClick: m,
          children: s
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "promo-page-horizontal-card__image", children: i ? /* @__PURE__ */ e("img", { className: "promo-page-horizontal-card__image-img", src: i, alt: l }) : n || /* @__PURE__ */ e(ua, {}) })
  ] });
}, Ua = ({
  children: a,
  columns: t = 1,
  gridTemplateColumns: s,
  className: n = ""
}) => {
  const i = {
    gridTemplateColumns: s ?? `repeat(${t}, 1fr)`
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: ["table", n].filter(Boolean).join(" "),
      style: i,
      children: a
    }
  );
}, et = ({
  hasTitle: a = !0,
  title: t,
  hasDescription: s = !1,
  description: n,
  hasTag: i = !1,
  tag: l,
  hasLeftAccessory: o = !1,
  leftAccessory: c,
  hasRightAccessory: d = !1,
  rightAccessory: m,
  titleStyle: _ = "400",
  isEdit: h = !1,
  placeholder: u,
  onTitleChange: p,
  isDisabled: v = !1,
  isError: b = !1,
  backgroundColor: y,
  style: x,
  className: f = "",
  onClick: N
}) => {
  const w = M(null), B = h && a, $ = [
    "table-cell",
    v ? "table-cell--disabled" : "",
    b ? "table-cell--error" : "",
    !!N || B ? "table-cell--interactive" : "",
    B ? "table-cell--edit" : "",
    f
  ].filter(Boolean).join(" "), H = a && (h || t !== void 0) || s && n !== void 0 || i && l !== void 0, S = b, g = !b && d && m, I = (E) => {
    var W;
    v || (B && E.target !== w.current && ((W = w.current) == null || W.focus()), N == null || N());
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: $,
      style: y ? { "--table-cell-bg": y, ...x } : x,
      onClick: I,
      role: N && !B ? "button" : void 0,
      tabIndex: N && !B && !v ? 0 : void 0,
      children: [
        o && c && /* @__PURE__ */ e("div", { className: "table-cell__left", children: c }),
        H && /* @__PURE__ */ r("div", { className: "table-cell__content", children: [
          a && (B ? /* @__PURE__ */ e(
            "input",
            {
              ref: w,
              className: `table-cell__title-input ts-${_}-m`,
              value: t ?? "",
              placeholder: u,
              disabled: v,
              onChange: (E) => p == null ? void 0 : p(E.target.value)
            }
          ) : t !== void 0 && /* @__PURE__ */ e("p", { className: `table-cell__title ts-${_}-m`, children: t })),
          s && n !== void 0 && /* @__PURE__ */ e("p", { className: "table-cell__description ts-400-s", children: n }),
          i && l !== void 0 && /* @__PURE__ */ e("div", { className: "table-cell__tag", children: l })
        ] }),
        (g || S) && /* @__PURE__ */ e("div", { className: "table-cell__right", children: S ? /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--s", children: /* @__PURE__ */ e(Me, {}) }) : m })
      ]
    }
  );
}, at = ({
  tabs: a,
  size: t = "xl",
  hasAction: s = !1,
  actionLabel: n,
  actionIcon: i,
  onActionClick: l,
  defaultSelectedIndex: o = 0,
  selectedIndex: c,
  onTabChange: d,
  className: m = ""
}) => {
  var C;
  const _ = c !== void 0, [h, u] = L(o), [p, v] = L(
    _ ? c : o
  ), [b, y] = L("idle"), x = M(null), f = M(null), N = _ ? c : h;
  j(() => () => {
    f.current && clearTimeout(f.current);
  }, []);
  const w = ($) => {
    $ === N || b !== "idle" || (x.current = $, _ || u($), d == null || d($), y("out"), f.current = setTimeout(() => {
      v(x.current), y("in"), f.current = setTimeout(() => {
        y("idle");
      }, 500);
    }, 200));
  }, B = [
    "tabs-carousel__content",
    b === "out" ? "animate-tab-content-out" : "",
    b === "in" ? "animate-tab-content-in" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("div", { className: `tabs-carousel ${m}`.trim(), children: [
    /* @__PURE__ */ r("div", { className: "tabs-carousel__bar", children: [
      /* @__PURE__ */ e("div", { className: "tabs-carousel__tabs", children: a.map(($, T) => {
        const k = T === N;
        return /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: [
              "tabs-carousel__tab",
              `tabs-carousel__tab--${t}`,
              k ? "is-active" : ""
            ].filter(Boolean).join(" "),
            onClick: () => w(T),
            "aria-selected": k,
            children: [
              /* @__PURE__ */ e("span", { className: `tabs-carousel__tab-label ts-600-${t}`, children: $.label }),
              $.badge !== void 0 && /* @__PURE__ */ e("span", { className: `tabs-carousel__tab-badge tabs-carousel__tab-badge--${t}`, children: /* @__PURE__ */ e(
                Z,
                {
                  value: $.badge,
                  size: "s",
                  color: "var(--primitive-brand)",
                  textColor: "var(--primitive-default)"
                }
              ) })
            ]
          },
          T
        );
      }) }),
      s && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: "tabs-carousel__action",
          onClick: l,
          children: [
            n && /* @__PURE__ */ e("span", { className: "tabs-carousel__action-label ts-500-m", children: n }),
            i && /* @__PURE__ */ e("span", { className: "tabs-carousel__action-icon ds-icon ds-icon--m", "aria-hidden": "true", children: i })
          ]
        }
      )
    ] }),
    ((C = a[p]) == null ? void 0 : C.content) !== void 0 && /* @__PURE__ */ e("div", { className: B, children: a[p].content })
  ] });
}, tt = ({
  children: a,
  shape: t = "square",
  variant: s = "filled",
  size: n = "s",
  className: i = ""
}) => {
  const l = (c) => ({
    xl: "m",
    l: "s",
    m: "xs",
    s: "xxs"
  })[c] || "xxs", o = [
    "tag",
    `tag--${t}`,
    s === "outlined" && "tag--outlined",
    `tag--${n}`,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ e("span", { className: `tag__label ts-500-${l(n)}`, children: a }) });
}, st = ({
  label: a,
  description: t,
  errorMessage: s,
  placeholder: n,
  value: i = "",
  onChange: l,
  isDisabled: o = !1,
  isError: c = !1,
  maxLength: d,
  hasHelpIcon: m = !1,
  helpText: _
}) => {
  const h = M(null), u = c ? s ?? t : t, p = () => {
    const b = h.current;
    b && (b.style.height = "auto", b.style.height = `${b.scrollHeight}px`);
  };
  j(() => {
    p();
  }, [i]);
  const v = [
    "text-area",
    o ? "text-area--disabled" : "",
    c ? "text-area--error" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("label", { className: v, children: [
    /* @__PURE__ */ e("div", { className: "text-area__content", children: /* @__PURE__ */ r("div", { className: "text-area__main", children: [
      /* @__PURE__ */ r("div", { className: "text-area__header", children: [
        /* @__PURE__ */ r("div", { className: "text-area__header-main", children: [
          a && /* @__PURE__ */ e("p", { className: "text-area__title ts-500-s", children: a }),
          a && m && (_ ? /* @__PURE__ */ e(ne, { trigger: /* @__PURE__ */ e("span", { className: "text-area__help ds-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(K, {}) }), children: _ }) : /* @__PURE__ */ e("span", { className: "text-area__help ds-icon hoverOpacity", "aria-hidden": "true", children: /* @__PURE__ */ e(K, {}) }))
        ] }),
        d && /* @__PURE__ */ r("p", { className: "text-area__counter ts-400-xs", children: [
          i.length,
          "/",
          d
        ] })
      ] }),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: h,
          className: "text-area__field ts-400-m",
          placeholder: n,
          value: i,
          onChange: (b) => l == null ? void 0 : l(b.target.value),
          disabled: o,
          maxLength: d
        }
      )
    ] }) }),
    u && /* @__PURE__ */ r("div", { className: "text-area__meta", children: [
      /* @__PURE__ */ e("div", { className: "text-area__divider" }),
      /* @__PURE__ */ e("p", { className: "text-area__description ts-400-s", children: u })
    ] })
  ] });
}, q = (a, t = "ds-icon--m") => /* @__PURE__ */ e("span", { className: `ds-icon ${t} widget-title-accessory__icon`, "aria-hidden": "true", children: a }), pa = ({
  variant: a = "icon",
  className: t = "",
  content: s,
  text: n = a === "description" ? "Text S" : "Text M",
  icon: i = /* @__PURE__ */ e(z, {}),
  secondaryIcon: l = /* @__PURE__ */ e(Ce, {}),
  onClick: o
}) => {
  const c = ["widget-title-accessory", `widget-title-accessory--${a}`, t].filter(Boolean).join(" ");
  if (s)
    return /* @__PURE__ */ e("div", { className: c, children: s });
  if (a === "custom")
    return null;
  const d = a === "icon" || a === "link" || a === "link-icon" || a === "icon-icon" || a === "editing-mode", m = d ? "button" : "div";
  return /* @__PURE__ */ r(
    m,
    {
      className: `${c} ${d ? "hoverOpacity" : ""}`.trim(),
      type: m === "button" ? "button" : void 0,
      onClick: d ? o : void 0,
      children: [
        (a === "link" || a === "link-icon" || a === "description") && /* @__PURE__ */ e(
          "span",
          {
            className: a === "description" ? "widget-title-accessory__description ts-400-s" : "widget-title-accessory__link ts-500-m",
            children: n
          }
        ),
        (a === "icon" || a === "link-icon" || a === "icon-icon") && q(i),
        a === "icon-icon" && q(l),
        a === "editing-mode" && /* @__PURE__ */ r(D, { children: [
          q(/* @__PURE__ */ e(Be, {}), "ds-icon--18"),
          q(l)
        ] }),
        a === "none" && /* @__PURE__ */ e(Z, { value: 0, color: "transparent", textColor: "transparent", className: "widget-title-accessory__none" })
      ]
    }
  );
}, va = ({
  title: a,
  description: t,
  className: s = "",
  hasDescription: n = !0,
  hasChevron: i = !0,
  hasRightAccessory: l = !0,
  chevron: o = /* @__PURE__ */ e(A, {}),
  rightAccessory: c,
  rightAccessoryVariant: d = "icon",
  rightAccessoryText: m,
  rightAccessoryIcon: _,
  rightAccessorySecondaryIcon: h,
  onRightAccessoryClick: u
}) => {
  const p = !!t && n;
  return /* @__PURE__ */ r("div", { className: `widget-title ${s}`, children: [
    /* @__PURE__ */ r("div", { className: "widget-title__header", children: [
      /* @__PURE__ */ r("div", { className: "widget-title__main hoverOpacity", children: [
        /* @__PURE__ */ e("h3", { className: "widget-title__title ts-600-xl", children: a }),
        i && /* @__PURE__ */ e("span", { className: "ds-icon ds-icon--18 widget-title__chevron", "aria-hidden": "true", children: o })
      ] }),
      l && (c ?? /* @__PURE__ */ e(
        pa,
        {
          variant: d,
          text: m,
          icon: _,
          secondaryIcon: h,
          onClick: u
        }
      ))
    ] }),
    p && /* @__PURE__ */ e("p", { className: "widget-title__description ts-400-s", children: t })
  ] });
}, nt = ({
  children: a,
  className: t = "",
  contentClassName: s = "",
  minContentHeight: n = 146,
  ...i
}) => {
  const l = typeof n == "number" ? { minHeight: `${n}px` } : { minHeight: n };
  return /* @__PURE__ */ r("section", { className: `widget ${t}`, children: [
    /* @__PURE__ */ e(va, { ...i }),
    /* @__PURE__ */ e("div", { className: `widget__content ${s}`, style: l, children: a })
  ] });
};
export {
  Ta as AccordeonCell,
  ja as ActionFormCell,
  ka as ActionSheet,
  Ca as ActionSheetButton,
  Ba as ActionSheetFooter,
  $a as ActionSheetHeader,
  La as Alert,
  P as Avatar,
  Z as Badge,
  Ne as BottomSheet,
  be as BottomSheetHeader,
  Re as BottomSheetSearch,
  F as Button,
  Ma as Cell,
  Ia as CellLeftAccessory,
  Se as CellRightAccessory,
  Ee as Checkbox,
  Ra as Chip,
  Ha as ContextMenu,
  Ea as ContextualNotification,
  Da as Drawer,
  Va as DrawerFooter,
  Sa as DrawerHeader,
  We as DrawerHeaderTitle,
  za as Dropdown,
  Oa as FeedbackBanner,
  Za as FlowResultView,
  Pa as Footer,
  qe as FooterIconButton,
  Fa as FormCell,
  Aa as HeaderButton,
  Xe as IconButton,
  Ka as Input,
  ia as LinearProgress,
  sa as LinkCell,
  Wa as MainPageNavigationBar,
  ea as Modal,
  ta as ModalFooter,
  aa as ModalHeader,
  da as NavigationBar,
  Ga as PageAction,
  Ya as PageLayout,
  qa as PromoPageBanner,
  Qa as PromoPageCard,
  Ja as PromoPageHorizontalCard,
  De as Radio,
  U as SCINavigationButton,
  Ie as Search,
  V as Spinner,
  Ve as Switch,
  Ua as Table,
  et as TableCell,
  at as TabsCarousel,
  tt as Tag,
  st as TextArea,
  ne as Tooltip,
  nt as Widget,
  va as WidgetTitle,
  pa as WidgetTitleAccessory,
  Xa as mainNavHeight
};
