import React from 'react';

import {DateFormat} from '../../../../../const';
import {getFormattedDate} from '../../../../../utils/date-util';
import reviewProp from '../../../../../props/review-prop';

function Review({
  review: {comment, user, date, rating},
}) {
  const machineDate = getFormattedDate(date, DateFormat.MACHINE_DATE);
  const reviewDate = getFormattedDate(date, DateFormat.DATE);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}<br /><br />
        </p>

        <footer className="review__details">
          <cite className="review__author">
            {user.name}
          </cite>
          <time className="review__date"
            dateTime={machineDate}
          >
            {reviewDate}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">
        {rating}
      </div>
    </div>
  );
}

Review.propTypes = {
  review: reviewProp.isRequired,
};

export default Review;
