import Image from "next/image";
import { Greet } from "../components/Greet";
import { Counter } from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Greet />
      <Counter />
      <Link href={"/about"}>About</Link>
    </div>
  );
}
