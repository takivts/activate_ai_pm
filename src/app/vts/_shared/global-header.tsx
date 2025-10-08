"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalHeader() {
  const url = usePathname();
  const isInsights = url?.includes("/vts/insights");
  const isMarket = url?.includes("/vts/market");
  const isLease = url?.includes("/vts/lease");
  const isActivate = url?.includes("/vts/activate");

  const handleLogout = () => {
    // Logout functionality disabled
    console.log("Logout clicked");
  };

  return (
    <div className="flex h-[50px] items-center bg-black px-4">
      <Link href="/">
        <Image
          src="/VTS-Logo_Horizontal_White.svg"
          alt="VTS Logo"
          width={100}
          height={100}
          className="h-6 object-contain"
        />
      </Link>
      <span className="flex h-full items-center text-xs font-bold text-white uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
      <span className="mx-3 border-r border-white/50 py-3" />
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-extrabold tracking-[0.05em] text-white uppercase ${
          isMarket ? "border-vts-primary bg-white/10" : ""
        }`}
      >
        <Link className="py-2" href="/vts/market">
          Market
        </Link>
      </span>
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-extrabold tracking-[0.05em] text-white uppercase ${
          isLease ? "border-vts-primary bg-white/10" : ""
        }`}
      >
        <Link className="py-2" href="/vts/lease">
          Lease
        </Link>
      </span>
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-extrabold tracking-[0.05em] text-white uppercase ${
          isInsights ? "border-vts-primary bg-white/10" : ""
        }`}
      >
        <Link className="py-2" href="/vts/insights">
          Insights
        </Link>
      </span>
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-extrabold tracking-[0.05em] text-white uppercase ${
          isActivate ? "border-vts-primary bg-white/10" : ""
        }`}
      >
        <Link className="py-2" href="/vts/activate">
          Activate
        </Link>
      </span>
      <span className="flex h-full cursor-pointer items-center border-t-6 border-transparent px-3 text-xs font-extrabold tracking-[0.05em] text-white uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        Search
      </span>

      <div className="mr-16 flex flex-auto items-center justify-end gap-4 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
          />
        </svg>

        <button
          onClick={handleLogout}
          className="size-8 cursor-pointer rounded-full bg-white text-sm font-bold text-black"
          title="Logout"
        >
          JD
        </button>
      </div>
      <span className="absolute top-4 right-4 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full bg-yellow-400 text-2xl font-bold text-black transition-all duration-200 hover:bg-yellow-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </span>
    </div>
  );
}