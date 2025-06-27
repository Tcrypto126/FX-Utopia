import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden border">
      <Image
        src="/assets/home/hero-top.png"
        width={1440}
        height={600}
        alt="hero-top"
        className="border absolute top-0 left-[50%] -translate-x-[55%]"
      />
      <Image
        src="/assets/home/hero-left-top-light.png"
        width={519}
        height={519}
        alt="top-left"
        className="absolute top-0 left-0 border"
      />
      <Image
        src="/assets/home/hero-right-top-light.png"
        width={502}
        height={580}
        alt="right-left"
        className="absolute top-0 right-0 border"
      />
      <Image
        src="/assets/home/hero-left.png"
        width={259}
        height={321}
        alt="left"
        className="absolute top-0 left-0 border"
      />
    </div>
  );
}
