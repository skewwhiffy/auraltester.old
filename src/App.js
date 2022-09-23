import { Notation } from "react-abc";

const notation = `
X: 1
L: 1
abcdefgABCDEFG |
`;

function App() {
  return (
    <div className="App">
      <Notation notation={notation} />
    </div>
  );
}

export default App;
