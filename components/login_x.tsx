'use client'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FaXTwitter } from "react-icons/fa6"

export default function LoginWithX({ open, setOpen }) {
  const handleLogin = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/auth/twitter');
    const data = await res.json();
    window.location.href = data.auth_url;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl max-h-[90vh] py-6 px-2">
        <DialogTitle className="text-2xl font-bold">Login</DialogTitle>
        <div className="w-full flex flex-col justify-center items-center">
          <button
            onClick={handleLogin}
            className="bg-black p-3 flex items-center gap-2 text-white rounded-md hover:bg-yellow-700 transition"
          >
            Login
            <FaXTwitter />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
