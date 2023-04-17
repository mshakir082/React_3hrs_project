import InputForm from "./componant/InputForm";
import ContextProvider from './context/ContextProvider'

function App() {
  return (
    <ContextProvider>
    <div className="App">
    <InputForm/>
    </div>
    </ContextProvider>
  );
}

export default App;
