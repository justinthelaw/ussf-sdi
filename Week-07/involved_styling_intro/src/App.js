import './App.css';
import styled from 'styled-components'

const Button = styled.button`
background: black;
border-radius: 2px;
color: white;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello World!
        <Button>Styled-Components Button</Button>
      </header>
    </div>
  );
}

export default App;
