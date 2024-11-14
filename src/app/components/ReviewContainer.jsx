import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ScrollContainer = ({ reviews }) => {
  return (
    <ul className="flex gap-2 justify-center pt-[7rem] ">
      {reviews.map((review, id) => (
        <li key={id} className="bg-primary-gray rounded-md h-fit w-64 grid gap-3 p-5 hover:scale-105">
          <div className="grid gap-4">
            <h2 className="text-xl">
              <strong>{review.reviewerName}</strong>
            </h2>
            <p>{review.comment}</p>
          </div>
          <div className="flex gap-1 justify-self-center">
            {Array.from({ length: 5 }, (_, index) => {
              if (index < Math.floor(review.rating)) {
                return <FaStar key={index} color="#B4C7F2" size={20} />;
              } else if (index < Math.floor(review.rating) + 1 && review.rating % 1 >= 0.5) {
                return <FaStarHalfAlt key={index} color="#B4C7F2" size={20} />;
              } else {
                return <FaRegStar key={index} color="#B4C7F2" size={20} />;
              }
            })}
          </div>
          <p className="justify-self-end">{new Date(review.date).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  );
};

export default ScrollContainer;
