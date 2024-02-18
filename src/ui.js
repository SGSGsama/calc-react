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
            <button className="keyboard" onClick={keyboard_click}>1</button><button className="keyboard" onClick={keyboard_click}>2</button><button className="keyboard" onClick={keyboard_click}>3</button><br></br>
            <button className="keyboard" onClick={keyboard_click}>4</button><button className="keyboard" onClick={keyboard_click}>5</button><button className="keyboard" onClick={keyboard_click}>6</button><br></br>
            <button className="keyboard" onClick={keyboard_click}>7</button><button className="keyboard" onClick={keyboard_click}>8</button><button className="keyboard" onClick={keyboard_click}>9</button><br></br>
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