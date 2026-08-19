/* @ds-bundle: {"format":4,"namespace":"PureDentalSchweizDesignSystem_cb0666","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"PriceTag","sourcePath":"components/core/PriceTag.jsx"},{"name":"RatingStars","sourcePath":"components/feedback/RatingStars.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"ListRow","sourcePath":"components/navigation/ListRow.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"54f47886c5f3","components/core/Button.jsx":"a2d4f81f0cc5","components/core/Card.jsx":"9cb6fba991d6","components/core/Icon.jsx":"3aac12cea6dd","components/core/IconTile.jsx":"40fd08ea23f8","components/core/PriceTag.jsx":"4c8c1ec1309e","components/feedback/RatingStars.jsx":"65b2fe2f9490","components/feedback/Toast.jsx":"5d15457d11d1","components/feedback/Tooltip.jsx":"c1916fc08ff7","components/forms/Checkbox.jsx":"544da0f39325","components/forms/Input.jsx":"3d5487120cbb","components/forms/Radio.jsx":"2a13477f0c78","components/forms/Select.jsx":"449b570e3320","components/forms/Switch.jsx":"8cd3e88a3343","components/navigation/BottomNav.jsx":"dbfd9208a8d2","components/navigation/ListRow.jsx":"518c509590fd","components/navigation/Tabs.jsx":"d81157d07945","components/navigation/TopNav.jsx":"467c97cc7677","components/overlay/Dialog.jsx":"25d6a5f9f751","ui_kits/mobile-app/App.jsx":"ba6aa3e91e7c","ui_kits/website/Home.jsx":"134682928405"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PureDentalSchweizDesignSystem_cb0666 = window.PureDentalSchweizDesignSystem_cb0666 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "default",
  children,
  style,
  ...rest
}) {
  const cls = ["pd-badge", tone === "dark" ? "pd-badge--dark" : "", tone === "success" ? "pd-badge--success" : ""].join(" ").trim();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "lg",
  icon,
  iconOnly = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const cls = ["pd-btn", `pd-btn--${variant}`, `pd-btn--${size}`, iconOnly ? "pd-btn--icon" : ""].join(" ").trim();
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    style: style
  }, rest), children, icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  elevated = false,
  flat = false,
  children,
  style,
  ...rest
}) {
  const cls = ["pd-card", elevated ? "pd-card--elevated" : "", flat ? "pd-card--flat" : ""].join(" ").trim();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = {
  shield: "M12 3l7 3v6c0 4.5-3 8.2-7 9-4-.8-7-4.5-7-9V6l7-3z",
  "shield-check": "M12 3l7 3v6c0 4.5-3 8.2-7 9-4-.8-7-4.5-7-9V6l7-3z|M9 12l2 2 4-4",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8z|M4 21c1.5-4 5-6 8-6s6.5 2 8 6",
  gem: "M6 3h12l3 5-9 13L3 8l3-5z|M3 8h18|M9 3l3 5 3-5|M12 8l-3 13|M12 8l3 13",
  sparkles: "M12 2l1.6 4.8L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.2L12 2z|M19 15l.8 2.2L22 18l-2.2.9L19 21l-.9-2.1L16 18l2.1-.8L19 15z",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18z|M12 7v5l4 2",
  heart: "M12 21s-7-4.4-9.5-9C.7 8.4 3 5 6.3 5 8.4 5 10 6 12 8c2-2 3.6-3 5.7-3 3.3 0 5.6 3.4 3.8 7-2.5 4.6-9.5 9-9.5 9z",
  "chevron-right": "M9 6l6 6-6 6",
  check: "M20 6L9 17l-5-5",
  x: "M18 6L6 18|M6 6l12 12",
  star: "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.8-4.6 6.6-.9L12 2.5z",
  "arrow-right": "M5 12h14|M13 6l6 6-6 6",
  menu: "M3 6h18|M3 12h18|M3 18h18",
  bell: "M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9|M13.7 21a2 2 0 01-3.4 0",
  home: "M3 11l9-8 9 8|M5 10v10h5v-6h4v6h5V10",
  "calendar-check": "M8 2v4|M16 2v4|M3 8h18|M4 6h16v14H4V6z|M9 14l2 2 4-4",
  "map-pin": "M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z|M12 13a3 3 0 100-6 3 3 0 000 6z",
  settings: "M12 15a3 3 0 100-6 3 3 0 000 6z|M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.6V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.6 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.6 1z",
  video: "M23 7l-7 5 7 5V7z|M14 5H3a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2z"
};
function Icon({
  name = "check",
  size = 24,
  stroke = 2,
  color = "currentColor",
  style,
  ...rest
}) {
  const d = PATHS[name] || PATHS.check;
  const paths = d.split("|");
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, rest), paths.map((p, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: p
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconTile({
  children,
  size = "md",
  dark = false,
  style,
  ...rest
}) {
  const cls = ["pd-icon-tile", size === "sm" ? "pd-icon-tile--sm" : "", dark ? "pd-icon-tile--dark" : ""].join(" ").trim();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceTag.jsx
try { (() => {
function PriceTag({
  label = "Price from",
  value,
  unit,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-price",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-price__label"
  }, label), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pd-price__value"
  }, value)), unit && /*#__PURE__*/React.createElement("span", {
    className: "pd-price__unit"
  }, unit));
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/RatingStars.jsx
try { (() => {
function RatingStars({
  value = 5,
  count,
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "pd-rating"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-rating__stars"
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: 16,
    color: i < value ? "var(--color-warning)" : "var(--color-neutral-200)",
    stroke: 0,
    style: {
      fill: i < value ? "var(--color-warning)" : "var(--color-neutral-200)"
    }
  }))), label || (count ? `${value}/5 from ${count}+ patients` : `${value}/5`));
}
Object.assign(__ds_scope, { RatingStars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/RatingStars.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = "default",
  icon,
  children
}) {
  const cls = ["pd-toast", tone !== "default" ? `pd-toast--${tone}` : ""].join(" ").trim();
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, icon || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 18
  }), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "pd-tooltip"
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "pd-tooltip__bubble"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "pd-check"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pd-check-box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    stroke: 3,
    color: "#fff"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  placeholder,
  type = "text",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-input-wrap"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "pd-input-label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    className: "pd-input" + (error ? " pd-input--error" : ""),
    type: type,
    placeholder: placeholder
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "pd-input-hint" + (error ? " pd-input-hint--error" : "")
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  name,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "pd-check"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pd-radio-box"
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-input-wrap"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "pd-input-label"
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    className: "pd-input pd-select"
  }, rest), children));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  onChange,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "pd-switch"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "pd-switch-track",
    onClick: () => onChange && onChange({
      target: {
        checked: !checked
      }
    })
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items = [],
  active
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "pd-bottomnav"
  }, items.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.label,
    className: "pd-bottomnav__item",
    "aria-current": item.label === active
  }, item.icon, item.label)));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListRow.jsx
