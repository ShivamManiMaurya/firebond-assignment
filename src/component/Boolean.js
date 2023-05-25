import React from "react";

function Boolean() {
    return (
        <select name="bool" id="bool" className="border border-zinc-500">
            <option value="true">True</option>
            <option value="false" selected>
                False
            </option>
        </select>
    );
}

export default Boolean;
