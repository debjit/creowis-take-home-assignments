import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function ShowShopItemsModal({ cart, setCart, setModal }) {
  // caLCULATE the cart sum
  const totalCost = cart.reduce(
    (acc, currentItem) => acc + Number(currentItem.price),
    0
  );

  function removeFromCart(item) {
    setCart((prev) => {
      // Remove if this item exists
      return prev.filter((movie) => movie.id != item.id);
    });
  }

  function closeModal() {
    setModal((prev) => !prev);
  }

  return (
    <div className="fixed top-12 inset-0 ">
      <div className="max-w-5xl mx-auto">
        <div className=" flex flex-col p-4 gap-y-2 ml-auto justify-end max-w-64 bg-[#1f2937] rounded-md -mt-2">
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItemCol
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <div className="text-sm text-custom-slate-500">
              No movie was selected. Add movies to continue.
            </div>
          )}
          <div className="flex justify-between text-custom-slate-500">
            <div className="w-6/12 text-xs text-left flex flex-col gap-y-0.5">
              <span>Number of movies</span>
              <span className="text-sm">{cart.length}</span>
            </div>
            <div className="w-6/12 text-xs text-right flex flex-col gap-y-0.5">
              <span>Total Cost</span>
              <span className="text-sm text-white font-semibold">
                ${Number(totalCost) / 100}
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-2 gap-y-3">
            <button
              className="flex text-center justify-center bg-yellow-500 px-4 py-2 items-center rounded-sm text-black text-sm font-semibold gap-0.5"
              type="button"
              onClick={closeModal}
            >
              {" "}
              <ShoppingCartIcon className="w-4 h-4 " /> Checkout
            </button>
            <button
              className="flex text-center justify-center px-4 py-2 items-center rounded-sm text-white border text-sm font-semibold gap-0.5"
              type="button"
              onClick={closeModal}
            >
              {" "}
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItemCol({ item, removeFromCart }) {
  return (
    <div
      key={item.id}
      className="flex justify-between border-b border-b-custom-slate-500 pb-1"
    >
      <div className="flex w-10/12 items-center gap-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
          className="rounded-t-sm h-9 rounded-md"
        />
        <div className="flex flex-col">
          <span className="text-sm">{item.title}</span>
          <span className="text-xs text-custom-slate-500">{`$${
            Number(item.price || 1699) / 100
          }`}</span>
        </div>
      </div>
      <div className="w-2/12 flex items-center justify-center">
        <button className="" type="button" onClick={() => removeFromCart(item)}>
          <XMarkIcon className="w-5 h-5 text-custom-slate-500" />
        </button>
      </div>
    </div>
  );
}
