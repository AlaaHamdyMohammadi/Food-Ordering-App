import Image from "next/image";
import MenuItem from "../Menu/MenuItem";

function Menu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0  w-full">
        <div className="absolute left-0 -top-[70px] -z-10">
          <Image src={"/sallad1.png"} alt={"sallad"} width={109} height={189} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10 ">
          <Image src={"/sallad2.png"} alt={"sallad"} width={107} height={195} />
        </div>
      </div>
      <div className="text-center">
        <h3 className="leading-4 uppercase text-gray-500 font-semibold">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 my-10">
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>

      </div>
    </section>
  );
}

export default Menu;
