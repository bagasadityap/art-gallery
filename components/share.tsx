'use client';

import React from "react";
import { Instagram, Copy } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

export default function Share({ url = "", title = "" }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link berhasil disalin!");
  };

  return (
    <div className="flex gap-2 mt-2">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 bg-black text-white px-2 py-2 rounded-3xl hover:opacity-80"
      >
        <FaXTwitter size={16} />
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white px-2 py-2 rounded-3xl hover:opacity-80"
      >
        <Instagram size={16} />
      </a>

      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 bg-green-500 text-white px-2 py-2 rounded-3xl hover:opacity-80"
      >
        <FaWhatsapp size={16} />
      </a>

      <button
        onClick={copyLink}
        className="flex items-center gap-1 bg-gray-600 text-white px-2 py-2 rounded-3xl hover:opacity-80"
      >
        <Copy size={16} />
      </button>
    </div>
  );
}
