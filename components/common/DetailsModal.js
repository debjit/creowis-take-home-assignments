import React from "react";
import MovieStats from "./MovieStats";
import { ShoppingCartIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function DetailsModal({ movie, setModal, addToCart }) {
  const year = new Date(movie.release_date).getFullYear();
  return (
    <div className="fixed inset-0 bg-black/90 ">
      <div className="flex mx-auto justify-center items-center h-full">
        <div className="bg-[#1f2937] min-w-[496px] w-4/12 py-6 pl-6 pr-4 rounded-sm  relative">
          <button
            onClick={() => setModal(false)}
            className="absolute top-3 right-3"
          >
            <XCircleIcon className="w-4 h-4 " />
          </button>
          <div className="flex gap-3">
            <div className="w-4/12 flex flex-col ">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className="rounded-t-sm h-4/5"
              />
              <button
                className="flex bg-yellow-500 px-4 py-1.5 items-center rounded-sm text-black text-sm font-semibold gap-0.5 justify-center mt-3"
                type="button"
                onClick={addToCart}
              >
                {" "}
                <ShoppingCartIcon className="w-4 h-4 " /> Add to cart
              </button>
            </div>
            <div className="w-8/12 flex flex-col ">
              <h3 className="text-xl">{movie.title}</h3>
              <p className="text-xs pt-1">{year}</p>
              <MovieStats movie={movie} className={" text-white"} />
              <p className="text-white text-xs leading-5 overflow-auto">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
