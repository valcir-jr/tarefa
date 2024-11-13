import Main from "./pages/Home";
import { LotteryProvider } from "./contexts/LotteryContext";

function App() {
  return (
    <LotteryProvider>
      <Main />
    </LotteryProvider>
  );
}

export default App;
