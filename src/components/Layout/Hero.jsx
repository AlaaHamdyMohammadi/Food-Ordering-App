import Image from "next/image";
import Right from "../Icons/Right";

function Hero() {
  return (
    <section className="grid grid-cols-2 my-20">
      <div className="">
        <h1 className="text-4xl font-semibold">
          Everything is better with a Pizza
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious join in life
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-primary flex gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex gap-2 text-gray-600 font-semibold">
            Learn more 
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
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
