import React from "react";


interface SectionTopPartProps {
  icon: React.ReactNode;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
}

export default function SectionTopPart({
  icon,
  title1,
  title2,
  description1,
  description2,
}: SectionTopPartProps) {
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <div className="inline-flex items-center space-x-2 pr-2 bg-white rounded-full border border-[#E9EDF8] mb-4 py-0.5 justify-center">
        <div className="bg-[#284A9A] flex items-center justify-center rounded-full p-1">
          {icon}
        </div>
        <span className="text-black font-semibold text-sm">{title1}</span>
      </div>

      <h2 className="text-center text-[clamp(28px,4vw,38px)] font-semibold tracking-tight text-slate-900">
        {title2}
      </h2>

      <p className="mx-auto mt-3 max-w-[46ch] text-center text-[16px] leading-6 text-slate-600 font-medium">
        {description1}
        <br />

        {description2}
      </p>
    </div>
  );
}
