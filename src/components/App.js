import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import '../css/global.css';

import { autoLogin } from '../features/auth';
import { appLoaded } from '../features/app';

import PrivateRoute from './PrivateRoute';
import Loading from './Loading';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Doctor from '../pages/Doctor';
import Outpatient from '../pages/Outpatient';
import Inpatient from '../pages/Inpatient';
import Patient from '../pages/Patient';
import Settings from '../pages/Settings';

class App extends React.Component {
  componentDidMount() {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      this.props.autoLogin(token);
    } else {
      this.props.appLoaded();
    }
  }

  render() {
    const { auth, app } = this.props;
    return app.loaded ? (
      <div>
        <PrivateRoute exact path="/" user={auth.user} component={Home} />
        <PrivateRoute path="/profile" user={auth.user} component={Profile} />
        <PrivateRoute path="/doctor" user={auth.user} component={Doctor} />
        <PrivateRoute path="/outpatient" user={auth.user} component={Outpatient} />
        <PrivateRoute path="/inpatient" user={auth.user} component={Inpatient} />
        <PrivateRoute path="/patient" user={auth.user} component={Patient} />
        <PrivateRoute path="/settings" user={auth.user} component={Settings} />
        <Route path="/login" component={Login} />
      </div>
    ) : <Loading />;
  }
}

const mapStateToProps = state => ({ app: state.app, auth: state.auth });

export default withRouter(connect(mapStateToProps, { autoLogin, appLoaded })(App));
