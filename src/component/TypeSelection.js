import React, { useEffect, useState } from "react";
import Boolean from "./Boolean";

function TypeSelection() {
    const [option, setOption] = useState("");
    const [bool, setBool] = useState("undefined");

    const handleChange = (e) => {
        setOption(e.target.value);
        if (e.target.value === "constant") {
            setBool(false);
        }
    };

    const handleClear = () => {
        setOption("");
        setBool("undefined");
    };

    const handleBoolVal = (data) => {
        setBool(data);
    };

    // useEffect(() => {
    //     // setBool(!bool);
    //     console.log(bool);
    // }, [bool]);

    return (
        <div>
            <h1>{option}</h1>
            <div className="mt-10 ">
                {option === "constant" ? (
                    <Boolean boolVal={handleBoolVal} />
                ) : (
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
                )}
                <button
                    className="w-6 border border-zinc-500"
                    onClick={handleClear}
                >
                    X
                </button>
            </div>

            <div className="mt-4">
                <h3>{`Result: ${bool}`}</h3>
            </div>
        </div>
    );
}

export default TypeSelection;
