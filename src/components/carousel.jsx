import React, { useEffect } from "react";
import Slide from "./slides/slide";
import { profileData } from "../constants";
const Carousel = () => {
    const delay = 2000;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === profileData.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {profileData.map((d, index) => (
                    <div className="slide" key={index}>
                        <Slide
                            name={d.name}
                            designation={d.designation}
                            college={d.college}
                            imageUrl={d.imageUrl}
                        />
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {profileData.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${
                            index === idx ? " active" : ""
                        }`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
