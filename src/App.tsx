import Home from "./components/home";
import Panel from "./components/panel";

function App() {
  return (
    <>
      <section className="flex justify-center h-screen font-qs">
        <Panel />
        <Home />
      </section>
    </>
  );
}

export default App;
