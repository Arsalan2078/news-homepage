import "./App.scss";
import Section1 from "./components/Section1";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <div className="container">Header</div>
        </header>

        <main className="main">
          <div className="container main__grid">
            <Section1 />
            <div>Section</div>
            <div>Section</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
