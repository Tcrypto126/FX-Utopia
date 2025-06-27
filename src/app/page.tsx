import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden select-none z-0">
      <Image
        src="/assets/home/hero-top.png"
        width={1440}
        height={600}
        alt="hero-top"
        className="absolute top-0 left-[50%] -translate-x-[55%] z-0"
      />
      <Image
        src="/assets/home/hero-left-top-light.png"
        width={519}
        height={519}
        alt="top-left"
        className="absolute top-0 left-0 z-10 "
      />
      <Image
        src="/assets/home/hero-right-top-light.png"
        width={502}
        height={580}
        alt="right-left"
        className="absolute top-0 right-0 z-10"
      />
      <Image
        src="/assets/home/hero-left.png"
        width={259}
        height={321}
        alt="left"
        className="absolute top-[85px] left-0 z-20"
      />
      <Image
        src="/assets/home/hero-right.png"
        width={175}
        height={338}
        alt="left"
        className="absolute top-[284px] right-0 z-20"
      />
      <Image
        src="/assets/home/hero-bottom.png"
        width={1600}
        height={560}
        alt="left"
        className="absolute bottom-0 left-[50%] -translate-x-[50%] z-0"
      />
    </div>
  );
}
