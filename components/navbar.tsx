'use client';

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  profile_picture: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      fetch("https://api.phaserbeary.xyz/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) setUser(data.user);
        })
        .catch(() => setUser(null));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="fixed text-black top-0 left-0 w-screen md:w-full bg-white shadow-md z-50">
      <div className="w-screen md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15 md:h-25">
          <div className="font-bodoni text-xl md:text-xl lg:text-3xl font-bold text-yellow-800">
            $Phaser Art Gallery
          </div>

          <div className="hidden md:flex gap-5 md:gap-6 lg:gap-10 text-md lg:text-2xl font-semibold items-center">
            <Link href="/" className="hover:text-yellow-700 transition">Home</Link>
            <Link href="#about" className="hover:text-yellow-700 transition">About</Link>
            {user && (
              <Link href="/my-art" className="hover:text-yellow-700 transition">My Art</Link>
            )}
            <Link href="/gallery" className="hover:text-yellow-700 transition">Gallery</Link>
            <Link href="/faq" className="hover:text-yellow-700 transition">FAQ</Link>

            {user ? (
              <div className="flex items-center gap-2">
                <img src={user.profile_picture} alt="Profile" className="w-10 h-10 rounded-full"/>
                <button
                  onClick={handleLogout}
                  className="bg-black text-white px-3 py-1 rounded-md hover:bg-yellow-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.push(`/auth/login`)}
                className="flex flex-row items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
              >
                Login
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-4 space-y-4 text-lg font-medium">
            <Link href="/" className="block hover:text-yellow-700 transition">Home</Link>
            <Link href="#about" className="block hover:text-yellow-700 transition">About</Link>
            {user && (
              <Link href="/my-art" className="hover:text-yellow-700 transition mb-4">My Art</Link>
            )}
            <Link href="/gallery" className="block hover:text-yellow-700 transition">Gallery</Link>
            <Link href="/faq" className="block hover:text-yellow-700 transition">FAQ</Link>

            {user ? (
              <div className="flex items-center gap-2">
                <img src={user.profile_picture} alt="Profile" className="w-10 h-10 rounded-full"/>
                <button
                  onClick={handleLogout}
                  className="bg-black text-white px-3 py-1 rounded-md hover:bg-yellow-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.push(`/auth/login`)}
                className="flex flex-row items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
