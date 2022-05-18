// import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import Points from './components/Links';
import Button from './components/button';

function App() {
  const links = 
    {a:"Services", 
    b:"Projects", 
    c:"About"};
  return (
    <div className="App">
      <div id='container'>
          <Logo></Logo>
          <Points {...links}/>
          <Button></Button>
      </div>
    </div>
  );
}

export default App;
