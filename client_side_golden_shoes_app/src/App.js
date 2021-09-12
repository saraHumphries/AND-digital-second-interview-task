
import './App.css';
import StockContainer from './containers/StockContainer';
import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import TitleBar from './components/TitleBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ShowShoe from './components/ShowShoe';
import Bag from './components/Bag';
import OrdersSummary from './components/OrdersSummary';
import FAQ from './components/FAQ';

function App() {
  return (
    <Router>
      <body id="whole-app">
        <TopBar></TopBar>
        <TitleBar></TitleBar>
        <Switch>
          <Route path = '/' exact component={HomePage}></Route>
          <Route path = '/stock/:category' exact component={StockContainer}></Route>
          <Route path = '/stock/:category/:shoeBrand/:shoe' exact component={ShowShoe}></Route>
          <Route path = '/bag' exact component={Bag}></Route>
          <Route path= '/orders' exact component={OrdersSummary}></Route>
          <Route path = '/faq' exact component={FAQ}></Route>
        </Switch>
      </body>
    </Router>
  );
}

export default App;
