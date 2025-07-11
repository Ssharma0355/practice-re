import AddPost from './APIcalling/AddPost';
import UserList from './APIcalling/UserList';
import './App.css';
import Parent from './Hooks/ContextAPI/Parent';
import MainFile from './Hooks/sampleContextApi/MainFile';
import Main from './Hooks/UseEffect/Main';
import Reducer from './Hooks/UseReducer/Reducer';
import Count from './Hooks/UseState/Count';


function App() {
  return (
    <div className="App">
      {/* useState */}
      {/* <Count /> */}

      {/* <Main /> */}
      {/* <UserList />
      <AddPost /> */}

      {/* <Parent /> */}

      {/* <MainFile /> */}

      <Reducer />
    </div>
  );
}

export default App;
