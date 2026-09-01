import { Review } from '../../mocks/reviews/reviews-types';
import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

type OfferReviewsProps = {
  reviews: Review[];
}

function OfferReviews({reviews}: OfferReviewsProps): JSX.Element{
  const isRenderCommentForm = false;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {isRenderCommentForm && <ReviewForm />}
    </section>
  );
}

export default OfferReviews;
