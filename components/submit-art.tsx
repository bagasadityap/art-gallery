'use client'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { FaXTwitter } from "react-icons/fa6"

interface User {
  id: string;
  twitter_username: string;
}

export default function SubmitArt() {
  const [open, setOpen] = useState(false)
  const [fileName, setFileName] = useState("Choose file");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://api.phaserbeary.xyz/api/user', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setUser(data.user)
      })
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        setFileName(e.target.files[0].name);
    } else {
        setFileName("Choose file");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const res = await fetch('https://api.phaserbeary.xyz/api/art/create', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Error response:", text);
      return;
    }

    const data = await res.json();
    console.log(data.message);
  };

  return (
    <>
      <Button
        className="bg-yellow-500 text-white text-sm md:text-xl hover:bg-yellow-800 hover:scale-105 font-bold py-1 px-2 md:py-5 md:px-3 rounded-lg"
        onClick={() => setOpen(true)}
      >
        Submit your Art
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] py-6 px-2">
          <ScrollArea className="h-[70vh] px-4">
            <DialogTitle className="text-2xl font-bold">Art Submission Form</DialogTitle>
            <hr className="mb-4"/>

            <form onSubmit={handleSubmit}>
                {user ? (
                  <input type="text" name="artist_id" id="artist_id" value={user.id} className="p-2 bg-yellow-500 rounded-e-lg" hidden />
                ) : (
                  null
                )}
                <div className="flex flex-row items-center mb-2">
                    <label htmlFor="twitter_username" className="bg-black font-semibold p-2 text-white rounded-s-lg">
                        <FaXTwitter className="h-6 w-6 text-white" aria-hidden="true" />
                    </label>
                    {user ? (
                      <input type="text" name="twitter_username" id="twitter_username" value={user.twitter_username} className="p-2 bg-yellow-500 rounded-e-lg" readOnly />
                    ) : (
                      <input type="text" name="twitter_username" id="twitter_username" value="" className="p-2 bg-yellow-500 rounded-e-lg" readOnly />
                    )}
                </div>
                <div className="flex flex-col w-full mb-2">
                    <small className="mt-1 text-red-500">*Maximum file size 2MB</small>
                    <div className="flex flex-row items-center w-full">
                        <label
                        className="bg-black font-semibold p-2 text-white rounded-l-lg cursor-pointer"
                        htmlFor="image"
                        >
                        File*
                        </label>
                        <div className="relative w-full">
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="absolute inset-0 w-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            required
                        />
                        <div className="p-2 bg-gray-200 rounded-r-lg pointer-events-none">
                            {fileName}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center w-100 md:w-full mb-2">
                    <label htmlFor="title" className="bg-black font-semibold p-2 text-white rounded-s-lg">
                        Title*
                    </label>
                    <input type="text" name="title" id="title" className="w-full p-2 bg-gray-200 rounded-e-lg" required/>
                </div>
                <div className="flex flex-col w-100 md:w-full mb-2">
                    <label htmlFor="description" className="w-full bg-black font-semibold p-2 text-white rounded-t-lg">
                        Description*
                    </label>
                    <textarea name="description" id="description" className="w-full h-30 p-2 bg-gray-200 rounded-b-lg text-sm" required></textarea>
                </div>
                <div className="flex flex-row gap-2 mb-5">
                    <input type="checkbox" name="" id="" className="h-5 w-5" required/>
                    <p className="text-xs text-red-500 text-justify px-1">*I certify that this submission is entirely my own original work. I understand and agree that the platform holds no responsibility for the content of any works submitted.</p>
                </div>
                <div className="mb-2">
                    <button type="submit" className="bg-yellow-300 hover:bg-yellow-500 font-semibold py-2 px-3 rounded-lg">Submit</button>
                </div>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  )
}
