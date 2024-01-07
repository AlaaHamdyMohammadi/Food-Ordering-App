"use client";

import Image from "next/image";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  

  async function handleSubmit(e) {
    e.preventDefault();
    setCreatingUser(true);
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    setCreatingUser(false);
  }

  return (
    <section>
      <h1 className="text-center text-primary text-4xl"> Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          Or login with provider
        </div>
        <button className="flex items-center justify-center gap-4">
          <Image src={"/google.png"} alt={"google"} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
