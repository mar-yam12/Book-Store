import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className=" flex flex-col sm:flex-row items-center overflow-hidden p-5 bg-[url('/bg1.jpg')] ">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                {/* Text Section */}
                <div className="bg-teal-950 opacity-70 text-teal-50 m-4 p-4 rounded-lg shadow-lg flex flex-col lg:w-1/2">
                    <div className="flex flex-col text-center lg:text-left rounded-lg shadow-lg hover:shadow-teal-500/90 transition-shadow duration-300">
                        <h1 className="text-4xl lg:text-6xl font-bold text-teal-50 mb-4">WELCOME</h1>
                        <h2 className="text-2xl lg:text-4xl text-teal-600 font-semibold text-center">To My Book API</h2>
                        <p className="text-lg lg:text-xl text-teal-50 font-semibold text-center">Famous books have shaped cultures, inspired generations, and left indelible marks on history. These literary masterpieces explore universal themes such as love, courage, freedom, and human resilience, captivating readers with their profound storytelling and timeless wisdom. Often celebrated for their artistic brilliance, they transcend borders and languages, fostering a deep connection among diverse audiences. From epic tales of adventure to thought-provoking narratives about society and morality, these works offer insights into the human condition.
                        </p>
                    </div>
                </div>

                {/* Desktop Image */}
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    <Image
                        src="/book.png"
                        alt="Hero Image"
                        layout="responsive"
                        objectFit="cover"
                        width={500}
                        height={300}
                        className="rounded-lg shadow-lg hover:shadow-teal-500/90 transition-shadow duration-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection