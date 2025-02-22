import Link from "next/link";
import Dropdown from "./components/dropdown";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Dropdown />
      <div className='flex gap-12 w-full h-full'>
        <div className='group flex flex-col justify-between my-auto p-8 border hover:border-r-6 hover:border-b-6 rounded-3xl w-1/2 h-1/2 transition-all'>
          <div>
            <div className='text-2xl tracking-widest'>✨UI Components✨</div>
            <div className='mt-4 text-5xl text-balance leading-tight'>100 UI Templates Code For Faster Development! </div>
          </div>
          <Link href={'./allComponents'} className='group-hover:bg-amber-400 flex place-content-center bg-white hover:bg-amber-300 py-4 border-2 border-neutral-200 rounded-md w-full font-bold text-black text-xl capitalize active:scale-95 transition-all cursor-pointer'>Browse All</Link>
        </div>
        <div className='bg-neutral-50 w-full h-full overflow-clip'>

        </div>
      </div>
    </div>
  );
}
