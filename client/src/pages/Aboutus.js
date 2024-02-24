import React from 'react'
import bgImage from '../assets/moviebuffs.jpg'
import '../styles/aboutus.css'

const Aboutus = () => {
    return (
        <div className='about-container'>
            <div className='bgImage flex justify-center items-center max-h-[60vh] overflow-hidden relative'>
                <img className='w-full opacity-[.6] h-full object-cover' src={bgImage} alt='about-us-img' />
                <div className='content absolute w-full top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <p className='xs-text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold'>We Are</p>
                    <h1 className='text-white xs-text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>MOVIE BUFFS</h1>
                </div>
            </div>
            <section className='aboutSection flex flex-col justify-center items-center' style={{ backgroundColor: "#F0F2F5" }}>
                <div className="container py-5">
                    <div className="main-timeline relative after:content-[''] after:absolute after:w-[6px] after:bg-[#939597] after:top-0 after:bottom-0 after:left-1/2 after:ml-[-3px]">
                        <div className="timeline left pr-10 pb-5 left-0">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>April, 2023</h3>
                                    <p className="mb-0">A passionate developer, utterly captivated by the world of movies, had a groundbreaking idea.With an insatiable love for the silver screen, this visionary embarked on a journey to craft their very first full stack web app </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline right pb-5 pl-10 left-1/2 after:left-[-12px]">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>May - June 2023</h3>
                                    <p className="mb-0">Undeterred by his intermediate status, our intrepid explorer delved deep into the world of tech stacks, each layer revealing new challenges and opportunities. With a thirst for knowledge, he embraced the intricacies of front-end languages, mastering the art of crafting user interfaces that breathe life into the virtual canvas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline left pr-10 pb-5">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>August, 2023</h3>
                                    <p className="mb-0">He dove headfirst into exploring the intricate backend requirements that would shape his web app.
                                        Each feature, each functionality, he delved deep, immersing himself in the intricacies of user authentication, data storage, and the mechanisms that would power his creation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline right pb-5 pl-10 left-1/2 after:left-[-12px]">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>September 2023</h3>
                                    <p className="mb-0">Our determined developer fearlessly undertook the challenge of building a complex seat booking feature. Undaunted by the intermediate stage of expertise, he delved into the intricacies of the tech stack, facing each layer with enthusiasm and uncovering new challenges and opportunities along the way.

                                        This month saw significant enhancements to the system, including the introduction of a sophisticated seat booking mechanism. The developer applied his skills to modify the existing system, ensuring a seamless and efficient booking process for users. Additionally, an admin module was meticulously crafted, empowering administrators to effortlessly add new movies to the platform.

                                        The journey wasn't without its complexities, but our intrepid explorer's thirst for knowledge and commitment to excellence shone through. Through these efforts, he not only tackled challenges head-on but also mastered the art of crafting user interfaces that bring the virtual canvas to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline left pr-10 pb-5">
                            <div className="card">
                                <div className="card-body p-4">
                                    <h3>October, 2023</h3>
                                    <p className="mb-0">With the foundational elements in place, he shifted gears to ensure the robustness and reliability of the application. The month was dedicated to meticulous testing, where every feature underwent scrutiny to guarantee a seamless user experience.

                                        The testing phase wasn't merely a routine procedure; it was an opportunity to refine the application further. Our developer implemented various modifications based on feedback and insights gathered during the testing process. This dedication to perfection ensured that the application met the highest standards of quality and functionality.

                                        As the month unfolded, the app stood ready for deployment. Every line of code, every feature, and every pixel had been scrutinized and refined. The result was a polished and well-tested application, poised to make its mark in the digital landscape.

                                        The journey from development to testing and refinement showcased our developer's commitment to delivering excellence. With the app ready for deployment, the stage was set for users to experience the fruits of this dedicated effort.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus