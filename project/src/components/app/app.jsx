import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import browserHistory from '../../browser-history';
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {AppRoute} from '../../const';
import {isUserGuest} from '../../utils/utils';
import {getUser} from '../../store/reducers/user-data/selectors';

import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import MyList from '../pages/my-list/my-list';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';
import Spinner from '../ui/loading/spinner/spinner';
import PrivateRoute from '../private-route/private-route';

function App() {
  const {authorizationStatus} = useSelector(getUser);

  if (isUserGuest(authorizationStatus)) {
    return <Spinner />;
  }

  return (
    <>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route path={AppRoute.ROOT} exact>
            <Main />
          </Route>

          <Route path={AppRoute.LOGIN} exact>
            <SignIn />
          </Route>

          <Route path={AppRoute.FILM} exact>
            <Film />
          </Route>

          <PrivateRoute path={AppRoute.REVIEW} exact>
            <AddReview />
          </PrivateRoute>

          <PrivateRoute path={AppRoute.MY_LIST} exact>
            <MyList />
          </PrivateRoute>

          <Route path={AppRoute.PLAYER} exact>
            <Player />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
