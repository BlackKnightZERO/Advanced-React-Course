import Label from './components/class/Label';
import PostsC from './components/class/Posts/Posts';
import SideBar from './components/class/SideBar/SideBar';
import RefTextInput from './components/class/Ref/DOM/RefTextInput/RefTextInput';
import ParentRefTextInput from './components/class/Ref/Component/ParentRefTextInput';
import ParentCallBackRefTextInput from './components/class/Ref/Component/CallBack/ParentCallBackRefTextInput';

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
              <h6 className="text-green-700">dom ref</h6>
              {/* HTML DOM ref */}
              <RefTextInput />
            </div>
            <div>
              <h6 className="text-orange-700">component ref</h6>
              {/* class ref */}
              <ParentRefTextInput />
            </div>
            <div>
              <h6 className="text-blue-700">callback ref</h6>
              {/* callback ref */}
              <ParentCallBackRefTextInput />
            </div>

            <div>
              <PostsC /> 
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
