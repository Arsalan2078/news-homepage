import "./App.scss";
import SectionIntro from "./components/SectionIntro";

function App() {
  return (
    <>
      <div className="app">
        <header className="header">
          <div className="container">Header</div>
        </header>

        <main className="main">
          <div className="container main__grid">
            <SectionIntro />
            <div>Section</div>
            <div>Section</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
