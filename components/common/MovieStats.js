import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function MovieStats({ movie, className }) {
  return (
    <div className="flex  items-center text-xs text-[#6b7280] mt-1 mb-3">
      <span className="capitalize">{movie.genre}</span>
      <span className="mx-2 w-1 h-1 bg-[#6b7280] rounded-full"></span>
      <span className=" flex items-center gap-0.5">
        <StarIcon className="w-3 h-3" />
        {movie.vote_average}{" "}
      </span>
      <span className="mx-2 w-1 h-1 bg-[#6b7280] rounded-full"></span>
      <span>{`$${Number(movie.price || 1699) / 100}`}</span>
    </div>
  );
}
