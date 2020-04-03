import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AppLayout from './components/AppLayout/AppLayout';
import ResultPage from './pages/ResultPage';
import WatchPage from './pages/WatchPage/WatchPage';

function App(props) {
  return (
    <AppLayout>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/results' render={(props) => <ResultPage {...props}/>}/>
        <Route path='/watch' render={(props) => <WatchPage {...props}/>}/>        
      </Switch>
    </AppLayout>
  );
}

export default App;
