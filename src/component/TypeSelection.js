import React from "react";

function TypeSelection() {
    return (
        <div>
            <div className="mt-10 ">
                <select
                    name="typeSelect"
                    id="type"
                    className="border border-zinc-500"
                >
                    <option value="selected" disabled selected>
                        Select...
                    </option>
                    <option value="constant">Constant</option>
                    <option value="argument">Argument</option>
                    <option value="and">And</option>
                    <option value="or">Or</option>
                </select>
                <button className="w-6 border border-zinc-500">X</button>
            </div>
            <div className="mt-4">
                <h3>Result: Undefined</h3>
            </div>
        </div>
    );
}

export default TypeSelection;
