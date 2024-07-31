import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctinalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreetings';
import StatefulGreetingsWithCallback from './components/StatefulGreetingsWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingsWithPrevState';

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState />
    </div>
  )

}

//<StatefulGreeting greeting="im a stateful class component" name="Andreas" />
//<FunctionalGreetingWithProps greeting="nice to meet you!" name="Andreas" age="36 year old" looks="i see that you are" />

export default App;
