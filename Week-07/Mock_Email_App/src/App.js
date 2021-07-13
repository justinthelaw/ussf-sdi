import './App.css';
import EmailDisplay from './components/emailDisplay'
import SearchBar from './components/searchBar'
import ComposeEmail from './components/composeEmail'

function App() {
  return (
    <div className="App">
      <SearchBar />
      <EmailDisplay />
      <ComposeEmail />
    </div>
  );
}

export default App;