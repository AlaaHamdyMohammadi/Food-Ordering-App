import Image from "next/image";
import Right from "../Icons/Right";

function Hero() {
  return (
    <section className="hero my-20">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything is better with a{" "}
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious join in life
        </p>
        <div className="flex items-center gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center gap-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative left-16">
        <Image
          src={"/pizza.png"}
          alt={"Pizza"}
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
    </section>
  );
}

export default Hero;
