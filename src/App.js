import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './nav/ResponsiveAppBar';
import Home from './components/Home';
import Skills from './components/Skills'
import About from './components/About';
import Resume from './components/Resume';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/skills' component={Skills} />
        <Route path='/about'  component={About} />
        <Route path='/resume'  component={Resume} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
