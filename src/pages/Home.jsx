import React, { useEffect, useRef } from "react";
import hero from "../assets/hero.svg";
import { FaDownload } from "react-icons/fa6";
import CoderProfile from "@/components/CoderProfile";
import { socials } from "@/utils/data/socials";
import { Link } from "react-scroll";
import { personalData } from "@/utils/data/personalData";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const Home = () => {
    const introRef = useRef(null);
    const socialIconsRef = useRef(null);
    const buttonsRef = useRef(null);
    const animationCanvasRef = useRef(null);

    useEffect(() => {
        // ... (Canvas Animation Setup - keep this as is) ...
        const canvas = animationCanvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const shapes = [];
        const numShapes = 30;

        class Shape {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 15 + 5;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = `rgba(150, 100, 200, ${Math.random() * 0.5})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.speedX *= -1;
                if (this.y + this.radius > canvas.height || this.y - this.radius < 0) this.speedY *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.closePath();
                ctx.fill();
            }
        }

        for (let i = 0; i < numShapes; i++) {
            shapes.push(new Shape());
        }

        function animateShapes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            shapes.forEach(shape => {
                shape.update();
                shape.draw();
            });

            requestAnimationFrame(animateShapes);
        }

        animateShapes();

        const resizeObserver = new ResizeObserver(entries => {
            if (entries && entries[0]) {
                const entry = entries[0];
                canvas.width = entry.contentRect.width;
                canvas.height = entry.contentRect.height;
            }
        });

        resizeObserver.observe(canvas);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);


    useEffect(() => {
        // ... (Keep animations - adjust if needed) ...
        if (introRef.current) {
            introRef.current.style.opacity = 0;
            introRef.current.style.transform = 'translateY(20px)';
            setTimeout(() => {
                introRef.current.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
                introRef.current.style.opacity = 1;
                introRef.current.style.transform = 'translateY(0)';
            }, 200);
        }


        if (buttonsRef.current) {
            buttonsRef.current.style.opacity = 0;
            buttonsRef.current.style.transform = 'translateY(20px)';
            setTimeout(() => {
                buttonsRef.current.style.transition = 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s';
                buttonsRef.current.style.opacity = 1;
                buttonsRef.current.style.transform = 'translateY(0)';
            }, 800);
        }
        // Animate social icons fade-in and slide-in - slightly adjusted for new placement
        if (socialIconsRef.current) {
            socialIconsRef.current.style.opacity = 0;
            socialIconsRef.current.style.transform = 'translateX(-20px)'; // Slide from left now
            setTimeout(() => {
                socialIconsRef.current.style.transition = 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s';
                socialIconsRef.current.style.opacity = 1;
                socialIconsRef.current.style.transform = 'translateX(0)';
            }, 500);
        }


    }, []);


    return (
        <section className="relative flex flex-col items-center justify-center py-4 lg:py-12">
            {/* Background Hero Image - Keeping */}
            <img
                src={hero}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-[80%] lg:w-[60%]"
                alt="Hero"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-y-8 w-full max-w-6xl px-6">
                {/* Left Section - Introduction with Animated BG and Redesigned Content */}
                <div className="order-2 lg:order-1 flex flex-col lg:flex-row items-center justify-center text-center lg:text-left min-h-[60vh] relative overflow-hidden"> {/* Removed lg:justify-start from here */}
                    {/* Canvas Background */}
                    <canvas
                        ref={animationCanvasRef}
                        className="absolute top-0 left-0 w-full h-full z-0"
                        style={{ pointerEvents: 'none' }}
                    ></canvas>

                    {/* Social Icons - Vertical Stack on Left */}
                    <div ref={socialIconsRef} className="lg:mr-8 flex flex-col items-center lg:items-start space-y-4 relative z-10">
                        <a
                            href={socials.find(item => item.title === 'Linkedin')?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-green-400 transition duration-300 text-3xl"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href={socials.find(item => item.title === 'Github')?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-green-400 transition duration-300 text-3xl"
                            aria-label="GitHub Profile"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={socials.find(item => item.title === 'Gmail')?.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-green-400 transition duration-300 text-3xl"
                            aria-label="Email"
                        >
                            <SiGmail />

                        </a>
                    </div>


                    <div ref={introRef} className="relative z-10">
                        <h1 className="text-3xl font-bold leading-tight text-shadow-md mb-4">
                            Rajat P Rao <br/>
                            <span className="text-purple-500 font-normal text-xl">Full Stack Developer</span> <br/>
                        </h1>


                        {/* Call to Action Buttons - Outline Style */}
                        <div ref={buttonsRef} className="flex gap-6 mt-6 relative z-10 justify-center lg:justify-start">

                            <a href={personalData.resume} target="_blank" rel="noopener noreferrer"   className="flex flex-row items-center gap-2 transition-transform transform hover:scale-105  text-white px-4 py-2 rounded-md font-bold z-10 hover:scale-110 border border-purple-500 hover:bg-purple-500 bg-transparent">
                                Get Resume <FaDownload />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section - Code Snippet (CoderProfile) - Keep as is */}
                <CoderProfile />
            </div>
        </section>
    );
};

export default Home;