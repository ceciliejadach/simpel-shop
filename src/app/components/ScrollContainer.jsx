import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ScrollContainer = ({ reviews }) => {
  return (
    <>
      <h2 className="text-center">Reviews</h2>
      <ul className="flex gap-2 justify-center my-8 flex-wrap">
        {reviews.map((review, id) => (
          <li key={id} className="bg-[#EFEEFF] rounded-md h-fit w-58 grid gap-3 p-4  max-[400px]:w-44">
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
                } else if (index < Math.floor(review.rating) + 1 && review.rating % 1 >= 0.5) {
                  return <FaStarHalfAlt key={index} color="#3C35FF" size={20} />;
                } else {
                  return <FaRegStar key={index} color="#3C35FF" size={20} />;
                }
              })}
            </div>
            <p className="justify-self-end">{new Date(review.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ScrollContainer;
