import { RGBProvider } from "./context/RGBcontext";
import Main from "./pages/Main";

function App() {
    return (
    <RGBProvider>
      <Main />
    </RGBProvider>    
  );
}

export default App;
