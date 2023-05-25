import React, { useState } from "react";
import InputArg from "./InputArg";
import TypeSelection from "./TypeSelection";

function FireBondAssignment() {
    const [count, setCount] = useState(1);

    const handleArg = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>
                {[...Array(count)].map((count, index) => (
                    <InputArg key={index} />
                ))}
                <div>
                    <button
                        className="border border-zinc-500 align-sub px-2"
                        onClick={handleArg}
                    >
                        + add arg
                    </button>
                </div>
            </div>
            <TypeSelection />
        </div>
    );
}

export default FireBondAssignment;
