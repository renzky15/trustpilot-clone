export default function Separator() {
  return (
    <div className="relative flex flex-col items-center justify-center my-8 sm:my-12 max-w-6xl mx-auto w-full px-2">
      <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300 z-0"></div>
      <a
        href="#"
        className="text-xs border border-gray-300 px-4 py-3 sm:px-7 sm:py-3.5 sm:text-base lg:text-base rounded-full bg-white relative z-10 w-full max-w-xs sm:max-w-fit text-center"
      >
        Sie haben kürzlich etwas gekauft?{" "}
        <span className="text-blue-600 hover:text-blue-800">
          Bewertung abgeben →
        </span>
      </a>
    </div>
  );
}
