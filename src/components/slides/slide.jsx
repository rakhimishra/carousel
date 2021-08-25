import React from "react";
import "./style.css";
const Slide = ({ name, designation, college, imageUrl }) => {
    return (
        <div className="card">
            <img
                src={imageUrl}
                alt="John"
                style={{ width: "100%", height: "400px" }}
            />
            <h1>{name}</h1>
            <p class="title">{designation}</p>
            <p>{college}</p>

            <p>
                <button>Contact</button>
            </p>
        </div>
    );
};

export default Slide;
