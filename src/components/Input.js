import React, { useState } from "react";
import BooleanState from "./BooleanState";

function Input() {
    const [argument, setArgument] = useState(["My arg"]);

    return (
        <div className="flex">
            <input
                type="text"
                value={argument}
                className="border border-zinc-500 pl-2"
                onChange={(e) => [...argument, setArgument(e.target.value)]}
            />
            <BooleanState />
        </div>
    );
}

export default Input;
