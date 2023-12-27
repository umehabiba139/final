import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer.js';

import Missions from './pages/Missions';
import DragonBooking from './pages/DragonBooking';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="https://api.spacexdata.com/v3/missions" component={Missions} />
          <Route path="" component={Missions} />
          <Route path="https://api.spacexdata.com/v4/dragons" component={DragonBooking} />
         
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
