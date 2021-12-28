import logo from './logo.svg';
// import './App.css';
import Label from './components/class/Label';
import ButtonF from './components/functional/Button';
import ButtonC from './components/class/Button';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <Label title="Advanced React Course" />
        <ButtonF title="Click F" />
        <ButtonC title="Click C" />
      </div>
    </div>
  );
}

export default App;
