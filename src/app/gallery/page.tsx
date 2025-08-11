'use client';

import { Clock } from "lucide-react";
import { FaXTwitter } from 'react-icons/fa6'
import { FaPalette } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import RevealOnScroll from "../../../components/reveal-on-scroll";

export default function ArtGallery() {
  const router = useRouter();

  const images = [
    "/assets/beary/art/1.jpeg",
    "/assets/beary/art/2.jpeg",
    "/assets/beary/art/3.jpeg",
    "/assets/beary/art/4.jpeg",
    "/assets/beary/art/5.jpeg",
    "/assets/beary/art/6.jpeg",
    "/assets/beary/art/7.jpeg",
    "/assets/beary/art/8.jpeg",
    "/assets/beary/art/9.jpeg",
    "/assets/beary/art/10.jpeg",
    "/assets/beary/art/11.jpeg",
    "/assets/beary/art/12.jpeg",
    "/assets/beary/art/13.jpeg",
    "/assets/beary/art/14.jpeg",
    "/assets/beary/art/15.jpeg",
  ]

  return (
    <div className="font-sora flex flex-col items-center min-h-screen w-auto gap-10 md:gap-20 p-5 md:p-8 pb-30 md:pb-20 sm:p-20 relative bg-white">
      <Navbar/>
      <div className="w-full flex flex-col md:flex-row justify-between gap-5 md:gap-0 mt-15 md:mt-25 lg:mt-30 text-sm md:text-md lg:text-xl">
        <button type="button" className="w-30 md:w-full block md:hidden bg-yellow-500 text-white text-sm md:text-xl hover:bg-yellow-800 hover:scale-105 font-bold py-1 px-2 md:py-2 md:px-3 rounded-lg">Submit your Art</button>
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
        </form>
        <button type="button" className="hidden md:block bg-yellow-500 text-white text-sm md:text-xl hover:bg-yellow-800 hover:scale-105 font-bold py-1 px-2 md:py-2 md:px-3 rounded-lg">Submit your Art</button>
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="text-xs md:text-sm text-red-500 text-justify mb-5 md:mb-10">
          <strong>Disclaimer: </strong>
          This website is currently under development. All images featured in the Artwork and Gallery sections are sourced from Pinterest and are used for demonstration purposes only.
        </p>
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {images.map((image, index) => (
            <RevealOnScroll direction="up" key={index} delay={100}>
              <div className="break-inside-avoid bg-black/80 shadow-sm hover:scale-102 transition rounded-2xl">
                  <img
                      src={image}
                      alt={`phaser-beary-meme-${index}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      onClick={() => router.push(`/gallery/art-detail/`)}
                  />
                  <div className="px-3 md:px-4 pt-1 pb-3 text-white text-[10px] md:text-xs">
                      <p className="text-base text-[12px] md:text-sm font-bold">Lorem ipsum dolor sit amet.</p>
                      <a href="https://x.com/phaserbeary_xrp?s=21" className="flex flex-row items-center gap-1 hover:underline">
                          <FaXTwitter className="h-3 w-3 md:h-4 md:w-4" aria-hidden="true" />
                          @phaserbeary_xrp
                      </a>
                      <p className="hidden md:block text-gray-200 flex items-start md:items-center gap-1">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          Submited on January 10, 2025
                      </p>
                      <p className="block md:hidden text-gray-200 flex items-start md:items-center gap-1">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          January 10, 2025
                      </p>
                  </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}
