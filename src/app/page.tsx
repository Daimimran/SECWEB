
import Link from "next/link";
import Hero from "./components/hero";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <main className="max-w-7xl mx-12 ">
    <Hero />
    <Navbar />

    </main>
  );
}
