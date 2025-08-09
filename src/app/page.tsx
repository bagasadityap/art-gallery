"use client";

import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Footer from "../../components/footer";

export default function Home() {
  const router = useRouter();

  const images = [
    "/assets/beary/1.png",
    "/assets/beary/2.png",
    "/assets/beary/3.png",
    "/assets/beary/4.png",
    "/assets/beary/5.png",
    "/assets/beary/6.png",
    "/assets/beary/7.png",
    "/assets/beary/7.png",
    "/assets/beary/1.png",
  ]

  return (
    <div className="font-sora flex flex-col items-center min-h-screen p-8 gap-20 pb-20 sm:p-20 relative bg-yellow-950">
    {/* <div
      className="absolute inset-0 h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/beary/main-bg.png')", filter: "sepia(90%"}}
    ></div> */}

    <Navbar/>
    <main className="relative flex flex-row w-full h-screen bg-white mt-10">
      <div className="w-[60%] flex flex-col items-center justify-center gap-5">
        <h1 className="font-bodoni text-8xl font-bold text-black text-center">
          $Phaser <br /> Art Gallery
        </h1>
        <p className="text-black mb-10">Powered by $Phaser Beary</p>
        <button className="flex bg-yellow-500 text-white text-3xl p-3 rounded-md">
          All Collections
        </button>
      </div>
      <div className="w-[35%] flex items-end">
        <Image
          width={700}
          height={100}
          src="/assets/beary/painting.png" alt="" 
        />
      </div>
    </main>

    <div className="flex flex-col items-center justify-center gap-10 bg-white px-10 py-10">
      <h1 className="font-bold text-6xl text-yellow-900">About Us</h1>
      <div className="flex flex-row items-start justify-between">
        <div className="w-[48%] flex items-center justify-center">
          <img src="/assets/beary/painting.png" alt="" className="object-cover" />
        </div>
        <div className="w-[48%]">
          <p className="font-sora text-black text-2xl text-justify">
            Phaser Beary Art Gallery is a creative space showcasing unique artworks from various artists. We blend modern touches with a playful spirit, creating captivating visual experiences. Our gallery serves as a bridge between imagination, technology, and the beauty of art for audiences of all backgrounds.
          </p> <br />
          <p className="font-sora text-black text-2xl text-justify">
            Phaser Beary Art Gallery is a creative space showcasing unique artworks from various artists.
          </p><br />
          <button className="font-gloria flex bg-yellow-500 text-white text-3xl p-3 rounded-md">
            Go to $Phaser Beary
          </button>
        </div>
      </div>
    </div>

    <div className="bg-black/70 w-full flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-6xl font-bold">Top Artists</h1>
      <div className="flex flex-row items-center justify-center gap-10">
        <img src="/assets/beary/1.png" className="w-35 h-35 rounded-full" alt="" />
        <img src="/assets/beary/2.png" className="w-35 h-35 rounded-full" alt="" />
        <img src="/assets/beary/3.png" className="w-40 h-40 rounded-full" alt="" />
        <img src="/assets/beary/4.png" className="w-35 h-35 rounded-full" alt="" />
        <img src="/assets/beary/5.png" className="w-35 h-35 rounded-full" alt="" />
      </div>
    </div>

    <div className="bg-black/70 w-full flex flex-col items-center justify-center gap-10 py-10 px-10 mb-10">
      <h1 className="text-6xl font-bold">Top Artworks</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid bg-black/50 p-1 shadow-sm hover:scale-102 transition grayscale">
                <img
                    src={image}
                    alt={`phaser-beary-meme-${index}`}
                    className="w-full h-auto object-contain"
                    loading="eager"
                    onClick={() => router.push(`/art-gallery/detail/`)}
                />
            </div>
          ))}
        </div>
    </div>

    <Footer/>
  </div>
  );
}
