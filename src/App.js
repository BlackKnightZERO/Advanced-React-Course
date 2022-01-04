// import logo from './logo.svg';
// import './App.css';
import Label from './components/class/Label';
import PostsC from './components/class/Posts/Posts';
import SideBar from './components/class/SideBar/SideBar';
import Navigation from './components/class/Navigation/Navigation';
import ButtonContext from './context/ButtonContext';
import UserContext from './context/UserContext';

function App() {

  let userData = {
    name : 'Arif',
    greet : function() {
      return `Hello ${this.name}`
    },
  };

  return (
    <div className="App">
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <Label title="Advanced React Course" />
        <div className="flex">
          <div className="w-1/5 bg-sky-500/50">

            {/* single context */}

            {/* <ButtonContext.Provider value="Link 1 (parent closest provider)">
                <SideBar />                                                
            </ButtonContext.Provider> */}

            {/* multiple context with composition model - props.children */}
            
            {/* <SideBar>
              <Navigation>
                <div>
                  <h4><i>{userData.greet()}</i></h4>
                  <a href="#">Link 1</a>
                </div>
              </Navigation>
            </SideBar> */}

            <SideBar>
              <div>
                <h4><i>{userData.greetx()}</i></h4>
                <a href="#">Link 1</a>
              </div>
            </SideBar>

          </div>
          <div className="w-4/5">
          <h3 className="text-3xl font-semibold text-gray-700">Posts List</h3>
          <PostsC /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
