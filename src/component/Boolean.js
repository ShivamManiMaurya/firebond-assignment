import React, { useState, useEffect, createContext } from "react";

function Boolean() {
    const [option, setOption] = useState(false);

    const BoolContext = createContext(false);

    // useEffect(() => {
    //     return clicked(setOption(option));
    // }, [option]);

    // const clicked = (val) => (val);

    let opt = false;

    const handleBoolean = (e) => {
        setOption(e.target.value);
        opt = e.target.value;
    };

    return (
        <BoolContext.Provider value={opt}>
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
        </BoolContext.Provider>
    );
}

export default Boolean;
