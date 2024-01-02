import Image from "next/image";

function MenuItem() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-gray-200 transition-all hover:shadow-2xl hover:shadow-black/30">
      <div className=" ">
        <Image
          className="block mx-auto"
          src={"/pizza.png"}
          alt={"Pizza"}
          width={100}
          height={100}
        />
      </div>
      <h4 className="font-semibold my-2 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Pizza is the missing piece that makes every day complete, a simple yet
        delicious join in life
      </p>
      <button className="bg-primary my-3 text-white rounded-full px-8 py-2">
        Add to cart
      </button>
    </div>
  );
}

export default MenuItem;
