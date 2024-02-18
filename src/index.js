import React, { useState } from "react";
import { Keyboard, Inputarea, Outputarea } from "./ui.js";
import { createRoot } from "react-dom/client";
import { calc } from "./calc.js";
function Main() {
    const [outputValue, setOutputValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    function print() {
        setOutputValue(calc(inputValue));
    }
    function keyboard_click(event) {
        let tmp = inputValue + event.target.innerHTML;
        setInputValue(tmp);
    }
    return (<div>
        <Inputarea updateValue={setInputValue} value={inputValue} />
        <Keyboard submit_click={print} keyboard_click={keyboard_click} />
        <Outputarea value={outputValue} />
    </div>);
}
const root = createRoot(document.getElementById("main"));
root.render(<Main />);

