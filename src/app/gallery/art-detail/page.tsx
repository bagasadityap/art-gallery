'use client';

import { FaXTwitter, FaInstagram } from "react-icons/fa6"
import { Clock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Footer from "../../../../components/footer";
import Share from "../../../../components/share";

export default function Detail() {
    const router = useRouter();
    const url = window.location.href;
    const title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eligendi.";

    const images = [
        "/assets/beary/art/5.jpeg",
        "/assets/beary/art/2.jpeg",
        "/assets/beary/art/3.jpeg",
        "/assets/beary/art/4.jpeg",
        "/assets/beary/art/14.jpeg",
        "/assets/beary/art/15.jpeg",
    ]

    return (
        <div className="font-sora flex flex-col items-center min-h-screen w-auto p-8 pb-0 md:pb-20 sm:p-20 relative bg-white text-black">
            <div className="px-0 md:px-30 w-full flex flex-row justify-start pb-5 md:pb-10">
                <Link href="/gallery/" className="font-semibold bg-black text-white text-sm md:text-md lg:text-xl hover:scale-105 py-1 px-2 md:py-2 md:px-3 rounded-lg transition">
                    {'<'} Back
                </Link>
            </div>
            <div className="mb-5">
                <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 md:gap-10 px-0 md:px-30 mt-10">
                    <div className="min-w-30 w-30 max-w-40">
                        <img src="/assets/beary/1.webp" alt="" className="object-cover rounded-full shadow-lg"/>
                    </div>
                    <div className="text-xs md:text-sm">
                        <h2 className="font-semibold text-md md:text-xl">Phaser Beary</h2>
                        <a href="https://x.com/phaserbeary_xrp?s=21" className="flex flex-row items-center gap-1 md:gap-2 text-blue-500  hover:underline">
                            <FaXTwitter className="h-3 w-3 md:h-5 md:w-5 text-black" aria-hidden="true" />
                            @phaserbeary_xrp
                        </a>
                        <a href="https://x.com/phaserbeary_xrp?s=21" className="flex flex-row items-center gap-1 md:gap-2 text-blue-500 hover:underline">
                            <FaInstagram className="h3 w3 md:h-5 md:w-5 text-red-400" aria-hidden="true" />
                            @phaser_art
                        </a>
                        <p className="text-justify text-gray-700 mt-2">
                            The laziest bear to ever accidentally mint himself into the XRP blockchain. He’s not your average pixel-pumped NFT character. Nope. He’s unbothered, unimpressed, and perpetually halfway between a nap and existential dread.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-5 px-0 md:px-30 flex flex-col justify-between gap-5">
                <div className="w-full flex items-center justify-center">
                    <img src="/assets/beary/art/1.jpeg" alt="" className="hover:scale-101 transition"/>
                </div>
                <div className="w-full text-black">
                    <h1 className="font-bodoni text-xl md:text:2xl lg:text-3xl font-bold">{title}</h1>
                    <p className="text-gray-600 flex items-center gap-2 mt-1">
                        <Clock className="w-5 h-5" />
                        Submited on January 10, 2025
                    </p>
                    <Share url={url} title={title} />
                    <p className="text-justify mt-3 text-gray-800">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea asperiores aliquid, mollitia facilis sapiente, non atque provident itaque officiis nam laborum at, eligendi voluptatum natus odit doloremque molestias quaerat. Soluta veniam minima provident magnam quis molestias voluptatum fugit aut. Magnam, neque animi repudiandae, esse eaque nulla id, excepturi exercitationem iure dolore asperiores deleniti nesciunt minus. Voluptates quidem minima pariatur laborum totam quaerat saepe, repellat eveniet reiciendis hic perferendis consequuntur delectus temporibus aperiam eaque minus ut porro debitis ad ipsum? Consequuntur.
                    </p>
                </div>
            </div>
            {/* <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="w-full md:max-w-[48%]">
                    <img src="/assets/beary/memes/IMG_5451.PNG" alt="" />
                </div>
                <div className="w-full md:max-w-[48%] text-black">
                    <h1 className="text-xl md:text:2xl lg:text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eligendi.</h1>
                    <a href="https://x.com/phaserbeary_xrp?s=21" className="flex flex-row items-center gap-2 text-blue-500 hover:underline mt-5">
                         <FaXTwitter className="h-5 w-5 text-black" aria-hidden="true" />
                        @phaserbeary_xrp
                    </a>
                    <p className="text-gray-700 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Submited on January 10, 2025
                    </p>
                    <p className="text-justify mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea asperiores aliquid, mollitia facilis sapiente, non atque provident itaque officiis nam laborum at, eligendi voluptatum natus odit doloremque molestias quaerat. Soluta veniam minima provident magnam quis molestias voluptatum fugit aut. Magnam, neque animi repudiandae, esse eaque nulla id, excepturi exercitationem iure dolore asperiores deleniti nesciunt minus. Voluptates quidem minima pariatur laborum totam quaerat saepe, repellat eveniet reiciendis hic perferendis consequuntur delectus temporibus aperiam eaque minus ut porro debitis ad ipsum? Consequuntur.
                    </p>
                </div>
            </div> */}
            <div className="mt-10 pb-30 md:pb-0">
                <h1 className="font-bodoni w-full text-center text-xl md:text:2xl lg:text-3xl font-bold ">Others from Artist</h1>
                <div className="columns-2 sm:columns-3 md:columns-5 lg:columns-5 gap-4 space-y-4 mt-5 px-2 md:px-30">
                    {images.map((image, index) => (
                        <div key={index} className="break-inside-avoid shadow-md hover:scale-102 transition">
                            <img
                                src={image}
                                alt={`phaser-beary-meme-${index}`}
                                className="w-full h-auto"
                                loading="eager"
                                onClick={() => router.push(`/art-gallery/detail/`)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Footer/>
        </div>
    )
}