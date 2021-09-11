
import './App.css';
import StockContainer from './containers/StockContainer';
import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import TitleBar from './components/TitleBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="whole-app">
        <TopBar></TopBar>
        <TitleBar></TitleBar>
        <Switch>
          <Route path = '/' exact component={HomePage}></Route>
          <Route path = '/stock/:category' exact component={StockContainer}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
