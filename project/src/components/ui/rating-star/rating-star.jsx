import React from 'react';
import PropTypes from 'prop-types';

const setStarCount = (count) => `star-${count}`;

function RatingStar({count}) {
  return (
    <>
      <input
        className="rating__input"
        id={setStarCount(count)}
        type="radio"
        name="rating"
        defaultValue={count}
      />
      <label className="rating__label" htmlFor={setStarCount(count)}>
        Rating {count}
      </label>
    </>
  );
}

RatingStar.propTypes = {
  count: PropTypes.number.isRequired,
};


export default RatingStar;