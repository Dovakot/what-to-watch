import React from 'react';
import PropTypes from 'prop-types';

import {
  FILM_PROP
} from '../../../const';

import Logo from '../../ui/logo/logo';
import FilmList from '../../ui/film-list/film-list';
import PageFooter from '../../ui/page-footer/page-footer';
import UserBlock from '../../ui/user-block/user-block';
import PageTitle from '../../ui/page-title/page-title';

const filterByFavorites = (films) => films.filter((film) => film.isFavorite);

function MyList({films}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <PageTitle
          title="My list"
        />
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList
          films={filterByFavorites(films)}
        />
      </section>

      <PageFooter />
    </div>
  );
}

MyList.propTypes = {
  films: PropTypes.arrayOf(FILM_PROP).isRequired,
};

export default MyList;