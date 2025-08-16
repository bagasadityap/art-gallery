'use client';

import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import SubmitArt from "../../../components/submit-art";
import RevealOnScroll from "../../../components/reveal-on-scroll";
import { Clock } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Art = {
    id: string;
    title: string;
    description: string;
    image: string;
    created_at: Date;
    status: number;
};

export default function MyArt() {
    const [arts, setArts] = useState<Art[]>([]);
    const [classname, setClassname] = useState("");
    const [status, setStatus] = useState<number | null>(null);;
    const router = useRouter();

    useEffect(() => {
        fetch('https://api.phaserbeary.xyz/api/art/my-art', { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
            if(Array.isArray(data.arts)) {
                setArts(data.arts)
            }
        })
    }, [])

    useEffect(() => {
        setClassname(
            arts.length > 0
                ? 'columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 space-y-4 md:space-y-5'
                : ''
        );
    }, [arts]);

    return (
        <div className="font-sora flex flex-col items-center min-h-screen w-auto gap-10 md:gap-20 p-5 md:p-8 pb-30 md:pb-20 sm:p-20 relative bg-white">
            <Navbar/>

            <div className="w-full flex flex-col md:flex-row justify-end gap-5 md:gap-0 mt-15 md:mt-25 lg:mt-30 text-sm md:text-md lg:text-xl">
                {/* <button type="button" className="w-30 md:w-full block md:hidden bg-yellow-500 text-white text-sm md:text-xl hover:bg-yellow-800 hover:scale-105 font-bold py-1 px-2 md:py-2 md:px-3 rounded-lg">Submit your Art</button>
                <form action="" className="flex flex-row gap-2 text-black">
                    <div className="flex items-center gap-2">
                    <div className="relative">
                        <FaPalette className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500" />
                        <input
                        type="search"
                        placeholder="Search Art.."
                        className="w-75 md:w-100 lg:w-150 bg-black/90 text-white pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    </div>
                </form> */}
                <SubmitArt/>
                {/* <button type="button" className="hidden md:block bg-yellow-500 text-white text-sm md:text-xl hover:bg-yellow-800 hover:scale-105 font-bold py-1 px-2 md:py-2 md:px-3 rounded-lg">Submit your Art</button> */}
            </div>
            <div className="w-full flex flex-col items-center">
                {/* <p className="text-xs md:text-sm text-red-500 text-justify mb-5 md:mb-10">
                    <strong>Disclaimer: </strong>
                    This website is currently under development. All images featured in the Artwork and Gallery sections are sourced from Pinterest and are used for demonstration purposes only.
                </p> */}
                <div className={classname}>
                {arts.length === 0 ? (
                    <div className="w-full">
                        <div className="flex flex-col justify-center">
                            <p>No submission found. Please press the “Submit your Art” button to upload your work. Please contact us if you run into any issues.</p>
                        </div>
                    </div>
                ) : (
                    arts.map(art => (
                        <RevealOnScroll direction="up" key={art.id} delay={100}>
                        <div className="break-inside-avoid bg-black/80 shadow-sm hover:scale-102 transition rounded-2xl">
                            <div className="flex flex-row items-center justify-between px-3 pt-2">
                                <div className="relative group inline-block">
                                    {art.status === 0 ? (
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">Under Review</span>
                                    ) : art.status === 1 ? (
                                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">Published</span>
                                    ) : art.status > 2 ? (
                                        <span className="flex flex-row items-center gap-1 bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300 cursor-pointer">
                                            Not Approved <FiInfo/>
                                        </span>
                                    ) : null}
                                    <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-max max-w-xs hidden group-hover:block bg-red-800 text-white text-xs text-justify rounded-lg p-3 z-10">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eos magnam cupiditate, debitis architecto iste minima? Maxime sint veniam corrupti.
                                    </div>
                                </div>
                                {/* <button type="button" className="hover:text-yellow-200">
                                    <FaEdit className="text-white hover:text-yellow-200"/>
                                </button> */}
                            </div>
                            <img
                                src={art.image}
                                alt={`phaser-beary-meme-${art.id}`}
                                className="w-full h-40 object-cover p-2"
                                loading="lazy"
                                onClick={() => router.push(`/gallery/art-detail/`)}
                            />
                            <div className="px-3 md:px-4 pb-3 text-white text-[10px] md:text-xs">
                                <p className="text-[12px] md:text-xs font-bold">Lorem ipsum dolor sit amet.</p>
                                <p className="text-gray-200 flex items-start md:items-center gap-1">
                                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                    January 0
                                </p>
                                <p className="text-justify">
                                    {art.description}
                                </p>
                            </div>
                        </div>
                        </RevealOnScroll>
                    ))
                )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}