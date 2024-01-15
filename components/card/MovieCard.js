import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import DetailsModal from "../common/DetailsModal";
import MovieStats from "../common/MovieStats";

export default function MovieCard({ movie, setCart, cart }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(
    checkCurrentMovieIsSelected()
  );
  useEffect(() => {
    setSelectedMovie(checkCurrentMovieIsSelected());
  }, [cart]);

  function checkCurrentMovieIsSelected() {
    return cart.find((item) => item.id == movie.id) ? true : false;
  }

  function addToCart() {
    setCart((prev) => {
      // For renting, 1 user can rent 1 movie at a time, do not add if this movie already exists. Early return
      if (prev.find((item) => item.id == movie.id)) return prev;
      // Add if this movie does not exists
      return [...prev, movie];
    });
    setSelectedMovie(true);
  }

  function removeFromCart() {
    setCart((prev) => {
      // Remove if this movie exists
      return prev.filter((item) => item.id != movie.id);
    });
    setSelectedMovie(false);
  }

  function showHideModal() {
    setShowModal(true);
  }

  return (
    <>
      <div
        key={movie.id}
        className=" rounded-sm bg-[#0a101c] hover:bg-[#1f2937] cursor-pointer"
        // onClick={showHideModal}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          className="rounded-t-sm"
        />
        <div className="p-3">
          <h3>{movie.title}</h3>
          <MovieStats movie={movie} />
          <div className="flex justify-between">
            {!selectedMovie ? (
              <button
                className="flex bg-yellow-500 px-4 py-0.5 items-center rounded-sm text-black text-sm font-semibold gap-0.5"
                type="button"
                onClick={addToCart}
              >
                {" "}
                <ShoppingCartIcon className="w-4 h-4 " /> Add
              </button>
            ) : (
              <button
                className="flex bg-red-500 px-4 py-0.5 items-center rounded-sm text-white text-xs font-semibold gap-0.5"
                type="button"
                onClick={removeFromCart}
              >
                {" "}
                {/* <TrashIcon className="w-4 h-4 " />  */}
                Remove
              </button>
            )}
            <button
              className=" px-2 py-1 text-sm border border-slate-600 rounded-sm"
              type="button"
              onClick={showHideModal}
            >
              {" "}
              View details
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <DetailsModal
          movie={movie}
          setModal={setShowModal}
          addToCart={addToCart}
        />
      )}
    </>
  );
}
