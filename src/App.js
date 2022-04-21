import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ChatScreen from './ChatScreen';
import Chats from './Chats';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Switch>
          <Route path="/chats/:person" exact>
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats" exact>
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/" exact>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
