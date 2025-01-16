import { createRoot } from "react-dom/client"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"
import CounterProvider from "./Providers/counterProvider"
import { TodoProvider } from "./Providers/TodoProvider"
import { CartProvider } from "./Providers/CartProvider"

createRoot(document.getElementById("root")).render(
    <CounterProvider>
        <TodoProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </TodoProvider>
    </CounterProvider>
)
