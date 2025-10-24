import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureElementProps {
  imageUrl: string;
  title: string;
  description: string;
  imageColor?: string;
}

export default function FeatureElement({
  imageUrl,
  title,
  description,
  imageColor = "#E0E7FF",
}: FeatureElementProps) {
  return (
    <div className="text-left text-black">
      <div
        className={cn(
          "w-12 h-12 rounded-lg mb-4 shadow-sm p-2 flex items-center justify-center",
          `bg-[${imageColor}]`
        )}

        style={{ backgroundColor: imageColor }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={28}
          height={28}
          className="w-7 h-7 object-contain"
        />
      </div>
      <h3 className="font-semibold text-xl mb-5">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
