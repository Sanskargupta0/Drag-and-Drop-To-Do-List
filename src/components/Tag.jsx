import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
    const tagStyle = {
        Abhi_Nahi: { backgroundColor: "#fda821" },
        Kal: { backgroundColor: "#15d4c8" },
        Aaj: { backgroundColor: "#ffd12c" },
        Abhi: { backgroundColor: "red" }
    };
    return (
        <button
            type='button'
            className='tag'
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}>
            {tagName}
        </button>
    );
};

export default Tag;
