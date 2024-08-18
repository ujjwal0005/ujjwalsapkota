import Image from "next/image";
import hero from "@/components/hero";

export default function Home() {
  return (
 <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
  <div className="max-w-7xl w-full">
    <div>
      <hero />
    </div>
  </div>
 </main>
  );
}
