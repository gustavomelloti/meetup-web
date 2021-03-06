import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import ListMeetups from '../pages/Meetups/List';
import RegisterMeetup from '../pages/Meetups/Register';
import DetailMeetup from '../pages/Meetups/Detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/meetups" exact component={ListMeetups} isPrivate />
      <Route
        path="/meetups/register"
        exact
        component={RegisterMeetup}
        isPrivate
      />
      <Route
        path="/meetups/detail"
        exact
        component={DetailMeetup}
        isPrivate
        horizontalBackground
      />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
