import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAddMutation } from "./api";

const ProductCard = React.forwardRef(({ product }, ref) => {
  const addMutation = useAddMutation();
  const handleAddToBaskett = (event) => {
    event.preventDefault();
    addMutation.mutate({quantity: 1, product_id: product.id, variation_id: null});
    document.getElementById("my_modal_3").showModal();
  };
  const productContent = (
    <div className="p-2 border flex flex-row gap-4 items-center w-full">
      <h2>{product.name}</h2>
      <Link to={`/products/${product.id}`} className="btn btn-sm">
        مشاهده{" "}
      </Link>
      <button className="btn btn-sm" onClick={handleAddToBaskett}>
        افزودن به سبد
      </button>
      {/*dialog*/}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">تبریک میگم!</h3>
          <p className="py-4">خریدت به سبد اضافه شد:)</p>
        </div>
      </dialog>
    </div>
  );
  const content = ref ? (
    <article className="article" ref={ref}>
      {productContent}
    </article>
  ) : (
    <article className="article">{productContent}</article>
  );
  return content;
});

export default ProductCard;
