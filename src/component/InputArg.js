import React from "react";
import Boolean from "./Boolean";

function InputArg() {
    return (
        <div>
            <input
                type="text"
                value="My Arg"
                className="border border-zinc-500 pl-2"
                onChange={() => {}}
            />
            <Boolean />
        </div>
    );
}

export default InputArg;
