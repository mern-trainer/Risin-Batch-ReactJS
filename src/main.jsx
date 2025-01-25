import { createRoot } from "react-dom/client"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"
import CounterProvider from "./Providers/counterProvider"
import { TodoProvider } from "./Providers/TodoProvider"
import { CartProvider } from "./Providers/CartProvider"
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <CounterProvider>
            <TodoProvider>
                <CartProvider>
                    <App />
                    <Toaster />
                </CartProvider>
            </TodoProvider>
        </CounterProvider>
   </Provider>
)
