import Home from "./pages/Home";
import Panel from "./components/Panel";

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
