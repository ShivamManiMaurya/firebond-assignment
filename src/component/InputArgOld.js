import React, { useState } from "react";
import Boolean from "./Boolean";
import passingComp from "./passingComp";

function InputArg({ boolVal, argVal }) {
    const [argument, setArgument] = useState(["My arg"]);

    // console.log(argVal);
    // console.log(argument);

    return (
        <div>
            <input
                type="text"
                value={argument}
                className="border border-zinc-500 pl-2"
                onChange={(e) => [...argument, setArgument(e.target.value)]}
            />
            <Boolean boolVal={boolVal} />
            {/* <passingComp argument={argument} /> */}
        </div>
    );
}

export default InputArg;
