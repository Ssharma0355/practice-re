import AddPost from './APIcalling/AddPost';
import UserList from './APIcalling/UserList';
import './App.css';
import Main from './Hooks/UseEffect/Main';
import Count from './Hooks/UseState/Count';


function App() {
  return (
    <div className="App">
      {/* useState */}
      {/* <Count /> */}

      {/* <Main /> */}
      <UserList />
      <AddPost />
    </div>
  );
}

export default App;
