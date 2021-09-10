
import './App.css';
import StockContainer from './containers/StockContainer';
import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="whole-app">
        <TopBar></TopBar>
        <NavBar></NavBar>
        <Switch>
          <Route path = '/' exact component={HomePage}></Route>
          <Route path = '/stock' exact component={StockContainer}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
