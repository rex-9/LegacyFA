import Home from "./pages/home";
import Panel from "./components/panel";

function App() {
  return (
    <>
      <section className="flex justify-center h-screen overflow-y-hidden overflow-x-hidden font-mooli">
        <Panel />
        <Home />
      </section>
    </>
  );
}

export default App;
