"use client";

import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ReviewContainer = ({ reviews }) => {
  return (
    <>
      <section className="px-2 min-[801px]:col-start-2 min-[801px]:col-end-4">
        <h2 className="text-center font-semibold pt-6 text-4xl">Reviews</h2>
        <ul className="flex gap-4 justify-center my-8 flex-wrap">
          {reviews.map((review, id) => (
            <li
              key={id}
              className="bg-[#EFEEFF] rounded-md h-fit min-[401px]:w-60 min-[500px]:p-6 grid gap-3 p-6  max-[400px]:w-44"
            >
              <div className="grid gap-4">
                <h2 className="text-xl text-black">
                  <strong>{review.reviewerName}</strong>
                </h2>
                <p className="text-black">{review.comment}</p>
              </div>
              <div className="flex gap-1 justify-self-center">
                {Array.from({ length: 5 }, (_, index) => {
                  if (index < Math.floor(review.rating)) {
                    return <FaStar key={index} color="#3C35FF" size={20} />;
                  } else if (
                    index < Math.floor(review.rating) + 1 &&
                    review.rating % 1 >= 0.5
                  ) {
                    return (
                      <FaStarHalfAlt key={index} color="#3C35FF" size={20} />
                    );
                  } else {
                    return <FaRegStar key={index} color="#3C35FF" size={20} />;
                  }
                })}
              </div>
              <p className="justify-self-end">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ReviewContainer;
