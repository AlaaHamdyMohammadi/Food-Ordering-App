"use client";
import Image from "next/image";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    setLogin(true);

    await signIn('credentials');
    
    setLogin(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" method="POST" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={login}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={login}
        />
        <button type="submit" disabled={login}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          Or login with provider
        </div>
        <button
          className="flex items-center justify-center gap-4"
          disabled={login}
        >
          <Image src={"/google.png"} alt={"google"} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
