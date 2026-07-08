import { jsxs as d, jsx as a, Fragment as Q } from "react/jsx-runtime";
import Y, { useState as K, useEffect as H, useRef as W, useLayoutEffect as Qe, useMemo as ya } from "react";
import { Magnifier as Je, Checkmark as De, Plus as ea, ChevronRight as me, Circle as ie, ChevronDown as $e, Cross as ye, ArrowLeft as xe, Watch as wa, Bell as Re, Gift as ka, Gear as Oe, ArrowRightOutgoingRectangleVertical as Ca, Broom as aa, MinusCircle as Sa } from "./icons/24/Stroked.es.js";
import { Minus as je } from "./icons/16/Stroked.es.js";
import { CrossCircle as Ba, InformationCircle as Ia } from "./icons/20/Filled.es.js";
import { ChevronDown as ta } from "./icons/12/Filled.es.js";
import Ae from "react-dom";
import { QuestionCircle as he, LinesThreeHorizontalWide as Ta } from "./icons/20/Stroked.es.js";
const Va = 300, Yt = ({
  isOpen: e,
  onClose: t,
  header: n,
  footer: r,
  children: i,
  className: s = "",
  isOverlayCloseEnabled: l = !0
}) => {
  const [o, c] = K(e ? "in" : "hidden");
  if (H(() => {
    if (e)
      c("in");
    else if (o === "in") {
      c("out");
      const h = setTimeout(() => c("hidden"), Va);
      return () => clearTimeout(h);
    }
  }, [e]), H(() => {
    if (o !== "in") return;
    const h = (v) => {
      v.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [o, t]), o === "hidden") return null;
  const u = ["action-sheet", s].filter(Boolean).join(" "), m = [
    "action-sheet__panel",
    o === "in" ? "animate-popup-in" : "animate-popup-out"
  ].join(" "), f = [
    "action-sheet__overlay",
    o === "in" ? "animate-overlay-in" : "animate-overlay-out"
  ].join(" ");
  return /* @__PURE__ */ d("div", { className: u, children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: f,
        "aria-label": "Закрыть action sheet",
        onClick: () => {
          l && (t == null || t());
        }
      }
    ),
    /* @__PURE__ */ d("aside", { className: m, role: "dialog", "aria-modal": "true", children: [
      n && /* @__PURE__ */ a("div", { className: "action-sheet__header", children: n }),
      /* @__PURE__ */ a("div", { className: "action-sheet__content ds-scroll-area", children: /* @__PURE__ */ a("div", { className: "action-sheet__content-inner", children: i }) }),
      r && /* @__PURE__ */ a("div", { className: "action-sheet__footer", children: r })
    ] })
  ] });
}, J = ({ className: e = "", style: t }) => /* @__PURE__ */ a("span", { className: `ds-spinner ${e}`, style: t, "aria-hidden": "true", children: /* @__PURE__ */ a("span", { className: "ds-spinner__ring" }) }), Qt = ({
  title: e,
  description: t,
  hasDescription: n = !1,
  icon: r,
  hasIcon: i = !0,
  variant: s = "default",
  isDisabled: l = !1,
  isLoading: o = !1,
  onClick: c,
  className: u = ""
}) => {
  const m = n && typeof t < "u", f = i && typeof r < "u", h = [
    "action-sheet-button",
    "hoverOpacity",
    `action-sheet-button--${s}`,
    m ? "" : "action-sheet-button--single-line",
    l ? "is-disabled" : "",
    o ? "is-loading" : "",
    u
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      className: h,
      disabled: l || o,
      onClick: c,
      children: [
        /* @__PURE__ */ d("div", { className: "action-sheet-button__main", children: [
          f && /* @__PURE__ */ a("span", { className: "action-sheet-button__icon ds-icon ds-icon--30", "aria-hidden": "true", children: r }),
          /* @__PURE__ */ d("span", { className: "action-sheet-button__text", children: [
            /* @__PURE__ */ a("span", { className: "action-sheet-button__title ts-500-l", children: e }),
            m && /* @__PURE__ */ a("span", { className: "action-sheet-button__description ts-400-s", children: t })
          ] })
        ] }),
        o && /* @__PURE__ */ a(J, { className: "action-sheet-button__spinner" })
      ]
    }
  );
}, Jt = ({
  onClick: e,
  isDisabled: t = !1,
  isLoading: n = !1,
  className: r = ""
}) => {
  const i = [
    "action-sheet-footer",
    "hoverOpacity",
    t ? "is-disabled" : "",
    n ? "is-loading" : "",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "button",
    {
      type: "button",
      className: i,
      disabled: t || n,
      onClick: e,
      children: [
        n && /* @__PURE__ */ a(J, { className: "action-sheet-footer__spinner" }),
        /* @__PURE__ */ a("span", { className: "action-sheet-footer__label ts-500-l", children: "Отмена" })
      ]
    }
  );
}, en = ({
  title: e,
  description: t,
  hasContent: n = !0,
  className: r = ""
}) => {
  const i = [
    "action-sheet-header",
    n ? "" : "action-sheet-header--empty",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: i, children: n && /* @__PURE__ */ a("div", { className: "action-sheet-header__content", children: typeof e < "u" ? /* @__PURE__ */ a("div", { className: "action-sheet-header__title ts-400-m", children: e }) : null }) });
}, $a = 400, Da = 80, na = ({
  isOpen: e,
  onClose: t,
  header: n,
  footer: r,
  children: i,
  className: s = "",
  isOverlayCloseEnabled: l = !0
}) => {
  const o = W(null), c = W(null), u = W(0), [m, f] = K(e ? "in" : "hidden");
  H(() => {
    if (e)
      f("in");
    else if (m === "in") {
      f("out");
      const N = setTimeout(() => f("hidden"), $a);
      return () => clearTimeout(N);
    }
  }, [e]), H(() => {
    if (m !== "in") return;
    const N = (b) => {
      b.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [m, t]);
  const h = (N) => {
    c.current = N.touches[0].clientY, u.current = 0;
  }, v = (N) => {
    if (c.current === null) return;
    const b = N.touches[0].clientY - c.current;
    b <= 0 || (u.current = b, o.current && (o.current.style.transform = `translateY(${b}px)`));
  }, _ = () => {
    u.current > Da ? t == null || t() : o.current && (o.current.style.transition = "transform 0.2s ease", o.current.style.transform = "", setTimeout(() => {
      o.current && (o.current.style.transition = "");
    }, 200)), c.current = null, u.current = 0;
  };
  if (m === "hidden") return null;
  const g = ["bottom-sheet", s].filter(Boolean).join(" "), y = [
    "bottom-sheet__panel",
    m === "in" ? "animate-slide-up-in" : "animate-slide-up-out"
  ].join(" "), p = [
    "bottom-sheet__overlay",
    m === "in" ? "animate-overlay-in" : "animate-overlay-out"
  ].join(" ");
  return /* @__PURE__ */ d("div", { className: g, children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: p,
        "aria-label": "Закрыть",
        onClick: () => {
          l && (t == null || t());
        }
      }
    ),
    /* @__PURE__ */ d(
      "aside",
      {
        ref: o,
        className: y,
        role: "dialog",
        "aria-modal": "true",
        onTouchStart: h,
        onTouchMove: v,
        onTouchEnd: _,
        children: [
          /* @__PURE__ */ a("div", { className: "bottom-sheet__handle", "aria-hidden": "true" }),
          n && /* @__PURE__ */ a("div", { className: "bottom-sheet__header", children: n }),
          /* @__PURE__ */ a("div", { className: "bottom-sheet__content", children: /* @__PURE__ */ a("div", { className: "bottom-sheet__content-inner", children: i }) }),
          r && /* @__PURE__ */ a("div", { className: "bottom-sheet__footer", children: r })
        ]
      }
    )
  ] });
}, ra = ({
  title: e,
  rightAccessory: t,
  className: n = ""
}) => e ? /* @__PURE__ */ d("div", { className: ["bottom-sheet-header", n].filter(Boolean).join(" "), children: [
  /* @__PURE__ */ a("div", { className: "bottom-sheet-header__title ts-600-xl", children: e }),
  t && /* @__PURE__ */ a("div", { className: "bottom-sheet-header__right-accessory", children: t })
] }) : null, ja = ({
  value: e,
  onChange: t,
  placeholder: n = "Поиск",
  className: r = ""
}) => /* @__PURE__ */ d("div", { className: ["ds-search", r].filter(Boolean).join(" "), children: [
  /* @__PURE__ */ a("span", { className: "ds-search__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ a(Je, {}) }),
  /* @__PURE__ */ a(
    "input",
    {
      className: "ds-search__input ts-400-m",
      type: "search",
      placeholder: n,
      value: e,
      onChange: (i) => t == null ? void 0 : t(i.target.value)
    }
  ),
  e && /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      className: "ds-search__clear",
      "aria-label": "Очистить",
      onClick: () => t == null ? void 0 : t(""),
      children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--20", "aria-hidden": "true", children: /* @__PURE__ */ a(Ba, {}) })
    }
  )
] }), Ma = ({
  value: e,
  onChange: t,
  placeholder: n,
  className: r = ""
}) => /* @__PURE__ */ a("div", { className: ["bottom-sheet-search", r].filter(Boolean).join(" "), children: /* @__PURE__ */ a(ja, { value: e, onChange: t, placeholder: n }) }), La = 5e3;
function He(e, t, n, r, i, s) {
  let l = e, o = 0, c, u = null, m = !0;
  function f(h) {
    if (!m) return;
    const v = u === null ? 0 : Math.min((h - u) / 1e3, 0.064);
    u = h;
    const _ = -n * (l - t) - r * o;
    if (o += _ * v, l += o * v, Math.abs(l - t) < 0.5 && Math.abs(o) < 0.5) {
      i(t), s();
      return;
    }
    i(l), c = requestAnimationFrame(f);
  }
  return c = requestAnimationFrame(f), () => {
    m = !1, cancelAnimationFrame(c);
  };
}
const an = ({
  type: e = "success",
  textAlign: t = "left",
  children: n,
  className: r = "",
  onHide: i
}) => {
  const s = W(null), l = W(null), o = W(() => {
  }), c = W(i);
  c.current = i, Qe(() => {
    const m = s.current, f = l.current.offsetHeight;
    m.style.height = "0px", o.current = He(0, f, 200, 16, (v) => {
      m.style.height = `${v}px`;
    }, () => {
      m.style.height = `${f}px`;
    });
    const h = setTimeout(() => {
      o.current();
      const v = parseFloat(s.current.style.height) || f;
      o.current = He(v, 0, 100, 16, (_) => {
        s.current.style.height = `${_}px`;
      }, () => {
        var _;
        (_ = c.current) == null || _.call(c);
      });
    }, La);
    return () => {
      clearTimeout(h), o.current();
    };
  }, []);
  const u = [
    "alert",
    `alert--${e}`,
    t === "center" ? "alert--center" : "",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { ref: s, className: "alert__wrapper", children: /* @__PURE__ */ a("div", { ref: l, className: u, children: /* @__PURE__ */ a("p", { className: "alert__text ts-500-s", children: n }) }) });
}, tn = ({
  title: e,
  description: t,
  left: n,
  right: r,
  variant: i = "single",
  onClick: s,
  isDisabled: l = !1
}) => {
  const o = [
    "action-form-cell",
    `action-form-cell--${i}`,
    t ? "" : "action-form-cell--single-line",
    r ? "" : "action-form-cell--no-spinner",
    l ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("button", { className: o, type: "button", onClick: s, disabled: l, children: /* @__PURE__ */ d("div", { className: "action-form-cell__content", children: [
    /* @__PURE__ */ d("div", { className: "action-form-cell__main", children: [
      n && /* @__PURE__ */ a("div", { className: "action-form-cell__left", children: n }),
      /* @__PURE__ */ d("div", { className: `action-form-cell__text ${t ? "action-form-cell__text--dual" : ""}`, children: [
        /* @__PURE__ */ a("p", { className: "action-form-cell__title ts-500-m", children: e }),
        t && /* @__PURE__ */ a("p", { className: "action-form-cell__description ts-400-s", children: t })
      ] })
    ] }),
    r && /* @__PURE__ */ a("div", { className: "action-form-cell__right", children: r })
  ] }) });
}, oe = ({
  label: e,
  imageUrl: t,
  icon: n,
  size: r = "m",
  shape: i = "superellipse",
  className: s = "",
  style: l
}) => {
  const c = [
    "avatar",
    `avatar--${r}`,
    `avatar--${i}`,
    t && "avatar--image",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: c, style: l, children: t ? /* @__PURE__ */ a("img", { src: t, alt: e || "Avatar", className: "avatar__image" }) : n ? /* @__PURE__ */ a("span", { className: "ds-icon avatar__icon", children: n }) : /* @__PURE__ */ a("span", { className: "avatar__label", children: e }) });
}, Ea = ({
  isChecked: e = !1,
  isIndeterminate: t = !1,
  isDisabled: n = !1,
  onChange: r,
  label: i,
  style: s
}) => {
  const l = (c) => {
    c.preventDefault(), !n && r && r(!e);
  }, o = [
    "checkbox",
    e ? "is-checked" : "",
    t ? "is-indeterminate" : "",
    n ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "button",
    {
      className: o,
      type: "button",
      role: "checkbox",
      "aria-checked": t ? "mixed" : e,
      "aria-label": i,
      disabled: n,
      onClick: l,
      style: s,
      children: [
        /* @__PURE__ */ a("span", { className: "checkbox__icon checkbox__icon--check", "aria-hidden": "true", children: /* @__PURE__ */ a(De, {}) }),
        /* @__PURE__ */ a("span", { className: "checkbox__icon checkbox__icon--minus", "aria-hidden": "true", children: /* @__PURE__ */ a(je, {}) })
      ]
    }
  );
}, Ra = ({
  isSelected: e = !1,
  isDisabled: t = !1,
  onChange: n,
  label: r
}) => {
  const i = [
    "radio",
    e ? "is-selected" : "",
    t ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a(
    "button",
    {
      className: i,
      type: "button",
      role: "radio",
      "aria-checked": e,
      "aria-label": r,
      disabled: t,
      onClick: t ? void 0 : n
    }
  );
}, Oa = ({
  isSelected: e = !1,
  isDisabled: t = !1,
  onChange: n,
  label: r,
  style: i
}) => {
  const s = () => {
    !t && n && n(!e);
  }, l = [
    "switch",
    e ? "is-selected" : "",
    t ? "is-disabled" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a(
    "button",
    {
      className: l,
      type: "button",
      role: "switch",
      "aria-checked": e,
      "aria-label": r,
      disabled: t,
      onClick: s,
      style: i
    }
  );
}, ce = ({
  value: e,
  color: t = "var(--primitive-neutral-4)",
  textColor: n = "var(--primitive-default)",
  size: r = "m",
  className: i = ""
}) => {
  const s = e > 99 ? "99+" : e.toString();
  return /* @__PURE__ */ a(
    "div",
    {
      className: `ds-badge ds-badge--${r} ${i}`,
      style: {
        backgroundColor: t,
        color: n
      },
      children: s
    }
  );
}, Ne = (e) => e ?? /* @__PURE__ */ a(ie, {}), Aa = ({
  variant: e = "disclosure",
  className: t = "",
  content: n,
  icon: r,
  secondaryIcon: i,
  text: s = "Text",
  secondaryText: l = "Text XS",
  value: o = 0,
  isChecked: c = !1,
  isDisabled: u = !1,
  avatarLabel: m = "AA",
  onCheckedChange: f,
  onStep: h
}) => {
  const v = ["ds-cell-right-accessory", t].filter(Boolean).join(" ");
  if (n)
    return /* @__PURE__ */ a("div", { className: v, children: n });
  switch (e) {
    case "disclosure":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a("span", { className: "ds-cell-right-accessory__disclosure", "aria-hidden": "true", children: /* @__PURE__ */ a(me, {}) }) });
    case "checkbox":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a(
        Ea,
        {
          isChecked: c,
          isDisabled: u,
          onChange: f,
          label: "Checkbox"
        }
      ) });
    case "radio":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a(
        Ra,
        {
          isSelected: c,
          isDisabled: u,
          onChange: u ? void 0 : () => f == null ? void 0 : f(!c),
          label: "Radio"
        }
      ) });
    case "switch":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a(
        Oa,
        {
          isSelected: c,
          isDisabled: u,
          onChange: f,
          label: "Switch"
        }
      ) });
    case "icon-30":
    case "icon-24":
    case "icon-18": {
      const _ = `ds-cell-right-accessory__icon--${e.split("-")[1]}`;
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a("span", { className: `ds-cell-right-accessory__icon ${_}`, "aria-hidden": "true", children: Ne(r) }) });
    }
    case "spinner-24":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a(J, {}) });
    case "spinner-34-avatar-s":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ d("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ a("span", { className: "ds-cell-right-accessory__spinner-large", children: /* @__PURE__ */ a(J, { className: "ds-cell-right-accessory__spinner-large-inner" }) }),
        /* @__PURE__ */ a(oe, { size: "s", shape: "circle", label: m })
      ] }) });
    case "avatar-m":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a(oe, { size: "m", shape: "circle", label: m }) });
    case "avatar-s":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a(oe, { size: "s", shape: "circle", label: m }) });
    case "text-l":
    case "text-m":
    case "text-s": {
      const _ = `ds-cell-right-accessory__${e}`;
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a("span", { className: `${_} ${e === "text-l" ? "ts-500-l" : e === "text-m" ? "ts-500-m" : "ts-500-s"}`, children: s }) });
    }
    case "text-m-text-xs":
    case "table-text-m-text-m":
    case "table-text-s-text-s":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ d("div", { className: "ds-cell-right-accessory__stack", children: [
        /* @__PURE__ */ a(
          "span",
          {
            className: e === "table-text-s-text-s" ? "ds-cell-right-accessory__text-s-muted ts-500-s" : "ds-cell-right-accessory__text-m-primary ts-500-m",
            children: s
          }
        ),
        /* @__PURE__ */ a(
          "span",
          {
            className: e === "text-m-text-xs" ? "ds-cell-right-accessory__text-xs-secondary ts-400-xs" : e === "table-text-m-text-m" ? "ds-cell-right-accessory__text-m-strong ts-500-m" : "ds-cell-right-accessory__text-s ts-500-s",
            children: l
          }
        )
      ] }) });
    case "text-l-disclosure":
    case "text-s-disclosure":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ d("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ a(
          "span",
          {
            className: e === "text-l-disclosure" ? "ds-cell-right-accessory__text-l ts-500-l" : "ds-cell-right-accessory__text-s ts-500-s",
            children: s
          }
        ),
        /* @__PURE__ */ a("span", { className: "ds-cell-right-accessory__disclosure", "aria-hidden": "true", children: /* @__PURE__ */ a(me, {}) })
      ] }) });
    case "badge":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a(ce, { value: o }) });
    case "badge-disclosure":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ d("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ a(ce, { value: o }),
        /* @__PURE__ */ a("span", { className: "ds-cell-right-accessory__disclosure", "aria-hidden": "true", children: /* @__PURE__ */ a(me, {}) })
      ] }) });
    case "notification-indicator":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ a("span", { className: "ds-cell-right-accessory__notification-indicator", "aria-hidden": "true" }) });
    case "icon-24-icon-24":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ d("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ a("span", { className: "ds-cell-right-accessory__icon ds-cell-right-accessory__icon--24", "aria-hidden": "true", children: Ne(r) }),
        /* @__PURE__ */ a("span", { className: "ds-cell-right-accessory__icon ds-cell-right-accessory__icon--24", "aria-hidden": "true", children: Ne(i) })
      ] }) });
    case "text-m-icon-30":
    case "text-m-icon-24":
    case "text-m-icon-18": {
      const _ = `ds-cell-right-accessory__icon--${e.split("-").pop()}`;
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ d("div", { className: "ds-cell-right-accessory__row", children: [
        /* @__PURE__ */ a("span", { className: "ds-cell-right-accessory__text-m ts-500-m", children: s }),
        /* @__PURE__ */ a("span", { className: `ds-cell-right-accessory__icon ${_}`, "aria-hidden": "true", children: Ne(r) })
      ] }) });
    }
    case "stepper":
      return /* @__PURE__ */ a("div", { className: v, children: /* @__PURE__ */ d("div", { className: "ds-cell-right-accessory__stepper", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "ds-cell-right-accessory__stepper-button",
            onClick: () => h == null ? void 0 : h(-1),
            disabled: u,
            "aria-label": "Decrease",
            children: /* @__PURE__ */ a(je, {})
          }
        ),
        /* @__PURE__ */ a(ce, { value: o }),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "ds-cell-right-accessory__stepper-button",
            onClick: () => h == null ? void 0 : h(1),
            disabled: u,
            "aria-label": "Increase",
            children: /* @__PURE__ */ a(ea, {})
          }
        )
      ] }) });
    case "custom":
    default:
      return /* @__PURE__ */ a("div", { className: v });
  }
}, Ha = {
  xl: "ts-500-xl",
  "2xl": "ts-500-2xl"
}, Fa = {
  0: "accordeon-cell--content-spacing-0",
  "0-5x": "accordeon-cell--content-spacing-0-5x",
  "1x": "accordeon-cell--content-spacing-1x",
  "2x": "accordeon-cell--content-spacing-2x",
  "4x": "accordeon-cell--content-spacing-4x",
  "6x": "accordeon-cell--content-spacing-6x"
}, Pa = {
  0: "accordeon-cell--list-spacing-0",
  "0-5x": "accordeon-cell--list-spacing-0-5x",
  "1x": "accordeon-cell--list-spacing-1x",
  "2x": "accordeon-cell--list-spacing-2x",
  "4x": "accordeon-cell--list-spacing-4x",
  "6x": "accordeon-cell--list-spacing-6x"
}, nn = ({
  title: e,
  description: t,
  children: n,
  size: r = "xl",
  chevronPosition: i = "title",
  hasDescription: s = !0,
  hasRightAccessory: l = !0,
  rightAccessory: o,
  rightAccessoryVariant: c = "text-m",
  rightAccessoryText: u = "Text M",
  defaultOpen: m = !1,
  isOpen: f,
  onOpenChange: h,
  contentSpacing: v = "4x",
  listSpacing: _ = "2x",
  className: g = ""
}) => {
  const [y, p] = K(m), N = f ?? y, b = s && !!t, T = !!n, j = () => {
    const k = !N;
    f === void 0 && p(k), h == null || h(k);
  }, D = [
    "accordeon-cell",
    `accordeon-cell--${r}`,
    `accordeon-cell--chevron-${i}`,
    Fa[v],
    Pa[_],
    N ? "is-open" : "",
    b ? "accordeon-cell--with-description" : "",
    g
  ].filter(Boolean).join(" "), V = /* @__PURE__ */ a(Aa, { variant: c, text: u });
  return /* @__PURE__ */ d("div", { className: D, children: [
    /* @__PURE__ */ d(
      "button",
      {
        className: "accordeon-cell__header",
        type: "button",
        "aria-expanded": N,
        onClick: j,
        children: [
          /* @__PURE__ */ d("span", { className: "accordeon-cell__center", children: [
            /* @__PURE__ */ d("span", { className: "accordeon-cell__content-row", children: [
              /* @__PURE__ */ a("span", { className: `accordeon-cell__title ${Ha[r]}`, children: e }),
              /* @__PURE__ */ a("span", { className: "accordeon-cell__chevron", "aria-hidden": "true", children: /* @__PURE__ */ a($e, {}) })
            ] }),
            b && /* @__PURE__ */ a("span", { className: "accordeon-cell__description ts-400-s", children: t })
          ] }),
          l && i === "title" && /* @__PURE__ */ a("span", { className: "accordeon-cell__right-accessory", children: o ?? V })
        ]
      }
    ),
    T && N && /* @__PURE__ */ a("div", { className: "accordeon-cell__body", children: /* @__PURE__ */ a("div", { className: "accordeon-cell__list", children: n }) })
  ] });
}, za = {
  xl: "ts-500-xl",
  l: "ts-500-l",
  m: "ts-500-m",
  s: "ts-500-s",
  xs: "ts-500-s"
}, de = ({
  children: e,
  variant: t = "primary",
  size: n = "m",
  isHugWidth: r = !1,
  leftAccessory: i,
  rightAccessory: s,
  isLoading: l = !1,
  isDisabled: o = !1,
  onClick: c,
  type: u = "button",
  className: m = ""
}) => {
  const f = [
    "button",
    `button--${t}`,
    `button--${n}`,
    r ? "button--hug" : "",
    l ? "is-loading" : "",
    m
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "button",
    {
      className: f,
      type: u,
      disabled: o,
      onClick: c,
      "aria-busy": l || void 0,
      children: [
        /* @__PURE__ */ d("div", { className: "button__content", children: [
          i && /* @__PURE__ */ a("span", { className: "button__accessory", children: i }),
          /* @__PURE__ */ a("span", { className: `button__label ${za[n]}`, children: e }),
          s && /* @__PURE__ */ a("span", { className: "button__accessory", children: s })
        ] }),
        l && /* @__PURE__ */ a(J, {})
      ]
    }
  );
}, rn = ({
  title: e,
  subtitle: t,
  description: n,
  leftAccessory: r,
  rightAccessory: i,
  hasLeftAccessory: s = !0,
  hasRightAccessory: l = !0,
  verticalPadding: o = "none",
  titleClassName: c = "ts-500-m",
  subtitleClassName: u = "ts-400-s",
  descriptionClassName: m = "ts-400-s",
  titleColor: f = "var(--primitive-primary)",
  subtitleColor: h = "var(--primitive-secondary)",
  descriptionColor: v = "var(--primitive-secondary)",
  className: _ = "",
  onClick: g
}) => {
  const y = /* @__PURE__ */ a(
    oe,
    {
      size: "m",
      shape: "circle",
      label: "AA",
      style: {
        "--avatar-surface": "var(--bg-neutral-2)",
        "--avatar-color": "var(--primitive-secondary)"
      }
    }
  ), p = /* @__PURE__ */ a("span", { className: "ds-cell__default-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(me, {}) });
  return /* @__PURE__ */ d(
    "div",
    {
      className: ["ds-cell", o !== "none" ? `ds-cell--padding-${o}` : "", _].filter(Boolean).join(" "),
      onClick: g,
      role: g ? "button" : void 0,
      tabIndex: g ? 0 : void 0,
      children: [
        s && /* @__PURE__ */ a("div", { className: "ds-cell__left-accessory", children: r || y }),
        /* @__PURE__ */ d("div", { className: "ds-cell__content", children: [
          t && /* @__PURE__ */ a("div", { className: `ds-cell__subtitle ${u}`, style: { color: h }, children: t }),
          /* @__PURE__ */ a("div", { className: `ds-cell__title ${c}`, style: { color: f }, children: e }),
          n && /* @__PURE__ */ a("div", { className: `ds-cell__description ${m}`, style: { color: v }, children: n })
        ] }),
        l && /* @__PURE__ */ a("div", { className: "ds-cell__right-accessory", children: i || p })
      ]
    }
  );
}, sn = ({
  variant: e = "avatar",
  className: t = "",
  content: n,
  icon: r,
  avatarLabel: i = "AA",
  isChecked: s = !1,
  onClick: l
}) => {
  const o = ["ds-cell-left-accessory", t].filter(Boolean).join(" ");
  if (n)
    return /* @__PURE__ */ a("div", { className: o, children: n });
  switch (e) {
    case "avatar":
      return /* @__PURE__ */ a("div", { className: o, children: /* @__PURE__ */ a(oe, { size: "m", shape: "circle", label: i }) });
    case "icon-30":
    case "icon-24":
    case "icon-18": {
      const c = `ds-cell-left-accessory__icon--${e.split("-")[1]}`;
      return /* @__PURE__ */ a("div", { className: o, children: /* @__PURE__ */ a("span", { className: `ds-cell-left-accessory__icon ${c}`, "aria-hidden": "true", children: r ?? /* @__PURE__ */ a(ie, {}) }) });
    }
    case "card-preview":
      return /* @__PURE__ */ a("div", { className: o, children: /* @__PURE__ */ a("span", { className: "ds-cell-left-accessory__card-preview", "aria-hidden": "true" }) });
    case "avatar-checkbox":
      return /* @__PURE__ */ a("div", { className: o, children: /* @__PURE__ */ a("span", { className: "ds-cell-left-accessory__avatar-checkbox", "aria-hidden": "true", children: /* @__PURE__ */ a(
        "span",
        {
          className: `ds-cell-left-accessory__avatar-checkbox-indicator${s ? " is-checked" : ""}`
        }
      ) }) });
    case "add-button":
      return /* @__PURE__ */ a("div", { className: o, children: /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: "ds-cell-left-accessory__add-button",
          onClick: l,
          "aria-label": "Add",
          children: /* @__PURE__ */ a("span", { className: "ds-cell-left-accessory__add-icon", "aria-hidden": "true", children: r ?? /* @__PURE__ */ a(ie, {}) })
        }
      ) });
    case "custom":
    default:
      return /* @__PURE__ */ a("div", { className: o });
  }
}, ia = 600, Fe = ia, Ka = 280, Pe = 320, sa = ({
  isOpen: e,
  onClose: t,
  triggerRef: n,
  label: r,
  value: i,
  hasSearch: s = !1,
  searchPlaceholder: l = "Поиск",
  onSearchChange: o,
  isLoading: c = !1,
  isEmpty: u = !1,
  emptyText: m = "Ничего не найдено",
  children: f
}) => {
  const [h, v] = K(!1), [_, g] = K(!1), [y, p] = K(() => window.innerWidth < Fe), [N, b] = K({ left: 0, width: Pe }), [T, j] = K("");
  H(() => {
    const S = () => p(window.innerWidth < Fe);
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, []);
  const D = () => {
    if (!n.current) return;
    const S = n.current.getBoundingClientRect(), Z = Math.max(S.width, Pe);
    window.innerHeight - S.bottom >= Ka ? b({ top: S.bottom + 4, left: S.left, width: Z }) : b({ bottom: window.innerHeight - S.top + 4, left: S.left, width: Z });
  };
  H(() => {
    if (!y) {
      if (e)
        g(!1), v(!0);
      else if (h) {
        g(!0);
        const S = setTimeout(() => {
          v(!1), g(!1);
        }, 300);
        return () => clearTimeout(S);
      }
    }
  }, [e, y]), H(() => {
    if (!(!e || y))
      return D(), window.addEventListener("scroll", D, { capture: !0 }), window.addEventListener("resize", D), () => {
        window.removeEventListener("scroll", D, { capture: !0 }), window.removeEventListener("resize", D);
      };
  }, [e, y]), H(() => {
    if (!e || y) return;
    const S = (Z) => {
      Z.key === "Escape" && t();
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [e, y, t]), H(() => {
    e || j("");
  }, [e]);
  const V = /* @__PURE__ */ a("span", { className: "dropdown-popup__checkmark", "aria-hidden": "true", children: /* @__PURE__ */ a(De, {}) }), k = /* @__PURE__ */ a("span", { className: "dropdown-popup__checkmark", "aria-hidden": "true" }), C = Y.Children.map(f, (S) => {
    if (!Y.isValidElement(S))
      return S;
    const Z = i !== void 0 && typeof S.props.title == "string" && S.props.title === i, U = S.props.onClick;
    return Y.cloneElement(S, {
      verticalPadding: "none",
      titleClassName: "ts-400-m",
      hasRightAccessory: !0,
      rightAccessory: Z ? V : k,
      onClick: U ? () => {
        U(), t();
      } : t
    });
  }), F = /* @__PURE__ */ d(Q, { children: [
    c && /* @__PURE__ */ a("div", { className: "dropdown-popup__state", children: /* @__PURE__ */ a(J, {}) }),
    !c && u && /* @__PURE__ */ a("div", { className: "dropdown-popup__state", children: /* @__PURE__ */ a("p", { className: "dropdown-popup__empty-text ts-400-m", children: m }) }),
    !c && !u && C
  ] });
  if (y) {
    const S = r || s ? /* @__PURE__ */ d(Q, { children: [
      r && /* @__PURE__ */ a(ra, { title: r }),
      s && /* @__PURE__ */ a(
        Ma,
        {
          value: T,
          onChange: (Z) => {
            j(Z), o == null || o(Z);
          },
          placeholder: l
        }
      )
    ] }) : void 0;
    return Ae.createPortal(
      /* @__PURE__ */ a(na, { isOpen: e, onClose: t, header: S, children: F }),
      document.body
    );
  }
  if (!h) return null;
  const O = [
    "dropdown-popup",
    _ ? "dropdown-popup--exiting" : ""
  ].filter(Boolean).join(" "), X = s && /* @__PURE__ */ a("div", { className: "dropdown-popup__search-wrap", children: /* @__PURE__ */ d("div", { className: "dropdown-popup__search", children: [
    /* @__PURE__ */ a("span", { className: "dropdown-popup__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(Je, {}) }),
    /* @__PURE__ */ a(
      "input",
      {
        className: "dropdown-popup__search-input ts-400-m",
        type: "text",
        placeholder: l,
        onChange: (S) => o == null ? void 0 : o(S.target.value)
      }
    )
  ] }) });
  return Ae.createPortal(
    /* @__PURE__ */ d("div", { className: O, children: [
      /* @__PURE__ */ a("div", { className: "dropdown-popup__overlay", onClick: t }),
      /* @__PURE__ */ d(
        "div",
        {
          className: "dropdown-popup__panel",
          style: {
            position: "fixed",
            width: N.width,
            top: N.top,
            bottom: N.bottom,
            left: N.left
          },
          children: [
            X,
            /* @__PURE__ */ a("div", { className: "dropdown-popup__content ds-scroll-area", children: F })
          ]
        }
      )
    ] }),
    document.body
  );
}, ln = ({
  children: e,
  variant: t = "chip",
  isSelected: n = !1,
  isDisabled: r = !1,
  onClick: i,
  onClose: s,
  leftAccessory: l,
  leftIcon: o,
  badge: c,
  isOpen: u = !1,
  className: m = "",
  popupContent: f,
  value: h,
  hasSearch: v = !1,
  searchPlaceholder: _ = "Поиск",
  onSearchChange: g,
  isLoading: y = !1,
  isEmpty: p = !1,
  emptyText: N = "Ничего не найдено"
}) => {
  const [b, T] = K(!1), j = W(null), D = t === "dropdown" && f !== void 0, V = D ? b : u, k = [
    "chip",
    `chip--${t}`,
    n ? "is-selected" : "",
    r ? "is-disabled" : "",
    V ? "is-pressed" : "",
    m
  ].filter(Boolean).join(" "), C = () => l ? l === "icon" ? /* @__PURE__ */ a("span", { className: "chip__accessory chip__accessory--left ds-icon ds-icon--xs", "aria-hidden": "true", children: o ?? /* @__PURE__ */ a(ie, {}) }) : l === "logo" ? /* @__PURE__ */ a("span", { className: "chip__accessory chip__accessory--left", "aria-hidden": "true", children: /* @__PURE__ */ a("span", { className: "chip__logo" }) }) : l === "logo-stack" ? /* @__PURE__ */ d("span", { className: "chip__accessory chip__accessory--left chip__logo-stack", "aria-hidden": "true", children: [
    /* @__PURE__ */ a("span", { className: "chip__logo" }),
    /* @__PURE__ */ a("span", { className: "chip__logo" })
  ] }) : null : null, F = () => {
    D ? T((S) => !S) : i == null || i();
  }, O = (S) => {
    S.stopPropagation(), s && s(S);
  }, X = /* @__PURE__ */ d(Q, { children: [
    C(),
    /* @__PURE__ */ a("span", { className: "chip__label ts-500-s", children: e }),
    t === "tab" && c !== void 0 && /* @__PURE__ */ a("span", { className: "chip__accessory chip__accessory--right chip__badge", "aria-hidden": "true", children: /* @__PURE__ */ a(ce, { value: Number(c), size: "s" }) }),
    t === "dropdown" && /* @__PURE__ */ a("span", { className: `chip__accessory chip__caret ${V ? "is-open" : ""}`, "aria-hidden": "true", children: /* @__PURE__ */ a(ta, {}) }),
    t === "action" && n && /* @__PURE__ */ a("span", { className: "chip__accessory chip__cross", "aria-hidden": "true", onClick: O })
  ] });
  return t === "dropdown" ? /* @__PURE__ */ d(Q, { children: [
    /* @__PURE__ */ a(
      "button",
      {
        ref: j,
        className: k,
        type: "button",
        disabled: r,
        onClick: F,
        children: /* @__PURE__ */ a("span", { className: "chip__dropdown", children: X })
      }
    ),
    D && /* @__PURE__ */ a(
      sa,
      {
        isOpen: b,
        onClose: () => T(!1),
        triggerRef: j,
        value: h,
        hasSearch: v,
        searchPlaceholder: _,
        onSearchChange: g,
        isLoading: y,
        isEmpty: p,
        emptyText: N,
        children: f
      }
    )
  ] }) : /* @__PURE__ */ a(
    "button",
    {
      className: k,
      type: "button",
      disabled: r,
      onClick: i,
      children: X
    }
  );
}, on = ({
  trigger: e,
  isOpen: t,
  onClose: n,
  placement: r = "right",
  items: i,
  className: s = ""
}) => {
  const l = W(null);
  H(() => {
    if (!t)
      return;
    const u = (m) => {
      var h;
      const f = m.target;
      f instanceof Node && ((h = l.current) != null && h.contains(f) || n == null || n());
    };
    return document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, [t, n]);
  const o = ["context-menu-anchor", s].filter(Boolean).join(" "), c = ["context-menu", `context-menu--${r}`].join(" ");
  return /* @__PURE__ */ d("div", { ref: l, className: o, children: [
    e,
    t && /* @__PURE__ */ a("div", { className: c, children: /* @__PURE__ */ a("div", { className: "context-menu__list", children: i.map((u) => {
      const m = [
        "context-menu__item",
        "hoverOpacity",
        `context-menu__item--${u.variant ?? "default"}`,
        u.isDisabled ? "is-disabled" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: m,
          disabled: u.isDisabled,
          onClick: () => {
            var f;
            u.isDisabled || ((f = u.onClick) == null || f.call(u), n == null || n());
          },
          children: [
            u.icon && /* @__PURE__ */ a("span", { className: "context-menu__icon ds-icon ds-icon--m", "aria-hidden": "true", children: u.icon }),
            /* @__PURE__ */ a("span", { className: "context-menu__label ts-500-m", children: u.label })
          ]
        },
        u.key
      );
    }) }) })
  ] });
}, cn = ({
  text: e,
  title: t,
  hasTitle: n = !0,
  hasCloseIcon: r = !0,
  onClose: i,
  hasAction: s = !1,
  actionLabel: l,
  hasSpinner: o = !1,
  onActionClick: c,
  accessory: u = "icon",
  icon: m,
  avatar: f,
  size: h = "s",
  className: v = ""
}) => {
  const _ = n && !!t || s, g = [
    "contextual-notification",
    `contextual-notification--${h}`,
    _ ? "contextual-notification--extended" : "",
    v
  ].filter(Boolean).join(" "), y = h === "m" ? "ts-500-m" : "ts-500-s", p = h === "m" ? "ts-400-m" : "ts-400-s", N = h === "m" ? "ts-500-m" : "ts-500-s", b = h === "m" ? 20 : 16;
  return /* @__PURE__ */ d("div", { className: g, children: [
    /* @__PURE__ */ a("div", { className: "contextual-notification__accessory", children: u === "avatar" ? f : /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--18", "aria-hidden": "true", children: m }) }),
    /* @__PURE__ */ d("div", { className: "contextual-notification__body", children: [
      /* @__PURE__ */ d("div", { className: "contextual-notification__header", children: [
        /* @__PURE__ */ d("div", { className: "contextual-notification__texts", children: [
          n && t && /* @__PURE__ */ a("p", { className: `contextual-notification__title ${y}`, children: t }),
          /* @__PURE__ */ a("p", { className: `contextual-notification__text ${p}`, children: e })
        ] }),
        r && /* @__PURE__ */ a(
          "button",
          {
            className: "contextual-notification__close hoverOpacity",
            type: "button",
            "aria-label": "Закрыть",
            onClick: i,
            children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--18", "aria-hidden": "true", children: /* @__PURE__ */ a(ye, {}) })
          }
        )
      ] }),
      s && /* @__PURE__ */ d("div", { className: "contextual-notification__action", children: [
        /* @__PURE__ */ a(
          "button",
          {
            className: `contextual-notification__action-label ${N} hoverOpacity`,
            type: "button",
            onClick: c,
            children: l
          }
        ),
        o && /* @__PURE__ */ a(
          J,
          {
            className: "contextual-notification__spinner",
            style: { width: `${b}px`, height: `${b}px` }
          }
        )
      ] })
    ] })
  ] });
}, Wa = 400, dn = ({
  isOpen: e,
  onClose: t,
  header: n,
  footer: r,
  children: i,
  className: s = ""
}) => {
  const [l, o] = K(e ? "in" : "hidden");
  if (H(() => {
    if (e)
      o("in");
    else if (l === "in") {
      o("out");
      const m = setTimeout(() => o("hidden"), Wa);
      return () => clearTimeout(m);
    }
  }, [e]), H(() => {
    if (l !== "in") return;
    const m = (f) => {
      f.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [l, t]), l === "hidden") return null;
  const c = ["drawer", s].filter(Boolean).join(" "), u = [
    "drawer__panel",
    l === "in" ? "animate-slide-right-in" : "animate-slide-right-out"
  ].join(" ");
  return /* @__PURE__ */ d("div", { className: c, children: [
    /* @__PURE__ */ a("div", { className: "drawer__overlay", "aria-hidden": "true" }),
    /* @__PURE__ */ d("aside", { className: u, role: "dialog", "aria-modal": "true", children: [
      n && /* @__PURE__ */ a("div", { className: "drawer__header", children: n }),
      /* @__PURE__ */ a("div", { className: "drawer__content ds-scroll-area", children: i }),
      r && /* @__PURE__ */ a("div", { className: "drawer__footer", children: r })
    ] })
  ] });
}, un = ({
  layout: e = "1-button",
  description: t,
  primaryAction: n,
  secondaryAction: r,
  className: i = ""
}) => {
  if (e === "empty")
    return /* @__PURE__ */ a("div", { className: ["drawer-footer", "drawer-footer--empty", i].filter(Boolean).join(" ") });
  const s = [
    "drawer-footer",
    e === "2-horizontal-buttons" ? "drawer-footer--row" : "drawer-footer--column",
    i
  ].filter(Boolean).join(" "), l = [
    "drawer-footer__buttons",
    e === "2-horizontal-buttons" ? "drawer-footer__buttons--row" : "drawer-footer__buttons--column"
  ].join(" ");
  return /* @__PURE__ */ d("div", { className: s, children: [
    t && /* @__PURE__ */ a("div", { className: "drawer-footer__description ts-400-s", children: t }),
    /* @__PURE__ */ d("div", { className: l, children: [
      r && e !== "1-button" && /* @__PURE__ */ a(
        de,
        {
          variant: r.isSelected ? "primary" : "secondary",
          isDisabled: r.isDisabled,
          isLoading: r.isLoading,
          onClick: r.onClick,
          className: "drawer-footer__button",
          children: r.label
        }
      ),
      n && /* @__PURE__ */ a(
        de,
        {
          variant: n.isSelected ? "primary" : "secondary",
          isDisabled: n.isDisabled,
          isLoading: n.isLoading,
          onClick: n.onClick,
          className: "drawer-footer__button",
          children: n.label
        }
      )
    ] })
  ] });
}, Za = {
  "text-m": "ts-500-m",
  "text-l": "ts-500-l"
}, Ga = ({
  children: e,
  variant: t = "text-m",
  className: n = ""
}) => {
  const r = [
    "drawer-header-title",
    `drawer-header-title--${t}`,
    Za[t],
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: r, children: e });
}, mn = ({
  title: e,
  titleVariant: t = "text-m",
  leftAccessory: n,
  hasDefaultBackArrow: r = !1,
  onLeftAccessoryClick: i,
  onClose: s,
  className: l = ""
}) => {
  const o = ["drawer-header", l].filter(Boolean).join(" "), c = n ?? (r ? /* @__PURE__ */ a("span", { className: "drawer-header__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ a(xe, {}) }) : null), u = (m, f, h) => m ? f ? /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      className: "drawer-header__side drawer-header__control hoverOpacity",
      onClick: f,
      "aria-label": h,
      children: m
    }
  ) : /* @__PURE__ */ a("div", { className: "drawer-header__side", children: m }) : /* @__PURE__ */ a("div", { className: "drawer-header__side drawer-header__side--empty" });
  return /* @__PURE__ */ d("div", { className: o, children: [
    u(c, i, "Открыть предыдущее действие"),
    /* @__PURE__ */ a("div", { className: "drawer-header__center", children: typeof e > "u" ? null : /* @__PURE__ */ a(Ga, { variant: t, children: e }) }),
    u(
      s ? /* @__PURE__ */ a("span", { className: "drawer-header__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ a(ye, {}) }) : null,
      s,
      "Закрыть панель"
    )
  ] });
}, Me = ({
  trigger: e,
  children: t,
  placement: n = "right",
  isOpen: r,
  defaultOpen: i = !1,
  onOpenChange: s,
  className: l = ""
}) => {
  const [o, c] = K(i), u = r !== void 0, m = u ? r : o;
  H(() => {
    u || c(i);
  }, [i, u]);
  const f = (_) => {
    u || c(_), s == null || s(_);
  }, h = ["tooltip-anchor", l].filter(Boolean).join(" "), v = ["tooltip", `tooltip--${n}`].join(" ");
  return /* @__PURE__ */ d(
    "div",
    {
      className: h,
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      onFocus: () => f(!0),
      onBlur: (_) => {
        _.currentTarget.contains(_.relatedTarget) || f(!1);
      },
      children: [
        /* @__PURE__ */ a("div", { className: "tooltip-anchor__trigger hoverOpacity", children: e }),
        m && /* @__PURE__ */ d("div", { className: v, role: "tooltip", children: [
          /* @__PURE__ */ a("div", { className: "tooltip__arrow", "aria-hidden": "true" }),
          /* @__PURE__ */ a("div", { className: "tooltip__content", children: typeof t == "string" ? /* @__PURE__ */ a("p", { className: "tooltip__paragraph ts-400-s", children: t }) : t })
        ] })
      ]
    }
  );
}, hn = ({
  label: e,
  description: t,
  errorMessage: n,
  value: r,
  onChange: i,
  isDisabled: s = !1,
  isError: l = !1,
  placeholder: o = "Выберите вариант",
  right: c,
  hasChevron: u = !0,
  hasHelpIcon: m = !1,
  helpText: f,
  children: h,
  hasSearch: v = !1,
  searchPlaceholder: _ = "Поиск",
  onSearchChange: g,
  isLoading: y = !1,
  isEmpty: p = !1,
  emptyText: N = "Ничего не найдено"
}) => {
  const [b, T] = K(!1), j = W(null), D = l ? n ?? t : t, V = [
    "dropdown",
    s ? "dropdown--disabled" : "",
    l ? "dropdown--error" : "",
    b ? "dropdown--open" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(Q, { children: [
    /* @__PURE__ */ d(
      "div",
      {
        ref: j,
        className: V,
        onClick: () => {
          s || T((F) => !F);
        },
        onKeyDown: (F) => {
          (F.key === "Enter" || F.key === " ") && (F.preventDefault(), s || T((O) => !O));
        },
        role: "combobox",
        "aria-expanded": b,
        "aria-haspopup": "listbox",
        tabIndex: s ? -1 : 0,
        children: [
          /* @__PURE__ */ d("div", { className: "dropdown__content", children: [
            /* @__PURE__ */ d("div", { className: "dropdown__main", children: [
              /* @__PURE__ */ d("div", { className: "dropdown__header", children: [
                e && /* @__PURE__ */ a("p", { className: "dropdown__title ts-500-s", children: e }),
                e && m && (f ? /* @__PURE__ */ a(Me, { trigger: /* @__PURE__ */ a("span", { className: "dropdown__help ds-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(he, {}) }), children: f }) : /* @__PURE__ */ a("span", { className: "dropdown__help ds-icon hoverOpacity", "aria-hidden": "true", children: /* @__PURE__ */ a(he, {}) }))
              ] }),
              /* @__PURE__ */ a("p", { className: `dropdown__value ts-400-m${r ? "" : " is-placeholder"}`, children: r || o })
            ] }),
            /* @__PURE__ */ a("div", { className: "dropdown__accessory", children: /* @__PURE__ */ d("span", { className: "dropdown__accessory-stack", children: [
              c,
              u && /* @__PURE__ */ a("span", { className: "dropdown__chevron", "aria-hidden": "true", children: /* @__PURE__ */ a(ta, {}) })
            ] }) })
          ] }),
          D && /* @__PURE__ */ d("div", { className: "dropdown__meta", children: [
            /* @__PURE__ */ a("div", { className: "dropdown__divider" }),
            /* @__PURE__ */ a("p", { className: "dropdown__description ts-400-s", children: D })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ a(
      sa,
      {
        isOpen: b,
        onClose: () => T(!1),
        triggerRef: j,
        label: e,
        value: r,
        hasSearch: v,
        searchPlaceholder: _,
        onSearchChange: g,
        isLoading: y,
        isEmpty: p,
        emptyText: N,
        children: h
      }
    )
  ] });
}, ze = (e, t) => /* @__PURE__ */ a(
  "button",
  {
    className: "feedback-banner__action",
    type: "button",
    onClick: e.onClick,
    disabled: e.isDisabled,
    children: /* @__PURE__ */ a("span", { className: "feedback-banner__action-label ts-500-m", children: e.label })
  },
  t
), fn = ({
  children: e,
  primaryAction: t,
  secondaryAction: n,
  className: r = ""
}) => {
  const i = [t, n].filter(Boolean);
  return /* @__PURE__ */ d("section", { className: ["feedback-banner", r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ a("p", { className: "feedback-banner__content ts-500-m", children: e }),
    i.length > 0 && /* @__PURE__ */ d("div", { className: "feedback-banner__actions", "aria-label": "Действия баннера", children: [
      t && ze(t, "primary"),
      n && ze(n, "secondary")
    ] })
  ] });
}, Xa = ({
  icon: e,
  ariaLabel: t,
  variant: n = "primary",
  size: r = "m",
  isLoading: i = !1,
  isDisabled: s = !1,
  onClick: l,
  type: o = "button",
  className: c = ""
}) => {
  const u = [
    "icon-button",
    `icon-button--${n}`,
    `icon-button--${r}`,
    i ? "is-loading" : "",
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "button",
    {
      className: u,
      type: o,
      disabled: s,
      onClick: l,
      "aria-label": t,
      "aria-busy": i || void 0,
      children: [
        /* @__PURE__ */ a("span", { className: "icon-button__icon", children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: e }) }),
        i && /* @__PURE__ */ a(J, {})
      ]
    }
  );
}, Ua = { label: "Действие" }, qa = { label: "Действие" }, se = (e, t, n = "") => /* @__PURE__ */ a(
  de,
  {
    variant: t,
    isDisabled: e.isDisabled,
    isLoading: e.isLoading,
    onClick: e.onClick,
    className: ["footer__button", n].filter(Boolean).join(" "),
    children: e.label
  }
), Ya = ({
  icon: e = /* @__PURE__ */ a(ie, {}),
  ariaLabel: t,
  onClick: n,
  isDisabled: r = !1,
  className: i = ""
}) => /* @__PURE__ */ a(
  Xa,
  {
    variant: "secondary",
    size: "m",
    icon: e,
    ariaLabel: t,
    isDisabled: r,
    onClick: n,
    className: ["footer-icon-button", i].filter(Boolean).join(" ")
  }
), vn = ({
  layout: e = "1-button",
  description: t,
  primaryAction: n = Ua,
  secondaryAction: r = qa,
  iconAction: i,
  stepperValue: s = "00",
  onStepperDecrease: l,
  onStepperIncrease: o,
  isStepperDecreaseDisabled: c = !1,
  isStepperIncreaseDisabled: u = !1,
  pageControlCount: m = 3,
  pageControlValue: f = 0,
  onPageControlChange: h,
  className: v = ""
}) => {
  const _ = [
    "footer",
    `footer--${e}`,
    t ? "footer--with-description-slot" : "",
    v
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("footer", { className: _, children: [
    !!t && /* @__PURE__ */ a("div", { className: "footer__description ts-400-s", children: t }),
    e === "1-button" && /* @__PURE__ */ a("div", { className: "footer__buttons footer__buttons--single", children: se(n, "primary") }),
    e === "2-buttons-in-line" && /* @__PURE__ */ d("div", { className: "footer__buttons footer__buttons--inline", children: [
      se(r, "secondary"),
      se(n, "primary")
    ] }),
    e === "3-buttons" && /* @__PURE__ */ d("div", { className: "footer__buttons footer__buttons--triple", children: [
      /* @__PURE__ */ a(
        Ya,
        {
          ariaLabel: (i == null ? void 0 : i.ariaLabel) ?? "Действие",
          icon: i == null ? void 0 : i.icon,
          isDisabled: i == null ? void 0 : i.isDisabled,
          onClick: i == null ? void 0 : i.onClick
        }
      ),
      se(r, "secondary"),
      se(n, "primary")
    ] }),
    e === "page-control-button" && /* @__PURE__ */ d(Q, { children: [
      /* @__PURE__ */ a("div", { className: "footer__page-control", role: "tablist", "aria-label": "Страницы", children: Array.from({ length: m }, (y, p) => {
        const N = p === f;
        return /* @__PURE__ */ a(
          "button",
          {
            className: [
              "footer__page-dot",
              N ? "footer__page-dot--selected" : ""
            ].filter(Boolean).join(" "),
            type: "button",
            role: "tab",
            "aria-selected": N,
            "aria-label": `Страница ${p + 1}`,
            onClick: () => h == null ? void 0 : h(p)
          },
          p
        );
      }) }),
      /* @__PURE__ */ a("div", { className: "footer__buttons footer__buttons--single", children: se(n, "primary") })
    ] }),
    e === "stepper-button" && /* @__PURE__ */ d("div", { className: "footer__buttons footer__buttons--stepper", children: [
      /* @__PURE__ */ d("div", { className: "footer__stepper", role: "group", "aria-label": "Количество", children: [
        /* @__PURE__ */ a(
          "button",
          {
            className: "footer__stepper-button",
            type: "button",
            "aria-label": "Уменьшить",
            disabled: c,
            onClick: l,
            children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ a(je, {}) })
          }
        ),
        /* @__PURE__ */ a("div", { className: "footer__stepper-value ts-500-m", children: s }),
        /* @__PURE__ */ a(
          "button",
          {
            className: "footer__stepper-button",
            type: "button",
            "aria-label": "Увеличить",
            disabled: u,
            onClick: o,
            children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ a(ea, {}) })
          }
        )
      ] }),
      se(n, "primary")
    ] })
  ] });
};
function Qa(e = ia) {
  const [t, n] = K(
    () => typeof window < "u" && window.matchMedia(`(max-width: ${e}px)`).matches
  );
  return H(() => {
    const r = window.matchMedia(`(max-width: ${e}px)`), i = (s) => n(s.matches);
    return r.addEventListener("change", i), () => r.removeEventListener("change", i);
  }, [e]), t;
}
const Ja = 300, et = 400, at = ({
  isOpen: e,
  onClose: t,
  header: n,
  footer: r,
  children: i,
  className: s = "",
  isOverlayCloseEnabled: l = !0,
  isSheet: o = !1
}) => {
  const c = Qa(), u = W(null), [m, f] = K(!1), [h, v] = K(e ? "in" : "hidden");
  if (H(() => {
    if (e)
      v("in");
    else if (h === "in") {
      v("out");
      const T = setTimeout(() => v("hidden"), c ? et : Ja);
      return () => clearTimeout(T);
    }
  }, [e]), H(() => {
    if (h !== "in") return;
    const b = (T) => {
      T.key === "Escape" && (t == null || t());
    };
    return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
  }, [h, t]), H(() => {
    if (h !== "in") {
      f(!1);
      return;
    }
    const b = u.current;
    if (!b) return;
    const T = () => f(b.scrollTop >= 24);
    return T(), b.addEventListener("scroll", T), () => b.removeEventListener("scroll", T);
  }, [h, i]), o && c) {
    const b = Y.isValidElement(n) ? n.props.title : void 0, T = b != null ? /* @__PURE__ */ a(ra, { title: b }) : void 0;
    return /* @__PURE__ */ a(
      na,
      {
        isOpen: e,
        onClose: t,
        header: T,
        footer: r,
        isOverlayCloseEnabled: l,
        className: s,
        children: i
      }
    );
  }
  if (h === "hidden") return null;
  const _ = Y.isValidElement(n) ? n.props.title : void 0, g = ["modal", s].filter(Boolean).join(" "), y = [
    "modal__header",
    m ? "modal__header--compact" : ""
  ].filter(Boolean).join(" "), p = [
    "modal__panel",
    c ? h === "in" ? "animate-slide-right-in" : "animate-slide-right-out" : h === "in" ? "animate-popup-in" : "animate-popup-out"
  ].join(" "), N = [
    "modal__overlay",
    h === "in" ? "animate-overlay-in" : "animate-overlay-out"
  ].join(" ");
  return /* @__PURE__ */ d("div", { className: g, children: [
    /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: N,
        "aria-label": "Закрыть модальное окно",
        onClick: () => {
          l && (t == null || t());
        }
      }
    ),
    /* @__PURE__ */ d("aside", { className: p, role: "dialog", "aria-modal": "true", children: [
      n && /* @__PURE__ */ a("div", { className: y, children: n }),
      /* @__PURE__ */ a("div", { ref: u, className: "modal__content ds-scroll-area", children: /* @__PURE__ */ d("div", { className: "modal__content-inner", children: [
        _ && /* @__PURE__ */ a("div", { className: "modal__content-title ts-600-2xl", children: _ }),
        i
      ] }) }),
      r && /* @__PURE__ */ a("div", { className: "modal__footer", children: r })
    ] })
  ] });
}, tt = ({
  title: e,
  leftAccessory: t,
  hasDefaultBackArrow: n = !1,
  onLeftAccessoryClick: r,
  onClose: i,
  variant: s = "default",
  className: l = ""
}) => {
  if (s === "empty")
    return /* @__PURE__ */ a("div", { className: ["modal-header", "modal-header--empty", l].filter(Boolean).join(" ") });
  const o = ["modal-header", l].filter(Boolean).join(" "), c = t ?? (n ? /* @__PURE__ */ a("span", { className: "modal-header__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ a(xe, {}) }) : null), u = (m, f, h) => m ? f ? /* @__PURE__ */ a(
    "button",
    {
      type: "button",
      className: "modal-header__side modal-header__control hoverOpacity",
      onClick: f,
      "aria-label": h,
      children: m
    }
  ) : /* @__PURE__ */ a("div", { className: "modal-header__side", children: m }) : /* @__PURE__ */ a("div", { className: "modal-header__side modal-header__side--empty" });
  return /* @__PURE__ */ a("div", { className: o, children: /* @__PURE__ */ d("div", { className: "modal-header__navigation", children: [
    u(c, r, "Открыть предыдущее действие"),
    /* @__PURE__ */ a("div", { className: "modal-header__center", children: typeof e > "u" ? null : /* @__PURE__ */ a("div", { className: "modal-header__title modal-header__title--compact ts-500-m", children: e }) }),
    u(
      /* @__PURE__ */ a("span", { className: "modal-header__icon ds-icon ds-icon--24", "aria-hidden": "true", children: /* @__PURE__ */ a(ye, {}) }),
      i,
      "Закрыть модальное окно"
    )
  ] }) });
}, nt = ({
  layout: e = "1-button",
  description: t,
  primaryAction: n,
  secondaryAction: r,
  className: i = ""
}) => {
  if (e === "empty")
    return /* @__PURE__ */ a("div", { className: ["modal-footer", "modal-footer--empty", i].filter(Boolean).join(" ") });
  const s = [
    "modal-footer",
    e === "2-horizontal-buttons" ? "modal-footer--row" : "modal-footer--column",
    i
  ].filter(Boolean).join(" "), l = [
    "modal-footer__buttons",
    e === "2-horizontal-buttons" ? "modal-footer__buttons--row" : "modal-footer__buttons--column"
  ].join(" ");
  return /* @__PURE__ */ d("div", { className: s, children: [
    t && /* @__PURE__ */ a("div", { className: "modal-footer__description ts-400-s", children: t }),
    /* @__PURE__ */ d("div", { className: l, children: [
      r && e !== "1-button" && /* @__PURE__ */ a(
        de,
        {
          variant: r.isSelected ? "primary" : "secondary",
          isDisabled: r.isDisabled,
          isLoading: r.isLoading,
          onClick: r.onClick,
          className: "modal-footer__button",
          children: r.label
        }
      ),
      n && /* @__PURE__ */ a(
        de,
        {
          variant: n.isSelected ? "primary" : "secondary",
          isDisabled: n.isDisabled,
          isLoading: n.isLoading,
          onClick: n.onClick,
          className: "modal-footer__button",
          children: n.label
        }
      )
    ] })
  ] });
}, rt = ({
  title: e,
  description: t,
  icon: n,
  size: r = "l",
  isLoading: i = !1,
  onClick: s,
  className: l = ""
}) => {
  const o = [
    "link-cell",
    `link-cell--${r}`,
    t ? "link-cell--has-description" : "",
    s ? "link-cell--interactive" : "",
    l
  ].filter(Boolean).join(" "), c = r === "l" ? "ds-icon--30" : "ds-icon--24", u = r === "l" ? "ts-500-l" : "ts-500-m";
  return /* @__PURE__ */ d(
    "div",
    {
      className: o,
      onClick: s,
      role: s ? "button" : void 0,
      tabIndex: s ? 0 : void 0,
      children: [
        /* @__PURE__ */ a("span", { className: `link-cell__icon ds-icon ${c}`, "aria-hidden": "true", children: n ?? /* @__PURE__ */ a(ie, {}) }),
        /* @__PURE__ */ d("div", { className: "link-cell__text", children: [
          /* @__PURE__ */ a("span", { className: `link-cell__title ${u}`, children: e }),
          t && /* @__PURE__ */ a("span", { className: "link-cell__description ts-400-s", children: t })
        ] }),
        i && /* @__PURE__ */ a(J, { className: "link-cell__spinner" })
      ]
    }
  );
}, it = {
  neutral: {
    avatarSurface: "var(--bg-brand-1)",
    avatarColor: "var(--primitive-brand)",
    icon: /* @__PURE__ */ a(wa, {})
  },
  error: {
    avatarSurface: "var(--bg-error-1)",
    avatarColor: "var(--primitive-error)",
    icon: /* @__PURE__ */ a(ye, {})
  },
  success: {
    avatarSurface: "var(--bg-success-1)",
    avatarColor: "var(--primitive-success)",
    icon: /* @__PURE__ */ a(De, {})
  }
}, _n = ({
  isOpen: e,
  onDone: t,
  state: n = "neutral",
  title: r,
  text: i,
  items: s = [],
  className: l = ""
}) => {
  const o = it[n], c = s.slice(0, 5);
  return /* @__PURE__ */ a(
    at,
    {
      isOpen: e,
      isOverlayCloseEnabled: !1,
      className: ["flow-result-view__modal", l].filter(Boolean).join(" "),
      header: /* @__PURE__ */ a(tt, { variant: "empty" }),
      footer: /* @__PURE__ */ a(
        nt,
        {
          layout: "1-button",
          primaryAction: {
            label: "Готово",
            isSelected: !0,
            onClick: t
          }
        }
      ),
      children: /* @__PURE__ */ d("div", { className: "flow-result-view", children: [
        /* @__PURE__ */ a(
          oe,
          {
            size: "l",
            shape: "superellipse",
            icon: o.icon,
            style: {
              "--avatar-surface": o.avatarSurface,
              "--avatar-color": o.avatarColor
            }
          }
        ),
        /* @__PURE__ */ d("div", { className: "flow-result-view__content", children: [
          /* @__PURE__ */ a("h2", { className: "flow-result-view__title ts-600-4xl", children: r }),
          /* @__PURE__ */ a("div", { className: "flow-result-view__text ts-400-m", children: i }),
          c.length > 0 && /* @__PURE__ */ a("div", { className: "flow-result-view__items", children: c.map((u, m) => /* @__PURE__ */ a(
            rt,
            {
              title: u.title,
              description: u.description,
              icon: u.icon,
              isLoading: u.isLoading,
              onClick: u.onClick
            },
            m
          )) })
        ] })
      ] })
    }
  );
}, pn = ({
  children: e,
  title: t,
  subtitle: n,
  description: r,
  left: i,
  right: s,
  variant: l = "single",
  className: o = ""
}) => {
  const c = [
    "form-cell",
    `form-cell--${l}`,
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: c, children: [
    /* @__PURE__ */ d("div", { className: "form-cell__content", children: [
      /* @__PURE__ */ d("div", { className: "form-cell__main", children: [
        i && /* @__PURE__ */ a("div", { className: "form-cell__left", children: i }),
        /* @__PURE__ */ d("div", { className: `form-cell__text ${n || r ? "form-cell__text--dual" : ""}`, children: [
          n && /* @__PURE__ */ a("p", { className: "form-cell__subtitle ts-400-s", children: n }),
          /* @__PURE__ */ a("p", { className: "form-cell__title ts-400-m", children: t }),
          r && /* @__PURE__ */ a("p", { className: "form-cell__description ts-400-s", children: r })
        ] })
      ] }),
      s && /* @__PURE__ */ a("div", { className: "form-cell__right", children: /* @__PURE__ */ a("div", { className: "form-cell__control", children: s }) })
    ] }),
    e
  ] });
}, gn = ({
  children: e,
  icon: t,
  variant: n = "primary",
  isDisabled: r = !1,
  isLoading: i = !1,
  onClick: s
}) => {
  const l = [
    "header-button",
    `header-button--${n}`,
    r ? "is-disabled" : "",
    i ? "is-loading" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "button",
    {
      className: l,
      type: "button",
      disabled: r || i,
      onClick: s,
      children: [
        i && /* @__PURE__ */ a(J, { className: "header-button__spinner" }),
        t && /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m header-button__icon", children: t }),
        /* @__PURE__ */ a("span", { className: "header-button__label ts-500-s", children: e })
      ]
    }
  );
};
function la(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
var fe;
(function(e) {
  e.event = "event", e.props = "prop";
})(fe || (fe = {}));
function ne() {
}
function st(e) {
  var t, n = void 0;
  return function() {
    for (var r = [], i = arguments.length; i--; ) r[i] = arguments[i];
    return t && r.length === t.length && r.every(function(s, l) {
      return s === t[l];
    }) || (t = r, n = e.apply(void 0, r)), n;
  };
}
function pe(e) {
  return !!(e || "").match(/\d/);
}
function re(e) {
  return e == null;
}
function lt(e) {
  return typeof e == "number" && isNaN(e);
}
function oa(e) {
  return re(e) || lt(e) || typeof e == "number" && !isFinite(e);
}
function ca(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function ot(e) {
  switch (e) {
    case "lakh":
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case "wan":
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case "thousand":
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function ct(e, t, n) {
  var r = ot(n), i = e.search(/[1-9]/);
  return i = i === -1 ? e.length : i, e.substring(0, i) + e.substring(i, e.length).replace(r, "$1" + t);
}
function Ke(e) {
  var t = W(e);
  t.current = e;
  var n = W(function() {
    for (var r = [], i = arguments.length; i--; ) r[i] = arguments[i];
    return t.current.apply(t, r);
  });
  return n.current;
}
function Le(e, t) {
  t === void 0 && (t = !0);
  var n = e[0] === "-", r = n && t;
  e = e.replace("-", "");
  var i = e.split("."), s = i[0], l = i[1] || "";
  return {
    beforeDecimal: s,
    afterDecimal: l,
    hasNegation: n,
    addNegation: r
  };
}
function dt(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var n = e.split("."), r = n[0].replace(/^0+/, "") || "0", i = n[1] || "";
  return (t ? "-" : "") + r + (i ? "." + i : "");
}
function da(e, t, n) {
  for (var r = "", i = n ? "0" : "", s = 0; s <= t - 1; s++)
    r += e[s] || i;
  return r;
}
function We(e, t) {
  return Array(t + 1).join(e);
}
function ua(e) {
  var t = e + "", n = t[0] === "-" ? "-" : "";
  n && (t = t.substring(1));
  var r = t.split(/[eE]/g), i = r[0], s = r[1];
  if (s = Number(s), !s)
    return n + i;
  i = i.replace(".", "");
  var l = 1 + s, o = i.length;
  return l < 0 ? i = "0." + We("0", Math.abs(l)) + i : l >= o ? i = i + We("0", l - o) : i = (i.substring(0, l) || "0") + "." + i.substring(l), n + i;
}
function Ze(e, t, n) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var r = (e.indexOf(".") !== -1 || n) && t, i = Le(e), s = i.beforeDecimal, l = i.afterDecimal, o = i.hasNegation, c = parseFloat("0." + (l || "0")), u = l.length <= t ? "0." + l : c.toFixed(t), m = u.split("."), f = s;
  s && Number(m[0]) && (f = s.split("").reverse().reduce(function(g, y, p) {
    return g.length > p ? (Number(g[0]) + Number(y)).toString() + g.substring(1, g.length) : y + g;
  }, m[0]));
  var h = da(m[1] || "", t, n), v = o ? "-" : "", _ = r ? "." : "";
  return "" + v + f + _ + h;
}
function le(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var n = e.createTextRange();
      return n.move("character", t), n.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var ma = st(function(e, t) {
  for (var n = 0, r = 0, i = e.length, s = t.length; e[n] === t[n] && n < i; )
    n++;
  for (; e[i - 1 - r] === t[s - 1 - r] && s - r > n && i - r > n; )
    r++;
  return {
    from: { start: n, end: i - r },
    to: { start: n, end: s - r }
  };
}), ut = function(e, t) {
  var n = Math.min(e.selectionStart, t);
  return {
    from: { start: n, end: e.selectionEnd },
    to: { start: n, end: t }
  };
};
function mt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Ie(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function ht() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function ft(e) {
  return {
    from: {
      start: 0,
      end: 0
    },
    to: {
      start: 0,
      end: e.length
    },
    lastValue: ""
  };
}
function vt(e) {
  var t = e.currentValue, n = e.formattedValue, r = e.currentValueIndex, i = e.formattedValueIndex;
  return t[r] === n[i];
}
function _t(e, t, n, r, i, s, l) {
  l === void 0 && (l = vt);
  var o = i.findIndex(function(T) {
    return T;
  }), c = e.slice(0, o);
  !t && !n.startsWith(c) && (t = c, n = c + n, r = r + c.length);
  for (var u = n.length, m = e.length, f = {}, h = new Array(u), v = 0; v < u; v++) {
    h[v] = -1;
    for (var _ = 0, g = m; _ < g; _++) {
      var y = l({
        currentValue: n,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: v,
        formattedValueIndex: _
      });
      if (y && f[_] !== !0) {
        h[v] = _, f[_] = !0;
        break;
      }
    }
  }
  for (var p = r; p < u && (h[p] === -1 || !s(n[p])); )
    p++;
  var N = p === u || h[p] === -1 ? m : h[p];
  for (p = r - 1; p > 0 && h[p] === -1; )
    p--;
  var b = p === -1 || h[p] === -1 ? 0 : h[p] + 1;
  return b > N ? N : r - b < N - r ? b : N;
}
function Ge(e, t, n, r) {
  var i = e.length;
  if (t = mt(t, 0, i), r === "left") {
    for (; t >= 0 && !n[t]; )
      t--;
    t === -1 && (t = n.indexOf(!0));
  } else {
    for (; t <= i && !n[t]; )
      t++;
    t > i && (t = n.lastIndexOf(!0));
  }
  return t === -1 && (t = i), t;
}
function pt(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), n = 0, r = t.length; n < r; n++)
    t[n] = !!(pe(e[n]) || pe(e[n - 1]));
  return t;
}
function ha(e, t, n, r, i, s) {
  s === void 0 && (s = ne);
  var l = Ke(function(_, g) {
    var y, p;
    return oa(_) ? (p = "", y = "") : typeof _ == "number" || g ? (p = typeof _ == "number" ? ua(_) : _, y = r(p)) : (p = i(_, void 0), y = r(p)), { formattedValue: y, numAsString: p };
  }), o = K(function() {
    return l(re(e) ? t : e, n);
  }), c = o[0], u = o[1], m = Ke(function(_, g) {
    _.formattedValue !== c.formattedValue && u({
      formattedValue: _.formattedValue,
      numAsString: _.value
    }), s(_, g);
  }), f = e, h = n;
  re(e) && (f = c.numAsString, h = !0);
  var v = l(f, h);
  return ya(function() {
    u(v);
  }, [v.formattedValue]), H(function() {
    if (!re(t) && re(e) && c.formattedValue !== "") {
      var _ = parseFloat(c.numAsString);
      m({
        formattedValue: c.formattedValue,
        value: c.numAsString,
        floatValue: isNaN(_) ? void 0 : _
      }, { event: void 0, source: fe.props });
    }
  }, []), [c, m];
}
function gt(e) {
  return e.replace(/[^0-9]/g, "");
}
function Nt(e) {
  return e;
}
function bt(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var n = e.displayType;
  n === void 0 && (n = "input");
  var r = e.customInput, i = e.renderText, s = e.getInputRef, l = e.format;
  l === void 0 && (l = Nt);
  var o = e.removeFormatting;
  o === void 0 && (o = gt);
  var c = e.defaultValue, u = e.valueIsNumericString, m = e.onValueChange, f = e.isAllowed, h = e.onChange;
  h === void 0 && (h = ne);
  var v = e.onKeyDown;
  v === void 0 && (v = ne);
  var _ = e.onMouseUp;
  _ === void 0 && (_ = ne);
  var g = e.onFocus;
  g === void 0 && (g = ne);
  var y = e.onBlur;
  y === void 0 && (y = ne);
  var p = e.value, N = e.getCaretBoundary;
  N === void 0 && (N = pt);
  var b = e.isValidInputCharacter;
  b === void 0 && (b = pe);
  var T = e.isCharacterSame, j = la(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), D = ha(p, c, !!u, l, o, m), V = D[0], k = V.formattedValue, C = V.numAsString, F = D[1], O = W(), X = W({ formattedValue: k, numAsString: C }), S = function(x, w) {
    X.current = { formattedValue: x.formattedValue, numAsString: x.value }, F(x, w);
  }, Z = K(!1), U = Z[0], B = Z[1], I = W(null), L = W({
    setCaretTimeout: null,
    focusTimeout: null
  });
  H(function() {
    return B(!0), function() {
      clearTimeout(L.current.setCaretTimeout), clearTimeout(L.current.focusTimeout);
    };
  }, []);
  var A = l, z = function(x, w) {
    var $ = parseFloat(w);
    return {
      formattedValue: x,
      value: w,
      floatValue: isNaN($) ? void 0 : $
    };
  }, P = function(x, w, $) {
    x.selectionStart === 0 && x.selectionEnd === x.value.length || (le(x, w), L.current.setCaretTimeout = setTimeout(function() {
      x.value === $ && x.selectionStart !== w && le(x, w);
    }, 0));
  }, G = function(x, w, $) {
    return Ge(x, w, N(x), $);
  }, ue = function(x, w, $) {
    var E = N(w), q = _t(w, k, x, $, E, b, T);
    return q = Ge(w, q, E), q;
  }, ke = function(x) {
    var w = x.formattedValue;
    w === void 0 && (w = "");
    var $ = x.input, E = x.source, q = x.event, R = x.numAsString, M;
    if ($) {
      var ee = x.inputValue || $.value, ae = Ie($);
      $.value = w, M = ue(ee, w, ae), M !== void 0 && P($, M, w);
    }
    w !== k && S(z(w, R), { event: q, source: E });
  };
  H(function() {
    var x = X.current, w = x.formattedValue, $ = x.numAsString;
    (k !== w || C !== $) && S(z(k, C), {
      event: void 0,
      source: fe.props
    });
  }, [k, C]);
  var ve = I.current ? Ie(I.current) : void 0, ge = typeof window < "u" ? Qe : H;
  ge(function() {
    var x = I.current;
    if (k !== X.current.formattedValue && x) {
      var w = ue(X.current.formattedValue, k, ve);
      x.value = k, P(x, w, k);
    }
  }, [k]);
  var Ce = function(x, w, $) {
    var E = w.target, q = O.current ? ut(O.current, E.selectionEnd) : ma(k, x), R = Object.assign(Object.assign({}, q), { lastValue: k }), M = o(x, R), ee = A(M);
    if (M = o(ee, void 0), f && !f(z(ee, M))) {
      var ae = w.target, te = Ie(ae), Be = ue(x, k, te);
      return ae.value = k, P(ae, Be, k), !1;
    }
    return ke({
      formattedValue: ee,
      numAsString: M,
      inputValue: x,
      event: w,
      source: $,
      input: w.target
    }), !0;
  }, Se = function(x, w) {
    w === void 0 && (w = 0);
    var $ = x.selectionStart, E = x.selectionEnd;
    O.current = { selectionStart: $, selectionEnd: E + w };
  }, va = function(x) {
    var w = x.target, $ = w.value, E = Ce($, x, fe.event);
    E && h(x), O.current = void 0;
  }, _a = function(x) {
    var w = x.target, $ = x.key, E = w.selectionStart, q = w.selectionEnd, R = w.value;
    R === void 0 && (R = "");
    var M;
    $ === "ArrowLeft" || $ === "Backspace" ? M = Math.max(E - 1, 0) : $ === "ArrowRight" ? M = Math.min(E + 1, R.length) : $ === "Delete" && (M = E);
    var ee = 0;
    $ === "Delete" && E === q && (ee = 1);
    var ae = $ === "ArrowLeft" || $ === "ArrowRight";
    if (M === void 0 || E !== q && !ae) {
      v(x), Se(w, ee);
      return;
    }
    var te = M;
    if (ae) {
      var Be = $ === "ArrowLeft" ? "left" : "right";
      te = G(R, M, Be), te !== M && x.preventDefault();
    } else $ === "Delete" && !b(R[M]) ? te = G(R, M, "right") : $ === "Backspace" && !b(R[M]) && (te = G(R, M, "left"));
    te !== M && P(w, te, R), v(x), Se(w, ee);
  }, pa = function(x) {
    var w = x.target, $ = function() {
      var E = w.selectionStart, q = w.selectionEnd, R = w.value;
      if (R === void 0 && (R = ""), E === q) {
        var M = G(R, E);
        M !== E && P(w, M, R);
      }
    };
    $(), requestAnimationFrame(function() {
      $();
    }), _(x), Se(w);
  }, ga = function(x) {
    x.persist && x.persist();
    var w = x.target, $ = x.currentTarget;
    I.current = w, L.current.focusTimeout = setTimeout(function() {
      var E = w.selectionStart, q = w.selectionEnd, R = w.value;
      R === void 0 && (R = "");
      var M = G(R, E);
      M !== E && !(E === 0 && q === R.length) && P(w, M, R), g(Object.assign(Object.assign({}, x), { currentTarget: $ }));
    }, 0);
  }, Na = function(x) {
    I.current = null, clearTimeout(L.current.focusTimeout), clearTimeout(L.current.setCaretTimeout), y(x);
  }, ba = U && ht() ? "numeric" : void 0, Ee = Object.assign({ inputMode: ba }, j, {
    type: t,
    value: k,
    onChange: va,
    onKeyDown: _a,
    onMouseUp: pa,
    onFocus: ga,
    onBlur: Na
  });
  if (n === "text")
    return i ? Y.createElement(Y.Fragment, null, i(k, j) || null) : Y.createElement("span", Object.assign({}, j, { ref: s }), k);
  if (r) {
    var xa = r;
    return Y.createElement(xa, Object.assign({}, Ee, { ref: s }));
  }
  return Y.createElement("input", Object.assign({}, Ee, { ref: s }));
}
function Xe(e, t) {
  var n = t.decimalScale, r = t.fixedDecimalScale, i = t.prefix;
  i === void 0 && (i = "");
  var s = t.suffix;
  s === void 0 && (s = "");
  var l = t.allowNegative, o = t.thousandsGroupStyle;
  if (o === void 0 && (o = "thousand"), e === "" || e === "-")
    return e;
  var c = we(t), u = c.thousandSeparator, m = c.decimalSeparator, f = n !== 0 && e.indexOf(".") !== -1 || n && r, h = Le(e, l), v = h.beforeDecimal, _ = h.afterDecimal, g = h.addNegation;
  return n !== void 0 && (_ = da(_, n, !!r)), u && (v = ct(v, u, o)), i && (v = i + v), s && (_ = _ + s), g && (v = "-" + v), e = v + (f && m || "") + _, e;
}
function we(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var n = e.thousandSeparator, r = e.allowedDecimalSeparators;
  return n === !0 && (n = ","), r || (r = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: n,
    allowedDecimalSeparators: r
  };
}
function xt(e, t) {
  e === void 0 && (e = "");
  var n = new RegExp("(-)"), r = new RegExp("(-)(.)*(-)"), i = n.test(e), s = r.test(e);
  return e = e.replace(/-/g, ""), i && !s && t && (e = "-" + e), e;
}
function yt(e, t) {
  return new RegExp("(^-)|[0-9]|" + ca(e), "g");
}
function wt(e, t, n) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(n != null && n.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function kt(e, t, n) {
  var r;
  t === void 0 && (t = ft(e));
  var i = n.allowNegative, s = n.prefix;
  s === void 0 && (s = "");
  var l = n.suffix;
  l === void 0 && (l = "");
  var o = n.decimalScale, c = t.from, u = t.to, m = u.start, f = u.end, h = we(n), v = h.allowedDecimalSeparators, _ = h.decimalSeparator, g = e[f] === _;
  if (pe(e) && (e === s || e === l) && t.lastValue === "")
    return e;
  if (f - m === 1 && v.indexOf(e[m]) !== -1) {
    var y = o === 0 ? "" : _;
    e = e.substring(0, m) + y + e.substring(m + 1, e.length);
  }
  var p = function(I, L, A) {
    var z = !1, P = !1;
    s.startsWith("-") ? z = !1 : I.startsWith("--") ? (z = !1, P = !0) : l.startsWith("-") && I.length === l.length ? z = !1 : I[0] === "-" && (z = !0);
    var G = z ? 1 : 0;
    return P && (G = 2), G && (I = I.substring(G), L -= G, A -= G), { value: I, start: L, end: A, hasNegation: z };
  }, N = p(e, m, f), b = N.hasNegation;
  r = N, e = r.value, m = r.start, f = r.end;
  var T = p(t.lastValue, c.start, c.end), j = T.start, D = T.end, V = T.value, k = e.substring(m, f);
  e.length && V.length && (j > V.length - l.length || D < s.length) && !(k && l.startsWith(k)) && (e = V);
  var C = 0;
  e.startsWith(s) ? C += s.length : m < s.length && (C = m), e = e.substring(C), f -= C;
  var F = e.length, O = e.length - l.length;
  e.endsWith(l) ? F = O : (f > O || f > e.length - l.length) && (F = f), e = e.substring(0, F), e = xt(b ? "-" + e : e, i), e = (e.match(yt(_)) || []).join("");
  var X = e.indexOf(_);
  e = e.replace(new RegExp(ca(_), "g"), function(I, L) {
    return L === X ? "." : "";
  });
  var S = Le(e, i), Z = S.beforeDecimal, U = S.afterDecimal, B = S.addNegation;
  return u.end - u.start < c.end - c.start && Z === "" && g && !parseFloat(U) && (e = B ? "-" : ""), e;
}
function Ct(e, t) {
  var n = t.prefix;
  n === void 0 && (n = "");
  var r = t.suffix;
  r === void 0 && (r = "");
  var i = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), s = e[0] === "-";
  i.fill(!1, 0, Math.min(n.length + (s ? 1 : 0), e.length));
  var l = e.length;
  return i.fill(!1, l - r.length + 1, l + 1), i;
}
function St(e) {
  var t = we(e), n = t.thousandSeparator, r = t.decimalSeparator, i = e.prefix;
  i === void 0 && (i = "");
  var s = e.allowNegative;
  if (s === void 0 && (s = !0), n === r)
    throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + n + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + r + ` (default value for decimalSeparator is .)
     `);
  return i.startsWith("-") && s && (console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` + i + `
      allowNegative: ` + s + `
    `), s = !1), Object.assign(Object.assign({}, e), { allowNegative: s });
}
function Bt(e) {
  e = St(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, n = e.allowNegative, r = e.allowLeadingZeros, i = e.onKeyDown;
  i === void 0 && (i = ne);
  var s = e.onBlur;
  s === void 0 && (s = ne);
  var l = e.thousandSeparator, o = e.decimalScale, c = e.fixedDecimalScale, u = e.prefix;
  u === void 0 && (u = "");
  var m = e.defaultValue, f = e.value, h = e.valueIsNumericString, v = e.onValueChange, _ = la(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), g = we(e), y = g.decimalSeparator, p = g.allowedDecimalSeparators, N = function(B) {
    return Xe(B, e);
  }, b = function(B, I) {
    return kt(B, I, e);
  }, T = re(f) ? m : f, j = h ?? wt(T, u, t);
  re(f) ? re(m) || (j = j || typeof m == "number") : j = j || typeof f == "number";
  var D = function(B) {
    return oa(B) ? B : (typeof B == "number" && (B = ua(B)), j && typeof o == "number" ? Ze(B, o, !!c) : B);
  }, V = ha(D(f), D(m), !!j, N, b, v), k = V[0], C = k.numAsString, F = k.formattedValue, O = V[1], X = function(B) {
    var I = B.target, L = B.key, A = I.selectionStart, z = I.selectionEnd, P = I.value;
    if (P === void 0 && (P = ""), (L === "Backspace" || L === "Delete") && z < u.length && P !== "-") {
      B.preventDefault();
      return;
    }
    if (A !== z) {
      i(B);
      return;
    }
    L === "Backspace" && P[0] === "-" && A === u.length + 1 && n && le(I, 1), o && c && (L === "Backspace" && P[A - 1] === y ? (le(I, A - 1), B.preventDefault()) : L === "Delete" && P[A] === y && B.preventDefault()), p != null && p.includes(L) && P[A] === y && le(I, A + 1);
    var G = l === !0 ? "," : l;
    L === "Backspace" && P[A - 1] === G && le(I, A - 1), L === "Delete" && P[A] === G && le(I, A + 1), i(B);
  }, S = function(B) {
    var I = C;
    if (I.match(/\d/g) || (I = ""), r || (I = dt(I)), c && o && (I = Ze(I, o, c)), I !== C) {
      var L = Xe(I, e);
      O({
        formattedValue: L,
        value: I,
        floatValue: parseFloat(I)
      }, {
        event: B,
        source: fe.event
      });
    }
    s(B);
  }, Z = function(B) {
    return B === y ? !0 : pe(B);
  }, U = function(B) {
    var I = B.currentValue, L = B.lastValue, A = B.formattedValue, z = B.currentValueIndex, P = B.formattedValueIndex, G = I[z], ue = A[P], ke = ma(L, I), ve = ke.to, ge = function(Ce) {
      return b(Ce).indexOf(".") + u.length;
    };
    return f === 0 && c && o && I[ve.start] === y && ge(I) < z && ge(A) > P ? !1 : z >= ve.start && z < ve.end && p && p.includes(G) && ue === y ? !0 : G === ue;
  };
  return Object.assign(Object.assign({}, _), {
    value: F,
    valueIsNumericString: !1,
    isValidInputCharacter: Z,
    isCharacterSame: U,
    onValueChange: O,
    format: N,
    removeFormatting: b,
    getCaretBoundary: function(B) {
      return Ct(B, e);
    },
    onKeyDown: X,
    onBlur: S
  });
}
function It(e) {
  var t = Bt(e);
  return Y.createElement(bt, Object.assign({}, t));
}
const fa = ({
  className: e,
  value: t,
  onValueChange: n,
  suffix: r,
  decimalScale: i = 0,
  allowNegative: s = !1,
  placeholder: l,
  disabled: o,
  inputRef: c
}) => /* @__PURE__ */ a(
  It,
  {
    getInputRef: c,
    className: e,
    value: t ?? "",
    onValueChange: ({ floatValue: u }) => n == null ? void 0 : n(u ?? null),
    suffix: r,
    thousandSeparator: " ",
    decimalSeparator: ",",
    decimalScale: i,
    allowNegative: s,
    placeholder: l,
    disabled: o
  }
), Ue = {
  number: { decimalScale: 0 },
  currency: { suffix: " ₽", decimalScale: 2 },
  percent: { suffix: " %", decimalScale: 2 }
}, Nn = ({
  label: e,
  description: t,
  errorMessage: n,
  placeholder: r,
  value: i,
  onChange: s,
  isDisabled: l = !1,
  isError: o = !1,
  left: c,
  right: u,
  hasHelpIcon: m = !1,
  helpText: f,
  format: h,
  suffix: v,
  decimalScale: _,
  allowNegative: g = !1,
  onValueChange: y
}) => {
  const p = o ? n ?? t : t, N = v ?? (h ? Ue[h].suffix : void 0), b = _ ?? (h ? Ue[h].decimalScale : 0), T = [
    "input",
    l ? "input--disabled" : "",
    o ? "input--error" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("label", { className: T, children: [
    /* @__PURE__ */ d("div", { className: "input__content", children: [
      c && /* @__PURE__ */ a("div", { className: "input__accessory", children: c }),
      /* @__PURE__ */ d("div", { className: "input__main", children: [
        e && /* @__PURE__ */ d("div", { className: "input__header", children: [
          /* @__PURE__ */ a("p", { className: "input__title ts-500-s", children: e }),
          m && (f ? /* @__PURE__ */ a(Me, { trigger: /* @__PURE__ */ a("span", { className: "input__help ds-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(he, {}) }), children: f }) : /* @__PURE__ */ a("span", { className: "input__help ds-icon hoverOpacity", "aria-hidden": "true", children: /* @__PURE__ */ a(he, {}) }))
        ] }),
        h ? /* @__PURE__ */ a(
          fa,
          {
            className: "input__field ts-400-m",
            value: i,
            onValueChange: y,
            suffix: N,
            decimalScale: b,
            allowNegative: g,
            placeholder: r,
            disabled: l
          }
        ) : /* @__PURE__ */ a(
          "input",
          {
            className: "input__field ts-400-m",
            type: "text",
            placeholder: r,
            value: i,
            onChange: (j) => s == null ? void 0 : s(j.target.value),
            disabled: l
          }
        )
      ] }),
      u && /* @__PURE__ */ a("div", { className: "input__accessory", children: u })
    ] }),
    p && /* @__PURE__ */ d("div", { className: "input__meta", children: [
      /* @__PURE__ */ a("div", { className: "input__divider" }),
      /* @__PURE__ */ a("p", { className: "input__description ts-400-s", children: p })
    ] })
  ] });
}, Tt = ({
  variant: e = "percent",
  value: t,
  maxSteps: n = 5,
  progressColor: r = "var(--bg-brand)",
  trackColor: i = "var(--container-transparent-2)",
  className: s = "",
  ariaLabel: l
}) => {
  const o = e === "steps", c = Math.max(1, Math.floor(n)), u = Math.max(0, Math.min(Math.floor(t), c));
  let m = 0;
  return o ? m = Math.max(0, Math.min(u / c * 100, 100)) : m = Math.max(0, Math.min(t, 100)), /* @__PURE__ */ a(
    "div",
    {
      className: `ds-linear-progress ${s}`,
      role: "progressbar",
      "aria-valuenow": o ? u : Math.round(m),
      "aria-valuemin": 0,
      "aria-valuemax": o ? c : 100,
      "aria-label": l || (o ? `Progress: ${u} of ${c} steps` : `Progress: ${Math.round(m)}%`),
      children: o ? /* @__PURE__ */ a("div", { className: "ds-linear-progress__steps", "aria-hidden": "true", children: Array.from({ length: c }, (f, h) => /* @__PURE__ */ a(
        "div",
        {
          className: "ds-linear-progress__step",
          style: {
            backgroundColor: h < u ? r : i
          }
        },
        h
      )) }) : /* @__PURE__ */ d(Q, { children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "ds-linear-progress__track",
            style: { backgroundColor: i }
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: "ds-linear-progress__fill",
            style: {
              width: `${m}%`,
              backgroundColor: r
            }
          }
        )
      ] })
    }
  );
}, Vt = (e) => /* @__PURE__ */ d("svg", { width: "73", height: "35", viewBox: "0 0 73 35", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e, children: [
  /* @__PURE__ */ a("path", { d: "M52.2086 33.8315H48.4481V20.9498H52.2086V25.6194H53.1487C55.002 25.6194 55.6467 25.2973 56.8017 22.5868L57.5001 20.9498H61.1799V21.245L60.1592 23.7676C59.5414 25.2973 58.7088 26.505 57.8224 27.2296L61.5828 33.5363V33.8315H57.6344L54.4917 28.5715H52.2086V33.8315Z", fill: "currentColor" }),
  /* @__PURE__ */ a("path", { d: "M32.9981 20.9498H36.7586V25.351H41.4591V20.9498H45.2196V33.8315H41.4591V28.6251H36.7586V33.8315H32.9981V20.9498Z", fill: "currentColor" }),
  /* @__PURE__ */ a("path", { d: "M17.7848 21.1376C19.3696 20.7619 21.223 20.6545 22.4048 20.6545C28.0455 20.6545 29.5497 23.1504 29.496 25.8878V31.0673L30.839 31.0941V33.7778C30.2481 33.9388 29.6034 34.073 28.9588 34.073C27.374 34.073 26.5682 33.2411 26.3802 32.2213H26.1384C25.1715 33.5631 23.4524 34.1535 21.7871 34.1535C19.2085 34.1535 16.8179 32.758 16.8179 29.8059C16.8179 26.4782 19.88 25.6194 22.9152 25.6194H26.0041C25.9504 24.036 24.097 23.4724 22.0288 23.4724C20.7932 23.4724 19.2622 23.6871 18.1609 24.1165L17.7848 21.1376ZM20.5783 29.8059C20.5783 30.9599 21.3573 31.4162 22.6197 31.4162C24.6611 31.4162 26.0041 30.2622 26.0041 28.0615L23.6136 28.0347C21.3841 28.0347 20.5783 28.6251 20.5783 29.8059Z", fill: "currentColor" }),
  /* @__PURE__ */ a("path", { d: "M9.41993 19.4737C5.90122 19.7689 3.99413 20.9766 3.67181 24.1434H3.96727C4.98797 22.3721 6.78761 21.3791 9.12447 21.3791C12.294 21.3791 15.3292 23.3114 15.3292 27.7932C15.3292 32.0603 12.3209 34.2341 8.10377 34.2341C3.24204 34.2341 0.63658 31.0673 0.63658 25.512C0.63658 21.4865 1.92588 16.8169 9.41993 16.1996L13.9325 15.8239L13.9862 19.098L9.41993 19.4737ZM8.18435 31.0673C10.5212 31.0673 11.4613 29.6986 11.4613 27.7932C11.4613 25.7267 10.4138 24.5191 8.26494 24.5191C6.22354 24.5191 5.09541 25.5926 4.53134 26.6929C4.53134 29.2692 5.47145 31.0673 8.18435 31.0673Z", fill: "currentColor" }),
  /* @__PURE__ */ a("path", { d: "M59.9379 1.02741C61.5226 0.651691 63.376 0.544343 64.5578 0.544343C70.1985 0.544343 71.7027 3.04018 71.649 5.77755V10.9571L72.992 10.9839V13.6676C72.4011 13.8286 71.7564 13.9628 71.1118 13.9628C69.527 13.9628 68.7212 13.1309 68.5332 12.1111H68.2914C67.3245 13.4529 65.6054 14.0433 63.9401 14.0433C61.3615 14.0433 58.9709 12.6478 58.9709 9.69574C58.9709 6.36796 62.033 5.50918 65.0682 5.50918H68.1571C68.1034 3.9258 66.2501 3.36222 64.1818 3.36222C62.9462 3.36222 61.4152 3.57692 60.3139 4.00631L59.9379 1.02741ZM62.7313 9.69574C62.7313 10.8497 63.5103 11.306 64.7727 11.306C66.8141 11.306 68.1571 10.152 68.1571 7.95134L65.7666 7.92451C63.5371 7.92451 62.7313 8.51492 62.7313 9.69574Z", fill: "currentColor" }),
  /* @__PURE__ */ a("path", { d: "M48.6412 13.7213H44.8807V0.839555H48.6412V5.50919H49.5813C51.4347 5.50919 52.0793 5.18714 53.2343 2.47661L53.9327 0.839555H57.6125V1.13476L56.5919 3.65744C55.9741 5.18714 55.1414 6.39481 54.255 7.1194L58.0154 13.4261V13.7213H54.067L50.9243 8.46125H48.6412V13.7213Z", fill: "currentColor" }),
  /* @__PURE__ */ a("path", { d: "M37.901 0.839555H41.6614V13.7213H37.901V9.10534C36.8803 9.53473 35.6984 9.8031 34.4897 9.8031C31.6425 9.8031 29.3594 8.32707 29.3594 4.67724V0.839555H33.1198V4.70408C33.1198 5.8849 33.8719 6.87787 35.5104 6.87787C36.2625 6.87787 37.1489 6.66318 37.901 6.34113V0.839555Z", fill: "currentColor" }),
  /* @__PURE__ */ a("path", { d: "M20.5322 14.1507C16.5837 14.1507 13.2798 11.5743 13.2798 7.28042C13.2798 2.98651 16.5837 0.410156 20.5322 0.410156C24.4538 0.410156 27.7576 2.98651 27.7576 7.28042C27.7576 11.5743 24.4538 14.1507 20.5322 14.1507ZM20.5322 10.9839C22.6541 10.9839 23.8897 9.40054 23.8897 7.28042C23.8897 5.1603 22.6541 3.57692 20.5322 3.57692C18.3833 3.57692 17.1477 5.1603 17.1477 7.28042C17.1477 9.40054 18.3833 10.9839 20.5322 10.9839Z", fill: "currentColor" }),
  /* @__PURE__ */ a("path", { d: "M12.3477 0.839555V4.16734H8.10377V13.7213H4.34331V4.16734H0.0993652V0.839555H12.3477Z", fill: "currentColor" })
] }), Te = ({
  isActive: e = !1,
  label: t,
  onClick: n
}) => {
  const r = [
    "sci-navigation-button",
    e ? "sci-navigation-button--selected" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a(
    "button",
    {
      className: r,
      type: "button",
      "aria-current": e ? "page" : void 0,
      onClick: n,
      children: /* @__PURE__ */ a("span", { className: "sci-navigation-button__label ts-500-m", children: t })
    }
  );
}, Ve = ({ className: e = "" }) => /* @__PURE__ */ a("div", { className: `main-page-navigation-bar__notification-indicator ${e}`, "aria-hidden": "true", children: /* @__PURE__ */ a("div", { className: "main-page-navigation-bar__notification-dot" }) }), bn = ({
  activeNavItem: e,
  className: t = "",
  customer: n = "ООО Ромашка",
  hasLive: r = !1,
  hasNewPush: i = !0,
  hasSelect: s = !0,
  hasSubscription: l = !0,
  hasTin: o = !0,
  isSecondLine: c = !1,
  tin: u = "ИНН 4827 1359 64",
  logoUrl: m,
  tochkaPlusUrl: f,
  avatarUrl: h,
  avatarInitials: v = "НО",
  onCustomerClick: _,
  onNotificationsClick: g,
  onGiftClick: y,
  onSettingsClick: p,
  onLogoutClick: N,
  onNavMainClick: b,
  onNavPaymentsClick: T,
  onNavServicesClick: j
}) => {
  const [D, V] = K(!1), k = [
    "main-page-navigation-bar",
    t
  ].filter(Boolean).join(" "), C = () => {
    V(!D), _ == null || _();
  };
  return /* @__PURE__ */ d("header", { className: k, children: [
    /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__desktop", children: [
      /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__content", children: [
        /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__logo-section", children: [
          m ? /* @__PURE__ */ a(
            "img",
            {
              src: m,
              alt: "Tochka Bank",
              className: "main-page-navigation-bar__logo",
              "aria-hidden": "true"
            }
          ) : /* @__PURE__ */ a(
            Vt,
            {
              className: "main-page-navigation-bar__logo",
              "aria-hidden": "true"
            }
          ),
          r && /* @__PURE__ */ d(
            "button",
            {
              className: "main-page-navigation-bar__live-indicator ts-600-s",
              type: "button",
              "aria-label": "Live indicator",
              children: [
                /* @__PURE__ */ a(Ve, { className: "main-page-navigation-bar__live-dot" }),
                /* @__PURE__ */ a("span", { className: "main-page-navigation-bar__live-text", children: "В ЭФИРЕ" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ d("nav", { className: "main-page-navigation-bar__nav", children: [
          /* @__PURE__ */ a(
            Te,
            {
              isActive: e === "main",
              label: "Главная",
              onClick: b
            }
          ),
          /* @__PURE__ */ a(
            Te,
            {
              isActive: e === "payments",
              label: "Платежи",
              onClick: T
            }
          ),
          /* @__PURE__ */ a(
            Te,
            {
              isActive: e === "services",
              label: "Сервисы",
              onClick: j
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-section", children: [
          /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-info", children: [
            /* @__PURE__ */ a("div", { className: "main-page-navigation-bar__avatar", children: h ? /* @__PURE__ */ a(
              "img",
              {
                src: h,
                alt: n,
                className: "main-page-navigation-bar__avatar-image"
              }
            ) : /* @__PURE__ */ a("div", { className: "main-page-navigation-bar__avatar-initials ts-600-xs", children: v }) }),
            /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-details", children: [
              /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-name-wrapper", children: [
                /* @__PURE__ */ a("span", { className: "main-page-navigation-bar__customer-name ts-500-m", children: n }),
                s && /* @__PURE__ */ a(
                  "button",
                  {
                    className: `main-page-navigation-bar__customer-select hoverOpacity ${D ? "main-page-navigation-bar__customer-select--open" : ""}`,
                    type: "button",
                    onClick: C,
                    "aria-label": "Customer menu",
                    "aria-expanded": D,
                    children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--18", "aria-hidden": "true", children: /* @__PURE__ */ a($e, {}) })
                  }
                )
              ] }),
              c && /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-extra", children: [
                l && f && /* @__PURE__ */ a(
                  "img",
                  {
                    src: f,
                    alt: "Tochka Plus",
                    className: "main-page-navigation-bar__tochka-plus"
                  }
                ),
                o && /* @__PURE__ */ a("span", { className: "main-page-navigation-bar__tin ts-500-xs", children: u })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__actions", children: [
            /* @__PURE__ */ d(
              "button",
              {
                className: "main-page-navigation-bar__action-button hoverOpacity",
                type: "button",
                "aria-label": "Notifications",
                onClick: g,
                children: [
                  /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ a(Re, {}) }),
                  i && /* @__PURE__ */ a(Ve, { className: "main-page-navigation-bar__notification-badge" })
                ]
              }
            ),
            /* @__PURE__ */ a(
              "button",
              {
                className: "main-page-navigation-bar__action-button hoverOpacity",
                type: "button",
                "aria-label": "Offers",
                onClick: y,
                children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ a(ka, {}) })
              }
            ),
            /* @__PURE__ */ a(
              "button",
              {
                className: "main-page-navigation-bar__action-button hoverOpacity",
                type: "button",
                "aria-label": "Settings",
                onClick: p,
                children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ a(Oe, {}) })
              }
            ),
            /* @__PURE__ */ a(
              "button",
              {
                className: "main-page-navigation-bar__action-button hoverOpacity",
                type: "button",
                "aria-label": "Logout",
                onClick: N,
                children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ a(Ca, {}) })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "main-page-navigation-bar__separator" })
    ] }),
    /* @__PURE__ */ a("div", { className: "main-page-navigation-bar__adaptive", children: /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__content main-page-navigation-bar__content--adaptive", children: [
      /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-info", children: [
        /* @__PURE__ */ a("div", { className: "main-page-navigation-bar__avatar", children: h ? /* @__PURE__ */ a(
          "img",
          {
            src: h,
            alt: n,
            className: "main-page-navigation-bar__avatar-image"
          }
        ) : /* @__PURE__ */ a("div", { className: "main-page-navigation-bar__avatar-initials ts-600-xs", children: v }) }),
        /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-details", children: [
          /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-name-wrapper", children: [
            /* @__PURE__ */ a("span", { className: "main-page-navigation-bar__customer-name ts-500-m", children: n }),
            s && /* @__PURE__ */ a(
              "button",
              {
                className: `main-page-navigation-bar__customer-select hoverOpacity ${D ? "main-page-navigation-bar__customer-select--open" : ""}`,
                type: "button",
                onClick: C,
                "aria-label": "Customer menu",
                "aria-expanded": D,
                children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--18", "aria-hidden": "true", children: /* @__PURE__ */ a($e, {}) })
              }
            )
          ] }),
          c && /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__customer-extra", children: [
            l && f && /* @__PURE__ */ a(
              "img",
              {
                src: f,
                alt: "Tochka Plus",
                className: "main-page-navigation-bar__tochka-plus"
              }
            ),
            o && /* @__PURE__ */ a("span", { className: "main-page-navigation-bar__tin ts-500-xs", children: u })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "main-page-navigation-bar__actions main-page-navigation-bar__actions--adaptive", children: [
        /* @__PURE__ */ a(
          "button",
          {
            className: "main-page-navigation-bar__action-button hoverOpacity",
            type: "button",
            "aria-label": "Settings",
            onClick: p,
            children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ a(Oe, {}) })
          }
        ),
        /* @__PURE__ */ d(
          "button",
          {
            className: "main-page-navigation-bar__action-button hoverOpacity",
            type: "button",
            "aria-label": "Notifications",
            onClick: g,
            children: [
              /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: /* @__PURE__ */ a(Re, {}) }),
              i && /* @__PURE__ */ a(Ve, { className: "main-page-navigation-bar__notification-badge" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}, xn = 74, qe = (e, t, n) => /* @__PURE__ */ a(
  "button",
  {
    className: "navigation-bar__button hoverOpacity",
    type: "button",
    "aria-label": t,
    onClick: n,
    children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: e })
  }
), $t = (e) => e.kind === "step", _e = (e, t, n, r = "") => /* @__PURE__ */ a(
  "button",
  {
    className: `navigation-bar-adaptive__icon-button hoverOpacity ${r}`,
    type: "button",
    "aria-label": t,
    onClick: n,
    children: /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--m", "aria-hidden": "true", children: e })
  }
), Dt = (e) => {
  const { titleVariant: t = "title", title: n, description: r, logo: i, progress: s } = e;
  if (t === "none")
    return /* @__PURE__ */ a("div", { className: "navigation-bar-adaptive__title navigation-bar-adaptive__title--empty", "aria-hidden": "true" });
  if (t === "image")
    return /* @__PURE__ */ a("div", { className: "navigation-bar-adaptive__title navigation-bar-adaptive__title--image", children: i });
  if (t === "step-progress" || t === "percent-progress") {
    const l = (s == null ? void 0 : s.value) ?? 0;
    return /* @__PURE__ */ a("div", { className: "navigation-bar-adaptive__title navigation-bar-adaptive__title--progress", children: /* @__PURE__ */ a(
      Tt,
      {
        variant: t === "step-progress" ? "steps" : "percent",
        value: l,
        maxSteps: s == null ? void 0 : s.maxSteps,
        ariaLabel: s == null ? void 0 : s.ariaLabel
      }
    ) });
  }
  return /* @__PURE__ */ d("div", { className: `navigation-bar-adaptive__title ${t === "title-description" ? "navigation-bar-adaptive__title--description" : ""}`, children: [
    n && /* @__PURE__ */ a("div", { className: "navigation-bar-adaptive__title-text ts-500-m", children: n }),
    t === "title-description" && r && /* @__PURE__ */ a("div", { className: "navigation-bar-adaptive__description ts-500-xs", children: r })
  ] });
}, jt = (e) => {
  const {
    rightAccessoryVariant: t = "icon",
    rightIcon: n = /* @__PURE__ */ a(aa, {}),
    secondaryRightIcon: r,
    rightAriaLabel: i = "Action",
    secondaryRightAriaLabel: s = "Secondary action",
    onRightClick: l,
    onSecondaryRightClick: o,
    actionLabel: c = "Text M",
    badgeValue: u = 0
  } = e;
  return t === "none" ? /* @__PURE__ */ a("div", { className: "navigation-bar-adaptive__right navigation-bar-adaptive__right--empty", "aria-hidden": "true" }) : t === "action" ? /* @__PURE__ */ a(
    "button",
    {
      className: "navigation-bar-adaptive__action ts-500-m hoverOpacity",
      type: "button",
      onClick: l,
      children: c
    }
  ) : t === "icon-icon" ? /* @__PURE__ */ d("div", { className: "navigation-bar-adaptive__right", children: [
    _e(n, i, l),
    _e(r ?? n, s, o)
  ] }) : t === "icon-badge" ? /* @__PURE__ */ d("div", { className: "navigation-bar-adaptive__right navigation-bar-adaptive__right--badge", children: [
    /* @__PURE__ */ a(ce, { value: u, size: "s" }),
    _e(n, i, l)
  ] }) : /* @__PURE__ */ a("div", { className: "navigation-bar-adaptive__right", children: _e(n, i, l) });
}, Mt = (e) => {
  const {
    title: t,
    description: n,
    rootLinkLabel: r,
    items: i = [],
    className: s = "",
    hasBackButton: l = !0,
    hasActionButton: o = !0,
    hasRootLink: c = !0,
    hasDescription: u = !0,
    backButtonLabel: m = "Go back",
    actionButtonLabel: f = "Clear",
    backButtonIcon: h = /* @__PURE__ */ a(xe, {}),
    actionButtonIcon: v = /* @__PURE__ */ a(aa, {}),
    onBackClick: _,
    onActionClick: g,
    onRootLinkClick: y,
    isInverted: p,
    isSticky: N
  } = e, b = i.length > 0, T = !!n && u, j = !!r && c, D = b && i.every($t), V = [
    "navigation-bar",
    N ? "navigation-bar--sticky" : "",
    s
  ].filter(Boolean).join(" "), k = [
    "navigation-bar-adaptive",
    p ? "navigation-bar-adaptive--inverted" : "",
    N ? "navigation-bar-adaptive--sticky" : "",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(Q, { children: [
    /* @__PURE__ */ d("section", { className: V, children: [
      (l || o) && /* @__PURE__ */ d("div", { className: "navigation-bar__buttons", children: [
        l && qe(h, m, _),
        o && qe(v, f, g)
      ] }),
      /* @__PURE__ */ d("div", { className: "navigation-bar__header", children: [
        j && /* @__PURE__ */ d(
          "button",
          {
            className: "navigation-bar__root-link hoverOpacity",
            type: "button",
            onClick: y,
            children: [
              /* @__PURE__ */ a("span", { className: "navigation-bar__root-link-label ts-500-s", children: r }),
              /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--xs navigation-bar__root-link-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(me, {}) })
            ]
          }
        ),
        /* @__PURE__ */ d("div", { className: "navigation-bar__title-block", children: [
          /* @__PURE__ */ a("h2", { className: "navigation-bar__title ts-600-2xl", children: t }),
          T && /* @__PURE__ */ a("p", { className: "navigation-bar__description ts-500-xs", children: n })
        ] })
      ] }),
      b && /* @__PURE__ */ a("div", { className: "navigation-bar__items", role: D ? "list" : void 0, children: i.map((C, F) => {
        const O = C.key ?? F;
        if (C.kind === "step") {
          const X = C.state === "current", S = C.state === "completed", Z = S && !!C.onClick, U = [
            "navigation-bar__step",
            X ? "navigation-bar__step--current" : "",
            S ? "navigation-bar__step--completed" : "",
            Z ? "hoverOpacity" : ""
          ].filter(Boolean).join(" "), B = /* @__PURE__ */ d(Q, { children: [
            /* @__PURE__ */ a("span", { className: "navigation-bar__step-indicator", "aria-hidden": "true" }),
            /* @__PURE__ */ a("span", { className: "navigation-bar__step-label ts-500-m", children: C.label })
          ] });
          return Z ? /* @__PURE__ */ a(
            "button",
            {
              className: U,
              type: "button",
              role: "listitem",
              onClick: C.onClick,
              children: B
            },
            O
          ) : /* @__PURE__ */ a(
            "div",
            {
              className: U,
              role: "listitem",
              children: B
            },
            O
          );
        }
        return C.href ? /* @__PURE__ */ a(
          "a",
          {
            className: "navigation-bar__link hoverOpacity",
            href: C.isDisabled ? void 0 : C.href,
            onClick: C.onClick,
            "aria-disabled": C.isDisabled || void 0,
            children: /* @__PURE__ */ a("span", { className: "navigation-bar__link-label ts-500-s", children: C.label })
          },
          O
        ) : /* @__PURE__ */ a(
          "button",
          {
            className: "navigation-bar__link hoverOpacity",
            type: "button",
            onClick: C.onClick,
            disabled: C.isDisabled,
            children: /* @__PURE__ */ a("span", { className: "navigation-bar__link-label ts-500-s", children: C.label })
          },
          O
        );
      }) })
    ] }),
    /* @__PURE__ */ d("section", { className: k, children: [
      /* @__PURE__ */ a("div", { className: "navigation-bar-adaptive__left", children: _e(
        e.leftIcon ?? /* @__PURE__ */ a(xe, {}),
        e.leftAriaLabel ?? "Go back",
        e.onLeftClick ?? e.onBackClick
      ) }),
      Dt(e),
      jt(e)
    ] })
  ] });
}, yn = ({
  title: e,
  description: t,
  leftAccessory: n,
  variant: r = "default",
  hasDescription: i = !0,
  className: s = "",
  onClick: l,
  isDisabled: o = !1
}) => {
  const c = [
    "page-action",
    `page-action--${r}`,
    !t || !i ? "page-action--single-line" : "",
    o ? "is-disabled" : "",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "button",
    {
      className: c,
      type: "button",
      onClick: l,
      disabled: o,
      children: [
        n && /* @__PURE__ */ a("div", { className: "page-action__left", "aria-hidden": "true", children: n }),
        /* @__PURE__ */ d("div", { className: "page-action__text", children: [
          /* @__PURE__ */ a("p", { className: "page-action__title ts-500-l", children: e }),
          t && i && /* @__PURE__ */ a("p", { className: "page-action__description ts-400-s", children: t })
        ] })
      ]
    }
  );
}, wn = ({
  size: e,
  navigationBar: t,
  rightPanel: n,
  children: r,
  topOffset: i = 0,
  className: s = ""
}) => {
  const l = e === "s" && !!n, o = [
    "page-layout",
    `page-layout--${e}`,
    l ? "page-layout--has-right-panel" : "",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "div",
    {
      className: o,
      style: i ? { "--page-layout-top-offset": `${i}px` } : void 0,
      children: [
        /* @__PURE__ */ a("div", { className: "page-layout__nav", children: t }),
        /* @__PURE__ */ a("div", { className: "page-layout__content-wrapper", children: /* @__PURE__ */ a("div", { className: "page-layout__content", children: r }) }),
        l && /* @__PURE__ */ a("div", { className: "page-layout__right-panel", children: n })
      ]
    }
  );
}, Lt = () => /* @__PURE__ */ a("span", { className: "promo-page-banner__default-image", "aria-hidden": "true" }), kn = ({
  title: e = "Text 5XL",
  adaptiveTitle: t = "Text 3XL",
  description: n = "Text XL",
  adaptiveDescription: r = "Text M",
  buttonLabel: i = "Text M",
  image: s,
  imageSrc: l,
  imageAlt: o = "",
  hasImage: c = !0,
  hasDescription: u = !0,
  hasButton: m = !0,
  onButtonClick: f,
  className: h = ""
}) => {
  const v = [
    "promo-page-banner",
    !c && "promo-page-banner--without-image",
    h
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("section", { className: v, children: [
    /* @__PURE__ */ a(
      Mt,
      {
        isInverted: !0,
        className: "promo-page-banner__navigation",
        titleVariant: "none",
        rightAccessoryVariant: "none"
      }
    ),
    /* @__PURE__ */ d("div", { className: "promo-page-banner__content", children: [
      c && /* @__PURE__ */ a("div", { className: "promo-page-banner__image", children: l ? /* @__PURE__ */ a("img", { className: "promo-page-banner__image-img", src: l, alt: o }) : s || /* @__PURE__ */ a(Lt, {}) }),
      /* @__PURE__ */ d("div", { className: "promo-page-banner__info", children: [
        /* @__PURE__ */ d("div", { className: "promo-page-banner__text", children: [
          /* @__PURE__ */ a("h2", { className: "promo-page-banner__title promo-page-banner__title--desktop ts-600-5xl", children: e }),
          /* @__PURE__ */ a("h2", { className: "promo-page-banner__title promo-page-banner__title--adaptive ts-600-3xl", children: t }),
          u && n && /* @__PURE__ */ a("p", { className: "promo-page-banner__description promo-page-banner__description--desktop ts-500-xl", children: n }),
          u && r && /* @__PURE__ */ a("p", { className: "promo-page-banner__description promo-page-banner__description--adaptive ts-500-m", children: r })
        ] }),
        m && /* @__PURE__ */ a("div", { className: "promo-page-banner__button-block", children: /* @__PURE__ */ a(
          de,
          {
            className: "promo-page-banner__button",
            variant: "white",
            onClick: f,
            children: i
          }
        ) })
      ] })
    ] })
  ] });
}, Et = () => /* @__PURE__ */ a(
  oe,
  {
    size: "m",
    shape: "circle",
    icon: /* @__PURE__ */ a(ie, {}),
    style: {
      "--avatar-size": "44px",
      "--avatar-content-size": "20px",
      "--avatar-surface": "var(--bg-brand)",
      "--avatar-color": "var(--primitive-default)"
    }
  }
), Rt = () => /* @__PURE__ */ a("span", { className: "promo-page-card__default-image", "aria-hidden": "true" }), Cn = ({
  title: e = "Text XL",
  description: t = "Text M",
  avatar: n,
  image: r,
  imageSrc: i,
  imageAlt: s = "",
  hasAvatar: l = !0,
  hasImage: o = !0,
  hasDescription: c = !0,
  isHorizontal: u = !1,
  className: m = ""
}) => {
  const f = [
    "promo-page-card",
    u && "promo-page-card--horizontal",
    !o && "promo-page-card--without-image",
    m
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("article", { className: f, children: [
    /* @__PURE__ */ d("div", { className: "promo-page-card__content", children: [
      l && /* @__PURE__ */ a("div", { className: "promo-page-card__avatar", children: n || /* @__PURE__ */ a(Et, {}) }),
      /* @__PURE__ */ d("div", { className: "promo-page-card__text", children: [
        /* @__PURE__ */ a("h3", { className: "promo-page-card__title ts-600-xl", children: e }),
        c && t && /* @__PURE__ */ a("p", { className: "promo-page-card__description ts-500-m", children: t })
      ] })
    ] }),
    o && !u && /* @__PURE__ */ a("div", { className: "promo-page-card__image", children: i ? /* @__PURE__ */ a("img", { className: "promo-page-card__image-img", src: i, alt: s }) : r || /* @__PURE__ */ a(Rt, {}) })
  ] });
}, Ot = () => /* @__PURE__ */ a("span", { className: "promo-page-horizontal-card__default-image", "aria-hidden": "true" }), Sn = ({
  title: e = "Text 2XL",
  description: t = "Text L",
  buttonLabel: n = "Text M",
  image: r,
  imageSrc: i,
  imageAlt: s = "",
  variant: l = "default",
  hasDescription: o = !0,
  hasButton: c = !0,
  onButtonClick: u,
  className: m = ""
}) => {
  const f = l === "accent", h = [
    "promo-page-horizontal-card",
    f && "promo-page-horizontal-card--accent",
    m
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("article", { className: h, children: [
    /* @__PURE__ */ d("div", { className: "promo-page-horizontal-card__content", children: [
      /* @__PURE__ */ d("div", { className: "promo-page-horizontal-card__text", children: [
        /* @__PURE__ */ a("h3", { className: "promo-page-horizontal-card__title ts-600-2xl", children: e }),
        o && t && /* @__PURE__ */ a("p", { className: "promo-page-horizontal-card__description ts-500-l", children: t })
      ] }),
      f && c && /* @__PURE__ */ a(
        de,
        {
          className: "promo-page-horizontal-card__button",
          variant: "primary",
          onClick: u,
          children: n
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "promo-page-horizontal-card__image", children: i ? /* @__PURE__ */ a("img", { className: "promo-page-horizontal-card__image-img", src: i, alt: s }) : r || /* @__PURE__ */ a(Ot, {}) })
  ] });
};
function At(e) {
  const { mode: t, width: n, minWidth: r, maxWidth: i } = e;
  if (t === "fixed") {
    const s = n ?? 0, l = r !== void 0 ? Math.max(s, r) : s, o = i !== void 0 ? Math.min(s, i) : s, c = Math.max(l, o);
    return c === 0 ? "auto" : `${c}px`;
  }
  return t === "content" ? r !== void 0 && i !== void 0 ? `minmax(${r}px, ${i}px)` : r !== void 0 ? `minmax(${r}px, auto)` : i !== void 0 ? `minmax(0, ${i}px)` : "auto" : r !== void 0 && i !== void 0 ? `minmax(${r}px, ${i}px)` : r !== void 0 ? `minmax(${r}px, 1fr)` : i !== void 0 ? `minmax(0, ${i}px)` : "1fr";
}
function Ht(e) {
  return typeof e == "number" ? `repeat(${e}, 1fr)` : e.map(At).join(" ");
}
const Bn = ({
  children: e,
  columns: t = 1,
  gridTemplateColumns: n,
  className: r = ""
}) => {
  const i = {
    gridTemplateColumns: n ?? Ht(t)
  };
  return /* @__PURE__ */ a(
    "div",
    {
      className: ["table", r].filter(Boolean).join(" "),
      style: i,
      children: e
    }
  );
}, Ye = {
  number: { decimalScale: 0 },
  currency: { suffix: " ₽", decimalScale: 2 },
  percent: { suffix: " %", decimalScale: 2 }
}, In = ({
  hasTitle: e = !0,
  title: t,
  hasDescription: n = !1,
  description: r,
  hasTag: i = !1,
  tag: s,
  hasLeftAccessory: l = !1,
  leftAccessory: o,
  hasRightAccessory: c = !1,
  rightAccessory: u,
  titleStyle: m = "400",
  isEdit: f = !1,
  placeholder: h,
  onTitleChange: v,
  editFormat: _,
  editSuffix: g,
  editDecimalScale: y,
  onEditValueChange: p,
  isDisabled: N = !1,
  isError: b = !1,
  backgroundColor: T,
  style: j,
  className: D = "",
  onClick: V
}) => {
  const k = W(null), C = f && e, O = [
    "table-cell",
    N ? "table-cell--disabled" : "",
    b ? "table-cell--error" : "",
    !!V || C ? "table-cell--interactive" : "",
    C ? "table-cell--edit" : "",
    D
  ].filter(Boolean).join(" "), U = e && (f || t !== void 0) || n && r !== void 0 || i && s !== void 0, B = b, I = !b && c && u, L = (A) => {
    var z;
    N || (C && A.target !== k.current && ((z = k.current) == null || z.focus()), V == null || V());
  };
  return /* @__PURE__ */ d(
    "div",
    {
      className: O,
      style: T ? { "--table-cell-bg": T, ...j } : j,
      onClick: L,
      role: V && !C ? "button" : void 0,
      tabIndex: V && !C && !N ? 0 : void 0,
      children: [
        l && o && /* @__PURE__ */ a("div", { className: "table-cell__left", children: o }),
        U && /* @__PURE__ */ d("div", { className: "table-cell__content", children: [
          e && (C ? _ ? /* @__PURE__ */ a(
            fa,
            {
              inputRef: k,
              className: `table-cell__title-input ts-${m}-m`,
              value: t !== void 0 ? Number(t) : null,
              onValueChange: p,
              suffix: g ?? Ye[_].suffix,
              decimalScale: y ?? Ye[_].decimalScale,
              placeholder: h,
              disabled: N
            }
          ) : /* @__PURE__ */ a(
            "input",
            {
              ref: k,
              className: `table-cell__title-input ts-${m}-m`,
              value: t ?? "",
              placeholder: h,
              disabled: N,
              onChange: (A) => v == null ? void 0 : v(A.target.value)
            }
          ) : t !== void 0 && /* @__PURE__ */ a("p", { className: `table-cell__title ts-${m}-m`, children: t })),
          n && r !== void 0 && /* @__PURE__ */ a("p", { className: "table-cell__description ts-400-s", children: r }),
          i && s !== void 0 && /* @__PURE__ */ a("div", { className: "table-cell__tag", children: s })
        ] }),
        (I || B) && /* @__PURE__ */ a("div", { className: "table-cell__right", children: B ? /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--s", children: /* @__PURE__ */ a(Ia, {}) }) : u })
      ]
    }
  );
}, Tn = ({
  tabs: e,
  size: t = "xl",
  hasAction: n = !1,
  actionLabel: r,
  actionIcon: i,
  onActionClick: s,
  defaultSelectedIndex: l = 0,
  selectedIndex: o,
  onTabChange: c,
  className: u = ""
}) => {
  var D;
  const m = o !== void 0, [f, h] = K(l), [v, _] = K(
    m ? o : l
  ), [g, y] = K("idle"), p = W(null), N = W(null), b = m ? o : f;
  H(() => () => {
    N.current && clearTimeout(N.current);
  }, []);
  const T = (V) => {
    V === b || g !== "idle" || (p.current = V, m || h(V), c == null || c(V), y("out"), N.current = setTimeout(() => {
      _(p.current), y("in"), N.current = setTimeout(() => {
        y("idle");
      }, 500);
    }, 200));
  }, j = [
    "tabs-carousel__content",
    g === "out" ? "animate-tab-content-out" : "",
    g === "in" ? "animate-tab-content-in" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: `tabs-carousel ${u}`.trim(), children: [
    /* @__PURE__ */ d("div", { className: "tabs-carousel__bar", children: [
      /* @__PURE__ */ a("div", { className: "tabs-carousel__tabs", children: e.map((V, k) => {
        const C = k === b;
        return /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: [
              "tabs-carousel__tab",
              `tabs-carousel__tab--${t}`,
              C ? "is-active" : ""
            ].filter(Boolean).join(" "),
            onClick: () => T(k),
            "aria-selected": C,
            children: [
              /* @__PURE__ */ a("span", { className: `tabs-carousel__tab-label ts-600-${t}`, children: V.label }),
              V.badge !== void 0 && /* @__PURE__ */ a("span", { className: `tabs-carousel__tab-badge tabs-carousel__tab-badge--${t}`, children: /* @__PURE__ */ a(
                ce,
                {
                  value: V.badge,
                  size: "s",
                  color: "var(--primitive-brand)",
                  textColor: "var(--primitive-default)"
                }
              ) })
            ]
          },
          k
        );
      }) }),
      n && /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: "tabs-carousel__action",
          onClick: s,
          children: [
            r && /* @__PURE__ */ a("span", { className: "tabs-carousel__action-label ts-500-m", children: r }),
            i && /* @__PURE__ */ a("span", { className: "tabs-carousel__action-icon ds-icon ds-icon--m", "aria-hidden": "true", children: i })
          ]
        }
      )
    ] }),
    ((D = e[v]) == null ? void 0 : D.content) !== void 0 && /* @__PURE__ */ a("div", { className: j, children: e[v].content })
  ] });
}, Vn = ({
  children: e,
  shape: t = "square",
  variant: n = "filled",
  size: r = "s",
  className: i = ""
}) => {
  const s = (o) => ({
    xl: "m",
    l: "s",
    m: "xs",
    s: "xxs"
  })[o] || "xxs", l = [
    "tag",
    `tag--${t}`,
    n === "outlined" && "tag--outlined",
    `tag--${r}`,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: l, children: /* @__PURE__ */ a("span", { className: `tag__label ts-500-${s(r)}`, children: e }) });
}, $n = ({
  label: e,
  description: t,
  errorMessage: n,
  placeholder: r,
  value: i = "",
  onChange: s,
  isDisabled: l = !1,
  isError: o = !1,
  maxLength: c,
  hasHelpIcon: u = !1,
  helpText: m
}) => {
  const f = W(null), h = o ? n ?? t : t, v = () => {
    const g = f.current;
    g && (g.style.height = "auto", g.style.height = `${g.scrollHeight}px`);
  };
  H(() => {
    v();
  }, [i]);
  const _ = [
    "text-area",
    l ? "text-area--disabled" : "",
    o ? "text-area--error" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("label", { className: _, children: [
    /* @__PURE__ */ a("div", { className: "text-area__content", children: /* @__PURE__ */ d("div", { className: "text-area__main", children: [
      /* @__PURE__ */ d("div", { className: "text-area__header", children: [
        /* @__PURE__ */ d("div", { className: "text-area__header-main", children: [
          e && /* @__PURE__ */ a("p", { className: "text-area__title ts-500-s", children: e }),
          e && u && (m ? /* @__PURE__ */ a(Me, { trigger: /* @__PURE__ */ a("span", { className: "text-area__help ds-icon", "aria-hidden": "true", children: /* @__PURE__ */ a(he, {}) }), children: m }) : /* @__PURE__ */ a("span", { className: "text-area__help ds-icon hoverOpacity", "aria-hidden": "true", children: /* @__PURE__ */ a(he, {}) }))
        ] }),
        c && /* @__PURE__ */ d("p", { className: "text-area__counter ts-400-xs", children: [
          i.length,
          "/",
          c
        ] })
      ] }),
      /* @__PURE__ */ a(
        "textarea",
        {
          ref: f,
          className: "text-area__field ts-400-m",
          placeholder: r,
          value: i,
          onChange: (g) => s == null ? void 0 : s(g.target.value),
          disabled: l,
          maxLength: c
        }
      )
    ] }) }),
    h && /* @__PURE__ */ d("div", { className: "text-area__meta", children: [
      /* @__PURE__ */ a("div", { className: "text-area__divider" }),
      /* @__PURE__ */ a("p", { className: "text-area__description ts-400-s", children: h })
    ] })
  ] });
}, be = (e, t = "ds-icon--m") => /* @__PURE__ */ a("span", { className: `ds-icon ${t} widget-title-accessory__icon`, "aria-hidden": "true", children: e }), Ft = ({
  variant: e = "icon",
  className: t = "",
  content: n,
  text: r = e === "description" ? "Text S" : "Text M",
  icon: i = /* @__PURE__ */ a(ie, {}),
  secondaryIcon: s = /* @__PURE__ */ a(Sa, {}),
  onClick: l
}) => {
  const o = ["widget-title-accessory", `widget-title-accessory--${e}`, t].filter(Boolean).join(" ");
  if (n)
    return /* @__PURE__ */ a("div", { className: o, children: n });
  if (e === "custom")
    return null;
  const c = e === "icon" || e === "link" || e === "link-icon" || e === "icon-icon" || e === "editing-mode", u = c ? "button" : "div";
  return /* @__PURE__ */ d(
    u,
    {
      className: `${o} ${c ? "hoverOpacity" : ""}`.trim(),
      type: u === "button" ? "button" : void 0,
      onClick: c ? l : void 0,
      children: [
        (e === "link" || e === "link-icon" || e === "description") && /* @__PURE__ */ a(
          "span",
          {
            className: e === "description" ? "widget-title-accessory__description ts-400-s" : "widget-title-accessory__link ts-500-m",
            children: r
          }
        ),
        (e === "icon" || e === "link-icon" || e === "icon-icon") && be(i),
        e === "icon-icon" && be(s),
        e === "editing-mode" && /* @__PURE__ */ d(Q, { children: [
          be(/* @__PURE__ */ a(Ta, {}), "ds-icon--18"),
          be(s)
        ] }),
        e === "none" && /* @__PURE__ */ a(ce, { value: 0, color: "transparent", textColor: "transparent", className: "widget-title-accessory__none" })
      ]
    }
  );
}, Pt = ({
  title: e,
  description: t,
  className: n = "",
  hasDescription: r = !0,
  hasChevron: i = !0,
  hasRightAccessory: s = !0,
  chevron: l = /* @__PURE__ */ a(me, {}),
  rightAccessory: o,
  rightAccessoryVariant: c = "icon",
  rightAccessoryText: u,
  rightAccessoryIcon: m,
  rightAccessorySecondaryIcon: f,
  onRightAccessoryClick: h
}) => {
  const v = !!t && r;
  return /* @__PURE__ */ d("div", { className: `widget-title ${n}`, children: [
    /* @__PURE__ */ d("div", { className: "widget-title__header", children: [
      /* @__PURE__ */ d("div", { className: "widget-title__main hoverOpacity", children: [
        /* @__PURE__ */ a("h3", { className: "widget-title__title ts-600-xl", children: e }),
        i && /* @__PURE__ */ a("span", { className: "ds-icon ds-icon--18 widget-title__chevron", "aria-hidden": "true", children: l })
      ] }),
      s && (o ?? /* @__PURE__ */ a(
        Ft,
        {
          variant: c,
          text: u,
          icon: m,
          secondaryIcon: f,
          onClick: h
        }
      ))
    ] }),
    v && /* @__PURE__ */ a("p", { className: "widget-title__description ts-400-s", children: t })
  ] });
}, Dn = ({
  children: e,
  className: t = "",
  contentClassName: n = "",
  minContentHeight: r = 146,
  ...i
}) => {
  const s = typeof r == "number" ? { minHeight: `${r}px` } : { minHeight: r };
  return /* @__PURE__ */ d("section", { className: `widget ${t}`, children: [
    /* @__PURE__ */ a(Pt, { ...i }),
    /* @__PURE__ */ a("div", { className: `widget__content ${n}`, style: s, children: e })
  ] });
};
export {
  nn as AccordeonCell,
  tn as ActionFormCell,
  Yt as ActionSheet,
  Qt as ActionSheetButton,
  Jt as ActionSheetFooter,
  en as ActionSheetHeader,
  an as Alert,
  oe as Avatar,
  ce as Badge,
  na as BottomSheet,
  ra as BottomSheetHeader,
  Ma as BottomSheetSearch,
  de as Button,
  rn as Cell,
  sn as CellLeftAccessory,
  Aa as CellRightAccessory,
  Ea as Checkbox,
  ln as Chip,
  on as ContextMenu,
  cn as ContextualNotification,
  dn as Drawer,
  un as DrawerFooter,
  mn as DrawerHeader,
  Ga as DrawerHeaderTitle,
  hn as Dropdown,
  fn as FeedbackBanner,
  _n as FlowResultView,
  vn as Footer,
  Ya as FooterIconButton,
  pn as FormCell,
  gn as HeaderButton,
  Xa as IconButton,
  Nn as Input,
  Tt as LinearProgress,
  rt as LinkCell,
  bn as MainPageNavigationBar,
  at as Modal,
  nt as ModalFooter,
  tt as ModalHeader,
  Mt as NavigationBar,
  yn as PageAction,
  wn as PageLayout,
  kn as PromoPageBanner,
  Cn as PromoPageCard,
  Sn as PromoPageHorizontalCard,
  Ra as Radio,
  Te as SCINavigationButton,
  ja as Search,
  J as Spinner,
  Oa as Switch,
  Bn as Table,
  In as TableCell,
  Tn as TabsCarousel,
  Vn as Tag,
  $n as TextArea,
  Me as Tooltip,
  Dn as Widget,
  Pt as WidgetTitle,
  Ft as WidgetTitleAccessory,
  xn as mainNavHeight
};
