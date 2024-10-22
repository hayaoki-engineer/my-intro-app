var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Profile = function (_a) {
    var name = _a.name, hobby = _a.hobby, bio = _a.bio;
    return (_jsxs("div", __assign({ style: { padding: "20px", fontFamily: "Arial" } }, { children: [_jsx("h1", { children: "\u81EA\u5DF1\u7D39\u4ECB" }), _jsxs("p", { children: [_jsx("strong", { children: "\u540D\u524D:" }), " ", name] }), _jsxs("p", { children: [_jsx("strong", { children: "\u8DA3\u5473:" }), " ", hobby] }), _jsxs("p", { children: [_jsx("strong", { children: "\u81EA\u5DF1\u7D39\u4ECB:" }), " ", bio] })] })));
};
export default Profile;
