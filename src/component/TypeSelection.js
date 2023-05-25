import React, { useEffect, useState, useContext } from "react";
import Boolean from "./Boolean";
import Result from "./Result";
import BoolContext from "./Boolean";

function TypeSelection({ boolVal }) {
    const [option, setOption] = useState("");
    const [bool, setBool] = useState("undefined");
    const [count, setCount] = useState(2);

    const boolValue = useContext(BoolContext);
    // setBool(boolValue);
    console.log(boolValue);

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

    const handleAddOn = () => {
        setCount(count + 1);
    };

    // useEffect(() => {
    //     // setBool(!bool);
    //     console.log(bool);
    // }, [bool]);

    return (
        <div>
            <h1>{option}</h1>
            <div className="mt-10 ">
                {option !== "constant" &&
                option !== "argument" &&
                option !== "and" &&
                option !== "or" ? (
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
                ) : null}
                {option === "constant" && <Boolean />}
                {option === "argument" && (
                    <div>
                        <select name="args" id="args">
                            <option value=""></option>
                        </select>
                    </div>
                )}
                {option === "and" && (
                    <div>
                        {" "}
                        <div>
                            {[...Array(count)].map((_, index) => (
                                <select
                                    name="typeSelect"
                                    id="type"
                                    className="border border-zinc-500"
                                    value={option}
                                    onChange={handleChange}
                                    key={index}
                                >
                                    <option value="" disabled>
                                        Select...
                                    </option>
                                    <option value="constant">Constant</option>
                                    <option value="argument">Argument</option>
                                    <option value="and">And</option>
                                    <option value="or">Or</option>
                                </select>
                            ))}
                        </div>
                        <div>
                            <button
                                className="border border-zinc-500"
                                onClick={handleAddOn}
                            >
                                {" "}
                                + add on
                            </button>
                        </div>
                    </div>
                )}

                <button
                    className="w-6 border border-zinc-500"
                    onClick={handleClear}
                >
                    X
                </button>
            </div>

            {option === "constant" ? (
                <Result resVal={bool} />
            ) : (
                <Result resVal={bool} />
            )}
        </div>
    );
}

export default TypeSelection;
