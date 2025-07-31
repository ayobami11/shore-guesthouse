import { roboto } from "@/app/fonts";

export default function BookPage() {
  return (
    <div className="mt-12 min-h-[200px] flex justify-center items-center">
      <button className={`${roboto.className} bg-black text-white cursor-pointer text-xl transition-all py-6 px-8 rounded-4xl hover:bg-[#e5cbad]`}>Book Now</button>
    </div>
  );
}
