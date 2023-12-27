import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer.js';

import Missions from './features/Missions';
import DragonBooking from './dragons/DragonBooking';

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
