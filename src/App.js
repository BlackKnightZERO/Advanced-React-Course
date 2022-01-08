// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Label from './components/class/Label';
import PostsC from './components/class/Posts/Posts';
import SideBar from './components/class/SideBar/SideBar';
import Navigation from './components/class/Navigation/Navigation';
import ButtonContext from './context/ButtonContext';
import UserContext from './context/UserContext';
import ThemeContext from './context/mixed/webDevSimplified/ThemeContext';
import ContextComponentC from './context/mixed/webDevSimplified/ContextComponentC';
import ContextComponentF from './context/mixed/webDevSimplified/ContextComponentF';

function App() {

  let userData = {
    name : 'Arif',
    greet : function() {
      return `Hello ${this.name}`
    },
  };

  const[darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme((prevValue) => (
      !prevValue
    ))
  }

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

            {/* <SideBar>
              <div>
                <h4><i>{userData.greet()}</i></h4>
                <a href="#">Link 1</a>
              </div>
            </SideBar> */}

          </div>
          
          {/* <div className="w-4/5">
            <h3 className="text-3xl font-semibold text-gray-700">Posts List</h3>
            <PostsC /> 
          </div> */}

        </div>

          <>
          <h3 className="text-2xl font-semibold text-purple-700">Context</h3>
          <ThemeContext.Provider value={darkTheme}>
            <button className='bg-green-500 py-3 px-2 rounded' onClick={toggleTheme}>Toggle Theme</button>
            
            <ContextComponentC />
            <ContextComponentF />

          </ThemeContext.Provider>
          </>

      </div>
    </div>
  );
}

export default App;
