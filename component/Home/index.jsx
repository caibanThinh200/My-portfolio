import HorizontalSlides from "../HorizontalSlides";
import { useRef, useEffect } from "react"
import { gsap } from "gsap/dist/gsap"
import { motion, useScroll, useSpring } from "framer-motion"

const Homepage = props => {
    const thumbRef = useRef();
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)

    useEffect(() => {
        // gsap.fromTo(thumbRef.current, {
        //     y: -300
        // }, {
        //     y: 0
        // })
    }, [])

    return <div className="p-20 text-white px-20 relative" id="main">
        <motion.div className="fixed p-1 bg-zinc-50 origin-left top-0 left-0 right-0" style={{ scaleX }}>
        </motion.div>
        <div className="flex flex-col gap-y-56">
            <div className="flex gap-x-5">
                <div className="flex flex-col gap-y-24 flex-1">
                    <p className="text-5xl font-bold pl-5 py-5 border-l-4 border-l-white">Hi, i'm Thinh and i'm a Software Developer</p>
                    <p className="text-lg font-medium">I love to build beautiful UI/UX for applications</p>
                    <div className="flex flex-col gap-y-5">
                        <div>
                            <button onClick={e => {
                                gsap.fromTo(thumbRef.current, {
                                    y: -300
                                }, {
                                    y: 0,
                                    duration: 3
                                })
                            }} className="rounded-full drop-shadow-lg bg-blue-800 px-10 shadow text-xl font-bold py-2 w-4/12">My resume</button>
                        </div>
                        <div>
                            <button className="rounded-full bg-black px-10 text-xl font-bold py-2 w-4/12">Github</button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            y: 100,
                            transition: {
                                duration: 1
                            }
                        }} ref={thumbRef} className="relative w-[300px] h-[300px] mt-16">
                        <img className="w-full h-full rounded-xl object-cover absolute -top-[100px] left-[170px] z-10" src="/avatar_2.jpg" />
                        <img className="w-9/12 h-full rounded-xl object-cover absolute" src="/avatar.jpg" />
                    </motion.div>
                </div>
            </div>
            <div className="flex gap-x-16">
                <div className="w-6/12 pb-24">
                    <p className=" font-bold text-5xl sticky top-[30%] pl-5 py-5 border-l-4 border-l-white">About me</p>
                </div>
                <div className="flex flex-col gap-y-56">
                    <div>
                        <p className="text-about font-bold text-xl mb-5">Introduce</p>
                        <p className="font-medium">I am a software developer with more than 2 years experience,  most of the time i work as frontend developer but i can also work as backend developer</p>
                    </div>
                    <div>
                        <p className="text-about font-bold text-xl mb-5">Introduce</p>
                        <p className="font-medium">I am a software developer with more than 2 years experience,  most of the time i work as frontend developer but i can also work as backend developer</p>
                    </div>
                    <div>
                        <p className="text-about font-bold text-xl mb-5">Introduce</p>
                        <p className="font-medium">I am a software developer with more than 2 years experience,  most of the time i work as frontend developer but i can also work as backend developer</p>
                    </div>
                    <div>
                        <p className="text-about font-bold text-xl mb-5">Introduce</p>
                        <p className="font-medium">I am a software developer with more than 2 years experience,  most of the time i work as frontend developer but i can also work as backend developer</p>
                    </div>
                    <div>
                        <p className="text-about font-bold text-xl mb-5">Introduce</p>
                        <p className="font-medium">I am a software developer with more than 2 years experience,  most of the time i work as frontend developer but i can also work as backend developer</p>
                    </div>
                </div>
            </div>
            <div className="sticky top-[30%]">
                <div>
                    <p className="font-bold text-5xl pl-5 py-5 border-l-4 border-l-white">My skills</p>
                </div>
                <HorizontalSlides lenis={props.lenis} className="flex gap-x-10 mt-20 inline-flex">
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                    <div className="border-4 flex flex-col justify-between text-end p-2 px-5 w-[200px] h-[200px]">
                        <p className="text-3xl font-bold">React</p>
                        <div>
                            <img className="w-[50px] h-[50px] rounded-full object-cover" src="https://reactjs.org/favicon.ico" />
                        </div>
                    </div>
                </HorizontalSlides>
            </div>
            <div>ss</div>
            <div>ss</div>
            <div>ss</div>
        </div>

    </div>
}

export default Homepage;