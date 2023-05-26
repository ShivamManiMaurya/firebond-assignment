import React, { useState } from "react";

function Select() {
    const [bool, setBool] = useState("undefined");
    const [option, setOption] = useState("");

    const handleChange = (e) => {
        setOption(e.target.value);
        if (e.target.value === "constant") {
            setBool(false);
        }
    };

    return (
        <select
            name="typeSelect"
            id="type"
            className="border border-zinc-500"
            value={option}
            onChange={handleChange}
        >
            <option value="" disabled>
                Select...
            </option>
            <option value="constant">Constant</option>
            <option value="argument">Argument</option>
            <option value="and">And</option>
            <option value="or">Or</option>
        </select>
    );
}

export default Select;
