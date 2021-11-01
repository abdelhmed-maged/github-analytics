import './App.css';
import SideBar from './bundles/components/side-bar';
import ActionSideBar from './bundles/components/action-sidebar';

import { Route, Switch } from 'react-router-dom';
import TopUsers from './bundles/routes/users';
import TrendingRepos from './bundles/routes/repo';
import Home from './bundles/routes/home';
function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="side-nav left">
        <SideBar />
      </div>
      <div className="main">
        <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/trending-users' exact>
          <TopUsers />
        </Route>
        <Route path='/trending-repos' exact>
          <TrendingRepos />
        </Route>
        </Switch>
      </div>
      <div className="side-nav right">
        <ActionSideBar />
      </div>
    </div>
  
    </div>
  );
}

export default App;
