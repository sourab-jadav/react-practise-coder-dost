import './App.css';

function App() {
  console.log('app');
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <Demo></Demo>
      </header>
    </div>
  );
}
function Demo() {
  console.log(`demo`);
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Demo</h1>
      </header>
    </div>
  );
}

export default App;
