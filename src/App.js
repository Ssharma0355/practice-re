import AddPost from './APIcalling/AddPost';
import UserList from './APIcalling/UserList';
import './App.css';
import SplitingMain from './CodeSpliting/SplitingMain';
import PreacticeDebounce from './DebounceHOCAPI/PreacticeDebounce';
import SeachBar from './DebounceHOCAPI/SeachBar';
import SearchWithDebounce from './DebounceHOCAPI/SearchWithDebounce';
import Parent from './Hooks/ContextAPI/Parent';
import MainFile from './Hooks/sampleContextApi/MainFile';
import Callback from './Hooks/UseCallback/Callback';
import SecondCallback from './Hooks/UseCallback/SecondCallback';
import Main from './Hooks/UseEffect/Main';
import Memo from './Hooks/UseMemo/Memo';
import Reducer from './Hooks/UseReducer/Reducer';
import RefHook from './Hooks/UseRef/RefHook';
import Refsecond from './Hooks/UseRef/Refsecond';
import StopWatchRef from './Hooks/UseRef/StopWatchRef';
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

      {/* <Callback /> */}


      {/* <SecondCallback /> */}

      {/* <RefHook /> */}

      {/* <Refsecond /> */}

      {/* <StopWatchRef /> */}

      {/* <SplitingMain /> */}

      {/* Debouncing and High order component */}


      {/* <SeachBar /> */}

      {/* with debounec  */}
      {/* <SearchWithDebounce /> */}
      <PreacticeDebounce />
    </div>
  );
}

export default App;
