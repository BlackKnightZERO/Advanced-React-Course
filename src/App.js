import Table from './components/class/FragmentsAndPropTypes/Table';
import Label from './components/class/Label';
import MouseTracker from './components/class/RenderProps/MouseTracker/MouseTracker';
import RenderProps from './components/class/RenderProps/MouseTracker/RenderProps';
import WrapperRenderProp from './components/mixed/RenderProps/codeCreativeYt/WrapperRenderProp';
import Counter1 from './components/mixed/RenderProps/codeCreativeYt/Counter1';
import Counter2 from './components/mixed/RenderProps/codeCreativeYt/Counter2';

function App() {

  return (
    <div className="App">
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <Label title="Advanced React Course" />
        <div>
        <h2 className="text-lg text-blue-700 font-semibold">Fragments & PropTypes &#9889;</h2>
          <Table/>
        </div>
        <div>
          {/* <MouseTracker /> */}
          {/* <RenderProps /> */}
        </div>
        <br />
        <div>
          <h2 className="text-lg text-blue-700 font-semibold">Render Props &#129309;</h2>
          <WrapperRenderProp render={ (count, incCount) => {
            return <Counter1 count={count} incCount={incCount} />
          } } />
          <WrapperRenderProp render={ (count, incCount) => {
            return <Counter2 count={count} incCount={incCount} />
          } } />
        </div>
      </div>
    </div>
  );
}

export default App;
