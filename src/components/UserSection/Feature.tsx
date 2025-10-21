import Image from "next/image";

export default function Feature(props: {
    image: string;
    title: string;
    description: string;
}) {


    const { image, title, description } = props;
  return (
    <div className="flex items-start space-x-4">
      <Image
        src={image}
        alt="Sign Up"
        width={40}
        height={40}
        className="w-12 h-12 object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
            {description}
        </p>
      </div>
    </div>
  );
}
