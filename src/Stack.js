export function Stack() {
    let stack = {
    }
    stack.t = 0;
    stack.store = [];
    stack.empty = function () {
        return this.t == 0;
    }
    stack.push = function (val) {
        this.t += 1;
        this.store[this.t] = val;
    }
    stack.top = function () {
        return this.store[this.t];
    }
    stack.pop = function () {
        this.t -= 1;
    }
    stack.size = function () {
        return this.t;
    }
    return stack;
}