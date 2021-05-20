import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import './default.scss';
import Registration from './pages/Registration';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

function App() {
  return (
    <div className="App">
      {/* Swicth Prevents you from rendering mutiple componenets at the same time. */}
      <Switch>
          <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
          
          <Route path="/registration" render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        </Switch>
    </div>
  );
}

export default App;

// So i guess the most pressing question is, who are you?
// You are not Isreali, the God of isreal is not fighting for your country.
// You are not Arab, allah is not fighting for your country.
// In Nigeria, Extremist Religious Leaders form Muti Billion Doller Cooprations that make them Money, while thier followers pray and believe the God of Isreal would save Nigeria.
// Extremist Religious Leaders also fund Boko Haram believing that a chalihate would spring up again from west Africa and spread to the middle east and over take Isreal.
// But were do you stand? are you just a follower of a religion to the point that you become and unreconized soilder in the Arab or Isreali army?
// Think again Africa.