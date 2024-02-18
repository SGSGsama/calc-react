import React, { useState } from "react";
import "./style.css";
function Inputarea() {
    return (<div className="center" id="input"><textarea className="input"></textarea></div>);
}
function Keyboard() {
    return (<div>
        <div className="center ">
            <button className="keyboard">1</button><button className="keyboard">2</button><button className="keyboard">3</button><br></br>
            <button className="keyboard">4</button><button className="keyboard">5</button><button className="keyboard">6</button><br></br>
            <button className="keyboard">7</button><button className="keyboard">8</button><button className="keyboard">9</button><br></br>
        </div>
        <div className="center "><button className="center submit_button" id="submit">submit</button></div>
    </div>);
}
export { Inputarea, Keyboard };