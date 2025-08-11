"use client";

import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from "../../components/footer";
import RevealOnScroll from "../../components/reveal-on-scroll";
import { FaChevronRight } from "react-icons/fa";

export default function Home() {
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
  ]

  return (
    <div className="font-sora flex flex-col items-center min-h-screen w-auto p-8 gap-10 lg:gap-20 pb-20 sm:p-20 relative bg-yellow-950">
    <div
      className="hidden md:block lg:hidden fixed inset-0 h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/beary/1.PNG')", filter: "sepia(90%"}}
    ></div>

    <Navbar/>
    <RevealOnScroll direction="up" delay={50}>
      <main className="relative flex flex-col md:flex-row justify-between w-full h-screen md:h-full bg-white mt-10 py-0 gap-5 md:gap-0">
        <div className="w-full h-full md:h-auto md:w-[65%] flex flex-col items-center justify-center">
          <RevealOnScroll direction="right" delay={150}>
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="font-bodoni text-5xl md:text-5xl lg:text-8xl font-bold text-black text-center">
                $Phaser <br /> Art Gallery
              </h1>
              <p className="text-black text-xs md:text-sm lg:text-md  mb-2 md:mb-10">Powered by $Phaser Beary</p>
              <button className="flex bg-yellow-500 text-white text-xl md:text-xl lg:text-3xl p-3 rounded-md">
                All Collections
              </button>
            </div>
          </RevealOnScroll>
        </div>
        <div className="w-full h-auto md:h-full md:w-auto md:max-w-[35%] flex items-end">
          <RevealOnScroll direction="up" delay={300}>
            <Image
              width={100}
              height={100}
              src="/assets/beary/head.PNG" alt=""
              className="h-full w-auto object-cover"
            />
          </RevealOnScroll>
        </div>
        {/* <div className="block md:hidden w-full h-auto md:h-full md:w-auto md:max-w-[35%] flex items-end">
          <RevealOnScroll direction="up" delay={300}>
            <Image
              width={100}
              height={100}
              src="/assets/beary/2.PNG" alt=""
              className="h-full w-auto object-cover"
            />
          </RevealOnScroll>
        </div> */}
      </main>
    </RevealOnScroll>

    <RevealOnScroll direction="left" delay={200}>
      <div className="flex flex-col items-center justify-center gap-10 bg-white pt-10">
        <h1 className="font-bold text-2xl md:text-6xl text-yellow-900">About Us</h1>
        <div className="flex flex-col md:flex-row items-start justify-between px-10 md:px-15">
          <div className="w-full">
            <p className="font-sora text-black text-sm md:text-lg lg:text-2xl text-justify">
              Phaser Beary Art Gallery is a dedicated platform we created to showcase and support artists who operate within the XRPL blockchain ecosystem. Our mission is to foster a vibrant and collaborative art community by providing a welcoming environment where creativity thrives. We are committed to fully supporting XRPL-based artists by offering resources, exposure, and opportunities to connect with collectors and enthusiasts alike. Through this gallery, we aim to bridge the gap between digital art and blockchain technology, empowering artists to share their unique creations in a trusted and innovative space.
            </p> <br />
            <button className="font-gloria flex items-center justify-center gap-1 bg-yellow-500 text-white text-sm md:text-2xl lg:text-3xl p-3 rounded-md">
              See $Phaser Beary <FaChevronRight/>
            </button>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center">
          <RevealOnScroll direction="right">
            <Image
              width={100}
              height={100}
              src="/assets/beary/bg-about.PNG"
              alt=""
              className="w-full h-auto object-cover" />
          </RevealOnScroll>
        </div>
      </div>
    </RevealOnScroll>
    {/* <RevealOnScroll direction="left" delay={200}>
      <div className="flex flex-col items-center justify-center gap-10 bg-white px-10 py-10">
        <h1 className="font-bold text-2xl md:text-6xl text-yellow-900">About Us</h1>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="w-full md:w-[48%] h-auto flex items-center justify-center">
            <RevealOnScroll direction="right">
              <Image
                width={100}
                height={100}
                src="/assets/beary/3.PNG"
                alt=""
                className="h-full w-auto object-cover" />
            </RevealOnScroll>
          </div>
          <div className="w-full md:w-[48%]">
            <p className="font-sora text-black text-sm md:text-xl lg:text-2xl text-justify">
              Phaser Beary Art Gallery is a creative space showcasing unique artworks from various artists. We blend modern touches with a playful spirit, creating captivating visual experiences. Our gallery serves as a bridge between imagination, technology, and the beauty of art for audiences of all backgrounds.
            </p> <br />
            <p className="font-sora text-black text-sm md:text-xl lg:text-2xl text-justify">
              Phaser Beary Art Gallery is a creative space showcasing unique artworks from various artists.
            </p><br />
            <button className="font-gloria flex items-center justify-center gap-1 bg-yellow-500 text-white text-sm md:text-2xl lg:text-3xl p-3 rounded-md">
              Go to $Phaser Beary <FaChevronRight/>
            </button>
          </div>
        </div>
      </div>
    </RevealOnScroll> */}

    <div className="bg-black w-full z-10">
      <RevealOnScroll>
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10 py-10">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Top Artists</h1>
          <div className="flex flex-row items-center justify-center gap-2 md:gap-10 grayscale">
            <RevealOnScroll direction="up" delay={150}>
              <img src="/assets/beary/1.webp" className="w-12 h-12 md:w-25 md:h-25 lg:w-35 lg:h-35 rounded-full" alt="" />
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={150}>
              <img src="/assets/beary/1.webp" className="w-12 h-12 md:w-25 md:h-25 lg:w-35 lg:h-35 rounded-full" alt="" />
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={150}>
              <img src="/assets/beary/1.webp" className="w-12 h-12 md:w-25 md:h-25 lg:w-35 lg:h-35 rounded-full" alt="" />
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={150}>
              <img src="/assets/beary/1.webp" className="w-12 h-12 md:w-25 md:h-25 lg:w-35 lg:h-35 rounded-full" alt="" />
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={150}>
              <img src="/assets/beary/1.webp" className="w-12 h-12 md:w-25 md:h-25 lg:w-35 lg:h-35 rounded-full" alt="" />
            </RevealOnScroll>
          </div>
        </div>
      </RevealOnScroll>
    </div>

    <RevealOnScroll>
      <div className="bg-black w-full flex flex-col items-center justify-center gap-10 py-10 px-5 md:px-10 mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Top Artworks</h1>
        <p className="text-xs md:text-sm text-red-500 text-justify">
          <strong>Disclaimer: </strong>
          This website is currently under development. All images featured in the Artwork and Gallery sections are sourced from Pinterest and are used for demonstration purposes only.
        </p>
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
            {images.map((image, index) => (
              <div key={index} className="break-inside-avoid p-1 shadow-sm hover:scale-102 transition">
                  <RevealOnScroll direction="up" delay={50}>
                    <img
                        src={image}
                        alt={`phaser-beary-meme-${index}`}
                        className="w-full h-auto object-contain"
                        loading="eager"
                        onClick={() => router.push(`/art-gallery/detail/`)}
                    />
                  </RevealOnScroll>
              </div>
            ))}
          </div>
      </div>
    </RevealOnScroll>

    <Footer/>
  </div>
  );
}
