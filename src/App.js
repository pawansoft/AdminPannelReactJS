import Routes from "./Routes.js";
import ErrorBoundary from "./component/ErrorBoundary.jsx";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </div>
  );
}

export default App;
