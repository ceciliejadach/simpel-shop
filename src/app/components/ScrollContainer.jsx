import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ScrollContainer = ({ reviews }) => {
  return (
    <ul className="flex gap-2 justify-center pt-[6rem] md:justify-center col-start-1 col-end-4 max-[600px]:grid-cols-2 max-[600px]:grid-end-3 max-[430px]:flex-wrap">
      {reviews.map((review, id) => (
        <li
          key={id}
          className="bg-gray-100 rounded-md h-fit w-58 grid gap-3 p-5 hover:scale-105 max-[400px]:w-44"
        >
          <div className="grid gap-4">
            <h2 className="text-xl">
              <strong>{review.reviewerName}</strong>
            </h2>
            <p>{review.comment}</p>
          </div>
          <div className="flex gap-1 justify-self-center">
            {Array.from({ length: 5 }, (_, index) => {
              if (index < Math.floor(review.rating)) {
                return <FaStar key={index} color="#3C35FF" size={20} />;
              } else if (
                index < Math.floor(review.rating) + 1 &&
                review.rating % 1 >= 0.5
              ) {
                return <FaStarHalfAlt key={index} color="#3C35FF" size={20} />;
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
  );
};

export default ScrollContainer;
