import { Provider } from "./context";
import Principal from "./pages/Principal";

export default function App() {
    return (
        <Provider>
            <Principal />
        </Provider>
    )
}