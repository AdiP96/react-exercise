import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import Users from './routes/Users';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/users" exact render={(props) => <Users {...props} />} />
      <Route path="/users/:id" render={(props) => <UserDetail {...props} />} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
