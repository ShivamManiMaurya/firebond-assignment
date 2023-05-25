import React, { useState, useEffect } from "react";

function Boolean({ boolVal }) {
    const [option, setOption] = useState(false);

    // useEffect(() => {
    //     return clicked(setOption(option));
    // }, [option]);

    // const clicked = (val) => (val);

    let opt = false;

    const handleBoolean = (e) => {
        setOption(e.target.value);
        opt = e.target.value;
        return boolVal(opt);
    };

    return (
        <select
            name="bool"
            id="bool"
            className="border border-zinc-500"
            value={option}
            onChange={handleBoolean}
        >
            <option value="true">True</option>
            <option value="false">False</option>
        </select>
    );
}

export default Boolean;
