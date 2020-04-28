import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { render } from 'react-dom';
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import "./App.scss";
import "./styles/text.scss";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav> */}

          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
