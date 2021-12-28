import logo from './logo.svg';
// import './App.css';
import ButtonF from './components/functional/Button';
import ButtonC from './components/class/Button';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <h2 className="text-4xl font-semibold text-indigo-800">Advanced React Course</h2>
        <ButtonF title="Click F" />
        <ButtonC title="Click C" />
      </div>
    </div>
  );
}

export default App;
