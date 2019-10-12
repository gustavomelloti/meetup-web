import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import ListMeetups from '../pages/Meetups/List';
import RegisterMeetup from '../pages/Meetups/Register';
import UpdateMeetup from '../pages/Meetups/Update';

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
      <Route path="/meetup/update" exact component={UpdateMeetup} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
