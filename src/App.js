import './App.css';
import { SearchByName } from './components/SearchByName';
import { SearchByYear } from './components/SearchByYear';
import { SearchByYearAndCategory} from './components/SearchByYearAndCategory';
import { SearchByAlphabets } from './components/SearchByAlphabets';

function App() {
  return (
    <div className="App">
        <SearchByName />
        <SearchByYear />
        <SearchByYearAndCategory />
        <SearchByAlphabets />
    </div>
  );
}

export default App;
