export default function StatisticsElement(props: {
  text1: string;
  text2: string;
}) {
  const { text1, text2 } = props;
  return (
    <div className="flex items-center">
      <div className="flex-1 min-w-0 text-center px-2">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {text1}
        </div>
        <div className="text-xs sm:text-sm text-gray-500">{text2}</div>
      </div>

      {/* Vertical divider */}
      <div className="block w-px h-[80px] sm:h-[100px] bg-gray-300"></div>
    </div>
  );
}
