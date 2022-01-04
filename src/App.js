import Label from './components/class/Label';
import PostsC from './components/class/Posts/Posts';
import SideBar from './components/class/SideBar/SideBar';
import Category from './components/class/Category/Category';


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

              <SideBar>
                <div>
                  <h4><i>{userData.greet()}</i></h4>
                  <a href="#">Link 1</a>
                </div>
              </SideBar>

          </div>
          <div className="w-4/5">
            <div>
              <Category title="Category Title" subtitle="Category Subtitle" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-700">Posts List</h3>
              <PostsC /> 
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
