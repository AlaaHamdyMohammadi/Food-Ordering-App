import Link from "next/link";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import Menu from "@/components/Layout/Menu";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <Menu/>
    </>
  );
}
