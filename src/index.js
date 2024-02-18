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
    return (<div>
        <Inputarea updateValue={setInputValue} value={inputValue} />
        <Keyboard submit_click={print} />
        <Outputarea value={outputValue} />
    </div>);
}
const root = createRoot(document.getElementById("main"));
root.render(<Main />);

