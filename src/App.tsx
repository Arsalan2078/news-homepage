import "./App.scss";
import SectionIntro from "./components/SectionIntro";
import SectionNewArticles from "./components/SectionNewArticles";
import SectionTopArticles from "./components/SectionTopArticles";

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
            <SectionNewArticles />
            <SectionTopArticles />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
