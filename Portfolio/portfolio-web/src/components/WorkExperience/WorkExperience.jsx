import React, { useRef } from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 0,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 0,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="experience-container">
            <h5>Work Experience</h5>
            <div className="experience-content">
                <button className="button-left" onClick={handlePrev}>
                    <div className="button-box">
                        <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 20.038c0 .7.3 1.5.8 2.1l16 17c1.1 1 3.2 1.4 4.4.3 1.2-1.1 1.2-3.3 0-4.4L10 23.038H43c1.7 0 3-1.3 3-3s-1.3-3-3-3H10l11.3-11.9c1-1 1.2-3.3 0-4.4-1.2-1.1-3.3-.8-4.4.3l-16 17c-.5.5-.8 1.1-.8 1.9z"
                                />
                            </svg>
                        </span>
                    </div>
                </button>

                <button className="button-right" onClick={handleNext}>
                    <div className="button-box">
                        <span className="button-elem">
                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                />
                            </svg>
                        </span>
                    </div>
                </button>

                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default WorkExperience;
