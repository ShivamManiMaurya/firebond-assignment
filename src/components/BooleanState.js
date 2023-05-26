import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { boolState } from "../action/index.js";

function BooleanState() {
    const [option, setOption] = useState(false);
    const dispatch = useDispatch();

    const testVal = useSelector((state) => state.boolStateRed);

    const handleBoolean = (e) => {
        setOption(e.target.value);
        console.log(testVal);
        return dispatch(boolState(option));
    };

    return (
        <div>
            <select
                name="bool"
                id="bool"
                className="border border-zinc-500"
                value={option}
                onChange={handleBoolean}
            >
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>
        </div>
    );
}

export default BooleanState;
