import { Notation } from "react-abc";

function App() {
  const notation = 'CDEF GABc|';
  return (
    <div className="App">
      <Notation notation={notation} />
    </div>
  );
}

export default App;
