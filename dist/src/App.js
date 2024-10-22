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
import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import Profile from './Profile';
function App() {
    return (_jsx("div", __assign({ className: "App" }, { children: _jsx(Profile, { name: "\u7530\u4E2D \u592A\u90CE", hobby: "\u8AAD\u66F8\u3068\u6563\u6B69", bio: "\u79C1\u306F\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u958B\u767A\u8005\u3067\u3001React\u3068TypeScript\u304C\u5927\u597D\u304D\u3067\u3059\uFF01" }) })));
}
export default App;
