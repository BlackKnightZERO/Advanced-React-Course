// import logo from './logo.svg';
// import './App.css';
import Label from './components/class/Label';
// import ButtonF from './components/functional/Button';
// import ButtonC from './components/class/Button';
import PostsC from './components/class/Posts/Posts';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <Label title="Advanced React Course" />
        {/* <ButtonF title="Click F" />
        <ButtonC title="Click C" /> */}
        <h3 className="text-3xl font-semibold text-gray-700">Posts List</h3>
        <PostsC />
      </div>
    </div>
  );
}

export default App;
