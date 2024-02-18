import React, { useState } from "react";
import "./style.css";
function Inputarea({ updateValue, value }) {

    function handleChange(event) {
        updateValue(event.target.value);
    }
    return (<div className="center" >
        <textarea placeholder="edit your experssions here" className="input"
            onChange={handleChange} value={value}>
        </textarea></div>);
}
function Keyboard({ submit_click, keyboard_click }) {
    return (<div>
        <div className="center ">
            <button className="keyboard">1</button><button className="keyboard">2</button><button className="keyboard">3</button><br></br>
            <button className="keyboard">4</button><button className="keyboard">5</button><button className="keyboard">6</button><br></br>
            <button className="keyboard">7</button><button className="keyboard">8</button><button className="keyboard">9</button><br></br>
        </div>
        <div className="center "><button className="center submit_button" onClick={submit_click}>submit</button></div>
    </div>);
}
function Outputarea({ value }) {
    return (<div className="center font_30px">
        {value}
    </div>)
}
export { Inputarea, Keyboard, Outputarea };