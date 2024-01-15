"use client";
import Link from "next/link";
import {
  BellIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { demoData } from "@/data/demo.service";
import MovieCard from "@/components/card/MovieCard";
import ShowShopItemsModal from "@/components/common/ShowShopItemsModal";

export default function Home() {
  const [movies, setMovies] = useState([...demoData]);
  const [showShopItems, setShowShopItems] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("🚀 ~ Home ~ cart:", cart);
  }, [cart]);
function showShopModal() {
  setShowShopItems(!showShopItems);
}
  return (
    <>
      <nav className=" bg-[#111827] border-b border-[#1f2937]">
        <div className="flex justify-between max-w-5xl mx-auto px-12 py-3">
          <Link href="/" className="text-xl font-semibold" id="logo">
            CineFlix
          </Link>
          <div className="flex items-center gap-4 text-[#6b7280]">
            <BellIcon className="w-5 h-5" />
            <button className="flex relative" onClick={showShopModal}>
              <ShoppingCartIcon className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-1.5 text-xs rounded-full bg-yellow-500 px-1 font-bold w-4 h-4">
                  {cart.length}
                </span>
              )}
            </button>
            <UserCircleIcon className="w-5 h-5" />
          </div>
        </div>
      </nav>
      {/* <main className="flex min-h-screen flex-col items-center justify-between bg-[#030712] pt-5 px-12 border"> */}
      <main className="min-h-screen bg-[#030712] ">
        <section className="pt-5 px-12 pb-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.id}
                setCart={setCart}
                cart={cart}
              />
            ))}
        </section>
      </main>
      {showShopItems && <ShowShopItemsModal setCart={setCart} setModal={setShowShopItems} cart={cart} />}
    </>
  );
}
