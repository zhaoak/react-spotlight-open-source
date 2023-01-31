import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table" className="button">
          Table
        </Link>
        <Link to="/charts" className="button">
          Charts
        </Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
        <Route path="/">
          <section className="columns">
            <div className="message is-info column is-half is-offset-one-quarter">
              Please choose either Table or Charts.
            </div>
          </section>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
