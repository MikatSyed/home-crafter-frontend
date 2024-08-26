import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Form from '../Forms/Form';
import toast, { Toaster } from 'react-hot-toast';
import { TiTickOutline } from 'react-icons/ti';
import FormTextArea from '../Forms/FormTextArea';
import { useAddReviewMutation } from '@/redux/api/reviewApi';
import Spinner from './Spinner';

interface Review {
  rating: number;
  comment: string;
}
interface ServiceCardProps {
    serviceId: string; // 
  }
  

const Review: React.FC<ServiceCardProps> = ({serviceId}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [addReview] = useAddReviewMutation();
  const [loading, setLoading] = useState<boolean>(false);  

  const onSubmit = async (values: any) => {
    if (rating > 0 && values.comment.trim() !== '') {
      const reviewData = { rating, comment: values.comment,serviceId };
      
     console.log(reviewData,'24')
      try {
        setLoading(true);  
        const res: any = await addReview(reviewData).unwrap();
        if (res && res.data) {
            setLoading(false);
          toast("Review submitted successfully", {
            icon: <span style={{ marginRight: -8, fontSize: 22 }}><TiTickOutline/></span>,
            style: {
              borderRadius: "10px",
              background: "#4f46e5",
              color: "#fff",
            },
            duration: 2000, 
          });
          setReviews([...reviews, reviewData]);
          setRating(0);
        }
      } catch (err: any) {
        console.error(err);
        toast.error("Failed to submit review", {
          style: {
            borderRadius: "10px",
            background: "#e74c3c",
            color: "#fff",
          },
          duration: 2000,
        });
      }
    } else {
      toast.error("Please add a rating and comment", {
        style: {
          borderRadius: "10px",
          background: "#e74c3c",
          color: "#fff",
        },
        duration: 2000,
      });
    }
  };

  return (
   <div>
     <Toaster position="top-center" reverseOrder={false} />
     <div className="mt-8">
      <h5 className="text-2xl font-semibold mb-4">Reviews</h5>

      <Form submitHandler={onSubmit}>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="hidden"
                />
                <FaStar
                  className="cursor-pointer"
                  color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                  size={30}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
        </div>

        <FormTextArea name="comment" rows={5} placeholder="Add a comment" />

        <button
          type="submit"
          className={` text-white  bg-[#4f46e5] inline-flex items-center justify-center px-4 py-2 rounded text-md border border-[#4f46e5] ${
            loading
              ? 'w-[150px]   opacity-50 cursor-not-allowed inline-flex justify-center items-center'
              : ''
          }`}
          disabled={loading}
        >
           {loading ? <Spinner /> : 'Submit Review'} 
        </button>
      </Form>
    </div>
   </div>
  );
};

export default Review;