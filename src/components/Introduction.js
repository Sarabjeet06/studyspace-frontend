import React from "react";
import Image from "next/image";

export default function Introduction() {
  return (
    <div>
        <div className="flex flex-col-reverse lg:flex-row justify-evenly mt-12 mb-16 mx-auto w-fit">
        <div className="flex flex-col lg:w-1/2">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 overflow-hidden mx-auto">
                <Image
                    className="object-cover w-full h-full"
                    src="/images/splash.png"
                    width={100}
                    height={100}
                />
                <div className="absolute w-52 h-fit sm:w-3/5 py-4 top-0 bottom-0 mt-auto mb-auto left-0 right-0 ml-auto mr-auto text-gray-200 text-center text-lg sm:text-xl font-extrabold leading-6">
                    Empowering Minds, Connecting Futures: Welcome to StudySpace!
                </div>
            </div>
            <div className="w-4/5 sm:w-5/6 mx-auto">
                <div className="px-10 py-6 bg-white text-sm text-slate-700 shadow-lg rounded-md lg:rounded-full">
                    Discover a new era of education with EduConnect, where every connection fuels your learning journey to new heights!
                </div>
            </div>
        </div>
        <div className="lg:w-1/2 h-full mx-auto my-auto">
            <Image src="/images/Intro-pic.png" width={650} height={650}></Image>
        </div>
        </div>
    </div>
  );
}
