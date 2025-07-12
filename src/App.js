import AddPost from './APIcalling/AddPost';
import UserList from './APIcalling/UserList';
import './App.css';
import Parent from './Hooks/ContextAPI/Parent';
import MainFile from './Hooks/sampleContextApi/MainFile';
import Callback from './Hooks/UseCallback/Callback';
import Main from './Hooks/UseEffect/Main';
import Memo from './Hooks/UseMemo/Memo';
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

      {/* <Reducer /> */}

      {/* <Memo /> */}

      <Callback />
    </div>
  );
}

export default App;
