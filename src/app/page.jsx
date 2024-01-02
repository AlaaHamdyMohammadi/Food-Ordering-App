import Header from "@/components/Layout/Header";
import Hero from "@/components/Layout/Hero";
import Menu from "@/components/Layout/Menu";
import About from "@/components/Layout/About";
import Contact from "@/components/Layout/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <About/>
      <Contact/>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All right reserved
      </footer>
    </>
  );
}
