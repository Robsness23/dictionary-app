
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        
      </header>
      <main>
        <Dictionary defaultKeyword="forest" />
      </main>
      <div className="App-footer">
        This app was coded by 
        <a href="https://www.linkedin.com/in/robyn-smith-27187910b/" target="_blank" rel="noreferrer"> Robyn Smith</a> and is open-sourced on <a href="https://github.com/Robsness23/dictionary-app" target="_blank" rel="noreferrer">Github</a>
      </div>
      </div>
    </div>
  );
}
