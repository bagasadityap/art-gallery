'use client';

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const toggleForm = () => setIsRegister(!isRegister);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setError("Oops, something went wrong. Please try again.");
      return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const password_confirmation = formData.get("password") as string;

    if (isRegister) {
      const password_confirmation = formData.get("password_confirmation") as string;
      if (password !== password_confirmation) {
        setError("Passwords do not match!");
        return;
      }
    }

    try {
      const endpoint = isRegister ? "http://127.0.0.1:8000/api/register" : "http://127.0.0.1:8000/api/login";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, password_confirmation }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      localStorage.setItem("token", data.token);
      setError("");
      form.reset();
      router.push("/my-art");
    } catch (err) {
      console.error(err);
      setError("Failed to connect. Please try again.");
    }
  };

  return (
    <div className="bg-black flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width={100}
          height={100}
          alt="Your Company"
          src="/assets/beary/1.PNG"
          className="mx-auto h-30 w-auto object-contain"
          style={{ filter: "sepia(80%)" }}
        />
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">$Phaser Beary</h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          {isRegister ? "Create a new account" : "Sign in to your account"}
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div style={{ display: "none" }}>
            <input
              type="text"
              name="email_address"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-100">Username</label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete={isRegister ? "new-password" : "current-password"}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
              />
            </div>
          </div>

          {isRegister && (
            <div>
              <label htmlFor="password_confirmation" className="block text-sm/6 font-medium text-gray-100">Confirm Password</label>
              <div className="mt-2">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  autoComplete="new-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                />
              </div>
            </div>
          )}

          {error && <p className="text-red-500">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
            >
              {isRegister ? "Register" : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={toggleForm} className="font-semibold text-yellow-400 hover:text-yellow-300">
            {isRegister ? "Sign in" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}
