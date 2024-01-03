import Image from "next/image";

function RegisterPage() {
  return (
    <section>
      <h1 className="text-center text-primary text-4xl"> Register</h1>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">Or login with provider</div>
        <button className="flex items-center justify-center gap-4">
        <Image src={"/google.png"} alt={"google"} width={24} height={24} />
        Login with google
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
