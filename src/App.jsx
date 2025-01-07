import { createContext, Fragment, useState } from "react"
import LandingPage from "./Pages/LandingPage"
import ArrayMapping from "./Pages/ArrayMapping"
import ShopPages from "./Pages/ShopPages"
import States from "./Pages/states"
import PasswordGenerator from "./Pages/PasswordGenerator"
import TodoList from "./Pages/TodoList"
import A from "./Pages/A"
import { Toaster } from "react-hot-toast"
import Context from "./Pages/ContextSample"

// context api => Provide a way to pass data through the component tree without having to pass props down manually at every level
// global state management
// prop drilling => Passing data from parent to child

// createContext => a function that returns a context object

export const MyContext = createContext()

const App = () => {

    const [counter, setCounter] = useState(0)

    return <MyContext.Provider value={{ counter, setCounter }}>
        {/* <LandingPage /> */}
        {/* <ShopPages /> */}
        {/* <States /> */}
        {/* <PasswordGenerator /> */}
        {/* <TodoList /> */}
        <Context />
        {/* <A /> */}
        {/* <ArrayMapping /> */}
        <Toaster position="top-right"/>
    </MyContext.Provider>
}

export default App