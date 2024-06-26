import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-52 w-full flex flex-col justify-center">
      <div className="flex flex-col items-center gap-4">
        <button className="uppercase border-t-4 font-medium text-2xl border-r-8 border-b-8 border-l-4 rounded-xl border-black px-5 py-1">
          buy $AUB
        </button>
      </div>
      <div className="w-[99vw] overflow-hidden">
        <div className="mt-36 overflow-hidden scrollAnimation bg-positions bg-repeat-x bg-scroll bg-[url('/cropped.png')] bg-contain h-80 -mb-10 w-[200vw]" />
      </div>
    </footer>
  );
}
