import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.action';

import Homepage from './pages/Homepage'
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Consultation from './pages/Consultation';

import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import './default.scss';
import './assets/css/style.scss';


class App extends Component {
  authListener = null; 

  componentDidMount(){
    const { setCurrentUser } = this.props;
    // Subscribe to Auth Function
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      //Return if not signed in
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            
            id: snapshot.id,
            ...snapshot.data()
            
          })
        })
      };
      
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.authListener();
  }

  render(){
    const { currentUser } = this.props;

    return (
      <div className="App">
        {/* Swicth Prevents you from rendering mutiple componenets at the same time. */}
        <Switch>
            <Route exact path="/" render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            )} />
            
            <Route path="/registration" 
              render={() => currentUser ? <Redirect to="/" /> : (
                <MainLayout>
                  <Registration />
                </MainLayout>
            )} />
  
            <Route path="/login" 
              render={() => currentUser ? <Redirect to="/" /> : (
                  <MainLayout>
                    <Login />
                  </MainLayout>
                )} />

            <Route path="/recovery" render={() => (
              <MainLayout>
                <Recovery />
              </MainLayout>
            )} />

            <Route path="/consultation" render={() => (
              <MainLayout>
                
                <Consultation/>
                
              </MainLayout>
            )} />
          </Switch>
      </div>
    ); 
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (  App);

// So i guess the most pressing question is, who are you?
// You are not Isreali, the God of isreal is not fighting for your country.
// You are not Arab, allah is not fighting for your country.
// In Nigeria, Extremist Religious Leaders form Muti Billion Doller Cooprations that make them Money, while thier followers pray and believe the God of Isreal would save Nigeria.
// Extremist Religious Leaders also fund Boko Haram believing that a chalihate would spring up again from west Africa and spread to the middle east and over take Isreal.
// But were do you stand? are you just a follower of a religion to the point that you become and unreconized soilder in the Arab or Isreali army?
// Think again Africa.