try { (() => {
function ListRow({
  icon,
  title,
  subtitle,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "pd-listrow",
    onClick: onClick,
    type: "button"
  }, icon, /*#__PURE__*/React.createElement("span", {
    className: "pd-listrow__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pd-listrow__title",
    style: {
      display: "block"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "pd-listrow__sub",
    style: {
      display: "block"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("span", {
    className: "pd-listrow__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18
  })));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-tabs",
    role: "tablist"
  }, items.map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    className: "pd-tab",
    role: "tab",
    "aria-selected": item === active,
    onClick: () => onChange && onChange(item)
  }, item)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  logo,
  links = [],
  cta
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "pd-topnav"
  }, logo, /*#__PURE__*/React.createElement("nav", {
    className: "pd-topnav__links" + (open ? " pd-topnav__links--open" : "")
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, cta, /*#__PURE__*/React.createElement("button", {
    className: "pd-topnav__toggle",
    "aria-label": "Toggle navigation",
    "aria-expanded": open,
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? "x" : "menu",
    size: 18
  }))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  title,
  children,
  onClose,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pd-dialog-backdrop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-dialog",
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      gap: 12,
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/App.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  IconTile,
  Icon,
  PriceTag,
  BottomNav,
  ListRow,
  RatingStars
} = window.PureDentalSchweizDesignSystem_cb0666;
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 375,
      height: 780,
      borderRadius: 44,
      background: "#0b0f1a",
      padding: 12,
      boxShadow: "var(--shadow-large)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: 34,
      background: "#fff",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px",
      fontSize: 13,
      fontWeight: 700,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, "\u2022\u2022\u2022\u2022  \uD83D\uDCF6  \uD83D\uDD0B")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, children)));
}
function SplashScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: "var(--gradient-hero)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "48px 28px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-tooth.png",
    style: {
      height: 90,
      margin: "0 auto 20px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      letterSpacing: ".14em",
      fontSize: 20
    }
  }, "PUREDENTAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      letterSpacing: ".2em",
      fontSize: 12,
      opacity: .8
    }
  }, "SCHWEIZ \uD83C\uDDE8\uD83C\uDDED")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "#fff",
      fontSize: 34,
      marginBottom: 12
    }
  }, "Swiss quality dental implant specialists in ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent-cyan)"
    }
  }, "Hungary")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.8)",
      fontSize: 14,
      marginBottom: 28
    }
  }, "Precision. Aesthetics. Confidence."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      width: "100%"
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Welcome"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 6,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#fff"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "rgba(255,255,255,.4)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "rgba(255,255,255,.4)"
    }
  }))));
}
function HomeScreen({
  onOpen
}) {
  const rows = [["shield-check", "Swiss Quality Standards", "Precision and reliability"], ["user", "Experienced Specialists", "Implant experts with years of experience"], ["gem", "Premium Materials", "Long-lasting. Biocompatible. Safe."], ["sparkles", "Price Advantage in Hungary", "Up to 60% savings vs. Switzerland"]];
  const tabs = [["gem", "Implants"], ["sparkles", "All-on-4®"], ["user", "Treatments"], ["map-pin", "Why Hungary"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 20px 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: ".08em"
    }
  }, "PUREDENTAL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: ".2em",
      color: "var(--color-text-muted)"
    }
  }, "SCHWEIZ")), /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      background: "var(--gradient-primary)",
      color: "#fff",
      padding: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 19,
      lineHeight: 1.25,
      marginBottom: 12
    }
  }, "Your smile.", /*#__PURE__*/React.createElement("br", null), "Our passion.", /*#__PURE__*/React.createElement("br", null), "Swiss quality."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    style: {
      background: "#fff",
      color: "var(--color-primary-700)",
      boxShadow: "none"
    }
  }, "Book a Free Consultation")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/hero-implant-3d.png",
    style: {
      width: 70,
      height: 110,
      objectFit: "cover",
      borderRadius: 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 10,
      marginBottom: 24
    }
  }, tabs.map(([icon, label]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => onOpen(label),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      background: "transparent",
      border: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: "var(--color-text-secondary)",
      textAlign: "center"
    }
  }, label)))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      marginBottom: 4
    }
  }, "Why choose Puredental Schweiz?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, rows.map(r => /*#__PURE__*/React.createElement(ListRow, {
    key: r[1],
    icon: /*#__PURE__*/React.createElement(IconTile, {
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: r[0],
      size: 18
    })),
    title: r[1],
    subtitle: r[2],
    onClick: () => onOpen(r[1])
  })))));
}
function TreatmentDetail({
  title,
  tagline,
  accent,
  price,
  unit,
  features,
  image,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--gradient-hero)",
      padding: "16px 20px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "rgba(255,255,255,.7)",
      border: 0,
      borderRadius: "50%",
      width: 34,
      height: 34,
      display: "grid",
      placeItems: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    style: {
      transform: "rotate(180deg)"
    }
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 14
    }
  }, title), /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      marginBottom: 4
    }
  }, title, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, tagline)), /*#__PURE__*/React.createElement("img", {
    src: image,
    style: {
      position: "absolute",
      right: 16,
      top: 70,
      width: 130,
      height: 150,
      objectFit: "cover",
      borderRadius: 16
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 24px",
      marginTop: -40,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    elevated: true
  }, features.map(([icon, t, s], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      padding: "12px 0",
      borderTop: i ? "1px solid var(--color-border)" : "none"
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 13.5
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--color-text-secondary)"
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingTop: 16,
      borderTop: "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    value: price,
    unit: unit
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      width: "100%",
      marginTop: 20
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book a Free Consultation")));
}
function App() {
  const [screen, setScreen] = React.useState("splash");
  const screens = {
    splash: /*#__PURE__*/React.createElement(SplashScreen, null),
    home: /*#__PURE__*/React.createElement(HomeScreen, {
      onOpen: l => setScreen(l === "All-on-4®" ? "allon4" : l === "Implants" ? "single" : "home")
    }),
    allon4: /*#__PURE__*/React.createElement(TreatmentDetail, {
      title: "All-on-4\xAE",
      tagline: "New smile. New confidence.",
      accent: "var(--color-accent-cyan)",
      price: "CHF 7'900",
      unit: "per arch",
      image: "../../assets/imagery/treatment-all-on-4.png",
      onBack: () => setScreen("home"),
      features: [["clock", "Fixed in just 24-48 hours", "Walk in with problems. Walk out smiling."], ["gem", "Just 4 implants per arch", "Minimally invasive. Maximum stability."], ["sparkles", "Natural aesthetics", "Designed to look and feel like real teeth."], ["shield-check", "Up to 60% more affordable", "Premium quality at a fraction of Swiss prices."]]
    }),
    single: /*#__PURE__*/React.createElement(TreatmentDetail, {
      title: "Single Implant",
      tagline: "One tooth. One perfect solution.",
      accent: "var(--color-accent-cyan)",
      price: "CHF 1'250",
      unit: "",
      image: "../../assets/imagery/treatment-single-implant.png",
      onBack: () => setScreen("home"),
      features: [["sparkles", "Natural look & feel", "Indistinguishable from your real tooth."], ["shield", "Preserves bone", "Prevents bone loss and maintains facial shape."], ["shield-check", "Long-lasting solution", "Built to last a lifetime with proper care."], ["gem", "Swiss quality standards", "Precision. Safety. Excellence."]]
    })
  };
  const showChrome = screen !== "splash";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, screens[screen]), showChrome && /*#__PURE__*/React.createElement(BottomNav, {
    active: screen === "home" ? "Home" : "Treatments",
    items: [{
      label: "Home",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "home",
        size: 20
      })
    }, {
      label: "Treatments",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "sparkles",
        size: 20
      })
    }, {
      label: "Journey",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar-check",
        size: 20
      })
    }, {
      label: "Reviews",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "star",
        size: 20
      })
    }, {
      label: "Profile",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "user",
        size: 20
      })
    }]
  }), screen === "splash" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 100,
      left: 0,
      right: 0,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setScreen("home"),
    style: {
      background: "transparent",
      border: 0,
      color: "var(--color-primary-600)",
      fontSize: 12,
      cursor: "pointer"
    }
  }, "Skip \u2192")));
}
function MobileAppKit() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: 40,
      background: "var(--color-surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement(App, null)));
}
window.MobileAppKit = MobileAppKit;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  IconTile,
  Icon,
  PriceTag,
  TopNav,
  RatingStars,
  Tooltip
} = window.PureDentalSchweizDesignSystem_cb0666;
const NAV_LINKS = ["Treatments", "Why Hungary", "Our Clinic", "Prices", "Patient Journey", "About Us", "Contact"];
function Logo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-tooth.png",
    style: {
      height: 28,
      width: "auto"
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: ".01em",
      color: "#07143E"
    }
  }, "PUREDENTAL"));
}
function Hero() {
  const [video, setVideo] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--gradient-hero)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "72px 32px 64px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: "var(--color-primary-700)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: "currentColor"
    }
  }), " Swiss quality. Lasting smiles."), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      maxWidth: "13ch",
      color: "var(--color-neutral-950)",
      marginBottom: 24
    }
  }, "Swiss quality dental implant specialists ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary-600)"
    }
  }, "in Hungary.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.7,
      color: "var(--color-text-secondary)",
      maxWidth: 480,
      marginBottom: 32
    }
  }, "Premium dental implants, stunning aesthetics and personalized care \u2014 all at up to 60% less."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Book a Free Consultation"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setVideo(true),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "transparent",
      border: 0,
      cursor: "pointer",
      color: "var(--color-primary-700)",
      fontWeight: 700,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      border: "1.5px solid var(--color-primary-300)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "video",
    size: 14
  })), "Watch Video")), /*#__PURE__*/React.createElement(RatingStars, {
    value: 4.9,
    count: 250
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 420,
      borderRadius: 32,
      background: "linear-gradient(160deg, rgba(255,255,255,.5), rgba(30,77,255,.54))",
      boxShadow: "var(--shadow-large)",
      backdropFilter: "blur(18px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/hero-implant-3d.png",
    style: {
      height: "88%",
      width: "auto",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 20,
      bottom: 20,
      left: 20,
      display: "grid",
      gap: 10
    }
  }, [["shield-check", "Swiss Quality Standards", "Precision, safety and confidence."], ["gem", "Premium Materials", "Long-lasting and biocompatible."]].map(([icon, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      border: "1px solid rgba(255,255,255,.24)",
      borderRadius: 16,
      background: "rgba(7,20,62,.28)",
      padding: "12px 16px",
      backdropFilter: "blur(12px)"
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    dark: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 14,
      color: "#fff"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.75)"
    }
  }, s))))))), video && /*#__PURE__*/React.createElement("div", {
    onClick: () => setVideo(false),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(7,20,62,.7)",
      display: "grid",
      placeItems: "center",
      zIndex: 50,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 14
    }
  }, "(placeholder \u2014 patient story video) \xB7 click to close")));
}
function TrustBar() {
  const facts = [["clock", "Fixed in just 24–48 hours", "Walk in with problems. Walk out smiling."], ["gem", "Just 4 implants per arch", "Minimally invasive. Maximum stability."], ["sparkles", "Natural aesthetics", "Designed to look and feel like real teeth."], ["shield-check", "Long-lasting solution", "Built to last a lifetime with proper care."], ["heart", "All-inclusive care", "From A to Z. We take care of everything."]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "-40px auto 0",
      position: "relative",
      zIndex: 1,
      background: "#fff",
      borderRadius: 24,
      boxShadow: "var(--shadow-medium)",
      padding: "32px 40px",
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 24
    }
  }, facts.map(([icon, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 14,
      color: "var(--color-neutral-950)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--color-text-secondary)"
    }
  }, s))));
}
function Treatments() {
  const items = [["treatment-single-implant.png", "Single Implant", "Replace one missing tooth with a natural-looking implant.", null], ["treatment-multiple-implants.png", "Multiple Implants", "Restore multiple missing teeth with stable and durable implants.", null], ["treatment-all-on-4.png", "All-on-4®", "Full-arch restoration with just 4 implants. Fixed in 24-48 hours.", "All-on-4®"], ["treatment-aesthetics.png", "Dental Aesthetics", "Veneers, crowns and more for a flawless, confident smile.", null]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "112px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 40,
      alignItems: "end",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary-700)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase"
    }
  }, "Our Treatments"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12
    }
  }, "Solutions for every smile.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-text-secondary)",
      fontSize: 16,
      marginBottom: 16
    }
  }, "Whether you need a single implant or a full mouth restoration, we have the perfect solution for you."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "View all treatments"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 24
    }
  }, items.map(([img, title, desc, badge]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/imagery/${img}`,
    style: {
      width: "100%",
      height: 160,
      objectFit: "cover"
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--color-text-secondary)",
      marginBottom: 12
    }
  }, desc), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: "var(--color-primary-600)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, "Learn more ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  })))))));
}
function WhyHungary() {
  const rows = [["shield-check", "Swiss Quality Standards", "Precision and reliability"], ["user", "Experienced Specialists", "Implant experts with years of experience"], ["gem", "Premium Materials", "Long-lasting. Biocompatible. Safe."], ["sparkles", "Price Advantage in Hungary", "Up to 60% savings vs. Switzerland"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-surface-subtle)",
      padding: "112px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary-700)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase"
    }
  }, "Why Hungary"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 12,
      marginBottom: 20
    }
  }, "The consultation stays in Z\xFCrich. The treatment gets you 60% further."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-text-secondary)",
      fontSize: 16,
      maxWidth: 420
    }
  }, "We consult with you locally, then deliver the same premium materials and specialist care in our Budapest clinic \u2014 for a fraction of the Swiss price.")), /*#__PURE__*/React.createElement(Card, {
    elevated: true
  }, rows.map(([icon, t, s], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "16px 0",
      borderTop: i ? "1px solid var(--color-border)" : "none"
    }
  }, /*#__PURE__*/React.createElement(IconTile, null, /*#__PURE__*/React.createElement(Icon, {
    name: icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: 15
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--color-text-secondary)"
    }
  }, s)))))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--color-border)",
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: "var(--color-text-muted)"
    }
  }, "\xA9 2026 PureDental Schweiz. Consultations in Z\xFCrich, treatment in Budapest.")));
}
function Home() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopNav, {
    logo: /*#__PURE__*/React.createElement(Logo, null),
    links: NAV_LINKS,
    cta: /*#__PURE__*/React.createElement(Button, {
      size: "md"
    }, "Book a Free Consultation")
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(Treatments, null), /*#__PURE__*/React.createElement(WhyHungary, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.RatingStars = __ds_scope.RatingStars;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
