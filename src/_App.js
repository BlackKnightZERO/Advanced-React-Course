import Label from './components/class/Label';
import PostsC from './components/class/Posts/Posts';
import SideBar from './components/class/SideBar/SideBar';
import RefTextInput from './components/class/Ref/DOM/RefTextInput/RefTextInput';
import ParentRefTextInput from './components/class/Ref/Component/ParentRefTextInput';
import CallBackRefTextInput from './components/class/Ref/CallBack/CallBackRefTextInput';
import ParentCallBackRefTextInput from './components/class/Ref/CallBack/childDOMInParentComponent/ParentCallBackRefTextInput';
import ParentForwardingRefBtn from './components/class/Ref/Forwarding/ParentForwardingRefBtn';
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

  return (
    <div className="App">
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <Label title="Advanced React Course" />
        {/* <div className="flex">
          <div className="px-1 w-1/5 bg-green-300">

              <SideBar>
                <div>
                  <h4><i>{userData.greet()}</i></h4>
                  <a href="#">Link 1</a>
                </div>
              </SideBar>

          </div>
          <div className="px-1 w-4/5">
            <div>
              <h6 className="font-semibold text-green-600">dom ref</h6>
              <RefTextInput />
            </div>
            <div>
              <h6 className="font-semibold text-teal-600">component ref</h6>
              <ParentRefTextInput />
            </div>
            <div>
              <h6 className="font-semibold text-blue-600">callback ref (self)</h6>
              <CallBackRefTextInput />
            </div>
            <div>
              <h6 className="font-semibold text-indigo-600">callback ref (parent-child)</h6>
              <ParentCallBackRefTextInput />
            </div>
            <div>
              <h6 className="font-semibold text-red-600">Forwarding ref (parent-child / HOC)</h6>
              <ParentForwardingRefBtn />
            </div>

            <div>
              <PostsC /> 
            </div>
          
          </div>
        </div> */}

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
