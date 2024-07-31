import logo from './logo.svg';
import './App.css';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFuntional from './components/ConditionalRenderingFuntional';

function App() {
  return (
    <div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFuntional connected={true}/>
    </div>
  )

}




export default App;
