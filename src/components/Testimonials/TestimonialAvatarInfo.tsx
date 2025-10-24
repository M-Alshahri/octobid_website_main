import Image from "next/image";

interface ComponentProps {
  avatarUrl: string;
  author: string;
  role: string;
  companyIcon?: string;
}

export default function TestimonialAvatarInfo({
  avatarUrl,
  author,
  role,
  companyIcon,
}: ComponentProps) {
  return (
    <div className="flex items-end gap-3">
      <Image
        src={avatarUrl}
        alt={author}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-sm">{author}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>

      {/* If campany logo, please it at the right end */}

      {companyIcon && (
        <div className="ml-auto">
          <Image
            src={companyIcon}
            alt={`${author} company logo`}
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
