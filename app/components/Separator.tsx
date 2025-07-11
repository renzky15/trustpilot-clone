export default function Separator() {
  return (
    <div className="relative flex justify-center my-12">
      <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300 z-0"></div>
      <a
        href="#"
        className="text-sm border border-gray-300 p-3.5 rounded-full bg-white relative z-10"
      >
        Sie haben kürzlich etwas gekauft?{" "}
        <span className="text-blue-600 hover:text-blue-800">
          Bewertung abgeben →{" "}
        </span>
      </a>
    </div>
  );
}
