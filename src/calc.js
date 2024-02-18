import { Stack } from "./Stack.js";
function max(a, b) {
    if (a < b) return b;
    else return a;
}
function trans(s) {
    let stack_opt = Stack();
    let map = new Map();
    let opt = { "+": null, "-": null, "*": null, "/": null, "(": null, ")": null, "^": null };
    map.set("+", 1);
    map.set("-", 1);
    map.set("*", 2);
    map.set("/", 2);
    map.set("^", 3);
    let res = "";
    let tmp = 0;
    for (let i = 0; i < s.length; i++) {
        if ("0" <= s[i] && s[i] <= "9") {
            res += s[i];
        }
        else if (s[i] in opt) {
            if ("0" <= s[max(0, i - 1)] && s[max(0, i - 1)] <= "9") res += "#";
            if (s[i] == ")") {
                while (!stack_opt.empty() && stack_opt.top() != '(') {
                    res += stack_opt.top();
                    stack_opt.pop();
                }
                if (!stack_opt.empty() && stack_opt.top() == '(') stack_opt.pop();
            }
            else if (s[i] == "(") stack_opt.push(s[i]);
            else {
                while (!stack_opt.empty() && map.get(stack_opt.top()) > map.get(s[i])) {
                    res += stack_opt.top();
                    stack_opt.pop();
                }
                stack_opt.push(s[i]);
            }
        }
        else return null;
    }
    if ("0" <= res[res.length - 1] && res[res.length - 1] <= "9") res += "#";
    while (!stack_opt.empty()) {
        if (stack_opt.top() != '(') res += stack_opt.top();
        stack_opt.pop();
    }
    return res;
}
function qpow(a, b) {
    let res = 1;
    let tmp = a;
    while (b) {
        if (b & 1) res *= tmp;
        tmp = tmp * tmp;
        b /= 2;
    }
    return res;
}
export function calc(m) {
    let s = trans(m);
    if (s == null) {
        alert("illegal format");
        return null;
    }
    let tmp = 0;
    let stack_num = Stack();
    let stack_opt = Stack();
    let opt = { "#": null, "+": null, "-": null, "*": null, "/": null, "(": null, ")": null, "^": null };
    for (let i = 0; i < s.length; i++) {
        if ("0" <= s[i] && s[i] <= "9") {
            tmp = tmp * 10 + Number(s[i]);
        }
        else if (s[i] in opt) {
            if (s[i] != "#") stack_opt.push(s[i]);
            else stack_num.push(tmp), console.log(tmp), tmp = 0;
        }
        while (stack_num.size() >= 2 && stack_opt.size() >= 1) {
            let rval = stack_num.top();
            stack_num.pop();
            let lval = stack_num.top();
            stack_num.pop();
            let opt = stack_opt.top();
            stack_opt.pop();
            if (opt === '+') { stack_num.push(lval + rval); }
            if (opt === '-') { stack_num.push(lval - rval); }
            if (opt === '*') { stack_num.push(lval * rval); }
            if (opt === '/') { stack_num.push(lval / rval); }
            if (opt === '^') { stack_num.push(qpow(lval, rval)); }
        }
    }
    if (!stack_opt.empty() || stack_num.size() != 1) {
        alert("illegal format");
        return null;
    }
    else return stack_num.top();
}
