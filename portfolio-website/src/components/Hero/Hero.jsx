import React, { useEffect } from 'react';
import './Hero.css';
import Typed from 'typed.js';

function Hero() {
    useEffect(() => {
        const options = {
            strings: [
                "Cyber Security Researcher",
                "Full Stack Developer",
                "Programmer",
                "Linux Administrator",
                "Blockchain Developer",
                "Penetration Tester",
                "Learner"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        };

        const typed = new Typed(".pro-text", options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="hero-container">
            <div className="container">
                <div className="hero-content" data-scroll data-scroll-speed="-5">
                    <h3 className="mu">Hello, It's me</h3>
                    <h1>Akash</h1>
                    <h3>
                        And I'm a &nbsp;
                        <span className="pro-text"></span>
                    </h3>
                    <br /> <br />
                    <p>
                        My passion for technology and security drives me to continuously explore the latest trends in cybersecurity, including penetration testing, cryptography, and ethical hacking.<br></br><br></br>

                        Over the years, I've developed a strong foundation in network security, vulnerability assessment, and incident response. I enjoy problem-solving and thrive on challenges that require deep technical expertise and analytical thinking.<br></br><br></br>

                        When I'm not diving into the world of security, you can find me collaborating on projects, participating in capture the flag (CTF) challenges, or enhancing my skills through continuous learning.
                    </p>
                </div>
                <div className='img'>
                    <img src="./assests/images/img11.png" alt="Hero" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
