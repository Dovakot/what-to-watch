import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {setPosterAlt} from '../../../../utils/film-util';

function Poster({modifier, name, poster}) {
  const posterClass = cn('film-card__poster', {
    [`film-card__poster--${modifier}`]: modifier,
  });
  const alt = setPosterAlt(name);

  return (
    <div className={posterClass}>
      <img
        src={poster}
        alt={alt}
        width={218}
        height={327}
      />
    </div>
  );
}

Poster.propTypes = {
  modifier: PropTypes.string,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Poster;
