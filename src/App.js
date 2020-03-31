import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppLayout from './components/AppLayout/AppLayout';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <AppLayout>
      <Route exact path='/' component={HomePage}/>
      <Route path='/results' render={(props) => <ResultPage {...props}/>}/>
    </AppLayout>
  );
}

export default App;
