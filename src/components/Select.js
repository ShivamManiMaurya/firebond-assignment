import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOptions } from "../action";

function Select() {
    const [option, setOption] = useState("");
    const dispatch = useDispatch();
    const storedOption = useSelector((state) => state.setOptionsRed);

    console.log(storedOption);

    const handleOptions = (e) => {
        setOption(e.target.value);
        console.log("options = ", option);
        return dispatch(changeOptions(option));
    };

    const handleClear = () => {};

    return (
        <div>
            <select
                name="typeSelect"
                id="type"
                className="border border-zinc-500"
                value={option}
                onChange={handleOptions}
            >
                <option value="" disabled>
                    Select...
                </option>
                <option value="constant">Constant</option>
                <option value="argument">Argument</option>
                <option value="and">And</option>
                <option value="or">Or</option>
            </select>
            <button
                className="w-6 border border-zinc-500"
                onClick={handleClear}
            >
                X
            </button>
        </div>
    );
}

export default Select;
