import Table from './components/class/Fragment/Table';
import Label from './components/class/Label';

function App() {

  return (
    <div className="App">
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <Label title="Advanced React Course" />
        <div>
          <Table/>
        </div>
      </div>
    </div>
  );
}

export default App;
