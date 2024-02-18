import React from "react";
import { Keyboard, Inputarea } from "./ui.js";
import { createRoot } from "react-dom/client";
import { calc } from "./calc.js";
function Main() {
    return (<div>
        <Inputarea />
        <Keyboard />
    </div>);
}
function Output() {
    return <div>

    </div>
} root.render(<Main />);
const submit = document.getElementById("submit");
const root = createRoot(document.getElementById("main"));

