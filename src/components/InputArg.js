import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import { useDispatch } from "react-redux";
import { reset } from "../action";

function InputArg() {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    const handleArg = () => {
        setCount(count + 1);
        return dispatch(reset());
    };

    return (
        <div>
            {[...Array(count)].map((count, index) => {
                return <Input key={index} />;
            })}
            <div>
                <button
                    className="border border-zinc-500 align-sub px-2"
                    onClick={handleArg}
                >
                    + add arg
                </button>
            </div>
            <div className="mt-8">
                <Select />
            </div>
        </div>
    );
}

export default InputArg;
