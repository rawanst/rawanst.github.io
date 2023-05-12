import logo from './logo.svg';
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Courier, monospace',
          color: '#D5D5D5',
          fontWeight: 3000,
          fontSize: '2em',
        }}
        startDelay={1000}
        cursorColor="#D5D5D5"
        multiText={[
          'Coming soon',
          '',
          'Coming soon'
        ]}
        multiTextDelay={1000}
        typeSpeed={60}
      />
      </header>
    </div>
  );
}

export default App;
