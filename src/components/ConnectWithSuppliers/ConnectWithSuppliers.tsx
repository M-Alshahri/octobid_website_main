"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

export type RingIcon = { src: string; alt: string };

interface PageProps {
  logoSrc: string;
  ringIcons: RingIcon[];
}

export default function ConnectWithSuppliersSection({
  logoSrc,
  ringIcons,
}: PageProps) {
  const t = useTranslations("connectWithSuppliers");
  // Absolute positions for the 5 orbiting icons (responsive safe areas)
  // Each item: [left%, top%] within the ring wrapper.
  const positions: [number, number][] = [
    [0, 50], // left-middle
    [15, 75], // bottom-left
    [50, 85], // bottom-center
    [85, 75], // bottom-right
    [90, 50], // right-middle
  ];

  return (
    <section
      aria-labelledby="connect-suppliers-title"
      className="relative isolate overflow-hidden"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-20 sm:py-24 text-center">
        {/* Pill */}

        <div className="flex justify-center text-center items-center">
          {/* Subtle floating clover shapes (decor) */}
          <div className="mr-5 sm:mr-20">
            <Image
              src="/images/vector1.png"
              alt="Decorative vector"
              width={25}
              height={25}
              className="h-6 w-6 object-contain"
            />
          </div>
          <div className="flex flex-col justify-center text-center items-center">
            <div className="inline-flex items-center space-x-2 pr-2 bg-white rounded-full  border border-[#E9EDF8] mb-4 py-0.5 justify-center">
              <div className="bg-[#284A9A] flex items-center justify-center rounded-full p-1">
                <IoCartOutline className="w-5  h-5 text-white" />
              </div>
              <span className="text-black font-semibold text-sm">
                {t("badge")}
              </span>
            </div>

            {/* Heading */}
            <h2
              id="connect-suppliers-title"
              className="text-center text-[clamp(28px,4vw,38px)] font-semibold tracking-tight text-slate-900"
            >
              {t("title")}
            </h2>

            {/* Subheading */}
            <p className="mx-auto mt-3 max-w-[46ch] text-center text-[15px] leading-6 text-slate-600">
              {t("description")}
            </p>
          </div>
          <div className="ml-5 sm:ml-20">
            <Image
              src="/images/vector1.png"
              alt="Decorative vector"
              width={25}
              height={25}
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>

        {/* Orbital ring with logo and icons */}
        <div className="relative mt-0 mx-auto aspect-square w-full max-w-[560px]">
          {/* Center logo */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-center">
            <Image
              src={logoSrc}
              alt="Octobid logo"
              width={450}
              height={450}
              className="h-112 w-112 sm:min-w-112  object-contain"
            />
          </div>

          {/* Orbiting icons */}
          {ringIcons.slice(0, 5).map((icon, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300"
              style={{
                left: `${positions[i][0]}%`,
                top: `${positions[i][1]}%`,
              }}
            >
              <div className="rounded-2xl shadow-md">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-xl object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
